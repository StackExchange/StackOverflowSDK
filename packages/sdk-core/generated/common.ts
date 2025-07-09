import { z } from "zod";

export type AnswerResponseModel = Partial<{
  id: number;
  questionId: number;
  body: string;
  score: number;
  isAccepted: boolean;
  isDeleted: boolean;
  isBookmarked: boolean;
  isFollowed: boolean;
  creationDate: string;
  lockedDate: string | null;
  lastEditDate: string | null;
  lastActivityDate: string | null;
  deletionDate: string | null;
  owner: UserSummaryResponseModel;
  lastEditor: UserSummaryResponseModel;
  lastActivityUser: UserSummaryResponseModel;
  commentCount: number;
  webUrl: string | null;
  shareLink: string | null;
  userCanFollow: boolean;
  canBeFollowed: boolean;
  isSubjectMatterExpert: boolean;
  bodyMarkdown: string;
}>;
export type UserSummaryResponseModel = Partial<{
  id: number;
  accountId: number | null;
  name: string;
  avatarUrl: string;
  webUrl: string;
  reputation: number;
  role: string;
}>;
export type AnswerSearchResultModel = SearchResultModel;
export type SearchResultModel = Partial<{
  title: string;
  snippet: string;
  tags: Array<TagSummaryResponseModel>;
  owner: UserSummaryResponseModel;
  creationDate: string;
  score: number;
  webUrl: string;
}>;
export type TagSummaryResponseModel = Partial<{
  id: number;
  name: string;
  description: string;
  postCount: number;
  subjectMatterExpertCount: number | null;
  watcherCount: number;
  creationDate: string;
  hasSynonyms: boolean;
  webUrl: string;
}>;
export type AnswerSummaryResponseModel = Partial<{
  id: number;
  questionId: number;
  body: string;
  score: number;
  isAccepted: boolean;
  isDeleted: boolean;
  isBookmarked: boolean;
  isFollowed: boolean;
  creationDate: string;
  lockedDate: string | null;
  lastEditDate: string | null;
  lastActivityDate: string | null;
  deletionDate: string | null;
  owner: UserSummaryResponseModel;
  lastEditor: UserSummaryResponseModel;
  lastActivityUser: UserSummaryResponseModel;
  commentCount: number;
  webUrl: string | null;
  shareLink: string | null;
  userCanFollow: boolean;
  canBeFollowed: boolean;
  isSubjectMatterExpert: boolean;
}>;
export type ArticlePermissionsRequestModel = Partial<{
  editableBy: ArticlePermissionsType;
  editorUserIds: Array<number>;
  editorUserGroupIds: Array<number>;
}>;
export type ArticlePermissionsType =
  | "ownerOnly"
  | "specificEditors"
  | "everyone";
export type ArticlePermissionsResponseModel = Partial<{
  editableBy: ArticlePermissionsType;
  editorUsers: Array<UserSummaryResponseModel>;
  editorUserGroups: Array<UserGroupResponseModel>;
}>;
export type UserGroupResponseModel = Partial<{
  id: number;
  name: string;
  description: string;
  users: Array<UserSummaryResponseModel>;
}>;
export type ArticleRequestModel = {
  title: string;
  body: string;
  tags: Array<string>;
  type: ArticleType;
  permissions: ArticlePermissionsRequestModel;
};
export type ArticleType =
  | "knowledgeArticle"
  | "announcement"
  | "policy"
  | "howToGuide";
