import { BaseClient } from './shared';
import { SearchMainApi, SearchTeamsApi } from '../generated/index.js';
import { 
  PaginatedSearchResults,
  SearchSortParameter
} from '../generated/index.js';

/**
 * Options for performing searches with pagination and sorting
 * @typedef {Object} SearchOptions
 * @property {string} [query] - The search query string to match against content
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of search results per page
 * @property {SearchSortParameter} [sort] - Sort parameter ('relevance', 'newest', 'active', 'score')
 */
export interface SearchOptions {
  query?: string;
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: 'relevance' | 'newest' | 'active' | 'score' | SearchSortParameter;
}

/**
 * Client for performing searches across Stack Overflow Internal content
 * 
 * The SearchClient provides comprehensive search functionality across all content types
 * including questions, answers, articles, and other searchable content. It supports
 * various sorting options and pagination to help users find relevant information
 * efficiently. The search functionality uses full-text search with relevance ranking
 * and supports different sorting strategies to surface the most useful results.
 * 
 * @class SearchClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const searchClient = new SearchClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const searchClient = new SearchClient(config, 'team-123');
 */
export class SearchClient extends BaseClient {
  private mainApi: SearchMainApi;
  private teamsApi?: SearchTeamsApi;

  /**
   * Creates a new SearchClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific search operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new SearchClient(config);
   * 
   * @example
   * // For team-specific searches
   * const teamClient = new SearchClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new SearchMainApi(config);
    if (teamId) {
      this.teamsApi = new SearchTeamsApi(config);
    }
  }

  /**
   * Performs a search across all content types with comprehensive options
   * 
   * This is the core search method that searches across questions, answers, articles,
   * and other content types. Results are returned with pagination and can be sorted
   * by various criteria.
   * 
   * @param {SearchOptions} [options={}] - Options for the search including query, pagination, and sorting
   * @returns {Promise<PaginatedSearchResults>} A promise that resolves to paginated search results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Basic search
   * const results = await searchClient.search({
   *   query: 'authentication javascript'
   * });
   * 
   * @example
   * // Search with pagination and sorting
   * const results = await searchClient.search({
   *   query: 'react hooks',
   *   page: 2,
   *   pageSize: 50,
   *   sort: 'score'
   * });
   * 
   * @example
   * // Search without a query (returns recent content)
   * const recentContent = await searchClient.search({
   *   sort: 'newest',
   *   pageSize: 25
   * });
   * 
   * @example
   * // Process search results
   * const results = await searchClient.search({ query: 'API integration' });
   * console.log(`Found ${results.totalCount} results`);
   * results.items?.forEach(item => {
   *   console.log(`Result: ${item.title} (Type: ${item.type})`);
   * });
   */
  async search(options: SearchOptions = {}): Promise<PaginatedSearchResults> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamSearchGet(
          this.teamId,
          options.query,
          options.page,
          options.pageSize,
          options.sort as SearchSortParameter
        );
      }
      
      return await this.mainApi.searchGet(
        options.query,
        options.page,
        options.pageSize,
        options.sort as SearchSortParameter
      );
    }, 'search');
  }

  /**
   * Performs a search with a required query string
   * 
   * This convenience method ensures a query is provided and is useful when you
   * always want to perform a text-based search rather than browsing content.
   * 
   * @param {string} query - The search query string (required)
   * @param {Omit<SearchOptions, 'query'>} [options={}] - Additional search options excluding query
   * @returns {Promise<PaginatedSearchResults>} A promise that resolves to paginated search results
   * 
   * @example
   * const results = await searchClient.query('docker deployment', {
   *   pageSize: 20,
   *   sort: 'relevance'
   * });
   * 
   * @example
   * // Search for specific technology
   * const reactResults = await searchClient.query('React TypeScript best practices');
   */
  async query(query: string, options: Omit<SearchOptions, 'query'> = {}): Promise<PaginatedSearchResults> {
    return this.search({ ...options, query });
  }

  /**
   * Searches content ordered by relevance (default search ranking)
   * 
   * Relevance-based search uses algorithmic ranking to surface the most relevant
   * content based on the query terms, content quality, and user engagement.
   * 
   * @param {string} query - The search query string
   * @param {Omit<SearchOptions, 'query' | 'sort'>} [options={}] - Additional search options excluding query and sort
   * @returns {Promise<PaginatedSearchResults>} A promise that resolves to relevance-sorted search results
   * 
   * @example
   * const mostRelevant = await searchClient.searchByRelevance('microservices architecture', {
   *   pageSize: 15
   * });
   * 
   * @example
   * // Find the most relevant content for a complex query
   * const results = await searchClient.searchByRelevance('OAuth 2.0 implementation security best practices');
   */
  async searchByRelevance(query: string, options: Omit<SearchOptions, 'query' | 'sort'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { 
      ...options, 
      sort: SearchSortParameter.Relevance 
    });
  }

  /**
   * Searches content ordered by creation date (newest first)
   * 
   * Date-based search prioritizes recently created content, which is useful for
   * finding the latest discussions, questions, or articles on a topic.
   * 
   * @param {string} query - The search query string
   * @param {Omit<SearchOptions, 'query' | 'sort'>} [options={}] - Additional search options excluding query and sort
   * @returns {Promise<PaginatedSearchResults>} A promise that resolves to date-sorted search results (newest first)
   * 
   * @example
   * const latestDiscussions = await searchClient.searchByDate('kubernetes deployment');
   * 
   * @example
   * // Find recent questions about a new technology
   * const recentNext = await searchClient.searchByDate('Next.js 14 features', {
   *   pageSize: 10
   * });
   */
  async searchByDate(query: string, options: Omit<SearchOptions, 'query' | 'sort'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { 
      ...options, 
      sort: SearchSortParameter.Newest 
    });
  }

  /**
   * Searches content ordered by recent activity (last modified/updated)
   * 
   * Activity-based search prioritizes content that has been recently updated,
   * edited, or had new answers/comments, helping find ongoing discussions.
   * 
   * @param {string} query - The search query string
   * @param {Omit<SearchOptions, 'query' | 'sort'>} [options={}] - Additional search options excluding query and sort
   * @returns {Promise<PaginatedSearchResults>} A promise that resolves to activity-sorted search results
   * 
   * @example
   * const activeDiscussions = await searchClient.searchByActivity('API rate limiting');
   * 
   * @example
   * // Find questions with recent activity
   * const hotTopics = await searchClient.searchByActivity('performance optimization', {
   *   pageSize: 25
   * });
   */
  async searchByActivity(query: string, options: Omit<SearchOptions, 'query' | 'sort'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { 
      ...options, 
      sort: SearchSortParameter.Active 
    });
  }

  /**
   * Searches content ordered by score/votes (highest scored first)
   * 
   * Score-based search prioritizes highly voted content, which typically represents
   * the most valuable or trusted information on a topic.
   * 
   * @param {string} query - The search query string
   * @param {Omit<SearchOptions, 'query' | 'sort'>} [options={}] - Additional search options excluding query and sort
   * @returns {Promise<PaginatedSearchResults>} A promise that resolves to score-sorted search results (highest first)
   * 
   * @example
   * const topRatedContent = await searchClient.searchByVotes('database optimization');
   * 
   * @example
   * // Find the most trusted answers on a topic
   * const bestPractices = await searchClient.searchByVotes('security vulnerability prevention', {
   *   pageSize: 20
   * });
   */
  async searchByVotes(query: string, options: Omit<SearchOptions, 'query' | 'sort'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { 
      ...options, 
      sort: SearchSortParameter.Score
    });
  }

  /**
   * Performs a search starting from the first page
   * 
   * This convenience method explicitly starts from page 1, useful for resetting
   * pagination or ensuring you start from the beginning of results.
   * 
   * @param {string} query - The search query string
   * @param {Omit<SearchOptions, 'query' | 'page'>} [options={}] - Additional search options excluding query and page
   * @returns {Promise<PaginatedSearchResults>} A promise that resolves to the first page of search results
   * 
   * @example
   * const firstPage = await searchClient.searchFirstPage('error handling patterns');
   * 
   * @example
   * // Start a new search from the beginning
   * const results = await searchClient.searchFirstPage('testing strategies', {
   *   sort: 'score',
   *   pageSize: 50
   * });
   */
  async searchFirstPage(query: string, options: Omit<SearchOptions, 'query' | 'page'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { ...options, page: 1 });
  }

  /**
   * Retrieves the next page of search results
   * 
   * This convenience method helps with pagination by automatically calculating
   * the next page number based on the current page.
   * 
   * @param {string} query - The search query string (should match the original search)
   * @param {number} currentPage - The current page number (will search currentPage + 1)
   * @param {Omit<SearchOptions, 'query' | 'page'>} [options={}] - Additional search options excluding query and page
   * @returns {Promise<PaginatedSearchResults>} A promise that resolves to the next page of search results
   * 
   * @example
   * // Navigate through search results
   * let currentPage = 1;
   * let results = await searchClient.searchFirstPage('machine learning algorithms');
   * 
   * // Get next page
   * if (currentPage < results.totalPages!) {
   *   const nextResults = await searchClient.searchNextPage('machine learning algorithms', currentPage);
   *   currentPage++;
   * }
   * 
   * @example
   * // Pagination loop example
   * const query = 'CI/CD pipeline best practices';
   * let page = 1;
   * let allResults = [];
   * 
   * do {
   *   const results = page === 1 
   *     ? await searchClient.searchFirstPage(query)
   *     : await searchClient.searchNextPage(query, page - 1);
   *   
   *   allResults.push(...(results.items || []));
   *   page++;
   *   
   *   if (page > results.totalPages!) break;
   * } while (allResults.length < 100); // Limit total results
   */
  async searchNextPage(query: string, currentPage: number, options: Omit<SearchOptions, 'query' | 'page'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { ...options, page: currentPage + 1 });
  }
}