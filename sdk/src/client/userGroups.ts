import { BaseClient } from './shared';
import { UserGroupsMainApi, UserGroupsTeamsApi } from '../generated/index.js';
import { 
  PaginatedUserGroups,
  UserGroupResponseModel,
  UserGroupRequestModel,
  UserGroupsSortParameter,
  SortOrder
} from '../generated/index.js';

export interface CreateUserGroupOptions {
  name: string;
  description?: string;
  // Add other user group creation options as needed
}

export interface UpdateUserGroupOptions {
  name: string;
  description?: string;
  // Add other update options
}

export interface GetUserGroupsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: UserGroupsSortParameter;
  order?: SortOrder;
}

export class UserGroupClient extends BaseClient {
  private mainApi: UserGroupsMainApi;
  private teamsApi?: UserGroupsTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new UserGroupsMainApi(config);
    if (teamId) {
      this.teamsApi = new UserGroupsTeamsApi(config);
    }
  }

  // Core CRUD operations
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

  async get(userGroupId: number): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsUserGroupIdGet(userGroupId, this.teamId);
      }
      
      return await this.mainApi.userGroupsUserGroupIdGet(userGroupId);
    }, 'get');
  }

  async create(options: CreateUserGroupOptions): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      const request: UserGroupRequestModel = {
        name: options.name,
        description: options.description
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsPost(this.teamId, request);
      }
      
      return await this.mainApi.userGroupsPost(request);
    }, 'create');
  }

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

  // Note: No delete method - UserGroups API doesn't support deletion

  // Member management
  async addMembers(userGroupId: number, userIds: number[]): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsUserGroupIdMembersPost(userGroupId, this.teamId, userIds);
      }
      
      return await this.mainApi.userGroupsUserGroupIdMembersPost(userGroupId, userIds);
    }, 'addMembers');
  }

  async removeMember(userGroupId: number, userId: number): Promise<UserGroupResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(userGroupId, userId, this.teamId);
      }
      
      return await this.mainApi.userGroupsUserGroupIdMembersUserIdDelete(userGroupId, userId);
    }, 'removeMember');
  }

  // Convenience methods for single member operations
  async addMember(userGroupId: number, userId: number): Promise<UserGroupResponseModel> {
    return this.addMembers(userGroupId, [userId]);
  }

  // Bulk member operations
  async removeMembers(userGroupId: number, userIds: number[]): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const userId of userIds) {
      const result = await this.removeMember(userGroupId, userId);
      results.push(result);
    }
    
    return results;
  }

  // Sorting convenience methods
  async getAllByName(options: Omit<GetUserGroupsOptions, 'sort' | 'order'> = {}): Promise<PaginatedUserGroups> {
    return this.getAll({ 
      ...options, 
      sort: UserGroupsSortParameter.Name,
      order: SortOrder.Asc 
    });
  }

  async getAllBySize(options: Omit<GetUserGroupsOptions, 'sort' | 'order'> = {}): Promise<PaginatedUserGroups> {
    return this.getAll({ 
      ...options, 
      sort: UserGroupsSortParameter.Size,
      order: SortOrder.Desc 
    });
  }

  // Group membership management workflows
  async transferMember(fromGroupId: number, toGroupId: number, userId: number): Promise<{
    removedFrom: UserGroupResponseModel,
    addedTo: UserGroupResponseModel
  }> {
    const removedFrom = await this.removeMember(fromGroupId, userId);
    const addedTo = await this.addMember(toGroupId, userId);
    
    return { removedFrom, addedTo };
  }

  async transferMembers(fromGroupId: number, toGroupId: number, userIds: number[]): Promise<{
    removedFrom: UserGroupResponseModel[],
    addedTo: UserGroupResponseModel
  }> {
    const removedFrom = await this.removeMembers(fromGroupId, userIds);
    const addedTo = await this.addMembers(toGroupId, userIds);
    
    return { removedFrom, addedTo };
  }

  // Group discovery and management helpers
  async findGroupsByName(nameQuery: string, limit?: number): Promise<PaginatedUserGroups> {
    // Note: The API doesn't have a search parameter, so this would need to be implemented
    // client-side or this method might not be fully functional
    return this.getAllByName({ 
      pageSize: limit as any || 50
    });
  }

  async getLargestGroups(limit?: number): Promise<PaginatedUserGroups> {
    return this.getAllBySize({ 
      pageSize: limit as any || 30 
    });
  }

  // Bulk group operations
  async createGroups(groupOptions: CreateUserGroupOptions[]): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const options of groupOptions) {
      const result = await this.create(options);
      results.push(result);
    }
    
    return results;
  }

  async updateGroups(updates: Array<{id: number, options: UpdateUserGroupOptions}>): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const update of updates) {
      const result = await this.update(update.id, update.options);
      results.push(result);
    }
    
    return results;
  }

  // Member management across multiple groups
  async addUserToGroups(userId: number, groupIds: number[]): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const groupId of groupIds) {
      const result = await this.addMember(groupId, userId);
      results.push(result);
    }
    
    return results;
  }

  async removeUserFromGroups(userId: number, groupIds: number[]): Promise<UserGroupResponseModel[]> {
    const results: UserGroupResponseModel[] = [];
    
    for (const groupId of groupIds) {
      const result = await this.removeMember(groupId, userId);
      results.push(result);
    }
    
    return results;
  }

  // Advanced group management workflows
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
    // Example: if (sourceGroup.members) { await this.addMembers(newGroup.id, sourceGroup.members.map(m => m.id)); }
    
    return { newGroup, sourceGroup };
  }
}