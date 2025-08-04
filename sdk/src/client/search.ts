import { BaseClient } from './shared';
import { SearchMainApi, SearchTeamsApi } from '../generated/index.js';
import { 
  PaginatedSearchResults,
  SearchSortParameter
} from '../generated/index.js';

export interface SearchOptions {
  query?: string;
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: SearchSortParameter;
}

export class SearchClient extends BaseClient {
  private mainApi: SearchMainApi;
  private teamsApi?: SearchTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new SearchMainApi(config);
    if (teamId) {
      this.teamsApi = new SearchTeamsApi(config);
    }
  }

  // Core search method
  async search(options: SearchOptions = {}): Promise<PaginatedSearchResults> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamSearchGet(
          this.teamId,
          options.query,
          options.page,
          options.pageSize,
          options.sort
        );
      }
      
      return await this.mainApi.searchGet(
        options.query,
        options.page,
        options.pageSize,
        options.sort
      );
    }, 'search');
  }

  // Convenience method with required query
  async query(query: string, options: Omit<SearchOptions, 'query'> = {}): Promise<PaginatedSearchResults> {
    return this.search({ ...options, query });
  }

  // Sorting convenience methods
  async searchByRelevance(query: string, options: Omit<SearchOptions, 'query' | 'sort'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { 
      ...options, 
      sort: SearchSortParameter.Relevance 
    });
  }

  async searchByDate(query: string, options: Omit<SearchOptions, 'query' | 'sort'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { 
      ...options, 
      sort: SearchSortParameter.Newest 
    });
  }

  async searchByActivity(query: string, options: Omit<SearchOptions, 'query' | 'sort'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { 
      ...options, 
      sort: SearchSortParameter.Active 
    });
  }

  async searchByVotes(query: string, options: Omit<SearchOptions, 'query' | 'sort'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { 
      ...options, 
      sort: SearchSortParameter.Score
    });
  }

  // Pagination helpers
  async searchFirstPage(query: string, options: Omit<SearchOptions, 'query' | 'page'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { ...options, page: 1 });
  }

  async searchNextPage(query: string, currentPage: number, options: Omit<SearchOptions, 'query' | 'page'> = {}): Promise<PaginatedSearchResults> {
    return this.query(query, { ...options, page: currentPage + 1 });
  }

}