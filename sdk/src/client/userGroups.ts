import { BaseClient } from './shared';
import { UserGroupsMainApi, UserGroupsTeamsApi } from '../generated/index.js';
import { 
  PaginatedUserGroups,
  UserGroupResponseModel,
  UserGroupRequestModel,
  UserGroupsSortParameter,
  SortOrder
} from '../generated/index.js';

/**
 * Options for creating a new user group
 * @typedef {Object} CreateUserGroupOptions
 * @property {string} name - The user group's name
 * @property {string} [description] - The user group's description
 * @property {number[]} [userIds] - Initial user IDs to add to the group
 */
export interface CreateUserGroupOptions {
  name: string;
  description?: string;
  userIds?: number[];
}

/**
 * Options for updating an existing user group
 * @typedef {Object} UpdateUserGroupOptions
 * @property {string} name - The updated user group name
 * @property {string} [description] - The updated user group description
 */
export interface UpdateUserGroupOptions {
  name: string;
  description?: string;
}

/**
 * Options for retrieving user groups with pagination and sorting
 * @typedef {Object} GetUserGroupsOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of user groups per page
 * @property {UserGroupsSortParameter} [sort] - Sort parameter ('name', 'size')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 */
export interface GetUserGroupsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: UserGroupsSortParameter;
  order?: SortOrder;
}

/**
 * Client for managing user groups in Stack Overflow for Teams
 * 
 * The UserGroupClient provides comprehensive methods for creating, reading, and updating
 * user groups, as well as managing group membership. User groups are organizational
 * units that allow efficient management of permissions, notifications, and access control
 * for collections of users. The client supports bulk operations and advanced workflows
 * for enterprise-scale user management.
 * 
 * Note: User groups cannot be deleted through the API - only created, updated, and
 * have their membership managed.
 * 
 * @class UserGroupClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const userGroupClient = new UserGroupClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const userGroupClient = new UserGroupClient(config, 'team-123');
 */
export class UserGroupClient extends BaseClient {
  private mainApi: UserGroupsMainApi;
  private teamsApi?: UserGroupsTeamsApi;

