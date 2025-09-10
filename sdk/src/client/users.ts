import { BaseClient } from './shared';
import { UsersMainApi, UsersTeamsApi } from '../generated/index.js';
import { 
  PaginatedUsers,
  PaginatedManageUsers,
  UserDetailsResponseModel,
  UserResponseModel,
  TagSummaryResponseModel,
  UsersSortParameter,
  ManageUsersSortParameter,
  SortOrder
} from '../generated/index.js';

/**
 * Options for retrieving users with pagination and sorting
 * @typedef {Object} GetUsersOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of users per page
 * @property {UsersSortParameter} [sort] - Sort parameter ('reputation')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 */
export interface GetUsersOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: 'reputation' | UsersSortParameter;
  order?: 'asc' | 'desc' | SortOrder;
}

/**
 * Options for managing users with advanced filtering, pagination and sorting
 * @typedef {Object} ManageUsersOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of users per page
 * @property {ManageUsersSortParameter} [sort] - Sort parameter ('id', 'name', 'email', 'lastAccessDate')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 * @property {boolean} [isDeactivated] - Filter by user activation status
 * @property {Date} [lastAccessDateFrom] - Filter users who accessed the system after this date
 * @property {Date} [lastAccessDateTo] - Filter users who accessed the system before this date
 */
export interface ManageUsersOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: ManageUsersSortParameter;
  order?: SortOrder;
  isDeactivated?: boolean;
  lastAccessDateFrom?: Date;
  lastAccessDateTo?: Date;
}

/**
 * Client for managing users and user information in Stack Overflow for Teams
 * 
 * The UserClient provides comprehensive methods for user discovery, management,
 * and profile access. It supports both basic user browsing and advanced administrative
 * functions including user management, activity tracking, and tag watching functionality.
 * The client distinguishes between general user operations and administrative management
 * operations that provide additional filtering and oversight capabilities.
 * 
 * @class UserClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const userClient = new UserClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const userClient = new UserClient(config, 'team-123');
 */
export class UserClient extends BaseClient {
  private mainApi: UsersMainApi;
  private teamsApi?: UsersTeamsApi;