export type ArticleResponseModel = Partial<{
  communities: Array<CommunitySummaryResponseModel>;
  id: number;
  type: ArticleType;
  title: string;
  body: string;
  tags: Array<TagSummaryResponseModel>;
  owner: UserSummaryResponseModel;
  lastEditor: UserSummaryResponseModel;
  creationDate: string;
  lastActivityDate: string | null;
  score: number;
  viewCount: number;
  webUrl: string;
  shareUrl: string;
  isDeleted: boolean;
  isObsolete: boolean;
  isClosed: boolean;
  bodyMarkdown: string;
  userIsFollowing: boolean;
  userHasUpvoted: boolean;
  userHasDownvoted: boolean;
  userCanEdit: boolean;
  permissions: ArticlePermissionsResponseModel;
}>;
export type CommunitySummaryResponseModel = Partial<{
  name: string;
  description: string;
  id: number;
  memberCount: number;
  tags: Array<TagSummaryResponseModel>;
}>;
export type ArticleSearchResultModel = SearchResultModel;
export type ArticleSummaryResponseModel = Partial<{
  id: number;
  type: ArticleType;
  title: string;
  body: string;
  tags: Array<TagSummaryResponseModel>;
  owner: UserSummaryResponseModel;
  lastEditor: UserSummaryResponseModel;
  creationDate: string;
  lastActivityDate: string | null;
  score: number;
  viewCount: number;
  webUrl: string;
  shareUrl: string;
  isDeleted: boolean;
  isObsolete: boolean;
  isClosed: boolean;
}>;
export type CollectionContentSummaryResponseModel = Partial<{
  id: number;
  type: CollectionContentType;
  title: string;
}>;
export type CollectionContentType = "unknown" | "question" | "article";
export type CollectionsResponseModel = Partial<{
  content: Array<CollectionContentSummaryResponseModel>;
  editorUsers: Array<UserSummaryResponseModel>;
  editorUserGroups: Array<UserGroupResponseModel>;
  id: number;
  title: string;
  description: string;
  owner: UserSummaryResponseModel;
  creationDate: string;
  isDeleted: boolean;
  tags: Array<TagSummaryResponseModel>;
}>;
export type CollectionsSummaryResponseModel = Partial<{
  id: number;
  title: string;
  description: string;
  owner: UserSummaryResponseModel;
  creationDate: string;
  isDeleted: boolean;
  tags: Array<TagSummaryResponseModel>;
}>;
export type PaginatedAnswers = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: AnswersSortParameter;
  order: SortOrder;
  items: Array<AnswerSummaryResponseModel>;
}>;
export type AnswersSortParameter = "score" | "modified" | "creation";
export type SortOrder = "asc" | "desc";
export type PaginatedArticles = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: ArticleSortParameter;
  order: SortOrder;
  items: Array<ArticleSummaryResponseModel>;
}>;
export type ArticleSortParameter = "activity" | "creation" | "score";
export type PaginatedCollections = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: CollectionsSortParameter;
  order: SortOrder;
  items: Array<CollectionsSummaryResponseModel>;
}>;
export type CollectionsSortParameter = "creation" | "lastEdit";
export type PaginatedLinkedOrRelatedQuestions = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: LinkedOrRelatedQuestionsSortParameter;
  order: SortOrder;
  items: Array<QuestionSummaryResponseModel>;
}>;
export type LinkedOrRelatedQuestionsSortParameter =
  | "hot"
  | "creation"
  | "activity"
  | "score";
