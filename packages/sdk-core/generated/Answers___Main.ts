import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

import { PaginatedAnswers } from "./common";
import { AnswersSortParameter } from "./common";
import { SortOrder } from "./common";
import { AnswerSummaryResponseModel } from "./common";
import { UserSummaryResponseModel } from "./common";
import { AnswerResponseModel } from "./common";
import { FlagRequestModel } from "./common";

const endpoints = makeApi([
  {
    method: "get",
    path: "/questions/:questionId/answers",
    alias: "getQuestionsQuestionIdanswers",
    description: `Retrieves all answers to a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
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
        schema: z.enum(["score", "modified", "creation"]).optional(),
      },
      {
        name: "order",
        type: "Query",
        schema: z.enum(["asc", "desc"]).optional(),
      },
    ],
    response: PaginatedAnswers,
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
    path: "/questions/:questionId/answers",
    alias: "postQuestionsQuestionIdanswers",
    description: `Creates an answer to a question, identified by question ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ body: z.string().min(1) }).strict(),
      },
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: AnswerResponseModel,
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
    path: "/questions/:questionId/answers/:answerId",
    alias: "getQuestionsQuestionIdanswersAnswerId",
    description: `Retrieves an answer to a question, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: AnswerResponseModel,
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
        description: `Answer or question not found`,
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
    path: "/questions/:questionId/answers/:answerId",
    alias: "putQuestionsQuestionIdanswersAnswerId",
    description: `Updates an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ body: z.string().min(1) }).strict(),
      },
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: AnswerResponseModel,
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
    path: "/questions/:questionId/answers/:answerId",
    alias: "deleteQuestionsQuestionIdanswersAnswerId",
    description: `Deletes an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
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
        description: `Answer not found`,
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
    path: "/questions/:questionId/answers/:answerId/flags/options",
    alias: "getQuestionsQuestionIdanswersAnswerIdflagsoptions",
    description: `Retrieve a list of flag options for an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int(),
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
        description: `Answer not found`,
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
    path: "/questions/:questionId/answers/:answerId/upvote",
    alias: "postQuestionsQuestionIdanswersAnswerIdupvote",
    description: `Upvotes an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: AnswerSummaryResponseModel,
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
        description: `Question or answer not found`,
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
    path: "/questions/:questionId/answers/:answerId/upvote",
    alias: "deleteQuestionsQuestionIdanswersAnswerIdupvote",
    description: `Deletes the upvote of an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: AnswerSummaryResponseModel,
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
        description: `Question or answer not found`,
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
    path: "/questions/:questionId/answers/:answerId/downvote",
    alias: "postQuestionsQuestionIdanswersAnswerIddownvote",
    description: `Downvotes an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: AnswerSummaryResponseModel,
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
        description: `Question or answer not found`,
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
    path: "/questions/:questionId/answers/:answerId/downvote",
    alias: "deleteQuestionsQuestionIdanswersAnswerIddownvote",
    description: `Deletes the downvote of an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: AnswerSummaryResponseModel,
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
        description: `Question or answer not found`,
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
    path: "/questions/:questionId/answers/:answerId/accept",
    alias: "postQuestionsQuestionIdanswersAnswerIdaccept",
    description: `Accepts an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: AnswerSummaryResponseModel,
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
        description: `Question or answer not found`,
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
    path: "/questions/:questionId/answers/:answerId/accept",
    alias: "deleteQuestionsQuestionIdanswersAnswerIdaccept",
    description: `Unaccepts an answer, identified by question ID and answer ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "questionId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int().gte(1),
      },
    ],
    response: AnswerSummaryResponseModel,
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
        description: `Question or answer not found`,
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
    path: "/questions/:questionId/answers/:answerId/flags",
    alias: "postQuestionsQuestionIdanswersAnswerIdflags",
    description: `Raises a flag for an answer, identified by question ID and answer ID.`,
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
        schema: z.number().int().gte(1),
      },
      {
        name: "answerId",
        type: "Path",
        schema: z.number().int().gte(1),
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
        description: `Answer not found`,
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

export const Answers___MainApi = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
