import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { SortOrder } from "./common";
import { CommunitySummaryResponseModel } from "./common";
import { TagSummaryResponseModel } from "./common";

type PaginatedCommunities = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: CommunitySortParameter;
  order: SortOrder;
  items: Array<CommunitySummaryResponseModel>;
}>;
type CommunitySortParameter = "name" | "size";
type CommunityResponseModel = Partial<{
  members: Array<CommunityMemberResponseModel>;
  name: string;
  description: string;
  id: number;
  memberCount: number;
  tags: Array<TagSummaryResponseModel>;
}>;
type CommunityMemberResponseModel = Partial<{
  id: number;
  name: string;
  memberSince: string;
  isSme: boolean;
}>;

const CommunityMemberResponseModel: z.ZodType<CommunityMemberResponseModel> = z
  .object({
    id: z.number().int(),
    name: z.string(),
    memberSince: z.string().datetime({ offset: true }),
    isSme: z.boolean(),
  })
  .partial()
  .strict();
const CommunityResponseModel: z.ZodType<CommunityResponseModel> = z
  .object({
    members: z.array(CommunityMemberResponseModel),
    name: z.string(),
    description: z.string(),
    id: z.number().int(),
    memberCount: z.number().int(),
    tags: z.array(TagSummaryResponseModel),
  })
  .partial()
  .strict();
const CommunitySortParameter = z.enum(["name", "size"]);
const PaginatedCommunities: z.ZodType<PaginatedCommunities> = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: CommunitySortParameter,
    order: SortOrder,
    items: z.array(CommunitySummaryResponseModel),
  })
  .partial()
  .strict();
const CommunityJoinModel = z
  .object({ memberUserIds: z.array(z.number().int()) })
  .partial()
  .strict();
const CommunityLeaveModel = z
  .object({ memberUserIds: z.array(z.number().int()) })
  .partial()
  .strict();

export const schemas = {
  CommunityMemberResponseModel,
  CommunityResponseModel,
  CommunitySortParameter,
  PaginatedCommunities,
  CommunityJoinModel,
  CommunityLeaveModel,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/communities",
    alias: "getCommunities",
    description: `Queries all communities on the site.`,
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
    ],
    response: PaginatedCommunities,
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
    path: "/communities/:communityId",
    alias: "getCommunitiesCommunityId",
    description: `Retrieves a community, identified by community ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "communityId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: CommunityResponseModel,
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
        description: `Community not found`,
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
    path: "/communities/:communityId/join",
    alias: "postCommunitiesCommunityIdjoin",
    description: `Adds current user to a community, identified by community ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "communityId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: CommunityResponseModel,
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
        description: `Community not found`,
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
    path: "/communities/:communityId/join/bulk",
    alias: "postCommunitiesCommunityIdjoinbulk",
    description: `Adds the given users by ID to a community, identified by community ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: CommunityJoinModel,
      },
      {
        name: "communityId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: CommunityResponseModel,
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
        description: `Community not found`,
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
    path: "/communities/:communityId/leave",
    alias: "postCommunitiesCommunityIdleave",
    description: `Remove current user from a community, identified by community ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "communityId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: CommunityResponseModel,
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
        description: `Community not found`,
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
    path: "/communities/:communityId/leave/bulk",
    alias: "postCommunitiesCommunityIdleavebulk",
    description: `Remove the given users by ID from a community, identified by community ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: CommunityLeaveModel,
      },
      {
        name: "communityId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: CommunityResponseModel,
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
        description: `Community not found`,
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

export const Communities___MainApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
