import { HttpLibrary, RequestContext, ResponseContext } from '../generated/http/http';
import { from, Observable } from '../generated/rxjsStub';
import "whatwg-fetch";

/**
 * Fixed HTTP Library for Stack Overflow API
 * 
 * Solves the "Cannot parse content. No Content-Type defined" error by automatically
 * adding missing Content-Type headers to API responses.
 * 
 * Stack Overflow APIs often return valid JSON responses without Content-Type headers,
 * which causes the auto-generated SDK's ObjectSerializer to fail. This library
 * intercepts responses and adds the appropriate Content-Type header.
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
        }).then((resp: any) => {
            const headers: { [name: string]: string } = {};
            resp.headers.forEach((value: string, name: string) => {
              headers[name] = value;
            });

            // CORE FIX: Add Content-Type header if missing (it will be missing)
            if (!headers['content-type'] && !headers['Content-Type']) {
                // PENDING detect content type and apply content-type condittionally
                headers['content-type'] = 'application/json';
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