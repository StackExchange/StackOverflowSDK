import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { PaginatedSearchResults } from "./common";
import { SearchSortParameter } from "./common";
import { QuestionSearchResultModel } from "./common";
import { SearchResultModel } from "./common";
import { TagSummaryResponseModel } from "./common";
import { UserSummaryResponseModel } from "./common";
import { AnswerSearchResultModel } from "./common";
import { ArticleSearchResultModel } from "./common";

const endpoints = makeApi([
  {
    method: "get",
    path: "/search",
    alias: "getSearch",
    requestFormat: "json",
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.number().int().gte(1).lte(2147483647).optional(),
      },
      {
        name: "pageSize",
        type: "Query",
        schema: z
          .union([z.literal(15), z.literal(30), z.literal(50), z.literal(100)])
          .optional(),
      },
      {
        name: "sort",
        type: "Query",
        schema: z.enum(["relevance", "newest", "active", "score"]).optional(),
      },
    ],
    response: PaginatedSearchResults,
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
        status: 429,
        description: `Too many requests`,
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
        status: 500,
        description: `Internal server error`,
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
        status: 503,
        description: `Service unavailable`,
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
    ],
  },
]);

export const Search___MainApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
