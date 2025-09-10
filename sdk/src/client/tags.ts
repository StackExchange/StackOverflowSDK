import { BaseClient } from './shared';
import { TagsMainApi, TagsTeamsApi } from '../generated/index.js';
import { 
  PaginatedTags,
  TagResponseModel,
  SubjectMatterExpertRequestModel,
  SubjectMatterExpertResponseModel,
  TagWatchersResponseModel,
  TagsSortParameter,
  SortOrder
} from '../generated/index.js';

/**
 * Options for retrieving tags with filtering, pagination and sorting
 * @typedef {Object} GetTagsOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of tags per page
 * @property {TagsSortParameter} [sort] - Sort parameter ('name', 'postCount', 'creationDate')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 * @property {string} [partialName] - Filter by partial tag name match (search query)
 * @property {boolean} [hasSmes] - Filter by whether tags have Subject Matter Experts assigned
 * @property {boolean} [hasSynonyms] - Filter by whether tags have synonyms defined
 */
export interface GetTagsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: 'name' | 'postCount' | 'creationDate' | TagsSortParameter;
  order?: 'asc' | 'desc' | SortOrder;
  partialName?: string;
  hasSmes?: boolean;
  hasSynonyms?: boolean;
}

/**
 * Options for setting Subject Matter Experts for a tag
 * @typedef {Object} SetSubjectMatterExpertsOptions
 * @property {number[]} [userIds] - Array of user IDs to designate as Subject Matter Experts
 * @property {number[]} [userGroupIds] - Array of user group IDs whose members become Subject Matter Experts
 */
export interface SetSubjectMatterExpertsOptions {
  userIds?: number[];
  userGroupIds?: number[];
}

/**
 * Client for managing tags and Subject Matter Experts in Stack Overflow for Teams
 * 
 * The TagClient provides comprehensive methods for tag discovery, management, and
 * Subject Matter Expert (SME) administration. Tags are used to categorize and organize
 * content, while SMEs are designated experts who can provide authoritative answers
 * and guidance on specific topics. The client supports advanced filtering, searching,
 * and bulk operations for efficient tag and expertise management.
 * 
 * @class TagClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const tagClient = new TagClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const tagClient = new TagClient(config, 'team-123');
 */
export class TagClient extends BaseClient {
  private mainApi: TagsMainApi;
  private teamsApi?: TagsTeamsApi;