export type QuestionSummaryResponseModel = Partial<{
  id: number;
  title: string;
  body: string;
  tags: Array<TagSummaryResponseModel>;
  owner: UserSummaryResponseModel;
  lastEditor: UserSummaryResponseModel;
  creationDate: string;
  lastActivityDate: string | null;
  score: number;
  isAnswered: boolean;
  answerCount: number;
  viewCount: number;
  webUrl: string;
  shareUrl: string;
  isDeleted: boolean;
  isObsolete: boolean;
  isClosed: boolean;
  bounty: BountyResponseModel;
}>;
export type BountyResponseModel = Partial<{
  amount: number;
  closes: string;
}>;
export type PaginatedQuestions = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: QuestionSortParameter;
  order: SortOrder;
  items: Array<QuestionSummaryResponseModel>;
}>;
export type QuestionSortParameter = "activity" | "creation" | "score";
export type PaginatedSearchResults = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: SearchSortParameter;
  items: Array<
    | QuestionSearchResultModel
    | AnswerSearchResultModel
    | ArticleSearchResultModel
  >;
}>;
export type SearchSortParameter = "relevance" | "newest" | "active" | "score";
export type QuestionSearchResultModel = SearchResultModel;
export type PaginatedTags = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: TagsSortParameter;
  order: SortOrder;
  items: Array<TagSummaryResponseModel>;
}>;
export type TagsSortParameter = "name" | "postCount" | "creationDate";
export type PaginatedUserGroups = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: UserGroupsSortParameter;
  order: SortOrder;
  items: Array<UserGroupResponseModel>;
}>;
export type UserGroupsSortParameter = "name" | "size";
export type PaginatedUsers = Partial<{
  totalCount: number;
  pageSize: number;
  page: number;
  totalPages: number;
  sort: UsersSortParameter;
  order: SortOrder;
  items: Array<UserResponseModel>;
}>;
export type UsersSortParameter = "reputation";
export type UserResponseModel = Partial<{
  externalId: string | null;
  department: string | null;
  jobTitle: string | null;
  email: string | null;
  id: number;
  accountId: number | null;
  name: string;
  avatarUrl: string;
  webUrl: string;
  reputation: number;
  role: string;
}>;
export type QuestionResponseModel = Partial<{
  communities: Array<CommunitySummaryResponseModel>;
  id: number;
  title: string;
  body: string;
  tags: Array<TagSummaryResponseModel>;
  owner: UserSummaryResponseModel;
  lastEditor: UserSummaryResponseModel;
  creationDate: string;
  lastActivityDate: string | null;
  score: number;
  isAnswered: boolean;
  answerCount: number;
  viewCount: number;
  webUrl: string;
  shareUrl: string;
  isDeleted: boolean;
  isObsolete: boolean;
  isClosed: boolean;
  bounty: BountyResponseModel;
  bodyMarkdown: string;
  mentionedUsers: Array<MentionedUserResponseModel>;
  mentionedUserGroups: Array<MentionedUserGroupResponseModel>;
  userIsFollowing: boolean;
  userHasUpvoted: boolean;
  userHasDownvoted: boolean;
  userHasBookmarked: boolean;
}>;
export type MentionedUserResponseModel = Partial<{
  id: number;
  name: string;
}>;
export type MentionedUserGroupResponseModel = Partial<{
  id: number;
  name: string;
  memberCount: number;
}>;
export type SubjectMatterExpertResponseModel = Partial<{
  users: Array<UserSummaryResponseModel>;
  userGroups: Array<UserGroupResponseModel>;
}>;
export type TagResponseModel = Partial<{
  subjectMatterExperts: SubjectMatterExpertResponseModel;
  id: number;
  name: string;
  description: string;
  postCount: number;
  subjectMatterExpertCount: number | null;
  watcherCount: number;
  creationDate: string;
  hasSynonyms: boolean;
  webUrl: string;
}>;
export type TagWatchersResponseModel = Partial<{
  users: Array<UserSummaryResponseModel>;
}>;
export type UserDetailsResponseModel = Partial<{
  communities: Array<CommunitySummaryResponseModel>;
  externalId: string | null;
  department: string | null;
  jobTitle: string | null;
  email: string | null;
  id: number;
  accountId: number | null;
  name: string;
  avatarUrl: string;
  webUrl: string;
  reputation: number;
  role: string;
}>;

export const QuestionSortParameter = z.enum(["activity", "creation", "score"]);
export const SortOrder = z.enum(["asc", "desc"]);
export const TagSummaryResponseModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    postCount: z.number().int(),
    subjectMatterExpertCount: z.number().int().nullable(),
    watcherCount: z.number().int(),
    creationDate: z.string().datetime({ offset: true }),
    hasSynonyms: z.boolean(),
    webUrl: z.string(),
  })
  .partial()
  .strict();
export const UserSummaryResponseModel = z
  .object({
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
export const BountyResponseModel = z
  .object({
    amount: z.number().int(),
    closes: z.string().datetime({ offset: true }),
  })
  .partial()
  .strict();
export const QuestionSummaryResponseModel = z
  .object({
    id: z.number().int(),
    title: z.string(),
    body: z.string(),
    tags: z.array(TagSummaryResponseModel),
    owner: UserSummaryResponseModel,
    lastEditor: UserSummaryResponseModel,
    creationDate: z.string().datetime({ offset: true }),
    lastActivityDate: z.string().datetime({ offset: true }).nullable(),
    score: z.number().int(),
    isAnswered: z.boolean(),
    answerCount: z.number().int(),
    viewCount: z.number().int(),
    webUrl: z.string(),
    shareUrl: z.string(),
    isDeleted: z.boolean(),
    isObsolete: z.boolean(),
    isClosed: z.boolean(),
    bounty: BountyResponseModel,
  })
  .partial()
  .strict();
export const PaginatedQuestions = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: QuestionSortParameter,
    order: SortOrder,
    items: z.array(QuestionSummaryResponseModel),
  })
  .partial()
  .strict();
export const QuestionRequestModel = z
  .object({
    title: z.string().min(1),
    body: z.string().min(1),
    tags: z.array(z.string()),
  })
  .strict();
export const CommunitySummaryResponseModel = z
  .object({
    name: z.string(),
    description: z.string(),
    id: z.number().int(),
    memberCount: z.number().int(),
    tags: z.array(TagSummaryResponseModel),
  })
  .partial()
  .strict();
