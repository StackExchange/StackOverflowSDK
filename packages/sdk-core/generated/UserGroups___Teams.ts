import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { PaginatedUserGroups } from "./common";
import { UserGroupsSortParameter } from "./common";
import { SortOrder } from "./common";
import { UserGroupResponseModel } from "./common";
import { UserSummaryResponseModel } from "./common";
import { UserGroupRequestModel } from "./common";

const endpoints = makeApi([
  {
    method: "get",
    path: "/teams/:team/user-groups",
    alias: "getTeamsTeamuserGroups",
    description: `Retrieves all user groups on the site or team.`,
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
        schema: z.enum(["name", "size"]).optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["asc", "desc"]).optional(),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PaginatedUserGroups,
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
    path: "/teams/:team/user-groups",
    alias: "postTeamsTeamuserGroups",
    description: `Creates a user group.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UserGroupRequestModel,
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: UserGroupResponseModel,
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
        description: `Inadequate permissions`,
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
        description: `Server Error`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/teams/:team/user-groups/:userGroupId",
    alias: "getTeamsTeamuserGroupsUserGroupId",
    description: `Retrieves a user group, identified by user group ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "userGroupId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: UserGroupResponseModel,
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
        description: `User group not found`,
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
    path: "/teams/:team/user-groups/:userGroupId",
    alias: "putTeamsTeamuserGroupsUserGroupId",
    description: `Updates a user group, identified by user group ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UserGroupRequestModel,
      },
      {
        name: "userGroupId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: UserGroupResponseModel,
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
    path: "/teams/:team/user-groups/:userGroupId/members",
    alias: "postTeamsTeamuserGroupsUserGroupIdmembers",
    description: `Adds one or more members to a user group, identified by user group ID and user ID(s).`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `User ID(s)`,
        type: "Body",
        schema: z.array(z.number().int()),
      },
      {
        name: "userGroupId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: UserGroupResponseModel,
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
        description: `User group not found`,
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
    path: "/teams/:team/user-groups/:userGroupId/members/:userId",
    alias: "deleteTeamsTeamuserGroupsUserGroupIdmembersUserId",
    description: `Deletes a member from a user group, identified by user group ID and user ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "userGroupId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "userId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: UserGroupResponseModel,
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
        description: `User group or user not found`,
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

export const UserGroups___TeamsApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
