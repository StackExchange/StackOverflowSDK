---
title: questions.create()
description: Create a new question on Stack Overflow for Teams
---

# questions.create()

Creates a new question on Stack Overflow for Teams.

## Syntax

```typescript
await client.questions.create(data, options?)
```

## Parameters

### `data` (required)

The question data to create.

**Type:** `CreateQuestionData`

```typescript
interface CreateQuestionData {
  title: string;        // Question title (required)
  body: string;         // Question body in Markdown (required) 
  tags: string[];       // Array of tag names (required)
  team?: string;        // Team identifier (optional)
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | `string` | Yes | The question title, stated briefly in one sentence |
| `body` | `string` | Yes | The main content of the question in Markdown format |
| `tags` | `string[]` | Yes | Array of tag names associated with the question |
| `team` | `string` | No | Team identifier for team-specific questions |

### `options` (optional)

Additional request configuration options.

**Type:** `RequestOptions`

```typescript
interface RequestOptions {
  timeout?: number;     // Request timeout in milliseconds
  retries?: number;     // Number of retry attempts
  signal?: AbortSignal; // AbortController signal for cancellation
}
```

## Returns

**Type:** `Promise<Question>`

Returns a Promise that resolves to the newly created question object.

```typescript
interface Question {
  id: number;
  title: string;
  body: string;
  bodyMarkdown: string;
  tags: TagSummary[];
  owner: UserSummary;
  creationDate: string;
  lastActivityDate: string | null;
  score: number;
  viewCount: number;
  answerCount: number;
  isAnswered: boolean;
  isDeleted: boolean;
  isClosed: boolean;
  webUrl: string;
  shareUrl: string;
  userIsFollowing: boolean;
  userHasUpvoted: boolean;
  userHasDownvoted: boolean;
  userHasBookmarked: boolean;
}
```

## Examples

### Basic Usage

```typescript
const question = await client.questions.create({
  title: "How do I implement authentication in Node.js?",
  body: `I'm building a REST API and need to implement JWT authentication. 
  
  What's the best approach for:
  - Token generation
  - Token validation
  - Refresh token handling`,
  tags: ["nodejs", "authentication", "jwt"]
});

console.log(`Question created: ${question.webUrl}`);
```

### Team-Specific Question

```typescript
const teamQuestion = await client.questions.create({
  title: "What's our deployment process for microservices?",
  body: "I need to understand our current CI/CD pipeline for deploying microservices to production.",
  tags: ["deployment", "microservices", "cicd"],
  team: "engineering"
});
```

### With Custom Options

```typescript
const controller = new AbortController();

try {
  const question = await client.questions.create({
    title: "Database performance optimization",
    body: "Our queries are running slow. Looking for optimization strategies.",
    tags: ["database", "performance", "optimization"]
  }, {
    timeout: 10000,
    retries: 3,
    signal: controller.signal
  });
} catch (error) {
  // Handle errors
}
```

## Error Handling

This method can throw several types of errors:

### ValidationError

Thrown when the provided data is invalid.

```typescript
try {
  await client.questions.create({
    title: "", // Empty title
    body: "Some content",
    tags: []   // No tags
  });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation failed:', error.details);
    // error.details contains field-specific validation errors
  }
}
```

### AuthenticationError

Thrown when authentication credentials are invalid or missing.

```typescript
catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Authentication required');
    // Redirect to login or refresh token
  }
}
```

### RateLimitError

Thrown when API rate limits are exceeded.

```typescript
catch (error) {
  if (error instanceof RateLimitError) {
    console.error(`Rate limited. Retry after ${error.retryAfter} seconds`);
    // Implement exponential backoff
  }
}
```

### NetworkError

Thrown for network-related issues.

```typescript
catch (error) {
  if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
    // Retry or show offline message
  }
}
```

## Validation Rules

- **Title**: Must be 1-150 characters long
- **Body**: Must be at least 30 characters long
- **Tags**: Must include 1-5 valid tags
- **Team**: Must be a valid team identifier if provided

## Related Methods

- [questions.get()](/sdk/questions/get) - Retrieve a specific question
- [questions.list()](/sdk/questions/list) - List questions with filtering
- [questions.update()](/sdk/questions/update) - Update an existing question
- [answers.create()](/sdk/answers/create) - Create an answer to a question