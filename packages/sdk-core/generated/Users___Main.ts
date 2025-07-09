import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { UserDetailsResponseModel } from "./common";
import { CommunitySummaryResponseModel } from "./common";
import { TagSummaryResponseModel } from "./common";
import { PaginatedUsers } from "./common";
import { UsersSortParameter } from "./common";
import { SortOrder } from "./common";
import { UserResponseModel } from "./common";

type PaginatedManageUsers = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: ManageUsersSortParameter;
  order: SortOrder;
  items: Array<ManageUserResponseModel>;
}>;
type ManageUsersSortParameter = "id" | "name" | "email" | "lastAccessDate";
type ManageUserResponseModel = Partial<{
  email: string | null;
  isDeactivated: boolean;
  creationDate: string;
  lastModifiedDate: string | null;
  lastAccessDate: string;
  id: number;
  accountId: number | null;
  name: string;
  avatarUrl: string;
  webUrl: string;
  reputation: number;
  role: string;
}>;

const ManageUsersSortParameter = z.enum([
  "id",
  "name",
  "email",
  "lastAccessDate",
]);
const ManageUserResponseModel: z.ZodType<ManageUserResponseModel> = z
  .object({
    email: z.string().nullable(),
    isDeactivated: z.boolean(),
    creationDate: z.string().datetime({ offset: true }),
    lastModifiedDate: z.string().datetime({ offset: true }).nullable(),
    lastAccessDate: z.string().datetime({ offset: true }),
    id: z.number().int(),
    accountId: z.number().int().nullable(),
    name: z.string(),
    avatarUrl: z.string(),
    webUrl: z.string(),
    reputation: z.number().int(),
    role: z.string(),
  })
  .partial()
  .strict();
const PaginatedManageUsers: z.ZodType<PaginatedManageUsers> = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: ManageUsersSortParameter,
    order: SortOrder,
    items: z.array(ManageUserResponseModel),
  })
  .partial()
  .strict();

export const schemas = {
  ManageUsersSortParameter,
  ManageUserResponseModel,
  PaginatedManageUsers,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/users/me",
    alias: "getUsersme",
    description: `Retrieves details for the logged-in user.`,
    requestFormat: "json",
    response: UserDetailsResponseModel,
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
        description: `User details not found`,
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
    path: "/users",
    alias: "getUsers",
    description: `Retrieves all users on the site or team.`,
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
        schema: z.literal("reputation").optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["asc", "desc"]).optional(),
      },
    ],
    response: PaginatedUsers,
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
    path: "/users/:userId",
    alias: "getUsersUserId",
    description: `Retrieves details for a user, identified by user ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "userId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: UserDetailsResponseModel,
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
        description: `User not found`,
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
    path: "/users/by-email/:email",
    alias: "getUsersbyEmailEmail",
    requestFormat: "json",
    parameters: [
      {
        name: "email",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: UserDetailsResponseModel,
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
        description: `User not found`,
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
    path: "/users/:userId/watched-tags",
    alias: "getUsersUserIdwatchedTags",
    description: `Retrieves watched tags, identified by tag name.`,
    requestFormat: "json",
    parameters: [
      {
        name: "userId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: TagSummaryResponseModel,
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
        description: `User not found`,
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
    path: "/users/by-external-id/:externalId",
    alias: "getUsersbyExternalIdExternalId",
    requestFormat: "json",
    parameters: [
      {
        name: "externalId",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.array(UserResponseModel),
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
    path: "/users/manage",
    alias: "getUsersmanage",
    description: `Retrieves all users on the site or team, for user management.`,
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
        schema: z.enum(["id", "name", "email", "lastAccessDate"]).optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["asc", "desc"]).optional(),
      },
      {
        name: "isDeactivated",
        type: "Query",
        schema: z.boolean().optional(),
      },
      {
        name: "lastAccessDateFrom",
        type: "Query",
        schema: z.string().datetime({ offset: true }).optional(),
      },
      {
        name: "lastAccessDateTo",
        type: "Query",
        schema: z.string().datetime({ offset: true }).optional(),
      },
    ],
    response: PaginatedManageUsers,
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
]);

export const Users___MainApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
