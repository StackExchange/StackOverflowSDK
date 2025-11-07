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

/**
 * Options for creating a new collection
 * @typedef {Object} CreateCollectionOptions
 * @property {string} title - A brief title to distinguish the collection and its contents
 * @property {string} [description] - A detailed description of what the collection contains (supports Markdown)
 * @property {boolean} [isPrivate] - Whether the collection should be private (Note: This may not be implemented in the current API)
 * @property {number[]} [editorUserIds] - The IDs of users who can modify this collection
 * @property {number[]} [editorUserGroupIds] - The IDs of user groups whose members can modify this collection
 * @property {number[]} [contentIds] - The IDs of questions and/or articles that this collection contains, in order
 */
export interface CreateCollectionOptions {
  title: string;
  description?: string;
  isPrivate?: boolean;
  editorUserIds?: number[];
  editorUserGroupIds?: number[];
  contentIds?: number[];
}

/**
 * Options for updating an existing collection
 * @typedef {Object} UpdateCollectionOptions
 * @property {string} [title] - The updated title for the collection
 * @property {string} [description] - The updated description (supports Markdown)
 * @property {boolean} [isPrivate] - Updated privacy setting
 * @property {number} [ownerId] - The ID of the user who should own the collection
 * @property {number[]} [editorUserIds] - Updated list of user IDs who can modify this collection
 * @property {number[]} [editorUserGroupIds] - Updated list of user group IDs whose members can modify this collection
 * @property {number[]} [contentIds] - Updated list of content IDs in the desired order
 */
export interface UpdateCollectionOptions {
  title?: string;
  description?: string;
  isPrivate?: boolean;
  ownerId?: number;
  editorUserIds?: number[];
  editorUserGroupIds?: number[];
  contentIds?: number[];
}

/**
 * Options for retrieving collections with filtering, pagination and sorting
 * @typedef {Object} GetCollectionsOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of collections per page
 * @property {CollectionsSortParameter} [sort] - Sort parameter ('creation', 'lastEdit')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 * @property {number[]} [authorIds] - Filter by specific author IDs
 * @property {string} [partialTitle] - Filter by partial title match (search query)
 * @property {CollectionsPermissionsFilter} [permissions] - Filter by permissions ('all', 'owned', 'editable')
 * @property {Date} [from] - Filter collections created after this date
 * @property {Date} [to] - Filter collections created before this date
 */
export interface GetCollectionsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: 'creation' | 'lastEdit' | CollectionsSortParameter;
  order?: 'asc' | 'desc' | SortOrder;
  authorIds?: Array<number>;
  partialTitle?: string;
  permissions?: 'all' | 'owned' | 'editable' | CollectionsPermissionsFilter;
  from?: Date;
  to?: Date;
}

/**
 * Client for managing collections in Stack Overflow Internal
 * 
 * The CollectionClient provides comprehensive methods for creating, reading, updating,
 * and deleting collections of questions and articles. Collections help organize related
 * content and can have granular permission controls for viewing and editing.
 * Collections contain ordered lists of questions and/or articles and support collaborative
 * editing through user and user group permissions.
 * 
 * @class CollectionClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const collectionClient = new CollectionClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const collectionClient = new CollectionClient(config, 'team-123');
 */
export class CollectionClient extends BaseClient {
  private mainApi: CollectionsMainApi;
  private teamsApi?: CollectionsTeamsApi;