  /**
   * Creates a new UserGroupClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new UserGroupClient(config);
   * 
   * @example
   * // For team-specific operations
   * const teamClient = new UserGroupClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new UserGroupsMainApi(config);
    if (teamId) {
      this.teamsApi = new UserGroupsTeamsApi(config);
    }
  }

  /**
   * Retrieves all user groups with pagination and sorting options
   * 
   * @param {GetUserGroupsOptions} [options={}] - Options for pagination and sorting
   * @returns {Promise<PaginatedUserGroups>} A promise that resolves to paginated user group results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get first page of user groups with default settings
   * const groups = await userGroupClient.getAll();
   * 
   * @example
   * // Get user groups with custom pagination and sorting
   * const groups = await userGroupClient.getAll({
   *   page: 2,
   *   pageSize: 50,
   *   sort: 'size',
   *   order: 'desc'
   * });
   * 
   * @example
   * // Access the results
   * console.log(`Total user groups: ${groups.totalCount}`);
   * groups.items?.forEach(group => {
   *   console.log(`${group.name}: ${group.users?.length || 0} members`);
   * });
   */
  async getAll(options: GetUserGroupsOptions = {}): Promise<PaginatedUserGroups> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order
        );
      }
      
      return await this.mainApi.userGroupsGet(
        options.page,
        options.pageSize,
        options.sort,
        options.order
      );
    }, 'getAll');
  }

  /**
   * Retrieves a specific user group by its ID
   * 
   * @param {number} userGroupId - The unique identifier of the user group
   * @returns {Promise<UserGroupResponseModel>} A promise that resolves to the complete user group details
   * 
   * @throws {Error} When the user group is not found or the API request fails
   * 
   * @example
   * const group = await userGroupClient.get(123);
   * console.log(`Name: ${group.name}`);
   * console.log(`Description: ${group.description}`);
   * console.log(`Members: ${group.users?.length || 0}`);
   * 
   * // List all members
   * group.users?.forEach(user => {
   *   console.log(`Member: ${user.displayName}`);
   * });
   */
  async get(userGroupId: number): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsUserGroupIdGet(userGroupId, this.teamId);
      }
      
      return await this.mainApi.userGroupsUserGroupIdGet(userGroupId);
    }, 'get');
  }

  /**
   * Creates a new user group
   * 
   * @param {CreateUserGroupOptions} options - The user group configuration and initial membership
   * @returns {Promise<UserGroupResponseModel>} A promise that resolves to the created user group
   * 
   * @throws {Error} When user group creation fails due to validation errors or API issues
   * 
   * @example
   * const newGroup = await userGroupClient.create({
   *   name: 'Frontend Developers',
   *   description: 'Team responsible for React and Angular applications',
   *   userIds: [456, 789, 101]
   * });
   * console.log(`Created user group with ID: ${newGroup.id}`);
   * 
   * @example
   * // Create a group without initial members
   * const emptyGroup = await userGroupClient.create({
   *   name: 'New Hires',
   *   description: 'Recently onboarded team members'
   * });
   */
  async create(options: CreateUserGroupOptions): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      const request: UserGroupRequestModel = {
        name: options.name,
        description: options.description,
        userIds: options.userIds
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsPost(this.teamId, request);
      }
      
      return await this.mainApi.userGroupsPost(request);
    }, 'create');
  }

  /**
   * Updates an existing user group's name and description
   * 
   * Note: This method updates the group metadata but not membership. Use the member
   * management methods to modify group membership.
   * 
   * @param {number} userGroupId - The unique identifier of the user group to update
   * @param {UpdateUserGroupOptions} options - The updated user group information
   * @returns {Promise<UserGroupResponseModel>} A promise that resolves to the updated user group
   * 
   * @throws {Error} When the user group is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedGroup = await userGroupClient.update(123, {
   *   name: 'Senior Frontend Developers',
   *   description: 'Senior team members responsible for React and Angular applications'
   * });
   */
  async update(userGroupId: number, options: UpdateUserGroupOptions): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      const request: UserGroupRequestModel = {
        name: options.name,
        description: options.description
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsUserGroupIdPut(userGroupId, this.teamId, request);
      }
      
      return await this.mainApi.userGroupsUserGroupIdPut(userGroupId, request);
    }, 'update');
  }

  /**
   * Adds multiple users to a user group
   * 
   * This method adds the specified users to the group membership. Users who are
   * already members will not be duplicated.
   * 
   * @param {number} userGroupId - The unique identifier of the user group
   * @param {number[]} userIds - Array of user IDs to add to the group
   * @returns {Promise<UserGroupResponseModel>} A promise that resolves to the updated user group
   * 
   * @throws {Error} When the user group is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedGroup = await userGroupClient.addMembers(123, [456, 789, 999]);
   * console.log(`Added users to group. Total members: ${updatedGroup.users?.length}`);
   * 
   * @example
   * // Add new hires to orientation group
   * await userGroupClient.addMembers(orientationGroupId, [
   *   newHire1Id,
   *   newHire2Id,
   *   newHire3Id
   * ]);
   */
  async addMembers(userGroupId: number, userIds: number[]): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsUserGroupIdMembersPost(userGroupId, this.teamId, userIds);
      }
      
      return await this.mainApi.userGroupsUserGroupIdMembersPost(userGroupId, userIds);
    }, 'addMembers');
  }

  /**
   * Removes a user from a user group
   * 
   * @param {number} userGroupId - The unique identifier of the user group
   * @param {number} userId - The user ID to remove from the group
   * @returns {Promise<UserGroupResponseModel>} A promise that resolves to the updated user group
   * 
   * @throws {Error} When the user group is not found, user is not a member, or the API request fails
   * 
   * @example
   * const updatedGroup = await userGroupClient.removeMember(123, 456);
   * console.log(`User removed. Remaining members: ${updatedGroup.users?.length}`);
   * 
   * @example
   * // Remove user when they change departments
   * await userGroupClient.removeMember(frontendTeamId, transferredUserId);
   */
  async removeMember(userGroupId: number, userId: number): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(userGroupId, userId, this.teamId);
      }
      
      return await this.mainApi.userGroupsUserGroupIdMembersUserIdDelete(userGroupId, userId);
    }, 'removeMember');
  }

  /**
   * Adds a single user to a user group (convenience method)
   * 
   * @param {number} userGroupId - The unique identifier of the user group
   * @param {number} userId - The user ID to add to the group
   * @returns {Promise<UserGroupResponseModel>} A promise that resolves to the updated user group
   * 
   * @example
   * const updatedGroup = await userGroupClient.addMember(123, 456);
   * console.log(`Added user to ${updatedGroup.name}`);
   */
  async addMember(userGroupId: number, userId: number): Promise<UserGroupResponseModel> {
    return this.addMembers(userGroupId, [userId]);
  }

  /**
   * Removes multiple users from a user group
   * 
   * Note: This method performs individual API calls for each user removal. For better
   * performance with large numbers of users, consider the transfer methods or batch operations.
   * 
   * @param {number} userGroupId - The unique identifier of the user group
   * @param {number[]} userIds - Array of user IDs to remove from the group
   * @returns {Promise<UserGroupResponseModel[]>} A promise that resolves to an array of updated user group states
   * 
   * @throws {Error} When the user group is not found, users are not members, or API requests fail
   * 
   * @example
   * const results = await userGroupClient.removeMembers(123, [456, 789]);
   * console.log(`Processed ${results.length} removal operations`);
   * 
   * @example
   * // Remove departing team members
   * await userGroupClient.removeMembers(teamGroupId, departingUserIds);
   */
  async removeMembers(userGroupId: number, userIds: number[]): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const userId of userIds) {
      const result = await this.removeMember(userGroupId, userId);
      results.push(result);
    }
    
    return results;
  }

  /**
   * Retrieves user groups sorted alphabetically by name
   * 
   * @param {Omit<GetUserGroupsOptions, 'sort' | 'order'>} [options={}] - Additional pagination options
   * @returns {Promise<PaginatedUserGroups>} A promise that resolves to paginated user groups sorted by name (A-Z)
   * 
   * @example
   * const groupsByName = await userGroupClient.getAllByName({ pageSize: 50 });
   * groupsByName.items?.forEach(group => {
   *   console.log(group.name); // Alphabetically sorted
   * });
   */
  async getAllByName(options: Omit<GetUserGroupsOptions, 'sort' | 'order'> = {}): Promise<PaginatedUserGroups> {
    return this.getAll({ 
      ...options, 
      sort: UserGroupsSortParameter.Name,
      order: SortOrder.Asc 
    });
  }

  /**
   * Retrieves user groups sorted by size (largest first)
   * 
   * @param {Omit<GetUserGroupsOptions, 'sort' | 'order'>} [options={}] - Additional pagination options
   * @returns {Promise<PaginatedUserGroups>} A promise that resolves to paginated user groups sorted by member count (descending)
   * 
   * @example
   * const largestGroups = await userGroupClient.getAllBySize({ pageSize: 20 });
   * largestGroups.items?.forEach(group => {
   *   console.log(`${group.name}: ${group.users?.length || 0} members`);
   * });
   */
  async getAllBySize(options: Omit<GetUserGroupsOptions, 'sort' | 'order'> = {}): Promise<PaginatedUserGroups> {
    return this.getAll({ 
      ...options, 
      sort: UserGroupsSortParameter.Size,
      order: SortOrder.Desc 
    });
  }

  /**
   * Transfers a user from one group to another
   * 
   * This method removes the user from the source group and adds them to the
   * destination group in a coordinated operation.
   * 
   * @param {number} fromGroupId - The group ID to remove the user from
   * @param {number} toGroupId - The group ID to add the user to
   * @param {number} userId - The user ID to transfer
   * @returns {Promise<{removedFrom: UserGroupResponseModel, addedTo: UserGroupResponseModel}>} A promise that resolves to the results of both operations
   * 
   * @throws {Error} When either group is not found, user lacks permissions, or operations fail
   * 
   * @example
   * const transferResult = await userGroupClient.transferMember(
   *   juniorDevsGroupId, 
   *   seniorDevsGroupId, 
   *   promotedUserId
   * );
   * console.log(`User transferred from ${transferResult.removedFrom.name} to ${transferResult.addedTo.name}`);
   * 
   * @example
   * // Move user between departments
   * const result = await userGroupClient.transferMember(
   *   marketingTeamId,
   *   salesTeamId,
   *   transferredEmployeeId
   * );
   */
  async transferMember(fromGroupId: number, toGroupId: number, userId: number): Promise<{
    removedFrom: UserGroupResponseModel,
    addedTo: UserGroupResponseModel
  }> {
    const removedFrom = await this.removeMember(fromGroupId, userId);
    const addedTo = await this.addMember(toGroupId, userId);
    
    return { removedFrom, addedTo };
  }

  /**
   * Transfers multiple users from one group to another
   * 
   * @param {number} fromGroupId - The group ID to remove users from
   * @param {number} toGroupId - The group ID to add users to
   * @param {number[]} userIds - Array of user IDs to transfer
   * @returns {Promise<{removedFrom: UserGroupResponseModel[], addedTo: UserGroupResponseModel}>} A promise that resolves to the results of both operations
   * 
   * @example
   * const transferResult = await userGroupClient.transferMembers(
   *   contractorsGroupId,
   *   fullTimeGroupId,
   *   convertedContractorIds
   * );
   * console.log(`Transferred ${userIds.length} users to ${transferResult.addedTo.name}`);
   */
  async transferMembers(fromGroupId: number, toGroupId: number, userIds: number[]): Promise<{
    removedFrom: UserGroupResponseModel[],
    addedTo: UserGroupResponseModel
  }> {
    const removedFrom = await this.removeMembers(fromGroupId, userIds);
    const addedTo = await this.addMembers(toGroupId, userIds);
    
    return { removedFrom, addedTo };
  }

  /**
   * Finds user groups by name
   * 
   * Note: The current API doesn't support server-side search, so this method
   * retrieves groups sorted by name. Client-side filtering may be needed.
   * 
   * @param {string} nameQuery - The name query to search for (currently unused due to API limitations)
   * @param {number} [limit] - Optional limit on the number of results (defaults to 50)
   * @returns {Promise<PaginatedUserGroups>} A promise that resolves to paginated user groups
   * 
   * @example
   * const searchResults = await userGroupClient.findGroupsByName('developer', 20);
   * // Note: May require client-side filtering of results
   */
  async findGroupsByName(nameQuery: string, limit?: number): Promise<PaginatedUserGroups> {
    // Note: The API doesn't have a search parameter, so this would need to be implemented
    // client-side or this method might not be fully functional
    return this.getAllByName({ 
      pageSize: limit as any || 50
    });
  }

  /**
   * Retrieves the largest user groups by member count
   * 
   * @param {number} [limit] - Optional limit on the number of results (defaults to 30)
   * @returns {Promise<PaginatedUserGroups>} A promise that resolves to paginated largest groups
   * 
   * @example
   * const largestGroups = await userGroupClient.getLargestGroups(10);
   * largestGroups.items?.forEach(group => {
   *   console.log(`${group.name}: ${group.users?.length} members`);
   * });
   */
  async getLargestGroups(limit?: number): Promise<PaginatedUserGroups> {
    return this.getAllBySize({ 
      pageSize: limit as any || 30 
    });
  }

  /**
   * Creates multiple user groups in batch
   * 
   * @param {CreateUserGroupOptions[]} groupOptions - Array of group configurations to create
   * @returns {Promise<UserGroupResponseModel[]>} A promise that resolves to an array of created groups
   * 
   * @example
   * const newGroups = await userGroupClient.createGroups([
   *   { name: 'Backend Team', description: 'Server-side developers' },
   *   { name: 'QA Team', description: 'Quality assurance engineers' },
   *   { name: 'DevOps Team', description: 'Infrastructure and deployment' }
   * ]);
   * console.log(`Created ${newGroups.length} groups`);
   */
  async createGroups(groupOptions: CreateUserGroupOptions[]): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const options of groupOptions) {
      const result = await this.create(options);
      results.push(result);
    }
    
    return results;
  }

  /**
   * Updates multiple user groups in batch
   * 
   * @param {Array<{id: number, options: UpdateUserGroupOptions}>} updates - Array of update configurations
   * @returns {Promise<UserGroupResponseModel[]>} A promise that resolves to an array of updated groups
   * 
   * @example
   * const updatedGroups = await userGroupClient.updateGroups([
   *   { id: 123, options: { name: 'Senior Backend Team', description: 'Updated description' } },
   *   { id: 456, options: { name: 'Lead QA Team', description: 'Quality assurance leads' } }
   * ]);
   */
  async updateGroups(updates: Array<{id: number, options: UpdateUserGroupOptions}>): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const update of updates) {
      const result = await this.update(update.id, update.options);
      results.push(result);
    }
    
    return results;
  }

  /**
   * Adds a user to multiple groups
   * 
   * @param {number} userId - The user ID to add to multiple groups
   * @param {number[]} groupIds - Array of group IDs to add the user to
   * @returns {Promise<UserGroupResponseModel[]>} A promise that resolves to an array of updated groups
   * 
   * @example
   * // Add new hire to multiple orientation and team groups
   * const results = await userGroupClient.addUserToGroups(newHireId, [
   *   orientationGroupId,
   *   allEmployeesGroupId,
   *   engineeringGroupId
   * ]);
   */
  async addUserToGroups(userId: number, groupIds: number[]): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const groupId of groupIds) {
      const result = await this.addMember(groupId, userId);
      results.push(result);
    }
    
    return results;
  }

  /**
   * Removes a user from multiple groups
   * 
   * @param {number} userId - The user ID to remove from multiple groups
   * @param {number[]} groupIds - Array of group IDs to remove the user from
   * @returns {Promise<UserGroupResponseModel[]>} A promise that resolves to an array of updated groups
   * 
   * @example
   * // Remove departing employee from all their groups
   * const results = await userGroupClient.removeUserFromGroups(departingUserId, [
   *   engineeringGroupId,
   *   seniorDevsGroupId,
   *   projectAlphaGroupId
   * ]);
   */
  async removeUserFromGroups(userId: number, groupIds: number[]): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const groupId of groupIds) {
      const result = await this.removeMember(groupId, userId);
      results.push(result);
    }
    
    return results;
  }

  /**
   * Populates a group with multiple users in batches
   * 
   * This method processes users in batches to avoid overwhelming the API and
   * provides better performance for large membership updates.
   * 
   * @param {number} userGroupId - The group ID to populate
   * @param {number[]} userIds - Array of user IDs to add to the group
   * @param {number} [batchSize=10] - Number of users to process per batch
   * @returns {Promise<UserGroupResponseModel[]>} A promise that resolves to an array of batch results
   * 
   * @example
   * // Add a large number of users to a group in batches
   * const results = await userGroupClient.populateGroup(
   *   allEmployeesGroupId, 
   *   allUserIds, 
   *   25 // Process 25 users at a time
   * );
   * console.log(`Processed ${results.length} batches`);
   */
  async populateGroup(userGroupId: number, userIds: number[], batchSize: number = 10): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    // Process users in batches to avoid overwhelming the API
    for (let i = 0; i < userIds.length; i += batchSize) {
      const batch = userIds.slice(i, i + batchSize);
      const result = await this.addMembers(userGroupId, batch);
      results.push(result);
    }
    
    return results;
  }

  /**
   * Creates a copy of an existing group with new metadata
   * 
   * This method creates a new group with the specified configuration. Note that
   * member copying would require additional implementation based on the source
   * group's structure.
   * 
   * @param {number} sourceGroupId - The group ID to use as a template
   * @param {CreateUserGroupOptions} newGroupOptions - Configuration for the new group
   * @returns {Promise<{newGroup: UserGroupResponseModel, sourceGroup: UserGroupResponseModel}>} A promise that resolves to both groups
   * 
   * @example
   * const duplicationResult = await userGroupClient.duplicateGroup(
   *   frontendTeamGroupId,
   *   {
   *     name: 'Frontend Team - Project Beta',
   *     description: 'Frontend team members working on Project Beta'
   *   }
   * );
   * 
   * // Additional logic would be needed to copy members:
   * // if (duplicationResult.sourceGroup.users) {
   * //   const memberIds = duplicationResult.sourceGroup.users.map(u => u.id);
   * //   await userGroupClient.addMembers(duplicationResult.newGroup.id, memberIds);
   * // }
   */
  async duplicateGroup(sourceGroupId: number, newGroupOptions: CreateUserGroupOptions): Promise<{
    newGroup: UserGroupResponseModel,
    sourceGroup: UserGroupResponseModel
  }> {
    // Get the source group to understand its current membership
    const sourceGroup = await this.get(sourceGroupId);
    
    // Create the new group
    const newGroup = await this.create(newGroupOptions);
    
    // If we could extract member IDs from sourceGroup, we would add them here
    // This would depend on the UserGroupResponseModel structure
    // Example: if (sourceGroup.users) { await this.addMembers(newGroup.id, sourceGroup.users.map(u => u.id)); }
    
    return { newGroup, sourceGroup };
  }
}