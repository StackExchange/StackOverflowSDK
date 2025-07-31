import { handleApiCall } from './errors';

/**
 * Base client class that provides common functionality
 */
export abstract class BaseClient {
  /**
   * Wrapper for all API calls with consistent error handling
   */
  protected async handleApiCall<T>(
    apiCall: () => Promise<T>, 
    operation: string
  ): Promise<T> {
    return handleApiCall(apiCall, operation);
  }

  /**
   * Helper method to determine which API to use (Main vs Teams)
   */
  protected chooseApi<TMain, TTeams>(
    mainApi: TMain,
    teamsApi: TTeams | undefined,
    teamId?: string
  ): TMain | TTeams {
    return (teamId && teamsApi) ? teamsApi : mainApi;
  }
}