export const MentionedUserResponseModel = z
  .object({ id: z.number().int(), name: z.string() })
  .partial()
  .strict();
export const MentionedUserGroupResponseModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    memberCount: z.number().int(),
  })
  .partial()
  .strict();
export const QuestionResponseModel = z
  .object({
    communities: z.array(CommunitySummaryResponseModel),
    id: z.number().int(),
    title: z.string(),
    body: z.string(),
    tags: z.array(TagSummaryResponseModel),
    owner: UserSummaryResponseModel,
    lastEditor: UserSummaryResponseModel,
    creationDate: z.string().datetime({ offset: true }),
    lastActivityDate: z.string().datetime({ offset: true }).nullable(),
    score: z.number().int(),
    isAnswered: z.boolean(),
    answerCount: z.number().int(),
    viewCount: z.number().int(),
    webUrl: z.string(),
    shareUrl: z.string(),
    isDeleted: z.boolean(),
    isObsolete: z.boolean(),
    isClosed: z.boolean(),
    bounty: BountyResponseModel,
    bodyMarkdown: z.string(),
    mentionedUsers: z.array(MentionedUserResponseModel),
    mentionedUserGroups: z.array(MentionedUserGroupResponseModel),
    userIsFollowing: z.boolean(),
    userHasUpvoted: z.boolean(),
    userHasDownvoted: z.boolean(),
    userHasBookmarked: z.boolean(),
  })
  .partial()
  .strict();
export const LinkedOrRelatedQuestionsSortParameter = z.enum([
  "hot",
  "creation",
  "activity",
  "score",
]);
export const PaginatedLinkedOrRelatedQuestions = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: LinkedOrRelatedQuestionsSortParameter,
    order: SortOrder,
    items: z.array(QuestionSummaryResponseModel),
  })
  .partial()
  .strict();
export const FlagRequestModel = z
  .object({
    optionId: z.number().int(),
    comment: z.string().nullish(),
    relatedQuestionId: z.number().int().nullish(),
    targetSite: z.string().nullish(),
  })
  .strict();
export const AnswersSortParameter = z.enum(["score", "modified", "creation"]);
export const AnswerSummaryResponseModel = z
  .object({
    id: z.number().int(),
    questionId: z.number().int(),
    body: z.string(),
    score: z.number().int(),
    isAccepted: z.boolean(),
    isDeleted: z.boolean(),
    isBookmarked: z.boolean(),
    isFollowed: z.boolean(),
    creationDate: z.string().datetime({ offset: true }),
    lockedDate: z.string().datetime({ offset: true }).nullable(),
    lastEditDate: z.string().datetime({ offset: true }).nullable(),
    lastActivityDate: z.string().datetime({ offset: true }).nullable(),
    deletionDate: z.string().datetime({ offset: true }).nullable(),
    owner: UserSummaryResponseModel,
    lastEditor: UserSummaryResponseModel,
    lastActivityUser: UserSummaryResponseModel,
    commentCount: z.number().int(),
    webUrl: z.string().nullable(),
    shareLink: z.string().nullable(),
    userCanFollow: z.boolean(),
    canBeFollowed: z.boolean(),
    isSubjectMatterExpert: z.boolean(),
  })
  .partial()
  .strict();
export const PaginatedAnswers = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: AnswersSortParameter,
    order: SortOrder,
    items: z.array(AnswerSummaryResponseModel),
  })
  .partial()
  .strict();
export const AnswerResponseModel = z
  .object({
    id: z.number().int(),
    questionId: z.number().int(),
    body: z.string(),
    score: z.number().int(),
    isAccepted: z.boolean(),
    isDeleted: z.boolean(),
    isBookmarked: z.boolean(),
    isFollowed: z.boolean(),
    creationDate: z.string().datetime({ offset: true }),
    lockedDate: z.string().datetime({ offset: true }).nullable(),
    lastEditDate: z.string().datetime({ offset: true }).nullable(),
    lastActivityDate: z.string().datetime({ offset: true }).nullable(),
    deletionDate: z.string().datetime({ offset: true }).nullable(),
    owner: UserSummaryResponseModel,
    lastEditor: UserSummaryResponseModel,
    lastActivityUser: UserSummaryResponseModel,
    commentCount: z.number().int(),
    webUrl: z.string().nullable(),
    shareLink: z.string().nullable(),
    userCanFollow: z.boolean(),
    canBeFollowed: z.boolean(),
    isSubjectMatterExpert: z.boolean(),
    bodyMarkdown: z.string(),
  })
  .partial()
  .strict();
