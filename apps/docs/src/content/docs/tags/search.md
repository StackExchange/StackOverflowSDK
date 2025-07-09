---
title: tags.search()
description: Search and filter tags with advanced filtering options
---

# tags.search()

Search and retrieve tags from Stack Overflow for Teams with advanced filtering and sorting capabilities.

## Syntax

```typescript
await client.tags.search(params?, options?)
```

## Parameters

### `params` (optional)

Search and filtering parameters.

**Type:** `SearchTagsParams`

```typescript
interface SearchTagsParams {
  query?: string;            // Search query for tag names
  page?: number;             // Page number (default: 1)
  pageSize?: number;         // Items per page (15, 30, 50, or 100)
  sort?: TagSortType;        // Sort criteria
  order?: SortOrder;         // Sort direction
  hasSmes?: boolean;         // Filter by SME availability
  hasSynonyms?: boolean;     // Filter by synonym availability
  minPostCount?: number;     // Minimum number of posts
  team?: string;             // Team identifier
}
```

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `query` | `string` | - | Partial tag name to search for |
| `page` | `number` | `1` | Page number to retrieve |
| `pageSize` | `number` | `15` | Number of tags per page (15, 30, 50, or 100) |
| `sort` | `TagSortType` | `"name"` | Field to sort by |
| `order` | `SortOrder` | `"asc"` | Sort direction |
| `hasSmes` | `boolean` | - | Filter tags that have/don't have Subject Matter Experts |
| `hasSynonyms` | `boolean` | - | Filter tags that have/don't have synonyms |
| `minPostCount` | `number` | - | Minimum number of posts tagged with this tag |
| `team` | `string` | - | Team identifier for team-specific queries |

#### Sort Options

```typescript
type TagSortType = "name" | "postCount" | "creationDate";
type SortOrder = "asc" | "desc";
```

- `"name"` - Sort alphabetically by tag name
- `"postCount"` - Sort by number of posts using the tag
- `"creationDate"` - Sort by when the tag was created

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

**Type:** `Promise<PaginatedTags>`

Returns a Promise that resolves to a paginated list of tags.

```typescript
interface PaginatedTags {
  items: Tag[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  sort: TagSortType;
  order: SortOrder;
}

interface Tag {
  id: number;
  name: string;
  description: string;
  postCount: number;
  subjectMatterExpertCount: number | null;
  watcherCount: number;
  creationDate: string;
  hasSynonyms: boolean;
  webUrl: string;
}
```

## Examples

### Basic Search

```typescript
// Search for tags containing "javascript"
const tags = await client.tags.search({
  query: "javascript"
});

console.log(`Found ${tags.totalCount} tags matching "javascript"`);
tags.items.forEach(tag => {
  console.log(`${tag.name}: ${tag.postCount} posts`);
});
```

### Popular Tags

```typescript
// Get most popular tags (by post count)
const popularTags = await client.tags.search({
  sort: "postCount",
  order: "desc",
  pageSize: 50
});

console.log("Most popular tags:");
popularTags.items.forEach((tag, index) => {
  console.log(`${index + 1}. ${tag.name} (${tag.postCount} posts)`);
});
```

### Tags with Subject Matter Experts

```typescript
// Find tags that have SMEs assigned
const smeTagsResult = await client.tags.search({
  hasSmes: true,
  sort: "postCount",
  order: "desc"
});

console.log("Tags with Subject Matter Experts:");
smeTagsResult.items.forEach(tag => {
  console.log(`${tag.name}: ${tag.subjectMatterExpertCount} SMEs`);
});
```

### Filter by Post Count

```typescript
// Get tags with at least 10 posts
const activeTags = await client.tags.search({
  minPostCount: 10,
  sort: "name",
  order: "asc"
});

console.log(`${activeTags.totalCount} tags with 10+ posts`);
```

### Team-Specific Tag Search

```typescript
// Search tags within a specific team
const teamTags = await client.tags.search({
  team: "engineering",
  query: "deploy",
  sort: "postCount",
  order: "desc"
});
```

### Advanced Filtering

```typescript
// Complex search: popular tags with SMEs and synonyms
const advancedSearch = await client.tags.search({
  hasSmes: true,
  hasSynonyms: true,
  minPostCount: 5,
  sort: "postCount",
  order: "desc",
  pageSize: 100
});

console.log("Well-established tags with experts:");
advancedSearch.items.forEach(tag => {
  console.log(`${tag.name}:`);
  console.log(`  Posts: ${tag.postCount}`);
  console.log(`  SMEs: ${tag.subjectMatterExpertCount}`);
  console.log(`  Watchers: ${tag.watcherCount}`);
  console.log(`  Has synonyms: ${tag.hasSynonyms}`);
});
```

### Auto-complete Implementation

```typescript
async function getTagSuggestions(partial: string) {
  if (partial.length < 2) return [];
  
  const results = await client.tags.search({
    query: partial,
    pageSize: 10,
    sort: "postCount",
    order: "desc"
  });
  
  return results.items.map(tag => ({
    value: tag.name,
    label: `${tag.name} (${tag.postCount} posts)`,
    description: tag.description
  }));
}

// Usage in a search input
const suggestions = await getTagSuggestions("java");
```

### Paginate Through All Results

```typescript
async function getAllTags(searchParams: SearchTagsParams) {
  const allTags: Tag[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const result = await client.tags.search({
      ...searchParams,
      page,
      pageSize: 100
    });
    
    allTags.push(...result.items);
    hasMore = result.hasNext;
    page++;
  }

  return allTags;
}

const allPopularTags = await getAllTags({
  minPostCount: 1,
  sort: "postCount",
  order: "desc"
});
```

## Error Handling

```typescript
try {
  const tags = await client.tags.search({
    query: "react",
    pageSize: 50
  });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Invalid search parameters:', error.details);
  } else if (error instanceof AuthenticationError) {
    console.error('Authentication required');
  } else if (error instanceof RateLimitError) {
    console.error('Search rate limit exceeded');
  } else {
    console.error('Search failed:', error.message);
  }
}
```

## Validation Rules

- **query**: Must be at least 1 character if provided
- **page**: Must be ≥ 1
- **pageSize**: Must be one of: 15, 30, 50, or 100
- **minPostCount**: Must be ≥ 0
- **sort**: Must be a valid sort field
- **order**: Must be "asc" or "desc"

## Performance Tips

- Use larger `pageSize` values to reduce API calls when retrieving many tags
- Cache popular tag results to improve user experience
- Implement debouncing for real-time search to avoid excessive API calls
- Use the `signal` option to cancel outdated search requests

## Use Cases

- **Tag Autocomplete**: Provide real-time suggestions as users type
- **Tag Analytics**: Analyze tag popularity and usage patterns
- **Expert Discovery**: Find tags with Subject Matter Experts
- **Content Organization**: Understand tag hierarchy and relationships
- **Team Insights**: Discover team-specific tagging patterns

## Related Methods

- [tags.get()](/sdk/tags/get) - Retrieve a specific tag
- [tags.getExperts()](/sdk/tags/get-experts) - Get Subject Matter Experts for a tag
- [tags.getWatchers()](/sdk/tags/get-watchers) - Get users watching a tag
- [questions.search()](/sdk/questions/search) - Search questions by tags