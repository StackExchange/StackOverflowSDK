# Stack Overflow Internal SDK

A comprehensive TypeScript/JavaScript SDK for interacting with the Stack Internal API. This toolkit provides easy-to-use methods for accessing questions, answers, users, and other resources in your Stack Internal instance.

## Features

- 🚀 **Simple API wrapper** - Clean, intuitive interface for all Stack Internal endpoints
- 🔒 **OAuth2 authentication** - Built-in support for access token authentication
- 📦 **Modular design** - Organized client modules for different resource types
- 🎯 **Team context support** - Switch between different teams seamlessly
- 📝 **Full TypeScript support** - Complete type definitions for all API responses
- 🔄 **Future-proof** - Always up-to-date with the latest API specification

## Installation

```bash
npm install @stackoverflow/teams-sdk
```

```bash
yarn add @stackoverflow/teams-sdk
```

## Quick Start

### Basic Setup

```typescript
import { StackOverflowSDK } from '@stackoverflow/teams-sdk';

const sdk = new StackOverflowSDK({
  accessToken: 'your-oauth2-access-token',
  baseUrl: 'https://[your-site].stackenterprise.co/api/v3'
});
```

### Working with Questions

```typescript
// Get all questions
const questions = await sdk.questions.getAll();

// Get a specific question
const question = await sdk.questions.get('question-id');

// Search questions
const searchResults = await sdk.search.search({
  query: 'typescript',
  tags: ['javascript', 'node.js']
});
```

### Working with Answers

```typescript
// Get answers for a question
const answers = await sdk.answers.getAll('question-id');

// Get a specific answer
const answer = await sdk.answers.get('answer-id');
```

## Team Context

For team scenarios, you can create team-specific contexts:

```typescript
const teamContext = sdk.forTeam('team-id');

// Now all operations are scoped to this team
const teamQuestions = await teamContext.questions.getAll();
```

## Available Clients

The SDK provides dedicated clients for each resource type:

| Client | Description | Example Usage |
|--------|-------------|---------------|
| `answers` | Answer operations | `sdk.answers.get(id)` |
| `questions` | Question operations | `sdk.questions.getAll()` |
| `articles` | Article/documentation | `sdk.articles.getAll()` |
| `collections` | Question collections | `sdk.collections.getAll()` |
| `comments` | Comments on posts | `sdk.comments.getAll()` |
| `users` | User management | `sdk.users.getAll()` |
| `tags` | Tag operations | `sdk.tags.getAll()` |
| `search` | Search functionality | `sdk.search.query()` |
| `usergroups` | User group management | `sdk.usergroups.getAll()` |
| `communities` | Community operations | `sdk.communities.getAll()` |

## Configuration

### SDKConfig Interface

```typescript
interface SDKConfig {
  accessToken: string;  // OAuth2 access token
  baseUrl: string;      // API base URL
}
```

### Authentication

Basic and Business customers can follow the official Stack Internal guide to create a Personal Access Token (PAT) for API authentication:

👉 [Personal Access Tokens (PATs) for API Authentication](https://stackoverflowteams.help/en/articles/10908790-personal-access-tokens-pats-for-api-authentication)

Enterprise users can follow:

👉 [Secure API Token Generation with OAuth and PKCE](https://stackoverflowteams.help/en/articles/9718149-secure-api-token-generation-with-oauth-and-pkce) 

```typescript
const sdk = new StackOverflowSDK({
  accessToken: process.env.SO_TEAMS_ACCESS_TOKEN,
  baseUrl: 'https://[your-site].stackenterprise.co/api/v3'
});
```

### Error Handling

```typescript
try {
  const question = await sdk.questions.get('invalid-id');
} catch (error) {
  if (error.status === 404) {
    console.log('Question not found');
  } else {
    console.error('API Error:', error.message);
  }
}
```

### Pagination

Many API endpoints support pagination:

```typescript
const questions = await sdk.questions.getAll({
  page: 1,
  pageSize: 50,
  sort: 'creation',
  order: 'desc'
});

console.log(`Total questions: ${questions.total}`);
console.log(`Current page: ${questions.page}`);
console.log(`Total Pages: ${questions.totalPages}`);
```

## API Reference

For detailed API documentation, please refer to:
- https://[your-site].stackenterprise.co/api/v3
- Generated TypeScript definitions in your IDE

## Support

- 🐛 Report issues on GitHub