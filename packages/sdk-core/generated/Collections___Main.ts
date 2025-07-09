import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { PaginatedCollections } from "./common";
import { CollectionsSortParameter } from "./common";
import { SortOrder } from "./common";
import { CollectionsSummaryResponseModel } from "./common";
import { UserSummaryResponseModel } from "./common";
import { TagSummaryResponseModel } from "./common";
import { CollectionsResponseModel } from "./common";
import { CollectionRequestModel } from "./common";
import { CollectionContentSummaryResponseModel } from "./common";
import { CollectionContentType } from "./common";
import { UserGroupResponseModel } from "./common";
import { EditCollectionRequestModel } from "./common";

const endpoints = makeApi([
  {
    method: "get",
    path: "/collections",
    alias: "getCollections",
    description: `Retrieves all collections for the full site or specified team.`,
    requestFormat: "json",
    parameters: [
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
        schema: z.enum(["creation", "lastEdit"]).optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["asc", "desc"]).optional(),
      },
      {
        name: "authorIds",
        type: "Query",
        schema: z.array(z.number().int()).optional(),
      },
      {
        name: "partialTitle",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "permissions",
        type: "Query",
        schema: z.enum(["all", "owned", "editable"]).optional(),
      },
      {
        name: "from",
        type: "Query",
        schema: z.string().datetime({ offset: true }).optional(),
      },
      {
        name: "to",
        type: "Query",
        schema: z.string().datetime({ offset: true }).optional(),
      },
    ],
    response: PaginatedCollections,
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
    ],
  },
  {
    method: "post",
    path: "/collections",
    alias: "postCollections",
    description: `Creates a collection.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: CollectionRequestModel,
      },
    ],
    response: CollectionsResponseModel,
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
    ],
  },
  {
    method: "get",
    path: "/collections/:collectionId",
    alias: "getCollectionsCollectionId",
    description: `Retrieves a collection, identified by collection ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "collectionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: CollectionsResponseModel,
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
        description: `Collection not found`,
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
  {
    method: "put",
    path: "/collections/:collectionId",
    alias: "putCollectionsCollectionId",
    description: `Updates a collection, identified by collection ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: EditCollectionRequestModel,
      },
      {
        name: "collectionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: CollectionsResponseModel,
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
    ],
  },
  {
    method: "delete",
    path: "/collections/:collectionId",
    alias: "deleteCollectionsCollectionId",
    description: `Deletes a collection, identified by collection ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "collectionId",
        type: "Path",
        schema: z.number().int().gte(1),
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
        description: `No permissions`,
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
        description: `Collection not found`,
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

export const Collections___MainApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
