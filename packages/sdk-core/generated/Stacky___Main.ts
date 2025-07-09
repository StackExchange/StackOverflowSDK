import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/stacky",
    alias: "getStacky",
    description: `Retrieves Stacky ASCII art (useful for testing).`,
    requestFormat: "json",
    response: z.string(),
  },
]);

export const Stacky___MainApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
