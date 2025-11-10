import { BaseClient } from './shared';
import { CommunitiesMainApi } from '../generated/index.js';
import { 
  CommunityResponseModel,
  PaginatedCommunities,
  CommunityJoinModel,
  CommunityLeaveModel,
  CommunitySortParameter,
  SortOrder
} from '../generated/index.js';

/**
 * Options for retrieving communities with pagination and sorting
 * @typedef {Object} GetCommunitiesOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of communities per page
 * @property {CommunitySortParameter} [sort] - Sort parameter ('name', 'size')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 */
export interface GetCommunitiesOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: 'name' | 'size' | CommunitySortParameter;
  order?: 'asc' | 'desc' | SortOrder;
}

/**
 * Options for bulk joining users to a community
 * @typedef {Object} JoinCommunityBulkOptions
 * @property {number[]} memberUserIds - Array of user IDs who will join this community
 */
export interface JoinCommunityBulkOptions {
  memberUserIds: number[];
}

/**
 * Options for bulk removing users from a community
 * @typedef {Object} LeaveCommunityBulkOptions
 * @property {number[]} memberUserIds - Array of user IDs who will leave this community
 */
export interface LeaveCommunityBulkOptions {
  memberUserIds: number[];
}

/**
 * Client for managing communities in Stack Overflow Internal
 * 
 * The CommunityClient provides methods for managing community membership and retrieving
 * community information. Communities are organizational units that group users together,
 * often based on teams, departments, or interest areas. The client supports both
 * individual and bulk membership operations, making it easy to manage large groups of users.
 * 
 * Note: The Communities API only operates on the main site level and does not have
 * team-specific variants like other APIs.
 * 
 * @class CommunityClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize the client
 * const communityClient = new CommunityClient(config);
 */
export class CommunityClient extends BaseClient {
  private mainApi: CommunitiesMainApi;

  /**
   * Creates a new CommunityClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new CommunityClient(config);
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>) {
    super();
    this.mainApi = new CommunitiesMainApi(config);
    // Note: Communities API has no Private Team API variant - only Main API
  }

  /**
   * Retrieves all communities with optional pagination and sorting
   * 
   * @param {GetCommunitiesOptions} [options={}] - Options for pagination and sorting
   * @returns {Promise<PaginatedCommunities>} A promise that resolves to paginated community results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get first page of communities with default settings
   * const communities = await communityClient.getAll();
   * 
   * @example
   * // Get communities with custom pagination and sorting
   * const communities = await communityClient.getAll({
   *   page: 2,
   *   pageSize: 50,
   *   sort: 'size',
   *   order: 'desc'
   * });
   * 
   * @example
   * // Access the results
   * console.log(`Total communities: ${communities.totalCount}`);
   * communities.items?.forEach(community => {
   *   console.log(`${community.name}: ${community.memberCount} members`);
   * });
   */
  async getAll(options: GetCommunitiesOptions = {}): Promise<PaginatedCommunities> {
    return this.handleApiCall(async () => {
      return await this.mainApi.communitiesGet(
        options.page,
        options.pageSize,
        options.sort as CommunitySortParameter,
        options.order as SortOrder
      );
    }, 'getAll');
  }