  /**
   * Creates a new TagClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new TagClient(config);
   * 
   * @example
   * // For team-specific operations
   * const teamClient = new TagClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new TagsMainApi(config);
    if (teamId) {
      this.teamsApi = new TagsTeamsApi(config);
    }
  }

  /**
   * Retrieves all tags with comprehensive filtering, pagination and sorting options
   * 
   * @param {GetTagsOptions} [options={}] - Options for filtering, pagination and sorting
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated tag results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get first page of tags with default settings
   * const tags = await tagClient.getAll();
   * 
   * @example
   * // Get tags with custom pagination and sorting
   * const tags = await tagClient.getAll({
   *   page: 2,
   *   pageSize: 50,
   *   sort: 'postCount',
   *   order: 'desc'
   * });
   * 
   * @example
   * // Filter tags by various criteria
   * const filteredTags = await tagClient.getAll({
   *   partialName: 'java',
   *   hasSmes: true,
   *   hasSynonyms: false
   * });
   * 
   * @example
   * // Access the results
   * console.log(`Total tags: ${tags.totalCount}`);
   * tags.items?.forEach(tag => {
   *   console.log(`${tag.name}: ${tag.postCount} posts, ${tag.watcherCount} watchers`);
   * });
   */
  async getAll(options: GetTagsOptions = {}): Promise<PaginatedTags> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort as TagsSortParameter,
          options.order as SortOrder,
          options.partialName,
          options.hasSmes,
          options.hasSynonyms
        );
      }
      
      return await this.mainApi.tagsGet(
        options.page,
        options.pageSize,
        options.sort as TagsSortParameter,
        options.order as SortOrder,
        options.partialName,
        options.hasSmes,
        options.hasSynonyms
      );
    }, 'getAll');
  }

  /**
   * Retrieves a specific tag by its ID
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @returns {Promise<TagResponseModel>} A promise that resolves to the complete tag details
   * 
   * @throws {Error} When the tag is not found or the API request fails
   * 
   * @example
   * const tag = await tagClient.get(123);
   * console.log(`Name: ${tag.name}`);
   * console.log(`Description: ${tag.description}`);
   * console.log(`Post count: ${tag.postCount}`);
   * console.log(`SME count: ${tag.subjectMatterExpertCount}`);
   * console.log(`Watchers: ${tag.watcherCount}`);
   * console.log(`Has synonyms: ${tag.hasSynonyms}`);
   * console.log(`URL: ${tag.webUrl}`);
   */
  async get(tagId: number): Promise<TagResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdGet(tagId, this.teamId);
      }
      
      return await this.mainApi.tagsTagIdGet(tagId);
    }, 'get');
  }

  /**
   * Retrieves Subject Matter Experts assigned to a specific tag
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @returns {Promise<SubjectMatterExpertResponseModel>} A promise that resolves to SME details including users and user groups
   * 
   * @throws {Error} When the tag is not found or the API request fails
   * 
   * @example
   * const smes = await tagClient.getSubjectMatterExperts(123);
   * console.log(`Individual SME users: ${smes.users?.length || 0}`);
   * console.log(`SME user groups: ${smes.userGroups?.length || 0}`);
   * 
   * smes.users?.forEach(user => {
   *   console.log(`SME User: ${user.displayName}`);
   * });
   * 
   * smes.userGroups?.forEach(group => {
   *   console.log(`SME Group: ${group.name}`);
   * });
   */
  async getSubjectMatterExperts(tagId: number): Promise<SubjectMatterExpertResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsGet(tagId, this.teamId);
      }
      
      return await this.mainApi.tagsTagIdSubjectMatterExpertsGet(tagId);
    }, 'getSubjectMatterExperts');
  }

  /**
   * Sets the complete list of Subject Matter Experts for a tag (replaces existing SMEs)
   * 
   * This method completely replaces the existing SME configuration with the provided
   * users and user groups. To add SMEs without replacing existing ones, use the
   * add methods instead.
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {SetSubjectMatterExpertsOptions} options - Configuration containing user IDs and user group IDs
   * @returns {Promise<SubjectMatterExpertResponseModel>} A promise that resolves to the updated SME configuration
   * 
   * @throws {Error} When the tag is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedSmes = await tagClient.setSubjectMatterExperts(123, {
   *   userIds: [456, 789],
   *   userGroupIds: [101, 102]
   * });
   * console.log(`Set ${updatedSmes.users?.length} users and ${updatedSmes.userGroups?.length} groups as SMEs`);
   * 
   * @example
   * // Replace all SMEs with just individual users
   * await tagClient.setSubjectMatterExperts(123, {
   *   userIds: [456, 789, 999],
   *   userGroupIds: [] // Remove all group SMEs
   * });
   */
  async setSubjectMatterExperts(tagId: number, options: SetSubjectMatterExpertsOptions): Promise<SubjectMatterExpertResponseModel> {
    return this.handleApiCall(async () => {
      const request: SubjectMatterExpertRequestModel = {
        userIds: options.userIds,
        userGroupIds: options.userGroupIds
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsPut(tagId, this.teamId, request);
      }
      
      return await this.mainApi.tagsTagIdSubjectMatterExpertsPut(tagId, request);
    }, 'setSubjectMatterExperts');
  }

  /**
   * Adds multiple users as Subject Matter Experts for a tag
   * 
   * This method adds the specified users to the existing SME list without removing
   * current SMEs. Users who are already SMEs will not be duplicated.
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {number[]} userIds - Array of user IDs to add as Subject Matter Experts
   * @returns {Promise<SubjectMatterExpertResponseModel>} A promise that resolves to the updated SME configuration
   * 
   * @throws {Error} When the tag is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedSmes = await tagClient.addSubjectMatterExpertUsers(123, [456, 789, 999]);
   * console.log(`Added users as SMEs. Total SME users: ${updatedSmes.users?.length}`);
   * 
   * @example
   * // Add domain experts for a technology tag
   * await tagClient.addSubjectMatterExpertUsers(reactTagId, [
   *   seniorFrontendDev1,
   *   seniorFrontendDev2,
   *   techLead
   * ]);
   */
  async addSubjectMatterExpertUsers(tagId: number, userIds: number[]): Promise<SubjectMatterExpertResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(tagId, this.teamId, userIds);
      }
      
      return await this.mainApi.tagsTagIdSubjectMatterExpertsUsersPost(tagId, userIds);
    }, 'addSubjectMatterExpertUsers');
  }

  /**
   * Removes a user from the Subject Matter Experts list for a tag
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {number} userId - The user ID to remove from Subject Matter Experts
   * @returns {Promise<void>} A promise that resolves when the user is successfully removed
   * 
   * @throws {Error} When the tag is not found, user is not an SME, or the API request fails
   * 
   * @example
   * await tagClient.removeSubjectMatterExpertUser(123, 456);
   * console.log('User removed from SMEs successfully');
   * 
   * @example
   * // Remove SME status when someone changes roles
   * await tagClient.removeSubjectMatterExpertUser(pythonTagId, formerPythonExpert);
   */
  async removeSubjectMatterExpertUser(tagId: number, userId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId, userId, this.teamId);
        return;
      }
      
      await this.mainApi.tagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId, userId);
    }, 'removeSubjectMatterExpertUser');
  }

  /**
   * Adds multiple user groups as Subject Matter Experts for a tag
   * 
   * This method adds the specified user groups to the existing SME list. All members
   * of these groups become Subject Matter Experts for the tag.
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {number[]} userGroupIds - Array of user group IDs to add as Subject Matter Expert groups
   * @returns {Promise<SubjectMatterExpertResponseModel>} A promise that resolves to the updated SME configuration
   * 
   * @throws {Error} When the tag is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedSmes = await tagClient.addSubjectMatterExpertUserGroups(123, [101, 102]);
   * console.log(`Added groups as SMEs. Total SME groups: ${updatedSmes.userGroups?.length}`);
   * 
   * @example
   * // Add entire teams as SMEs for their domain tags
   * await tagClient.addSubjectMatterExpertUserGroups(securityTagId, [
   *   securityTeamGroupId,
   *   devOpsTeamGroupId
   * ]);
   */
  async addSubjectMatterExpertUserGroups(tagId: number, userGroupIds: number[]): Promise<SubjectMatterExpertResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(tagId, this.teamId, userGroupIds);
      }
      
      return await this.mainApi.tagsTagIdSubjectMatterExpertsUserGroupsPost(tagId, userGroupIds);
    }, 'addSubjectMatterExpertUserGroups');
  }

  /**
   * Removes a user group from the Subject Matter Experts list for a tag
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {number} userGroupId - The user group ID to remove from Subject Matter Expert groups
   * @returns {Promise<void>} A promise that resolves when the user group is successfully removed
   * 
   * @throws {Error} When the tag is not found, user group is not an SME, or the API request fails
   * 
   * @example
   * await tagClient.removeSubjectMatterExpertUserGroup(123, 101);
   * console.log('User group removed from SMEs successfully');
   */
  async removeSubjectMatterExpertUserGroup(tagId: number, userGroupId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId, userGroupId, this.teamId);
        return;
      }
      
      await this.mainApi.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId, userGroupId);
    }, 'removeSubjectMatterExpertUserGroup');
  }

  /**
   * Retrieves users who are watching a specific tag
   * 
   * Tag watchers receive notifications when new questions or content is created
   * with the watched tag.
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @returns {Promise<TagWatchersResponseModel>} A promise that resolves to the list of users watching the tag
   * 
   * @throws {Error} When the tag is not found or the API request fails
   * 
   * @example
   * const watchers = await tagClient.getTagWatchers(123);
   * console.log(`${watchers.users?.length || 0} users are watching this tag`);
   * 
   * watchers.users?.forEach(user => {
   *   console.log(`Watcher: ${user.displayName}`);
   * });
   */
  async getTagWatchers(tagId: number): Promise<TagWatchersResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdTagWatchersGet(tagId, this.teamId);
      }
      
      return await this.mainApi.tagsTagIdTagWatchersGet(tagId);
    }, 'getTagWatchers');
  }

  /**
   * Searches tags by partial name match
   * 
   * @param {string} partialName - The search query to match against tag names
   * @param {Omit<GetTagsOptions, 'partialName'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated search results
   * 
   * @example
   * const searchResults = await tagClient.search('java');
   * 
   * @example
   * // Search with additional filters
   * const results = await tagClient.search('script', {
   *   hasSmes: true,
   *   sort: 'postCount',
   *   order: 'desc'
   * });
   */
  async search(partialName: string, options: Omit<GetTagsOptions, 'partialName'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, partialName });
  }

  /**
   * Retrieves tags that have Subject Matter Experts assigned
   * 
   * @param {Omit<GetTagsOptions, 'hasSmes'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated tags with SMEs
   * 
   * @example
   * const tagsWithExperts = await tagClient.getWithSmes({
   *   sort: 'postCount',
   *   order: 'desc'
   * });
   */
  async getWithSmes(options: Omit<GetTagsOptions, 'hasSmes'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, hasSmes: true });
  }

  /**
   * Retrieves tags that do not have Subject Matter Experts assigned
   * 
   * @param {Omit<GetTagsOptions, 'hasSmes'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated tags without SMEs
   * 
   * @example
   * const tagsNeedingExperts = await tagClient.getWithoutSmes();
   */
  async getWithoutSmes(options: Omit<GetTagsOptions, 'hasSmes'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, hasSmes: false });
  }

  /**
   * Retrieves tags that have synonyms defined
   * 
   * @param {Omit<GetTagsOptions, 'hasSynonyms'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated tags with synonyms
   * 
   * @example
   * const tagsWithSynonyms = await tagClient.getWithSynonyms();
   */
  async getWithSynonyms(options: Omit<GetTagsOptions, 'hasSynonyms'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, hasSynonyms: true });
  }

  /**
   * Retrieves tags that do not have synonyms defined
   * 
   * @param {Omit<GetTagsOptions, 'hasSynonyms'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated tags without synonyms
   * 
   * @example
   * const tagsWithoutSynonyms = await tagClient.getWithoutSynonyms();
   */
  async getWithoutSynonyms(options: Omit<GetTagsOptions, 'hasSynonyms'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, hasSynonyms: false });
  }

  /**
   * Retrieves tags sorted alphabetically by name
   * 
   * @param {Omit<GetTagsOptions, 'sort' | 'order'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated tags sorted by name (A-Z)
   * 
   * @example
   * const tagsByName = await tagClient.getAllByName({ pageSize: 50 });
   */
  async getAllByName(options: Omit<GetTagsOptions, 'sort' | 'order'> = {}): Promise<PaginatedTags> {
    return this.getAll({ 
      ...options, 
      sort: TagsSortParameter.Name,
      order: SortOrder.Asc 
    });
  }

  /**
   * Retrieves tags sorted by creation date (newest first)
   * 
   * @param {Omit<GetTagsOptions, 'sort' | 'order'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated tags sorted by creation date (newest first)
   * 
   * @example
   * const newestTags = await tagClient.getAllByCreationDate({ pageSize: 25 });
   */
  async getAllByCreationDate(options: Omit<GetTagsOptions, 'sort' | 'order'> = {}): Promise<PaginatedTags> {
    return this.getAll({ 
      ...options, 
      sort: TagsSortParameter.CreationDate,
      order: SortOrder.Desc 
    });
  }

  /**
   * Retrieves tags sorted by post count (most used first)
   * 
   * @param {Omit<GetTagsOptions, 'sort' | 'order'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated tags sorted by post count (highest first)
   * 
   * @example
   * const popularTags = await tagClient.getAllByPostCount({ pageSize: 20 });
   */
  async getAllByPostCount(options: Omit<GetTagsOptions, 'sort' | 'order'> = {}): Promise<PaginatedTags> {
    return this.getAll({ 
      ...options, 
      sort: TagsSortParameter.PostCount,
      order: SortOrder.Desc 
    });
  }

  /**
   * Adds a single user as a Subject Matter Expert for a tag (convenience method)
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {number} userId - The user ID to add as a Subject Matter Expert
   * @returns {Promise<SubjectMatterExpertResponseModel>} A promise that resolves to the updated SME configuration
   * 
   * @example
   * await tagClient.addSubjectMatterExpertUser(123, 456);
   */
  async addSubjectMatterExpertUser(tagId: number, userId: number): Promise<SubjectMatterExpertResponseModel> {
    return this.addSubjectMatterExpertUsers(tagId, [userId]);
  }

  /**
   * Adds a single user group as Subject Matter Experts for a tag (convenience method)
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {number} userGroupId - The user group ID to add as Subject Matter Experts
   * @returns {Promise<SubjectMatterExpertResponseModel>} A promise that resolves to the updated SME configuration
   * 
   * @example
   * await tagClient.addSubjectMatterExpertUserGroup(123, 789);
   */
  async addSubjectMatterExpertUserGroup(tagId: number, userGroupId: number): Promise<SubjectMatterExpertResponseModel> {
    return this.addSubjectMatterExpertUserGroups(tagId, [userGroupId]);
  }

  /**
   * Replaces all Subject Matter Experts for a tag with the specified users and groups
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {number[]} [userIds=[]] - Array of user IDs to set as SMEs
   * @param {number[]} [userGroupIds=[]] - Array of user group IDs to set as SME groups
   * @returns {Promise<SubjectMatterExpertResponseModel>} A promise that resolves to the updated SME configuration
   * 
   * @example
   * const result = await tagClient.replaceAllSubjectMatterExperts(123, [456, 789], [101]);
   */
  async replaceAllSubjectMatterExperts(tagId: number, userIds: number[] = [], userGroupIds: number[] = []): Promise<SubjectMatterExpertResponseModel> {
    return this.setSubjectMatterExperts(tagId, { userIds, userGroupIds });
  }

  /**
   * Removes all Subject Matter Experts from a tag
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @returns {Promise<SubjectMatterExpertResponseModel>} A promise that resolves to the cleared SME configuration
   * 
   * @example
   * await tagClient.clearAllSubjectMatterExperts(123);
   * console.log('All SMEs cleared from tag');
   */
  async clearAllSubjectMatterExperts(tagId: number): Promise<SubjectMatterExpertResponseModel> {
    return this.setSubjectMatterExperts(tagId, { userIds: [], userGroupIds: [] });
  }

  /**
   * Adds both individual users and user groups as Subject Matter Experts in a single operation
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {number[]} [userIds=[]] - Array of user IDs to add as SMEs
   * @param {number[]} [userGroupIds=[]] - Array of user group IDs to add as SME groups
   * @returns {Promise<{usersResult?: SubjectMatterExpertResponseModel, groupsResult?: SubjectMatterExpertResponseModel}>} A promise that resolves to the results of both operations
   * 
   * @example
   * const results = await tagClient.addMixedSubjectMatterExperts(123, [456, 789], [101, 102]);
   * if (results.usersResult) {
   *   console.log(`Added ${results.usersResult.users?.length} individual SMEs`);
   * }
   * if (results.groupsResult) {
   *   console.log(`Added ${results.groupsResult.userGroups?.length} SME groups`);
   * }
   */
  async addMixedSubjectMatterExperts(tagId: number, userIds: number[] = [], userGroupIds: number[] = []): Promise<{
    usersResult?: SubjectMatterExpertResponseModel,
    groupsResult?: SubjectMatterExpertResponseModel
  }> {
    const results: {
      usersResult?: SubjectMatterExpertResponseModel,
      groupsResult?: SubjectMatterExpertResponseModel
    } = {};

    if (userIds.length > 0) {
      results.usersResult = await this.addSubjectMatterExpertUsers(tagId, userIds);
    }

    if (userGroupIds.length > 0) {
      results.groupsResult = await this.addSubjectMatterExpertUserGroups(tagId, userGroupIds);
    }

    return results;
  }

  /**
   * Finds tags by name with optional result limiting
   * 
   * @param {string} nameQuery - The name query to search for
   * @param {number} [limit] - Optional limit on the number of results (defaults to 30)
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated search results sorted by name
   * 
   * @example
   * const javaResults = await tagClient.findTagsByName('java', 10);
   */
  async findTagsByName(nameQuery: string, limit?: number): Promise<PaginatedTags> {
    return this.search(nameQuery, { 
      pageSize: limit as any || 30,
      sort: TagsSortParameter.Name,
      order: SortOrder.Asc 
    });
  }

  /**
   * Retrieves the most recently created tags
   * 
   * @param {number} [limit] - Optional limit on the number of results (defaults to 30)
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated recent tags
   * 
   * @example
   * const recentTags = await tagClient.getRecentTags(15);
   */
  async getRecentTags(limit?: number): Promise<PaginatedTags> {
    return this.getAllByCreationDate({ 
      pageSize: limit as any || 30 
    });
  }

  /**
   * Retrieves the most frequently used tags
   * 
   * @param {number} [limit] - Optional limit on the number of results (defaults to 50)
   * @returns {Promise<PaginatedTags>} A promise that resolves to paginated popular tags sorted by post count
   * 
   * @example
   * const popularTags = await tagClient.getMostUsedTags(20);
   */
  async getMostUsedTags(limit?: number): Promise<PaginatedTags> {
    return this.getAllByPostCount({ 
      pageSize: limit as any || 50 
    });
  }
}