import { test as base, Page } from '@playwright/test';
import { NavigationPage } from '../pages/navigation-page';
import { RegisterPage } from '../pages/register-page';

class Pages {

  navigation: NavigationPage;
  register: RegisterPage

  constructor(page: Page) {
    
    this.navigation = new NavigationPage(page);
    this.register = new RegisterPage(page);
  }
}

const test = base.extend<{ pages: Pages }>({
  pages: async ({ page }, use) => {
    const pages = new Pages(page);
    await use(pages);
  },
});

export { test };