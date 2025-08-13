import { HttpLibrary, RequestContext, ResponseContext } from '../generated/http/http';
import { from, Observable } from '../generated/rxjsStub';
import "whatwg-fetch";

/**
 * Fixed HTTP Library for Stack Overflow API
 * 
 * Solves the "Cannot parse content. No Content-Type defined" error by automatically
 * adding missing Content-Type headers to API responses with proper content detection.
 * 
 * Stack Overflow APIs often return valid JSON or plain text responses without Content-Type headers,
 * which causes the auto-generated SDK's ObjectSerializer to fail. This library
 * intercepts responses and adds the appropriate Content-Type header based on content detection.
 */
export class FixedIsomorphicFetchHttpLibrary implements HttpLibrary {
    public send(request: RequestContext): Observable<ResponseContext> {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        
        const resultPromise = fetch(request.getUrl(), {
            method: method,
            body: body as any,
            headers: request.getHeaders(),
            signal: request.getSignal(),
            credentials: "same-origin"
        }).then(async (resp: any) => {
            const headers: { [name: string]: string } = {};
            resp.headers.forEach((value: string, name: string) => {
              headers[name] = value;
            });
            
            // CORE FIX: Add Content-Type header if missing
            const hasContentType = Object.keys(headers).some(
                key => key.toLowerCase() === 'content-type'
            );
            
            if (!hasContentType) {
                // Clone response to peek at content without consuming it
                const clonedResp = resp.clone();
                const text = await clonedResp.text();
                const trimmed = text.trim();
                
                // Detect content type based on content
                if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
                    headers['content-type'] = 'application/json';
                } else {
                    headers['content-type'] = 'text/plain';
                }
            }
            
            const body = {
              text: () => resp.text(),
              binary: () => resp.blob()
            };
            
            return new ResponseContext(resp.status, headers, body);
        });
        return from<Promise<ResponseContext>>(resultPromise);
    }
}

export default FixedIsomorphicFetchHttpLibrary;