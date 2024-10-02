import { Page } from "@playwright/test";

export class BasePage {
  constructor(public page: Page) {
    this.page = page;
  }
}

export { expect, Page } from "@playwright/test";