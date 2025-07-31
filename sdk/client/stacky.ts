import { BaseClient } from './shared';
import { StackyMainApi } from '../generated/dist';

export class StackyClient extends BaseClient {
  private mainApi: StackyMainApi;

  constructor(config: ReturnType<typeof import('../generated/dist/configuration').createConfiguration>) {
    super();
    this.mainApi = new StackyMainApi(config);
    // Note: Stacky API has no Teams API variant - only Main API
  }

  // Core stacky operation
  async getAsciiArt(): Promise<string> {
    return this.handleApiCall(async () => {
      return await this.mainApi.stackyGet();
    }, 'getAsciiArt');
  }

  // Alias methods for clarity
  async get(): Promise<string> {
    return this.getAsciiArt();
  }

  async test(): Promise<string> {
    return this.getAsciiArt();
  }

  async hello(): Promise<string> {
    return this.getAsciiArt();
  }

  // Utility methods for testing/debugging
  async testConnection(): Promise<{ success: boolean, art?: string, error?: string }> {
    try {
      const art = await this.getAsciiArt();
      return { success: true, art };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async ping(): Promise<boolean> {
    try {
      await this.getAsciiArt();
      return true;
    } catch {
      return false;
    }
  }

  // Fun wrapper methods
  async greet(): Promise<string> {
    const art = await this.getAsciiArt();
    return `Hello from Stack Overflow for Teams!\n\n${art}`;
  }

  async welcome(): Promise<string> {
    const art = await this.getAsciiArt();
    return `Welcome to the Stack Overflow for Teams API!\n\n${art}`;
  }

  // Development helper
  async logAsciiArt(): Promise<void> {
    try {
      const art = await this.getAsciiArt();
      console.log('Stacky ASCII Art:');
      console.log(art);
    } catch (error) {
      console.error('Failed to get Stacky ASCII art:', error);
    }
  }
}