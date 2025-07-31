import { BaseClient } from './shared';
import { TagsMainApi, TagsTeamsApi } from '../generated/dist';
import { 
  PaginatedTags,
  TagResponseModel,
  SubjectMatterExpertRequestModel,
  SubjectMatterExpertResponseModel,
  TagWatchersResponseModel,
  TagsSortParameter,
  SortOrder
} from '../generated/dist';

export interface GetTagsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: TagsSortParameter;
  order?: SortOrder;
  partialName?: string;
  hasSmes?: boolean;
  hasSynonyms?: boolean;
}

export interface SetSubjectMatterExpertsOptions {
  userIds?: number[];
  userGroupIds?: number[];
}

export class TagClient extends BaseClient {
  private mainApi: TagsMainApi;
  private teamsApi?: TagsTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/dist/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new TagsMainApi(config);
    if (teamId) {
      this.teamsApi = new TagsTeamsApi(config);
    }
  }

  // Core tag operations
  async getAll(options: GetTagsOptions = {}): Promise<PaginatedTags> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order,
          options.partialName,
          options.hasSmes,
          options.hasSynonyms
        );
      }
      
      return await this.mainApi.tagsGet(
        options.page,
        options.pageSize,
        options.sort,
        options.order,
        options.partialName,
        options.hasSmes,
        options.hasSynonyms
      );
    }, 'getAll');
  }

  async get(tagId: number): Promise<TagResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdGet(tagId, this.teamId);
      }
      
      return await this.mainApi.tagsTagIdGet(tagId);
    }, 'get');
  }

  // Subject Matter Expert (SME) management
  async getSubjectMatterExperts(tagId: number): Promise<SubjectMatterExpertResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsGet(tagId, this.teamId);
      }
      
      return await this.mainApi.tagsTagIdSubjectMatterExpertsGet(tagId);
    }, 'getSubjectMatterExperts');
  }

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

  // SME User management
  async addSubjectMatterExpertUsers(tagId: number, userIds: number[]): Promise<SubjectMatterExpertResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(tagId, this.teamId, userIds);
      }
      
      return await this.mainApi.tagsTagIdSubjectMatterExpertsUsersPost(tagId, userIds);
    }, 'addSubjectMatterExpertUsers');
  }

  async removeSubjectMatterExpertUser(tagId: number, userId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId, userId, this.teamId);
        return;
      }
      
      await this.mainApi.tagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId, userId);
    }, 'removeSubjectMatterExpertUser');
  }

  // SME User Group management
  async addSubjectMatterExpertUserGroups(tagId: number, userGroupIds: number[]): Promise<SubjectMatterExpertResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(tagId, this.teamId, userGroupIds);
      }
      
      return await this.mainApi.tagsTagIdSubjectMatterExpertsUserGroupsPost(tagId, userGroupIds);
    }, 'addSubjectMatterExpertUserGroups');
  }

  async removeSubjectMatterExpertUserGroup(tagId: number, userGroupId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId, userGroupId, this.teamId);
        return;
      }
      
      await this.mainApi.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId, userGroupId);
    }, 'removeSubjectMatterExpertUserGroup');
  }

  // Tag watchers
  async getTagWatchers(tagId: number): Promise<TagWatchersResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamTagsTagIdTagWatchersGet(tagId, this.teamId);
      }
      
      return await this.mainApi.tagsTagIdTagWatchersGet(tagId);
    }, 'getTagWatchers');
  }

  // Search and filtering convenience methods
  async search(partialName: string, options: Omit<GetTagsOptions, 'partialName'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, partialName });
  }

  async getWithSmes(options: Omit<GetTagsOptions, 'hasSmes'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, hasSmes: true });
  }

  async getWithoutSmes(options: Omit<GetTagsOptions, 'hasSmes'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, hasSmes: false });
  }

  async getWithSynonyms(options: Omit<GetTagsOptions, 'hasSynonyms'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, hasSynonyms: true });
  }

  async getWithoutSynonyms(options: Omit<GetTagsOptions, 'hasSynonyms'> = {}): Promise<PaginatedTags> {
    return this.getAll({ ...options, hasSynonyms: false });
  }

  // Sorting convenience methods  
  async getAllByName(options: Omit<GetTagsOptions, 'sort' | 'order'> = {}): Promise<PaginatedTags> {
    return this.getAll({ 
      ...options, 
      sort: TagsSortParameter.Name,
      order: SortOrder.Asc 
    });
  }

  async getAllByCreationDate(options: Omit<GetTagsOptions, 'sort' | 'order'> = {}): Promise<PaginatedTags> {
    return this.getAll({ 
      ...options, 
      sort: TagsSortParameter.CreationDate,
      order: SortOrder.Desc 
    });
  }

  async getAllByPostCount(options: Omit<GetTagsOptions, 'sort' | 'order'> = {}): Promise<PaginatedTags> {
    return this.getAll({ 
      ...options, 
      sort: TagsSortParameter.PostCount,
      order: SortOrder.Desc 
    });
  }

  // Convenience methods for single user/group SME operations
  async addSubjectMatterExpertUser(tagId: number, userId: number): Promise<SubjectMatterExpertResponseModel> {
    return this.addSubjectMatterExpertUsers(tagId, [userId]);
  }

  async addSubjectMatterExpertUserGroup(tagId: number, userGroupId: number): Promise<SubjectMatterExpertResponseModel> {
    return this.addSubjectMatterExpertUserGroups(tagId, [userGroupId]);
  }

  // Bulk SME operations
  async replaceAllSubjectMatterExperts(tagId: number, userIds: number[] = [], userGroupIds: number[] = []): Promise<SubjectMatterExpertResponseModel> {
    return this.setSubjectMatterExperts(tagId, { userIds, userGroupIds });
  }

  async clearAllSubjectMatterExperts(tagId: number): Promise<SubjectMatterExpertResponseModel> {
    return this.setSubjectMatterExperts(tagId, { userIds: [], userGroupIds: [] });
  }

  // Combined SME management
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

  // Tag discovery helpers
  async findTagsByName(nameQuery: string, limit?: number): Promise<PaginatedTags> {
    return this.search(nameQuery, { 
      pageSize: limit as any || 30,
      sort: TagsSortParameter.Name,
      order: SortOrder.Asc 
    });
  }

  async getRecentTags(limit?: number): Promise<PaginatedTags> {
    return this.getAllByCreationDate({ 
      pageSize: limit as any || 30 
    });
  }

  async getMostUsedTags(limit?: number): Promise<PaginatedTags> {
    return this.getAllByPostCount({ 
      pageSize: limit as any || 50 
    });
  }
}