  /**
   * Retrieves a specific community by its ID
   * 
   * @param {number} communityId - The unique identifier of the community
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the complete community details
   * 
   * @throws {Error} When the community is not found or the API request fails
   * 
   * @example
   * const community = await communityClient.get(123);
   * console.log(`Name: ${community.name}`);
   * console.log(`Description: ${community.description}`);
   * console.log(`Member count: ${community.memberCount}`);
   * console.log(`Tags: ${community.tags?.map(tag => tag.name).join(', ')}`);
   * 
   * // List all members
   * community.members?.forEach(member => {
   *   console.log(`Member: ${member.displayName}`);
   * });
   */
  async get(communityId: number): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      return await this.mainApi.communitiesCommunityIdGet(communityId);
    }, 'get');
  }

  /**
   * Joins the current user to a community
   * 
   * This method adds the authenticated user as a member of the specified community.
   * 
   * @param {number} communityId - The unique identifier of the community to join
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @throws {Error} When the community is not found, user lacks permissions, or is already a member
   * 
   * @example
   * const updatedCommunity = await communityClient.join(123);
   * console.log(`Joined community: ${updatedCommunity.name}`);
   * console.log(`New member count: ${updatedCommunity.memberCount}`);
   */
  async join(communityId: number): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      return await this.mainApi.communitiesCommunityIdJoinPost(communityId);
    }, 'join');
  }

  /**
   * Removes the current user from a community
   * 
   * This method removes the authenticated user from the specified community's membership.
   * 
   * @param {number} communityId - The unique identifier of the community to leave
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @throws {Error} When the community is not found, user lacks permissions, or is not a member
   * 
   * @example
   * const updatedCommunity = await communityClient.leave(123);
   * console.log(`Left community: ${updatedCommunity.name}`);
   * console.log(`Remaining member count: ${updatedCommunity.memberCount}`);
   */
  async leave(communityId: number): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      return await this.mainApi.communitiesCommunityIdLeavePost(communityId);
    }, 'leave');
  }

  /**
   * Adds multiple users to a community in a single operation
   * 
   * This bulk operation is more efficient than multiple individual join operations
   * when managing large groups of users.
   * 
   * @param {number} communityId - The unique identifier of the community
   * @param {JoinCommunityBulkOptions} options - Configuration containing user IDs to add
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @throws {Error} When the community is not found, user lacks permissions, or some users are already members
   * 
   * @example
   * const updatedCommunity = await communityClient.joinBulk(123, {
   *   memberUserIds: [456, 789, 101, 112]
   * });
   * console.log(`Added ${options.memberUserIds.length} users to ${updatedCommunity.name}`);
   * console.log(`New member count: ${updatedCommunity.memberCount}`);
   */
  async joinBulk(communityId: number, options: JoinCommunityBulkOptions): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      const request: CommunityJoinModel = {
        memberUserIds: options.memberUserIds
      };
      
      return await this.mainApi.communitiesCommunityIdJoinBulkPost(communityId, request);
    }, 'joinBulk');
  }

  /**
   * Removes multiple users from a community in a single operation
   * 
   * This bulk operation is more efficient than multiple individual leave operations
   * when managing large groups of users.
   * 
   * @param {number} communityId - The unique identifier of the community
   * @param {LeaveCommunityBulkOptions} options - Configuration containing user IDs to remove
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @throws {Error} When the community is not found, user lacks permissions, or some users are not members
   * 
   * @example
   * const updatedCommunity = await communityClient.leaveBulk(123, {
   *   memberUserIds: [456, 789]
   * });
   * console.log(`Removed ${options.memberUserIds.length} users from ${updatedCommunity.name}`);
   * console.log(`Remaining member count: ${updatedCommunity.memberCount}`);
   */
  async leaveBulk(communityId: number, options: LeaveCommunityBulkOptions): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      const request: CommunityLeaveModel = {
        memberUserIds: options.memberUserIds
      };
      
      return await this.mainApi.communitiesCommunityIdLeaveBulkPost(communityId, request);
    }, 'leaveBulk');
  }

  /**
   * Adds multiple users to a community (convenience method)
   * 
   * This is a convenience wrapper around joinBulk with a more intuitive parameter structure.
   * 
   * @param {number} communityId - The unique identifier of the community
   * @param {number[]} userIds - Array of user IDs to add to the community
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @example
   * const updatedCommunity = await communityClient.addUsers(123, [456, 789, 101]);
   * console.log(`Added users to ${updatedCommunity.name}`);
   */
  async addUsers(communityId: number, userIds: number[]): Promise<CommunityResponseModel> {
    return this.joinBulk(communityId, { memberUserIds: userIds });
  }

  /**
   * Removes multiple users from a community (convenience method)
   * 
   * This is a convenience wrapper around leaveBulk with a more intuitive parameter structure.
   * 
   * @param {number} communityId - The unique identifier of the community
   * @param {number[]} userIds - Array of user IDs to remove from the community
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @example
   * const updatedCommunity = await communityClient.removeUsers(123, [456, 789]);
   * console.log(`Removed users from ${updatedCommunity.name}`);
   */
  async removeUsers(communityId: number, userIds: number[]): Promise<CommunityResponseModel> {
    return this.leaveBulk(communityId, { memberUserIds: userIds });
  }

  /**
   * Adds a single user to a community (convenience method)
   * 
   * This is a convenience method for adding a single user, which internally uses the bulk operation.
   * 
   * @param {number} communityId - The unique identifier of the community
   * @param {number} userId - The user ID to add to the community
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @example
   * const updatedCommunity = await communityClient.addUser(123, 456);
   * console.log(`Added user to ${updatedCommunity.name}`);
   */
  async addUser(communityId: number, userId: number): Promise<CommunityResponseModel> {
    return this.addUsers(communityId, [userId]);
  }

  /**
   * Removes a single user from a community (convenience method)
   * 
   * This is a convenience method for removing a single user, which internally uses the bulk operation.
   * 
   * @param {number} communityId - The unique identifier of the community
   * @param {number} userId - The user ID to remove from the community
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @example
   * const updatedCommunity = await communityClient.removeUser(123, 456);
   * console.log(`Removed user from ${updatedCommunity.name}`);
   */
  async removeUser(communityId: number, userId: number): Promise<CommunityResponseModel> {
    return this.removeUsers(communityId, [userId]);
  }

  /**
   * Retrieves all communities sorted alphabetically by name
   * 
   * @param {Omit<GetCommunitiesOptions, 'sort' | 'order'>} [options={}] - Additional pagination options
   * @returns {Promise<PaginatedCommunities>} A promise that resolves to paginated communities sorted by name (A-Z)
   * 
   * @example
   * const communitiesByName = await communityClient.getAllByName({ pageSize: 50 });
   * communitiesByName.items?.forEach(community => {
   *   console.log(community.name); // Alphabetically sorted
   * });
   */
  async getAllByName(options: Omit<GetCommunitiesOptions, 'sort' | 'order'> = {}): Promise<PaginatedCommunities> {
    return this.getAll({ 
      ...options, 
      sort: CommunitySortParameter.Name,
      order: SortOrder.Asc 
    });
  }

  /**
   * Retrieves all communities sorted by member count (largest first)
   * 
   * @param {Omit<GetCommunitiesOptions, 'sort' | 'order'>} [options={}] - Additional pagination options
   * @returns {Promise<PaginatedCommunities>} A promise that resolves to paginated communities sorted by member count (descending)
   * 
   * @example
   * const largestCommunities = await communityClient.getAllByMemberCount({ pageSize: 10 });
   * largestCommunities.items?.forEach(community => {
   *   console.log(`${community.name}: ${community.memberCount} members`);
   * });
   */
  async getAllByMemberCount(options: Omit<GetCommunitiesOptions, 'sort' | 'order'> = {}): Promise<PaginatedCommunities> {
    return this.getAll({ 
      ...options, 
      sort: CommunitySortParameter.Size,
      order: SortOrder.Desc 
    });
  }

  /**
   * Transfers users from one community to another
   * 
   * This method performs both removal from the source community and addition to the
   * destination community. Both operations must succeed for the transfer to be complete.
   * 
   * @param {number} fromCommunityId - The community ID to remove users from
   * @param {number} toCommunityId - The community ID to add users to
   * @param {number[]} userIds - Array of user IDs to transfer
   * @returns {Promise<{leftFrom: CommunityResponseModel, joinedTo: CommunityResponseModel}>} A promise that resolves to the results of both operations
   * 
   * @throws {Error} When either community is not found, user lacks permissions, or the operation fails
   * 
   * @example
   * const transferResult = await communityClient.transferUsers(123, 456, [789, 101]);
   * console.log(`Left ${transferResult.leftFrom.name} (${transferResult.leftFrom.memberCount} members)`);
   * console.log(`Joined ${transferResult.joinedTo.name} (${transferResult.joinedTo.memberCount} members)`);
   * 
   * @example
   * // Transfer users between departments
   * try {
   *   const result = await communityClient.transferUsers(
   *     engineeringCommunityId, 
   *     productCommunityId, 
   *     [user1, user2, user3]
   *   );
   *   console.log('Transfer completed successfully');
   * } catch (error) {
   *   console.error('Transfer failed:', error.message);
   * }
   */
  async transferUsers(fromCommunityId: number, toCommunityId: number, userIds: number[]): Promise<{
    leftFrom: CommunityResponseModel,
    joinedTo: CommunityResponseModel
  }> {
    const leftFrom = await this.removeUsers(fromCommunityId, userIds);
    const joinedTo = await this.addUsers(toCommunityId, userIds);
    
    return { leftFrom, joinedTo };
  }

  /**
   * Transfers a single user from one community to another
   * 
   * This is a convenience method for transferring a single user between communities.
   * 
   * @param {number} fromCommunityId - The community ID to remove the user from
   * @param {number} toCommunityId - The community ID to add the user to
   * @param {number} userId - The user ID to transfer
   * @returns {Promise<{leftFrom: CommunityResponseModel, joinedTo: CommunityResponseModel}>} A promise that resolves to the results of both operations
   * 
   * @example
   * const transferResult = await communityClient.transferUser(123, 456, 789);
   * console.log(`User transferred from ${transferResult.leftFrom.name} to ${transferResult.joinedTo.name}`);
   */
  async transferUser(fromCommunityId: number, toCommunityId: number, userId: number): Promise<{
    leftFrom: CommunityResponseModel,
    joinedTo: CommunityResponseModel
  }> {
    return this.transferUsers(fromCommunityId, toCommunityId, [userId]);
  }

  /**
   * Joins the current user to a community (explicit naming for clarity)
   * 
   * This method is identical to join() but with clearer naming to emphasize that
   * it operates on the current authenticated user.
   * 
   * @param {number} communityId - The unique identifier of the community to join
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @example
   * const community = await communityClient.joinAsMember(123);
   * console.log(`You are now a member of ${community.name}`);
   */
  async joinAsMember(communityId: number): Promise<CommunityResponseModel> {
    return this.join(communityId);
  }

  /**
   * Removes the current user from a community (explicit naming for clarity)
   * 
   * This method is identical to leave() but with clearer naming to emphasize that
   * it operates on the current authenticated user.
   * 
   * @param {number} communityId - The unique identifier of the community to leave
   * @returns {Promise<CommunityResponseModel>} A promise that resolves to the updated community details
   * 
   * @example
   * const community = await communityClient.leaveAsMember(123);
   * console.log(`You have left ${community.name}`);
   */
  async leaveAsMember(communityId: number): Promise<CommunityResponseModel> {
    return this.leave(communityId);
  }
}