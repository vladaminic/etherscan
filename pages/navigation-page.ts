import { expect, Page } from '@playwright/test';
import * as app from "../config/app.config.json";
import * as routes from "../config/routes.config.json";
import * as validation from "../data/validation.messages.json";

export class NavigationPage {
  private page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async openRegisterPage(): Promise<void> {
    await this.page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9'
    });
    await this.page.goto(`${app.baseUrl}${routes.register}`);

    await this.page.waitForLoadState('load'); 
  }


  async verifyRegisterPageIsLoaded() {
    await expect(this.page).toHaveTitle(validation.title.register); 
  }
}