  /**
   * Creates a new CollectionClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new CollectionClient(config);
   * 
   * @example
   * // For team-specific operations
   * const teamClient = new CollectionClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new CollectionsMainApi(config);
    if (teamId) {
      this.teamsApi = new CollectionsTeamsApi(config);
    }
  }

  /**
   * Retrieves all collections with optional filtering, pagination and sorting
   * 
   * @param {GetCollectionsOptions} [options={}] - Options for filtering, pagination and sorting
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated collection results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get first page of collections with default settings
   * const collections = await collectionClient.getAll();
   * 
   * @example
   * // Get collections with custom pagination and sorting
   * const collections = await collectionClient.getAll({
   *   page: 2,
   *   pageSize: 50,
   *   sort: 'lastEdit',
   *   order: 'desc'
   * });
   * 
   * @example
   * // Filter by permissions and author
   * const myCollections = await collectionClient.getAll({
   *   permissions: 'owned',
   *   authorIds: [123]
   * });
   * 
   * @example
   * // Search collections by title
   * const searchResults = await collectionClient.getAll({
   *   partialTitle: 'javascript tutorials'
   * });
   * 
   * @example
   * // Access the results
   * console.log(`Total collections: ${collections.totalCount}`);
   * collections.items?.forEach(collection => {
   *   console.log(`${collection.title} by ${collection.owner?.displayName}`);
   * });
   */
  async getAll(options: GetCollectionsOptions = {}): Promise<PaginatedCollections> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamCollectionsGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort as CollectionsSortParameter,
          options.order as SortOrder,
          options.authorIds,
          options.partialTitle,
          options.permissions as CollectionsPermissionsFilter,
          options.from,
          options.to
        );
      }
      
      return await this.mainApi.collectionsGet(
        options.page,
        options.pageSize,
        options.sort as CollectionsSortParameter,
        options.order as SortOrder,
        options.authorIds,
        options.partialTitle,
        options.permissions as CollectionsPermissionsFilter,
        options.from,
        options.to
      );
    }, 'getAll');
  }

  /**
   * Retrieves a specific collection by its ID
   * 
   * @param {number} collectionId - The unique identifier of the collection
   * @returns {Promise<CollectionsResponseModel>} A promise that resolves to the complete collection details
   * 
   * @throws {Error} When the collection is not found or the API request fails
   * 
   * @example
   * const collection = await collectionClient.get(123);
   * console.log(`Title: ${collection.title}`);
   * console.log(`Description: ${collection.description}`);
   * console.log(`Owner: ${collection.owner?.displayName}`);
   * console.log(`Content count: ${collection.content?.length}`);
   * console.log(`Editor users: ${collection.editorUsers?.length}`);
   * console.log(`Tags: ${collection.tags?.map(tag => tag.name).join(', ')}`);
   */
  async get(collectionId: number): Promise<CollectionsResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamCollectionsCollectionIdGet(collectionId, this.teamId);
      }
      
      return await this.mainApi.collectionsCollectionIdGet(collectionId);
    }, 'get');
  }

  /**
   * Creates a new collection
   * 
   * @param {CreateCollectionOptions} options - The collection configuration and content
   * @returns {Promise<CollectionsResponseModel>} A promise that resolves to the created collection
   * 
   * @throws {Error} When collection creation fails due to validation errors or API issues
   * 
   * @example
   * const newCollection = await collectionClient.create({
   *   title: 'JavaScript Best Practices',
   *   description: '## Collection Overview\n\nA curated list of JavaScript best practices...',
   *   editorUserIds: [456, 789],
   *   contentIds: [101, 102, 103]
   * });
   * console.log(`Created collection with ID: ${newCollection.id}`);
   * 
   * @example
   * // Create a collection with user group editors
   * const teamCollection = await collectionClient.create({
   *   title: 'Team Onboarding Resources',
   *   description: 'Essential resources for new team members',
   *   editorUserGroupIds: [10, 11],
   *   contentIds: [201, 202, 203, 204]
   * });
   */
  async create(options: CreateCollectionOptions): Promise<CollectionsResponseModel> {
    return this.handleApiCall(async () => {
      const request: CollectionRequestModel = {
        title: options.title,
        description: options.description,
        editorUserIds: options.editorUserIds,
        editorUserGroupIds: options.editorUserGroupIds,
        contentIds: options.contentIds
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamCollectionsPost(this.teamId, request);
      }
      
      return await this.mainApi.collectionsPost(request);
    }, 'create');
  }

  /**
   * Updates an existing collection
   * 
   * @param {number} collectionId - The unique identifier of the collection to update
   * @param {UpdateCollectionOptions} options - The updated collection configuration
   * @returns {Promise<CollectionsResponseModel>} A promise that resolves to the updated collection
   * 
   * @throws {Error} When the collection is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedCollection = await collectionClient.update(123, {
   *   title: 'Updated: JavaScript Best Practices',
   *   description: '## Updated Overview\n\nAn expanded list of JavaScript best practices...',
   *   editorUserIds: [456, 789, 999],
   *   contentIds: [101, 102, 103, 104, 105]
   * });
   * 
   * @example
   * // Transfer ownership of a collection
   * await collectionClient.update(123, {
   *   ownerId: 456
   * });
   * 
   * @example
   * // Reorder content in a collection
   * await collectionClient.update(123, {
   *   contentIds: [103, 101, 105, 102, 104] // New order
   * });
   */
  async update(collectionId: number, options: UpdateCollectionOptions): Promise<CollectionsResponseModel> {
    return this.handleApiCall(async () => {
      const request: EditCollectionRequestModel = {
        ownerId: options.ownerId,
        title: options.title,
        description: options.description,
        editorUserIds: options.editorUserIds,
        editorUserGroupIds: options.editorUserGroupIds,
        contentIds: options.contentIds
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamCollectionsCollectionIdPut(collectionId, this.teamId, request);
      }
      
      return await this.mainApi.collectionsCollectionIdPut(collectionId, request);
    }, 'update');
  }

  /**
   * Deletes a collection
   * 
   * @param {number} collectionId - The unique identifier of the collection to delete
   * @returns {Promise<void>} A promise that resolves when the collection is successfully deleted
   * 
   * @throws {Error} When the collection is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * await collectionClient.delete(123);
   * console.log('Collection deleted successfully');
   */
  async delete(collectionId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamCollectionsCollectionIdDelete(collectionId, this.teamId);
        return;
      }
      
      await this.mainApi.collectionsCollectionIdDelete(collectionId);
    }, 'delete');
  }

  /**
   * Searches collections by partial title match
   * 
   * @param {string} query - The search query to match against collection titles
   * @param {Omit<GetCollectionsOptions, 'partialTitle'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated search results
   * 
   * @example
   * const searchResults = await collectionClient.search('javascript');
   * 
   * @example
   * // Search with additional filters
   * const results = await collectionClient.search('best practices', {
   *   authorIds: [123],
   *   sort: 'lastEdit',
   *   order: 'desc'
   * });
   */
  async search(query: string, options: Omit<GetCollectionsOptions, 'partialTitle'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ ...options, partialTitle: query });
  }

  /**
   * Retrieves all collections by a specific author
   * 
   * @param {number} authorId - The unique identifier of the author
   * @param {Omit<GetCollectionsOptions, 'authorIds'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated collections by the author
   * 
   * @example
   * const authorCollections = await collectionClient.getByAuthor(456, {
   *   sort: 'creation',
   *   order: 'desc'
   * });
   */
  async getByAuthor(authorId: number, options: Omit<GetCollectionsOptions, 'authorIds'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ ...options, authorIds: [authorId] });
  }

  /**
   * Retrieves all collections by multiple authors
   * 
   * @param {number[]} authorIds - Array of author IDs to filter by
   * @param {Omit<GetCollectionsOptions, 'authorIds'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated collections by the authors
   * 
   * @example
   * const teamCollections = await collectionClient.getByAuthors([123, 456, 789]);
   */
  async getByAuthors(authorIds: number[], options: Omit<GetCollectionsOptions, 'authorIds'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ ...options, authorIds });
  }

  /**
   * Retrieves collections created within a specific date range
   * 
   * @param {Date} from - Start date for the range (inclusive)
   * @param {Date} to - End date for the range (inclusive)
   * @param {Omit<GetCollectionsOptions, 'from' | 'to'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated collections in the date range
   * 
   * @example
   * const q1Collections = await collectionClient.getByDateRange(
   *   new Date('2024-01-01'),
   *   new Date('2024-03-31')
   * );
   */
  async getByDateRange(from: Date, to: Date, options: Omit<GetCollectionsOptions, 'from' | 'to'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ ...options, from, to });
  }

  /**
   * Retrieves collections owned by the current user
   * 
   * @param {Omit<GetCollectionsOptions, 'permissions'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated collections owned by the user
   * 
   * @example
   * const myCollections = await collectionClient.getOwned({
   *   sort: 'lastEdit',
   *   order: 'desc'
   * });
   */
  async getOwned(options: Omit<GetCollectionsOptions, 'permissions'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ 
      ...options, 
      permissions: CollectionsPermissionsFilter.Owned 
    });
  }

  /**
   * Retrieves collections that the current user can edit
   * 
   * This includes collections owned by the user as well as collections where the user
   * has been granted editor permissions.
   * 
   * @param {Omit<GetCollectionsOptions, 'permissions'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated editable collections
   * 
   * @example
   * const editableCollections = await collectionClient.getEditable();
   */
  async getEditable(options: Omit<GetCollectionsOptions, 'permissions'> = {}): Promise<PaginatedCollections> {
    return this.getAll({ 
      ...options, 
      permissions: CollectionsPermissionsFilter.Editable 
    });
  }

  /**
   * Retrieves the most recently created collections
   * 
   * @param {GetCollectionsOptions} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated collections sorted by creation date (newest first)
   * 
   * @example
   * const recentCollections = await collectionClient.getRecent({ pageSize: 10 });
   */
  async getRecent(options: GetCollectionsOptions = {}): Promise<PaginatedCollections> {
    return this.getAll({ 
      ...options, 
      sort: CollectionsSortParameter.Creation,
      order: SortOrder.Desc 
    });
  }

  /**
   * Retrieves the most recently modified collections
   * 
   * @param {GetCollectionsOptions} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedCollections>} A promise that resolves to paginated collections sorted by last edit date (newest first)
   * 
   * @example
   * const recentlyModified = await collectionClient.getRecentlyModified({ pageSize: 25 });
   */
  async getRecentlyModified(options: GetCollectionsOptions = {}): Promise<PaginatedCollections> {
    return this.getAll({ 
      ...options, 
      sort: CollectionsSortParameter.LastEdit,
      order: SortOrder.Desc 
    });
  }

  /**
   * Checks if a collection is deleted
   * 
   * @param {number} collectionId - The unique identifier of the collection
   * @returns {Promise<boolean | undefined>} A promise that resolves to the deletion status, or undefined if not available
   * 
   * @throws {Error} When the collection is not found or the API request fails
   * 
   * @example
   * const isDeleted = await collectionClient.isDeleted(123);
   * if (isDeleted) {
   *   console.log('Collection has been deleted');
   * }
   */
  async isDeleted(collectionId: number): Promise<boolean | undefined> {
    const collection = await this.get(collectionId);
    return collection.isDeleted;
  }

  /**
   * Checks if a collection is owned by a specific user
   * 
   * @param {number} collectionId - The unique identifier of the collection
   * @param {number} userId - The unique identifier of the user to check
   * @returns {Promise<boolean>} A promise that resolves to true if the user owns the collection
   * 
   * @throws {Error} When the collection is not found or the API request fails
   * 
   * @example
   * const isOwner = await collectionClient.isOwnedBy(123, 456);
   * if (isOwner) {
   *   console.log('User owns this collection');
   * }
   */
  async isOwnedBy(collectionId: number, userId: number): Promise<boolean> {
    const collection = await this.get(collectionId);
    return collection.owner?.id === userId;
  }

  /**
   * Checks if a specific user has editor permissions for a collection
   * 
   * @param {number} collectionId - The unique identifier of the collection
   * @param {number} userId - The unique identifier of the user to check
   * @returns {Promise<boolean>} A promise that resolves to true if the user has editor permissions
   * 
   * @throws {Error} When the collection is not found or the API request fails
   * 
   * @example
   * const canEdit = await collectionClient.hasEditor(123, 456);
   * if (canEdit) {
   *   console.log('User can edit this collection');
   * }
   */
  async hasEditor(collectionId: number, userId: number): Promise<boolean> {
    const collection = await this.get(collectionId);
    return collection.editorUsers?.some(user => user.id === userId) ?? false;
  }

  /**
   * Checks if a specific user group has editor permissions for a collection
   * 
   * @param {number} collectionId - The unique identifier of the collection
   * @param {number} groupId - The unique identifier of the user group to check
   * @returns {Promise<boolean>} A promise that resolves to true if the user group has editor permissions
   * 
   * @throws {Error} When the collection is not found or the API request fails
   * 
   * @example
   * const groupCanEdit = await collectionClient.hasEditorGroup(123, 789);
   * if (groupCanEdit) {
   *   console.log('User group can edit this collection');
   * }
   */
  async hasEditorGroup(collectionId: number, groupId: number): Promise<boolean> {
    const collection = await this.get(collectionId);
    return collection.editorUserGroups?.some(group => group.id === groupId) ?? false;
  }
}