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

export interface GetUsersOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: UsersSortParameter;
  order?: SortOrder;
}

export interface ManageUsersOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: ManageUsersSortParameter;
  order?: SortOrder;
  isDeactivated?: boolean;
  lastAccessDateFrom?: Date;
  lastAccessDateTo?: Date;
}

export class UserClient extends BaseClient {
  private mainApi: UsersMainApi;
  private teamsApi?: UsersTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new UsersMainApi(config);
    if (teamId) {
      this.teamsApi = new UsersTeamsApi(config);
    }
  }

  // Core user operations
  async getAll(options: GetUsersOptions = {}): Promise<PaginatedUsers> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order
        );
      }
      
      return await this.mainApi.usersGet(
        options.page,
        options.pageSize,
        options.sort,
        options.order
      );
    }, 'getAll');
  }

  async get(userId: number): Promise<UserDetailsResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersUserIdGet(userId, this.teamId);
      }
      
      return await this.mainApi.usersUserIdGet(userId);
    }, 'get');
  }

  // Current user operations
  async getCurrentUser(): Promise<UserDetailsResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersMeGet(this.teamId);
      }
      
      return await this.mainApi.usersMeGet();
    }, 'getCurrentUser');
  }

  // User lookup methods
  async getByEmail(email: string): Promise<UserDetailsResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersByEmailEmailGet(email, this.teamId);
      }
      
      return await this.mainApi.usersByEmailEmailGet(email);
    }, 'getByEmail');
  }

  async getByExternalId(externalId: string): Promise<Array<UserResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersByExternalIdExternalIdGet(externalId, this.teamId);
      }
      
      return await this.mainApi.usersByExternalIdExternalIdGet(externalId);
    }, 'getByExternalId');
  }

  // User management (Main API only - no Teams equivalent)
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

  // Tag watching functionality
  async getWatchedTags(userId: number): Promise<TagSummaryResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamUsersUserIdWatchedTagsGet(userId, this.teamId);
      }
      
      return await this.mainApi.usersUserIdWatchedTagsGet(userId);
    }, 'getWatchedTags');
  }

  async getCurrentUserWatchedTags(): Promise<TagSummaryResponseModel> {
    // Get current user first, then get their watched tags
    const currentUser = await this.getCurrentUser();
    if (!currentUser.id) {
      throw new Error('Current user ID not available');
    }
    return this.getWatchedTags(currentUser.id);
  }

  // Sorting convenience methods
  // async getAllByName(options: Omit<GetUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedUsers> {
  //   return this.getAll({ 
  //     ...options, 
  //     sort: UsersSortParameter.DisplayName,
  //     order: SortOrder.Asc 
  //   });
  // }

  async getAllByReputation(options: Omit<GetUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedUsers> {
    return this.getAll({ 
      ...options, 
      sort: UsersSortParameter.Reputation,
      order: SortOrder.Desc 
    });
  }

  // async getAllByCreationDate(options: Omit<GetUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedUsers> {
  //   return this.getAll({ 
  //     ...options, 
  //     sort: UsersSortParameter.CreationDate,
  //     order: SortOrder.Desc 
  //   });
  // }

  // async getAllByLastAccessDate(options: Omit<GetUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedUsers> {
  //   return this.getAll({ 
  //     ...options, 
  //     sort: UsersSortParameter.LastAccessDate,
  //     order: SortOrder.Desc 
  //   });
  // }

  // // Management-specific sorting methods
  // async manageByName(options: Omit<ManageUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedManageUsers> {
  //   return this.manage({ 
  //     ...options, 
  //     sort: ManageUsersSortParameter.DisplayName,
  //     order: SortOrder.Asc 
  //   });
  // }

  // async manageByCreationDate(options: Omit<ManageUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedManageUsers> {
  //   return this.manage({ 
  //     ...options, 
  //     sort: ManageUsersSortParameter.CreationDate,
  //     order: SortOrder.Desc 
  //   });
  // }

  async manageByLastAccessDate(options: Omit<ManageUsersOptions, 'sort' | 'order'> = {}): Promise<PaginatedManageUsers> {
    return this.manage({ 
      ...options, 
      sort: ManageUsersSortParameter.LastAccessDate,
      order: SortOrder.Desc 
    });
  }

  // User management filtering
  async getActiveUsers(options: Omit<ManageUsersOptions, 'isDeactivated'> = {}): Promise<PaginatedManageUsers> {
    return this.manage({ ...options, isDeactivated: false });
  }

  async getDeactivatedUsers(options: Omit<ManageUsersOptions, 'isDeactivated'> = {}): Promise<PaginatedManageUsers> {
    return this.manage({ ...options, isDeactivated: true });
  }

  async getUsersByLastAccessRange(from: Date, to: Date, options: Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'> = {}): Promise<PaginatedManageUsers> {
    return this.manage({ 
      ...options, 
      lastAccessDateFrom: from,
      lastAccessDateTo: to 
    });
  }

  async getInactiveUsers(daysSinceLastAccess: number, options: Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'> = {}): Promise<PaginatedManageUsers> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysSinceLastAccess);
    
    return this.manage({ 
      ...options, 
      lastAccessDateTo: cutoffDate 
    });
  }

  async getRecentlyActiveUsers(daysSinceLastAccess: number, options: Omit<ManageUsersOptions, 'lastAccessDateFrom' | 'lastAccessDateTo'> = {}): Promise<PaginatedManageUsers> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysSinceLastAccess);
    
    return this.manage({ 
      ...options, 
      lastAccessDateFrom: cutoffDate 
    });
  }

  // Bulk user operations
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

  // User discovery helpers
  async getTopUsers(limit?: number): Promise<PaginatedUsers> {
    return this.getAllByReputation({ 
      pageSize: limit as any || 50 
    });
  }

  // async getNewestUsers(limit?: number): Promise<PaginatedUsers> {
  //   return this.getAllByCreationDate({ 
  //     pageSize: limit as any || 30 
  //   });
  // }

  // async getMostActiveUsers(limit?: number): Promise<PaginatedUsers> {
  //   return this.getAllByLastAccessDate({ 
  //     pageSize: limit as any || 30 
  //   });
  // }

  // Advanced management queries
  async getDeactivatedUsersInPeriod(from: Date, to: Date): Promise<PaginatedManageUsers> {
    return this.manage({
      isDeactivated: true,
      lastAccessDateFrom: from,
      lastAccessDateTo: to,
      sort: ManageUsersSortParameter.LastAccessDate,
      order: SortOrder.Desc
    });
  }

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