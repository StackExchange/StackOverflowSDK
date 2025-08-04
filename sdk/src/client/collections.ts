import { BaseClient } from './shared';
import { CollectionsMainApi, CollectionsTeamsApi } from '../generated/index.js';
import { 
  CollectionRequestModel,
  EditCollectionRequestModel,
  CollectionsResponseModel,
  PaginatedCollections,
  CollectionsSortParameter,
  CollectionsPermissionsFilter,
  SortOrder
} from '../generated/index.js';

export interface CreateCollectionOptions {
  title: string;
  description?: string;
  isPrivate?: boolean;
  // Add other collection creation options as needed
}

export interface UpdateCollectionOptions {
  title?: string;
  description?: string;
  isPrivate?: boolean;
  // Add other update options
}

export interface GetCollectionsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: CollectionsSortParameter;
  order?: SortOrder;
  authorIds?: Array<number>;
  partialTitle?: string;
  permissions?: CollectionsPermissionsFilter;
  from?: Date;
  to?: Date;
}

export class CollectionClient extends BaseClient {
  private mainApi: CollectionsMainApi;
  private teamsApi?: CollectionsTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new CollectionsMainApi(config);
    if (teamId) {
      this.teamsApi = new CollectionsTeamsApi(config);
    }
  }

  // Core CRUD operations
  async getAll(options: GetCollectionsOptions = {}): Promise<PaginatedCollections> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamCollectionsGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order,
          options.authorIds,
          options.partialTitle,
          options.permissions,
          options.from,
          options.to
        );
      }
      
      return await this.mainApi.collectionsGet(
        options.page,
        options.pageSize,
        options.sort,
        options.order,
        options.authorIds,
        options.partialTitle,
        options.permissions,
        options.from,
        options.to
      );
    }, 'getAll');
  }

  async get(collectionId: number): Promise<CollectionsResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamCollectionsCollectionIdGet(collectionId, this.teamId);
      }
      
      return await this.mainApi.collectionsCollectionIdGet(collectionId);
    }, 'get');
  }

  async create(options: CreateCollectionOptions): Promise<CollectionsResponseModel> {
    return this.handleApiCall(async () => {
      const request: CollectionRequestModel = {
        title: options.title,
        description: options.description,
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamCollectionsPost(this.teamId, request);
      }
      
      return await this.mainApi.collectionsPost(request);
    }, 'create');
  }

  async update(collectionId: number, options: UpdateCollectionOptions): Promise<CollectionsResponseModel> {
    return this.handleApiCall(async () => {
      const request: EditCollectionRequestModel = {
        title: options.title,
        description: options.description,
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamCollectionsCollectionIdPut(collectionId, this.teamId, request);
      }
      
      return await this.mainApi.collectionsCollectionIdPut(collectionId, request);
    }, 'update');
  }

  async delete(collectionId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamCollectionsCollectionIdDelete(collectionId, this.teamId);
        return;
      }
      
      await this.mainApi.collectionsCollectionIdDelete(collectionId);
    }, 'delete');
  }

  // Search and filtering methods
  async search(query: string, options: Omit<GetCollectionsOptions, 'partialTitle'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ ...options, partialTitle: query });
  }

  async getByAuthor(authorId: number, options: Omit<GetCollectionsOptions, 'authorIds'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ ...options, authorIds: [authorId] });
  }

  async getByAuthors(authorIds: number[], options: Omit<GetCollectionsOptions, 'authorIds'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ ...options, authorIds });
  }

  async getByDateRange(from: Date, to: Date, options: Omit<GetCollectionsOptions, 'from' | 'to'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ ...options, from, to });
  }

  // Permission-based filtering
  async getOwned(options: Omit<GetCollectionsOptions, 'permissions'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ 
      ...options, 
      permissions: CollectionsPermissionsFilter.Owned 
    });
  }

  async getEditable(options: Omit<GetCollectionsOptions, 'permissions'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ 
      ...options, 
      permissions: CollectionsPermissionsFilter.Editable 
    });
  }

  // Sorting convenience methods
  async getRecent(options: GetCollectionsOptions = {}): Promise<PaginatedCollections> {
    return this.getAll({ 
      ...options, 
      sort: CollectionsSortParameter.Creation,
      order: SortOrder.Desc 
    });
  }

  async getRecentlyModified(options: GetCollectionsOptions = {}): Promise<PaginatedCollections> {
    return this.getAll({ 
      ...options, 
      sort: CollectionsSortParameter.LastEdit,
      order: SortOrder.Desc 
    });
  }

  async isDeleted(collectionId: number): Promise<boolean | undefined> {
    const collection = await this.get(collectionId);
    return collection.isDeleted;
  }


  // Helper methods for checking ownership and permissions
  async isOwnedBy(collectionId: number, userId: number): Promise<boolean> {
    const collection = await this.get(collectionId);
    return collection.owner?.id === userId;
  }

  async hasEditor(collectionId: number, userId: number): Promise<boolean> {
    const collection = await this.get(collectionId);
    return collection.editorUsers?.some(user => user.id === userId) ?? false;
  }

  async hasEditorGroup(collectionId: number, groupId: number): Promise<boolean> {
    const collection = await this.get(collectionId);
    return collection.editorUserGroups?.some(group => group.id === groupId) ?? false;
  }
}