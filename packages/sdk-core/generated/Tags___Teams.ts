import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { PaginatedTags } from "./common";
import { TagsSortParameter } from "./common";
import { SortOrder } from "./common";
import { TagSummaryResponseModel } from "./common";
import { TagResponseModel } from "./common";
import { SubjectMatterExpertResponseModel } from "./common";
import { UserSummaryResponseModel } from "./common";
import { UserGroupResponseModel } from "./common";
import { SubjectMatterExpertRequestModel } from "./common";
import { TagWatchersResponseModel } from "./common";

const endpoints = makeApi([
  {
    method: "get",
    path: "/teams/:team/tags",
    alias: "getTeamsTeamtags",
    description: `Queries all tags on the site.`,
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
        schema: z.enum(["name", "postCount", "creationDate"]).optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["asc", "desc"]).optional(),
      },
      {
        name: "partialName",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "hasSmes",
        type: "Query",
        schema: z.boolean().optional(),
      },
      {
        name: "hasSynonyms",
        type: "Query",
        schema: z.boolean().optional(),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PaginatedTags,
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
    path: "/teams/:team/tags/:tagId",
    alias: "getTeamsTeamtagsTagId",
    description: `Retrieves a tag, identified by tag ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "tagId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: TagResponseModel,
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
        description: `Tag not found`,
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
    path: "/teams/:team/tags/:tagId/subject-matter-experts",
    alias: "getTeamsTeamtagsTagIdsubjectMatterExperts",
    description: `Retrieves the subject matter experts for a tag, identified by tag ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "tagId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: SubjectMatterExpertResponseModel,
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
        description: `Subject matter expert(s) not found`,
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
        status: 422,
        description: `Subject matter experts feature not enabled`,
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
    path: "/teams/:team/tags/:tagId/subject-matter-experts",
    alias: "putTeamsTeamtagsTagIdsubjectMatterExperts",
    description: `Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: SubjectMatterExpertRequestModel,
      },
      {
        name: "tagId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: SubjectMatterExpertResponseModel,
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
        status: 422,
        description: `Subject matter experts feature not enabled`,
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
    path: "/teams/:team/tags/:tagId/tag-watchers",
    alias: "getTeamsTeamtagsTagIdtagWatchers",
    description: `Retrieves the tag watchers for a tag, identified by tag ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "tagId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: TagWatchersResponseModel,
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
        description: `Tag not found`,
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
    path: "/teams/:team/tags/:tagId/subject-matter-experts/user-groups",
    alias: "postTeamsTeamtagsTagIdsubjectMatterExpertsuserGroups",
    description: `Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `User group IDs`,
        type: "Body",
        schema: z.array(z.number().int()),
      },
      {
        name: "tagId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: SubjectMatterExpertResponseModel,
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
        status: 422,
        description: `Subject matter experts feature not enabled`,
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
    path: "/teams/:team/tags/:tagId/subject-matter-experts/users",
    alias: "postTeamsTeamtagsTagIdsubjectMatterExpertsusers",
    description: `Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `User ID(s)`,
        type: "Body",
        schema: z.array(z.number().int()),
      },
      {
        name: "tagId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: SubjectMatterExpertResponseModel,
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
        status: 422,
        description: `Subject matter experts feature not enabled`,
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
    path: "/teams/:team/tags/:tagId/subject-matter-experts/user-groups/:userGroupId",
    alias: "deleteTeamsTeamtagsTagIdsubjectMatterExpertsuserGroupsUserGroupId",
    description: `Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "tagId",
        type: "Path",
        schema: z.number().int().gte(1),
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
        status: 422,
        description: `Subject matter experts feature not enabled`,
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
    path: "/teams/:team/tags/:tagId/subject-matter-experts/users/:userId",
    alias: "deleteTeamsTeamtagsTagIdsubjectMatterExpertsusersUserId",
    description: `Removes a user as subject matter expert for a tag, identified by tag ID and user ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "tagId",
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
        status: 422,
        description: `Subject matter experts feature not enabled`,
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

export const Tags___TeamsApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
