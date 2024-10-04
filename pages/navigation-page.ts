import { expect, Page } from '@playwright/test';
import * as app from "../config/app.config.json";
import * as routes from "../config/routes.config.json";
import * as validation from "../data/validation.messages.json";
import { BasePage } from './base-page';

export class NavigationPage extends BasePage {

  constructor(page: Page) {

    super(page);
  }

  async openRegisterPage(): Promise<void> {
    await this.page.goto(`${app.baseUrl}${routes.register}`);
    await this.page.waitForLoadState('load');
  }

  async openLoginPage(): Promise<void> {
    await this.page.goto(`${app.baseUrl}${routes.login}`);
    await this.page.waitForLoadState('load');
  }


  async verifyRegisterPageIsLoaded() {
    
    const currentUrl = await this.page.url();
    expect(currentUrl).toContain(`${app.baseUrl}${routes.register}`);
    await expect(this.page).toHaveTitle(validation.title.register);
  }
  
  async verifyLoginPageIsLoaded() {
    const currentUrl = await this.page.url();
    await expect(currentUrl).toContain(`${app.baseUrl}${routes.login}`);
    await expect(this.page).toHaveTitle(validation.title.login);
  }

  async verifyTermsPageIsLoaded() {
    const currentUrl = await this.page.url();
    const title = await this.page.title();
    await expect(currentUrl).toContain(`${app.baseUrl}${routes.terms}`);
    await expect(title).toContain(validation.title.terms);
  }

  async verifyUnsubscribePageIsLoaded() {
    const currentUrl = await this.page.url();
    const title = await this.page.title();
    console.log(currentUrl)
    await expect(currentUrl).toContain(`${app.infoUrl}${routes.unsubscribe}`);
    await expect(title).toContain(validation.title.unsubscribe);
  }

}