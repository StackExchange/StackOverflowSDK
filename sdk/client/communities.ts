import { BaseClient } from './shared';
import { CommunitiesMainApi } from '../generated/dist';
import { 
  CommunityResponseModel,
  PaginatedCommunities,
  CommunityJoinModel,
  CommunityLeaveModel,
  CommunitySortParameter,
  SortOrder
} from '../generated/dist';

export interface GetCommunitiesOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: CommunitySortParameter;
  order?: SortOrder;
}

export interface JoinCommunityBulkOptions {
  memberUserIds: number[];
}

export interface LeaveCommunityBulkOptions {
  memberUserIds: number[];
}

export class CommunityClient extends BaseClient {
  private mainApi: CommunitiesMainApi;

  constructor(config: ReturnType<typeof import('../generated/dist/configuration').createConfiguration>) {
    super();
    this.mainApi = new CommunitiesMainApi(config);
    // Note: Communities API has no Teams API variant - only Main API
  }

  // Core community operations
  async getAll(options: GetCommunitiesOptions = {}): Promise<PaginatedCommunities> {
    return this.handleApiCall(async () => {
      return await this.mainApi.communitiesGet(
        options.page,
        options.pageSize,
        options.sort,
        options.order
      );
    }, 'getAll');
  }

  async get(communityId: number): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      return await this.mainApi.communitiesCommunityIdGet(communityId);
    }, 'get');
  }

  // Membership management - Single user operations
  async join(communityId: number): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      return await this.mainApi.communitiesCommunityIdJoinPost(communityId);
    }, 'join');
  }

  async leave(communityId: number): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      return await this.mainApi.communitiesCommunityIdLeavePost(communityId);
    }, 'leave');
  }

  // Membership management - Bulk operations
  async joinBulk(communityId: number, options: JoinCommunityBulkOptions): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      const request: CommunityJoinModel = {
        memberUserIds: options.memberUserIds
      };
      
      return await this.mainApi.communitiesCommunityIdJoinBulkPost(communityId, request);
    }, 'joinBulk');
  }

  async leaveBulk(communityId: number, options: LeaveCommunityBulkOptions): Promise<CommunityResponseModel> {
    return this.handleApiCall(async () => {
      const request: CommunityLeaveModel = {
        memberUserIds: options.memberUserIds
      };
      
      return await this.mainApi.communitiesCommunityIdLeaveBulkPost(communityId, request);
    }, 'leaveBulk');
  }

  // Convenience methods for bulk operations
  async addUsers(communityId: number, userIds: number[]): Promise<CommunityResponseModel> {
    return this.joinBulk(communityId, { memberUserIds: userIds });
  }

  async removeUsers(communityId: number, userIds: number[]): Promise<CommunityResponseModel> {
    return this.leaveBulk(communityId, { memberUserIds: userIds });
  }

  async addUser(communityId: number, userId: number): Promise<CommunityResponseModel> {
    return this.addUsers(communityId, [userId]);
  }

  async removeUser(communityId: number, userId: number): Promise<CommunityResponseModel> {
    return this.removeUsers(communityId, [userId]);
  }

  // Sorting convenience methods
  async getAllByName(options: Omit<GetCommunitiesOptions, 'sort' | 'order'> = {}): Promise<PaginatedCommunities> {
    return this.getAll({ 
      ...options, 
      sort: CommunitySortParameter.Name,
      order: SortOrder.Asc 
    });
  }

  async getAllByMemberCount(options: Omit<GetCommunitiesOptions, 'sort' | 'order'> = {}): Promise<PaginatedCommunities> {
    return this.getAll({ 
      ...options, 
      sort: CommunitySortParameter.Size,
      order: SortOrder.Desc 
    });
  }

  // Helper methods for membership management workflows
  async transferUsers(fromCommunityId: number, toCommunityId: number, userIds: number[]): Promise<{
    leftFrom: CommunityResponseModel,
    joinedTo: CommunityResponseModel
  }> {
    const leftFrom = await this.removeUsers(fromCommunityId, userIds);
    const joinedTo = await this.addUsers(toCommunityId, userIds);
    
    return { leftFrom, joinedTo };
  }

  async transferUser(fromCommunityId: number, toCommunityId: number, userId: number): Promise<{
    leftFrom: CommunityResponseModel,
    joinedTo: CommunityResponseModel
  }> {
    return this.transferUsers(fromCommunityId, toCommunityId, [userId]);
  }

  // Current user convenience methods (clearer naming)
  async joinAsMember(communityId: number): Promise<CommunityResponseModel> {
    return this.join(communityId);
  }

  async leaveAsMember(communityId: number): Promise<CommunityResponseModel> {
    return this.leave(communityId);
  }
}