  /**
   * Creates a new UserClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new UserClient(config);
   * 
   * @example
   * // For team-specific operations
   * const teamClient = new UserClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new UsersMainApi(config);
    if (teamId) {
      this.teamsApi = new UsersTeamsApi(config);
    }
  }

  /**
   * Retrieves all users with pagination and sorting options
   * 
   * @param {GetUsersOptions} [options={}] - Options for pagination and sorting
   * @returns {Promise<PaginatedUsers>} A promise that resolves to paginated user results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get first page of users with default settings
   * const users = await userClient.getAll();
   * 
   * @example
   * // Get users sorted by reputation
   * const topUsers = await userClient.getAll({
   *   page: 1,
   *   pageSize: 50,
   *   sort: 'reputation',
   *   order: 'desc'
   * });
   * 
   * @example
   * // Access the results
   * console.log(`Total users: ${users.totalCount}`);
   * users.items?.forEach(user => {
   *   console.log(`${user.name}: ${user.reputation} reputation (${user.role})`);
   * });
   */
  async getAll(options: GetUsersOptions = {}): Promise<PaginatedUsers> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort as UsersSortParameter,
          options.order as SortOrder
        );
      }
      
      return await this.mainApi.usersGet(
        options.page,
        options.pageSize,
        options.sort as UsersSortParameter,
        options.order as SortOrder
      );
    }, 'getAll');
  }

  /**
   * Retrieves a specific user by their ID
   * 
   * @param {number} userId - The unique identifier of the user
   * @returns {Promise<UserDetailsResponseModel>} A promise that resolves to detailed user information
   * 
   * @throws {Error} When the user is not found or the API request fails
   * 
   * @example
   * const user = await userClient.get(123);
   * console.log(`Name: ${user.name}`);
   * console.log(`Email: ${user.email}`); // Only visible to admins or current user
   * console.log(`Reputation: ${user.reputation}`);
   * console.log(`Role: ${user.role}`);
   * console.log(`Department: ${user.department}`);
   * console.log(`Job Title: ${user.jobTitle}`);
   * console.log(`External ID: ${user.externalId}`);
   * 
   * // List communities
   * user.communities?.forEach(community => {
   *   console.log(`Member of: ${community.name}`);
   * });
   */
  async get(userId: number): Promise<UserDetailsResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersUserIdGet(userId, this.teamId);
      }
      
      return await this.mainApi.usersUserIdGet(userId);
    }, 'get');
  }

  /**
   * Retrieves the current authenticated user's information
   * 
   * @returns {Promise<UserDetailsResponseModel>} A promise that resolves to the current user's detailed information
   * 
   * @throws {Error} When the user is not authenticated or the API request fails
   * 
   * @example
   * const currentUser = await userClient.getCurrentUser();
   * console.log(`Logged in as: ${currentUser.name}`);
   * console.log(`Your reputation: ${currentUser.reputation}`);
   * console.log(`Your role: ${currentUser.role}`);
   * console.log(`Your email: ${currentUser.email}`); // Always visible for current user
   */
  async getCurrentUser(): Promise<UserDetailsResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersMeGet(this.teamId);
      }
      
      return await this.mainApi.usersMeGet();
    }, 'getCurrentUser');
  }

  /**
   * Retrieves a user by their email address
   * 
   * @param {string} email - The email address to search for
   * @returns {Promise<UserDetailsResponseModel>} A promise that resolves to the user with the specified email
   * 
   * @throws {Error} When no user is found with the email or the API request fails
   * 
   * @example
   * const user = await userClient.getByEmail('john.doe@company.com');
   * console.log(`Found user: ${user.name} (ID: ${user.id})`);
   * 
   * @example
   * // Handle user not found
   * try {
   *   const user = await userClient.getByEmail('nonexistent@company.com');
   * } catch (error) {
   *   console.log('User not found with that email address');
   * }
   */
  async getByEmail(email: string): Promise<UserDetailsResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersByEmailEmailGet(email, this.teamId);
      }
      
      return await this.mainApi.usersByEmailEmailGet(email);
    }, 'getByEmail');
  }

  /**
   * Retrieves users by their external ID (SCIM/SAML identifier)
   * 
   * @param {string} externalId - The external ID to search for
   * @returns {Promise<Array<UserResponseModel>>} A promise that resolves to an array of users with the specified external ID
   * 
   * @throws {Error} When no users are found with the external ID or the API request fails
   * 
   * @example
   * const users = await userClient.getByExternalId('emp123');
   * users.forEach(user => {
   *   console.log(`External user: ${user.name} (Internal ID: ${user.id})`);
   * });
   * 
   * @example
   * // Typically used for SAML/SCIM integration
   * const samlUsers = await userClient.getByExternalId('external-system-user-456');
   */
  async getByExternalId(externalId: string): Promise<Array<UserResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersByExternalIdExternalIdGet(externalId, this.teamId);
      }
      
      return await this.mainApi.usersByExternalIdExternalIdGet(externalId);
    }, 'getByExternalId');
  }

  /**
   * Retrieves users with advanced management and filtering options
   * 
   * This method provides administrative-level user management capabilities including
   * filtering by activation status and last access dates. Only available on the main API.
   * 
   * @param {ManageUsersOptions} [options={}] - Advanced filtering, pagination and sorting options
   * @returns {Promise<PaginatedManageUsers>} A promise that resolves to paginated management user results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get all users for management
   * const managedUsers = await userClient.manage();
   * 
   * @example
   * // Get inactive users from the last 90 days
   * const cutoffDate = new Date();
   * cutoffDate.setDate(cutoffDate.getDate() - 90);
   * const inactiveUsers = await userClient.manage({
   *   lastAccessDateTo: cutoffDate,
   *   sort: 'lastAccessDate',
   *   order: 'asc'
   * });
   * 
   * @example
   * // Get deactivated users
   * const deactivatedUsers = await userClient.manage({
   *   isDeactivated: true,
   *   sort: 'name',
   *   order: 'asc'
   * });
   */
  async manage(options: ManageUsersOptions = {}): Promise<PaginatedManageUsers> {
    return this.handleApiCall(async () => {
      // Note: Management endpoint is only available on Main API
      return await this.mainApi.usersManageGet(
        options.page,
        options.pageSize,
        options.sort,
        options.order,
        options.isDeactivated,
        options.lastAccessDateFrom,
        options.lastAccessDateTo
      );
    }, 'manage');
  }

  /**
   * Retrieves the tags that a specific user is watching
   * 
   * @param {number} userId - The unique identifier of the user
   * @returns {Promise<TagSummaryResponseModel>} A promise that resolves to the user's watched tags
   * 
   * @throws {Error} When the user is not found or the API request fails
   * 
   * @example
   * const watchedTags = await userClient.getWatchedTags(123);
   * console.log(`User is watching tags related to their interests`);
   * // Note: The structure of TagSummaryResponseModel would determine how to access individual tags
   */
  async getWatchedTags(userId: number): Promise<TagSummaryResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersUserIdWatchedTagsGet(userId, this.teamId);
      }
      
      return await this.mainApi.usersUserIdWatchedTagsGet(userId);
    }, 'getWatchedTags');
  }

  /**
   * Retrieves the tags that the current authenticated user is watching
   * 
   * @returns {Promise<TagSummaryResponseModel>} A promise that resolves to the current user's watched tags
   * 
   * @throws {Error} When the current user ID is not available or the API request fails
   * 
   * @example
   * const myWatchedTags = await userClient.getCurrentUserWatchedTags();
   * console.log('Your watched tags have been retrieved');
   */
  async getCurrentUserWatchedTags(): Promise<TagSummaryResponseModel> {
    // Get current user first, then get their watched tags
    const currentUser = await this.getCurrentUser();
    if (!currentUser.id) {
      throw new Error('Current user ID not available');
    }
    return this.getWatchedTags(currentUser.id);
  }

  /**
   * Retrieves users sorted by reputation (highest first)
   * 
   * @param {Omit<GetUsersOptions, 'sort' | 'order'>} [options={}] - Additional pagination options
   * @returns {Promise<PaginatedUsers>} A promise that resolves to paginated users sorted by reputation (descending)
   * 
   * @example
   * const topUsers = await userClient.getAllByReputation({ pageSize: 25 });
   * topUsers.items?.forEach(user => {
   *   console.log(`${user.name}: ${user.reputation} reputation`);
   * });
   */
  async getAllByReputation(options: Omit<GetUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedUsers> {
    return this.getAll({ 
      ...options, 
      sort: UsersSortParameter.Reputation,
      order: SortOrder.Desc 
    });
  }

  /**
   * Retrieves users sorted by last access date (most recent first)
   * 
   * @param {Omit<ManageUsersOptions, 'sort' | 'order'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedManageUsers>} A promise that resolves to paginated users sorted by last access (newest first)
   * 
   * @example
   * const recentlyActive = await userClient.manageByLastAccessDate({ pageSize: 30 });
   */
  async manageByLastAccessDate(options: Omit<ManageUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedManageUsers> {
    return this.manage({ 
      ...options, 
      sort: ManageUsersSortParameter.LastAccessDate,
      order: SortOrder.Desc 
    });
  }

  /**
   * Retrieves active (non-deactivated) users
   * 
   * @param {Omit<ManageUsersOptions, 'isDeactivated'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedManageUsers>} A promise that resolves to paginated active users
   * 
   * @example
   * const activeUsers = await userClient.getActiveUsers({
   *   sort: 'name',
   *   order: 'asc'
   * });
   */
  async getActiveUsers(options: Omit<ManageUsersOptions, 'isDeactivated'> = {}): Promise<PaginatedManageUsers> {
    return this.manage({ ...options, isDeactivated: false });
  }

  /**
   * Retrieves deactivated users
   * 
   * @param {Omit<ManageUsersOptions, 'isDeactivated'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedManageUsers>} A promise that resolves to paginated deactivated users
   * 
   * @example
   * const deactivatedUsers = await userClient.getDeactivatedUsers({
   *   sort: 'lastAccessDate',
   *   order: 'desc'
   * });
   */
  async getDeactivatedUsers(options: Omit<ManageUsersOptions, 'isDeactivated'> = {}): Promise<PaginatedManageUsers> {
    return this.manage({ ...options, isDeactivated: true });
  }

  /**
   * Retrieves users who accessed the system within a specific date range
   * 
   * @param {Date} from - Start date for the access range (inclusive)
   * @param {Date} to - End date for the access range (inclusive)
   * @param {Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedManageUsers>} A promise that resolves to paginated users who accessed within the range
   * 
   * @example
   * const lastWeekActive = await userClient.getUsersByLastAccessRange(
   *   new Date('2024-01-01'),
   *   new Date('2024-01-07')
   * );
   */
  async getUsersByLastAccessRange(from: Date, to: Date, options: Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'> = {}): Promise<PaginatedManageUsers> {
    return this.manage({ 
      ...options, 
      lastAccessDateFrom: from,
      lastAccessDateTo: to 
    });
  }

  /**
   * Retrieves users who haven't accessed the system for a specified number of days
   * 
   * @param {number} daysSinceLastAccess - Number of days since last access
   * @param {Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedManageUsers>} A promise that resolves to paginated inactive users
   * 
   * @example
   * // Get users who haven't accessed in 30 days
   * const inactiveUsers = await userClient.getInactiveUsers(30);
   * 
   * @example
   * // Get users inactive for 90+ days, sorted by last access
   * const longInactive = await userClient.getInactiveUsers(90, {
   *   sort: 'lastAccessDate',
   *   order: 'asc'
   * });
   */
  async getInactiveUsers(daysSinceLastAccess: number, options: Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'> = {}): Promise<PaginatedManageUsers> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysSinceLastAccess);
    
    return this.manage({ 
      ...options, 
      lastAccessDateTo: cutoffDate 
    });
  }

  /**
   * Retrieves users who have accessed the system within a specified number of days
   * 
   * @param {number} daysSinceLastAccess - Number of days to look back
   * @param {Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedManageUsers>} A promise that resolves to paginated recently active users
   * 
   * @example
   * // Get users active in the last 7 days
   * const recentlyActive = await userClient.getRecentlyActiveUsers(7);
   */
  async getRecentlyActiveUsers(daysSinceLastAccess: number, options: Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'> = {}): Promise<PaginatedManageUsers> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysSinceLastAccess);
    
    return this.manage({ 
      ...options, 
      lastAccessDateFrom: cutoffDate 
    });
  }

  /**
   * Retrieves multiple users by their IDs in batch
   * 
   * This method handles errors gracefully, continuing to fetch other users even if some fail.
   * 
   * @param {number[]} userIds - Array of user IDs to retrieve
   * @returns {Promise<UserDetailsResponseModel[]>} A promise that resolves to an array of user details
   * 
   * @example
   * const users = await userClient.getMultipleUsers([123, 456, 789]);
   * console.log(`Retrieved ${users.length} users`);
   * 
   * @example
   * // Get team members
   * const teamMemberIds = [101, 102, 103, 104];
   * const teamMembers = await userClient.getMultipleUsers(teamMemberIds);
   * teamMembers.forEach(member => {
   *   console.log(`Team member: ${member.name} (${member.role})`);
   * });
   */
  async getMultipleUsers(userIds: number[]): Promise<UserDetailsResponseModel[]> {
    const results: UserDetailsResponseModel[] = [];
    
    for (const userId of userIds) {
      try {
        const user = await this.get(userId);
        results.push(user);
      } catch (error) {
        // Continue with other users if one fails
        console.warn(`Failed to fetch user ${userId}:`, error);
      }
    }
    
    return results;
  }

  /**
   * Retrieves multiple users by their email addresses in batch
   * 
   * This method handles errors gracefully, continuing to fetch other users even if some fail.
   * 
   * @param {string[]} emails - Array of email addresses to retrieve users for
   * @returns {Promise<UserDetailsResponseModel[]>} A promise that resolves to an array of user details
   * 
   * @example
   * const users = await userClient.getMultipleUsersByEmails([
   *   'john@company.com',
   *   'jane@company.com',
   *   'bob@company.com'
   * ]);
   */
  async getMultipleUsersByEmails(emails: string[]): Promise<UserDetailsResponseModel[]> {
    const results: UserDetailsResponseModel[] = [];
    
    for (const email of emails) {
      try {
        const user = await this.getByEmail(email);
        results.push(user);
      } catch (error) {
        // Continue with other users if one fails
        console.warn(`Failed to fetch user with email ${email}:`, error);
      }
    }
    
    return results;
  }

  /**
   * Retrieves the top users by reputation
   * 
   * @param {number} [limit] - Optional limit on the number of results (defaults to 50)
   * @returns {Promise<PaginatedUsers>} A promise that resolves to paginated top users by reputation
   * 
   * @example
   * const topContributors = await userClient.getTopUsers(20);
   * topContributors.items?.forEach(user => {
   *   console.log(`Top contributor: ${user.name} - ${user.reputation} reputation`);
   * });
   */
  async getTopUsers(limit?: number): Promise<PaginatedUsers> {
    return this.getAllByReputation({ 
      pageSize: limit as any || 50 
    });
  }

  /**
   * Retrieves deactivated users within a specific time period
   * 
   * @param {Date} from - Start date for the period
   * @param {Date} to - End date for the period
   * @returns {Promise<PaginatedManageUsers>} A promise that resolves to paginated deactivated users in the period
   * 
   * @example
   * const deactivatedLastMonth = await userClient.getDeactivatedUsersInPeriod(
   *   new Date('2024-01-01'),
   *   new Date('2024-01-31')
   * );
   */
  async getDeactivatedUsersInPeriod(from: Date, to: Date): Promise<PaginatedManageUsers> {
    return this.manage({
      isDeactivated: true,
      lastAccessDateFrom: from,
      lastAccessDateTo: to,
      sort: ManageUsersSortParameter.LastAccessDate,
      order: SortOrder.Desc
    });
  }

  /**
   * Retrieves users that may need administrative attention
   * 
   * This method returns both inactive users (who haven't accessed recently) and
   * deactivated users, providing a comprehensive view of users needing attention.
   * 
   * @param {number} [inactiveDays=90] - Number of days to consider for inactivity (defaults to 90)
   * @returns {Promise<{inactive: PaginatedManageUsers, deactivated: PaginatedManageUsers}>} A promise that resolves to both inactive and deactivated users
   * 
   * @example
   * const usersNeedingAttention = await userClient.getUsersNeedingAttention(60);
   * console.log(`Inactive users: ${usersNeedingAttention.inactive.totalCount}`);
   * console.log(`Deactivated users: ${usersNeedingAttention.deactivated.totalCount}`);
   * 
   * @example
   * // Use for administrative reporting
   * const attention = await userClient.getUsersNeedingAttention();
   * const inactiveCount = attention.inactive.totalCount || 0;
   * const deactivatedCount = attention.deactivated.totalCount || 0;
   * console.log(`Admin report: ${inactiveCount} inactive, ${deactivatedCount} deactivated users`);
   */
  async getUsersNeedingAttention(inactiveDays: number = 90): Promise<{
    inactive: PaginatedManageUsers,
    deactivated: PaginatedManageUsers
  }> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - inactiveDays);

    const [inactive, deactivated] = await Promise.all([
      this.manage({ 
        isDeactivated: false,
        lastAccessDateTo: cutoffDate,
        sort: ManageUsersSortParameter.LastAccessDate,
        order: SortOrder.Asc
      }),
      this.getDeactivatedUsers({
        sort: ManageUsersSortParameter.LastAccessDate,
        order: SortOrder.Desc
      })
    ]);

    return { inactive, deactivated };
  }
}