export const ArticleSortParameter = z.enum(["activity", "creation", "score"]);
export const ArticleType = z.enum([
  "knowledgeArticle",
  "announcement",
  "policy",
  "howToGuide",
]);
export const ArticleSummaryResponseModel = z
  .object({
    id: z.number().int(),
    type: ArticleType,
    title: z.string(),
    body: z.string(),
    tags: z.array(TagSummaryResponseModel),
    owner: UserSummaryResponseModel,
    lastEditor: UserSummaryResponseModel,
    creationDate: z.string().datetime({ offset: true }),
    lastActivityDate: z.string().datetime({ offset: true }).nullable(),
    score: z.number().int(),
    viewCount: z.number().int(),
    webUrl: z.string(),
    shareUrl: z.string(),
    isDeleted: z.boolean(),
    isObsolete: z.boolean(),
    isClosed: z.boolean(),
  })
  .partial()
  .strict();
export const PaginatedArticles = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: ArticleSortParameter,
    order: SortOrder,
    items: z.array(ArticleSummaryResponseModel),
  })
  .partial()
  .strict();
export const ArticlePermissionsType = z.enum([
  "ownerOnly",
  "specificEditors",
  "everyone",
]);
export const ArticlePermissionsRequestModel = z
  .object({
    editableBy: ArticlePermissionsType,
    editorUserIds: z.array(z.number().int()),
    editorUserGroupIds: z.array(z.number().int()),
  })
  .partial()
  .strict();
export const ArticleRequestModel = z
  .object({
    title: z.string().min(1),
    body: z.string().min(1),
    tags: z.array(z.string()),
    type: ArticleType,
    permissions: ArticlePermissionsRequestModel,
  })
  .strict();
export const UserGroupResponseModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    users: z.array(UserSummaryResponseModel),
  })
  .partial()
  .strict();
export const ArticlePermissionsResponseModel = z
  .object({
    editableBy: ArticlePermissionsType,
    editorUsers: z.array(UserSummaryResponseModel),
    editorUserGroups: z.array(UserGroupResponseModel),
  })
  .partial()
  .strict();
export const ArticleResponseModel = z
  .object({
    communities: z.array(CommunitySummaryResponseModel),
    id: z.number().int(),
    type: ArticleType,
    title: z.string(),
    body: z.string(),
    tags: z.array(TagSummaryResponseModel),
    owner: UserSummaryResponseModel,
    lastEditor: UserSummaryResponseModel,
    creationDate: z.string().datetime({ offset: true }),
    lastActivityDate: z.string().datetime({ offset: true }).nullable(),
    score: z.number().int(),
    viewCount: z.number().int(),
    webUrl: z.string(),
    shareUrl: z.string(),
    isDeleted: z.boolean(),
    isObsolete: z.boolean(),
    isClosed: z.boolean(),
    bodyMarkdown: z.string(),
    userIsFollowing: z.boolean(),
    userHasUpvoted: z.boolean(),
    userHasDownvoted: z.boolean(),
    userCanEdit: z.boolean(),
    permissions: ArticlePermissionsResponseModel,
  })
  .partial()
  .strict();
export const TagsSortParameter = z.enum(["name", "postCount", "creationDate"]);
export const PaginatedTags = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: TagsSortParameter,
    order: SortOrder,
    items: z.array(TagSummaryResponseModel),
  })
  .partial()
  .strict();
export const SubjectMatterExpertResponseModel = z
  .object({
    users: z.array(UserSummaryResponseModel),
    userGroups: z.array(UserGroupResponseModel),
  })
  .partial()
  .strict();
export const TagResponseModel = z
  .object({
    subjectMatterExperts: SubjectMatterExpertResponseModel,
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    postCount: z.number().int(),
    subjectMatterExpertCount: z.number().int().nullable(),
    watcherCount: z.number().int(),
    creationDate: z.string().datetime({ offset: true }),
    hasSynonyms: z.boolean(),
    webUrl: z.string(),
  })
  .partial()
  .strict();
export const SubjectMatterExpertRequestModel = z
  .object({
    userIds: z.array(z.number().int()),
    userGroupIds: z.array(z.number().int()),
  })
  .partial()
  .strict();
