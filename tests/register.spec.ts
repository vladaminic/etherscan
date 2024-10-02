import { expect } from '@playwright/test';
import { test } from './pages';
import * as userData from "../data/register.data.json";

test.beforeEach(async ({ pages }) => {
    await pages.navigation.openRegisterPage();

    await pages.navigation.verifyRegisterPageIsLoaded();
    await pages.register.verifyUsernameInputVisibility();
  });



test('Valid signup test', async ({ pages }) => {
    const email = userData.email;
    const [mailName, domain] = email.split("@");
    const newEmail = `${mailName}+${Date.now()}@${domain}`;
    const newUsername = `${userData.username}${Date.now()}`
    await pages.register.fillSignupForm(newUsername, newEmail, newEmail, userData.password, userData.password);  
    await pages.register.acceptTerms();
    await pages.register.subscribeNewsletters();
    await pages.register.submitForm();
    await pages.register.verifySuccessMessageVisibility()
  });

