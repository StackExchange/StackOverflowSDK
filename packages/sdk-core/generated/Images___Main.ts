import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { ImageResponseModel } from "./common";

const endpoints = makeApi([
  {
    method: "get",
    path: "/images/:imageId",
    alias: "getImagesImageId",
    description: `This endpoint retrieves an image file given its id.`,
    requestFormat: "json",
    parameters: [
      {
        name: "imageId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid request`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .strict()
          .passthrough(),
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .strict()
          .passthrough(),
      },
      {
        status: 404,
        description: `Image not found.`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/images/upload",
    alias: "postImagesupload",
    description: `This endpoint uploads an image file and returns the URI of the uploaded image if successful. 
Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z
          .object({ file: z.instanceof(File) })
          .partial()
          .strict()
          .passthrough(),
      },
    ],
    response: ImageResponseModel,
    errors: [
      {
        status: 400,
        description: `Bad request with details in the problem details format.`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .strict()
          .passthrough(),
      },
      {
        status: 401,
        description: `Unauthorized`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .strict()
          .passthrough(),
      },
      {
        status: 415,
        description: `Unsupported media type.`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: z.void(),
      },
    ],
  },
]);

export const Images___MainApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
