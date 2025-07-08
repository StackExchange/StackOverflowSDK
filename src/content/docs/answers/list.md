---
title: answers.list()
description: Retrieve all answers for a specific question with filtering and pagination
---

# answers.list()

Retrieves all answers for a specific question with support for filtering, sorting, and pagination.

## Syntax

```typescript
await client.answers.list(questionId, params?, options?)
```

## Parameters

### `questionId` (required)

The unique identifier of the question to retrieve answers for.

**Type:** `number`

### `params` (optional)

Query parameters for filtering and pagination.

**Type:** `ListAnswersParams`

```typescript
interface ListAnswersParams {
  page?: number;           // Page number (default: 1)
  pageSize?: number;       // Items per page (15, 30, 50, or 100)
  sort?: AnswerSortType;   // Sort criteria
  order?: SortOrder;       // Sort direction
  team?: string;           // Team identifier
}
```

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `page` | `number` | `1` | Page number to retrieve (1-based) |
| `pageSize` | `number` | `15` | Number of answers per page (15, 30, 50, or 100) |
| `sort` | `AnswerSortType` | `"score"` | Field to sort by |
| `order` | `SortOrder` | `"desc"` | Sort direction |
| `team` | `string` | - | Team identifier for team-specific queries |

#### Sort Options

```typescript
type AnswerSortType = "score" | "creation" | "modified";
type SortOrder = "asc" | "desc";
```

- `"score"` - Sort by answer score (upvotes minus downvotes)
- `"creation"` - Sort by creation date
- `"modified"` - Sort by last modification date

### `options` (optional)

Additional request configuration options.

**Type:** `RequestOptions`

```typescript
interface RequestOptions {
  timeout?: number;
  retries?: number;
  signal?: AbortSignal;
}
```

## Returns

**Type:** `Promise<PaginatedAnswers>`

Returns a Promise that resolves to a paginated list of answers.

```typescript
interface PaginatedAnswers {
  items: Answer[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  sort: AnswerSortType;
  order: SortOrder;
}

interface Answer {
  id: number;
  questionId: number;
  body: string;
  bodyMarkdown: string;
  score: number;
  isAccepted: boolean;
  isDeleted: boolean;
  isBookmarked: boolean;
  isFollowed: boolean;
  creationDate: string;
  lastEditDate: string | null;
  lastActivityDate: string | null;
  owner: UserSummary;
  lastEditor?: UserSummary;
  commentCount: number;
  webUrl: string;
  shareLink: string;
  isSubjectMatterExpert: boolean;
}
```

## Examples

### Basic Usage

```typescript
// Get first page of answers for question 123
const answers = await client.answers.list(123);

console.log(`Found ${answers.totalCount} answers`);
answers.items.forEach(answer => {
  console.log(`Answer ${answer.id}: Score ${answer.score}`);
});
```

### With Pagination

```typescript
// Get second page with 50 answers per page
const answers = await client.answers.list(456, {
  page: 2,
  pageSize: 50
});

console.log(`Page ${answers.page} of ${answers.totalPages}`);
console.log(`Showing answers ${(answers.page - 1) * answers.pageSize + 1}-${Math.min(answers.page * answers.pageSize, answers.totalCount)}`);
```

### Sort by Creation Date

```typescript
// Get newest answers first
const newestAnswers = await client.answers.list(789, {
  sort: "creation",
  order: "desc",
  pageSize: 30
});

console.log("Most recent answers:");
newestAnswers.items.forEach(answer => {
  console.log(`${answer.owner.name} answered on ${answer.creationDate}`);
});
```

### Team-Specific Answers

```typescript
// Get answers for a team question
const teamAnswers = await client.answers.list(101, {
  team: "engineering",
  sort: "score"
});
```

### Iterate Through All Pages

```typescript
async function getAllAnswers(questionId: number) {
  const allAnswers: Answer[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const result = await client.answers.list(questionId, { 
      page, 
      pageSize: 100 
    });
    
    allAnswers.push(...result.items);
    hasMore = result.hasNext;
    page++;
  }

  return allAnswers;
}

const answers = await getAllAnswers(123);
console.log(`Retrieved ${answers.length} total answers`);
```

### Filter Accepted Answers

```typescript
const answers = await client.answers.list(456);
const acceptedAnswers = answers.items.filter(answer => answer.isAccepted);

if (acceptedAnswers.length > 0) {
  console.log("Accepted answer:", acceptedAnswers[0].body);
} else {
  console.log("No accepted answer yet");
}
```

## Error Handling

```typescript
try {
  const answers = await client.answers.list(123, {
    page: 1,
    pageSize: 30
  });
} catch (error) {
  if (error instanceof NotFoundError) {
    console.error('Question not found');
  } else if (error instanceof ValidationError) {
    console.error('Invalid parameters:', error.details);
  } else if (error instanceof AuthenticationError) {
    console.error('Authentication required');
  } else {
    console.error('Unexpected error:', error.message);
  }
}
```

## Validation Rules

- **questionId**: Must be a positive integer
- **page**: Must be ≥ 1
- **pageSize**: Must be one of: 15, 30, 50, or 100
- **sort**: Must be a valid sort field
- **order**: Must be "asc" or "desc"

## Performance Tips

- Use appropriate `pageSize` based on your needs (larger pages = fewer requests)
- Cache results when possible to reduce API calls
- Use the `signal` option to cancel requests if the user navigates away
- Consider the accepted answer is typically the most valuable

## Related Methods

- [answers.get()](/sdk/answers/get) - Retrieve a specific answer
- [answers.create()](/sdk/answers/create) - Create a new answer
- [answers.update()](/sdk/answers/update) - Update an existing answer
- [questions.get()](/sdk/questions/get) - Get the parent question