import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { PaginatedQuestions } from "./common";
import { QuestionSortParameter } from "./common";
import { SortOrder } from "./common";
import { QuestionSummaryResponseModel } from "./common";
import { TagSummaryResponseModel } from "./common";
import { UserSummaryResponseModel } from "./common";
import { BountyResponseModel } from "./common";
import { QuestionResponseModel } from "./common";
import { QuestionRequestModel } from "./common";
import { CommunitySummaryResponseModel } from "./common";
import { MentionedUserResponseModel } from "./common";
import { MentionedUserGroupResponseModel } from "./common";
import { PaginatedLinkedOrRelatedQuestions } from "./common";
import { LinkedOrRelatedQuestionsSortParameter } from "./common";
import { FlagRequestModel } from "./common";

const endpoints = makeApi([
  {
    method: "get",
    path: "/teams/:team/questions",
    alias: "getTeamsTeamquestions",
    description: `Retrieves all questions on the site or team.`,
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
        schema: z.enum(["activity", "creation", "score"]).optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["asc", "desc"]).optional(),
      },
      {
        name: "isAnswered",
        type: "Query",
        schema: z.boolean().optional(),
      },
      {
        name: "hasAcceptedAnswer",
        type: "Query",
        schema: z.boolean().optional(),
      },
      {
        name: "questionId",
        type: "Query",
        schema: z.array(z.number().int()).optional(),
      },
      {
        name: "tagId",
        type: "Query",
        schema: z.array(z.number().int()).optional(),
      },
      {
        name: "authorId",
        type: "Query",
        schema: z.number().int().optional(),
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
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: PaginatedQuestions,
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
    path: "/teams/:team/questions",
    alias: "postTeamsTeamquestions",
    description: `Creates a question.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: QuestionRequestModel,
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
    path: "/teams/:team/questions/:questionId",
    alias: "getTeamsTeamquestionsQuestionId",
    description: `Retrieves a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId",
    alias: "putTeamsTeamquestionsQuestionId",
    description: `Updates a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: QuestionRequestModel,
      },
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
    path: "/teams/:team/questions/:questionId",
    alias: "deleteTeamsTeamquestionsQuestionId",
    description: `Deletes a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
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
        status: 404,
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/linked",
    alias: "getTeamsTeamquestionsQuestionIdlinked",
    description: `Retrieves questions linked to another question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
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
        schema: z.enum(["hot", "creation", "activity", "score"]).optional(),
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
    response: PaginatedLinkedOrRelatedQuestions,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/related",
    alias: "getTeamsTeamquestionsQuestionIdrelated",
    description: `Retrieves questions related to another question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
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
        schema: z.enum(["hot", "creation", "activity", "score"]).optional(),
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
    response: PaginatedLinkedOrRelatedQuestions,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/flags/options",
    alias: "getTeamsTeamquestionsQuestionIdflagsoptions",
    description: `Retrieve a list of flag options for a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.array(FlagOptionResponseModel),
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/upvote",
    alias: "postTeamsTeamquestionsQuestionIdupvote",
    description: `Upvotes a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/upvote",
    alias: "deleteTeamsTeamquestionsQuestionIdupvote",
    description: `Deletes the upvote of a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/downvote",
    alias: "postTeamsTeamquestionsQuestionIddownvote",
    description: `Downvote a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/downvote",
    alias: "deleteTeamsTeamquestionsQuestionIddownvote",
    description: `Deletes the downvote of a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/bookmark",
    alias: "postTeamsTeamquestionsQuestionIdbookmark",
    description: `Bookmarks a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/bookmark",
    alias: "deleteTeamsTeamquestionsQuestionIdbookmark",
    description: `Unbookmarks a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "team",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: QuestionResponseModel,
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
        description: `Question not found`,
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
    path: "/teams/:team/questions/:questionId/flags",
    alias: "postTeamsTeamquestionsQuestionIdflags",
    description: `Raises a flag for a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: FlagRequestModel,
      },
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int(),
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
        description: `Unable to add flag`,
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
        description: `Question not found`,
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

export const Questions___TeamsApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