export const TagWatchersResponseModel = z
  .object({ users: z.array(UserSummaryResponseModel) })
  .partial()
  .strict();
export const UserDetailsResponseModel = z
  .object({
    communities: z.array(CommunitySummaryResponseModel),
    externalId: z.string().nullable(),
    department: z.string().nullable(),
    jobTitle: z.string().nullable(),
    email: z.string().nullable(),
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
export const UsersSortParameter = z.literal("reputation");
export const UserResponseModel = z
  .object({
    externalId: z.string().nullable(),
    department: z.string().nullable(),
    jobTitle: z.string().nullable(),
    email: z.string().nullable(),
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
export const PaginatedUsers = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: UsersSortParameter,
    order: SortOrder,
    items: z.array(UserResponseModel),
  })
  .partial()
  .strict();
export const UserGroupsSortParameter = z.enum(["name", "size"]);
export const PaginatedUserGroups = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: UserGroupsSortParameter,
    order: SortOrder,
    items: z.array(UserGroupResponseModel),
  })
  .partial()
  .strict();
export const UserGroupRequestModel = z
  .object({
    name: z.string().min(1),
    description: z.string().optional(),
    userIds: z.array(z.number().int()).optional(),
  })
  .strict();
export const SearchSortParameter = z.enum([
  "relevance",
  "newest",
  "active",
  "score",
]);
export const SearchResultModel = z
  .object({
    title: z.string(),
    snippet: z.string(),
    tags: z.array(TagSummaryResponseModel),
    owner: UserSummaryResponseModel,
    creationDate: z.string().datetime({ offset: true }),
    score: z.number().int(),
    webUrl: z.string(),
  })
  .partial()
  .strict();
export const QuestionSearchResultModel = SearchResultModel;
export const AnswerSearchResultModel = SearchResultModel;
export const ArticleSearchResultModel = SearchResultModel;
export const PaginatedSearchResults = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: SearchSortParameter,
    items: z.array(
      z.union([
        QuestionSearchResultModel,
        AnswerSearchResultModel,
        ArticleSearchResultModel,
      ])
    ),
  })
  .partial()
  .strict();
export const CollectionsSortParameter = z.enum(["creation", "lastEdit"]);
export const CollectionsSummaryResponseModel = z
  .object({
    id: z.number().int(),
    title: z.string(),
    description: z.string(),
    owner: UserSummaryResponseModel,
    creationDate: z.string().datetime({ offset: true }),
    isDeleted: z.boolean(),
    tags: z.array(TagSummaryResponseModel),
  })
  .partial()
  .strict();
export const PaginatedCollections = z
  .object({
    totalCount: z.number().int(),
    pageSize: z.number().int(),
    page: z.number().int(),
    totalPages: z.number().int(),
    sort: CollectionsSortParameter,
    order: SortOrder,
    items: z.array(CollectionsSummaryResponseModel),
  })
  .partial()
  .strict();
export const CollectionRequestModel = z
  .object({
    title: z.string(),
    description: z.string(),
    editorUserIds: z.array(z.number().int()),
    editorUserGroupIds: z.array(z.number().int()),
    contentIds: z.array(z.number().int()),
  })
  .partial()
  .strict();
export const CollectionContentType = z.enum(["unknown", "question", "article"]);
export const CollectionContentSummaryResponseModel = z
  .object({
    id: z.number().int(),
    type: CollectionContentType,
    title: z.string(),
  })
  .partial()
  .strict();
export const CollectionsResponseModel = z
  .object({
    content: z.array(CollectionContentSummaryResponseModel),
    editorUsers: z.array(UserSummaryResponseModel),
    editorUserGroups: z.array(UserGroupResponseModel),
    id: z.number().int(),
    title: z.string(),
    description: z.string(),
    owner: UserSummaryResponseModel,
    creationDate: z.string().datetime({ offset: true }),
    isDeleted: z.boolean(),
    tags: z.array(TagSummaryResponseModel),
  })
  .partial()
  .strict();
export const EditCollectionRequestModel = z
  .object({
    ownerId: z.number().int().nullable(),
    title: z.string(),
    description: z.string(),
    editorUserIds: z.array(z.number().int()),
    editorUserGroupIds: z.array(z.number().int()),
    contentIds: z.array(z.number().int()),
  })
  .partial()
  .strict();
export const ImageResponseModel = z
  .object({ id: z.string(), url: z.string() })
  .partial()
  .strict();
