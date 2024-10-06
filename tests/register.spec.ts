import { test } from './pages';
import * as userData from "../data/register.data.json";
import { Util } from '../helper/util';
import { NavigationPage } from '../pages/navigation-page';
import { unsubscribe } from 'diagnostics_channel';

const email = Util.generateTimestampedUsername();
const username = Util.generateTimestampedUsername();

test.beforeEach(async ({ pages }) => {
  await pages.navigation.openRegisterPage();

  await pages.navigation.verifyRegisterPageIsLoaded();
  await pages.register.verifyUsernameInputVisibility();

});

test('Valid signup test', async ({ pages }) => {

  await pages.register.fillSignupForm(username, email, email, userData.password, userData.password);
  await pages.register.acceptTerms();
  await pages.register.subscribeNewsletters();
  await pages.register.submitForm();
  await pages.register.verifySuccessMessageVisibility()

});


test('Invalid email format test', async ({ pages }) => {

  await pages.register.fillEmailInput('invalid-mail');
  await pages.register.focusPasswordInput();
  await pages.register.verifyInvalidEmailError();

});


test('Mismatched email test', async ({ pages }) => {

  await pages.register.fillEmailInput(email);
  await pages.register.fillConfirmEmailInput(Util.generateTimestampedEmail());
  await pages.register.submitForm();
  await pages.register.verifyInvalidEmailError();

});

test('Mismatched passwords test', async ({ pages }) => {

  await pages.register.fillPasswordInput(userData.password);
  await pages.register.fillConfirmPasswordInput(`${userData.password}!`);
  await pages.register.focusConfirmEmailInput();
  await pages.register.verifyPasswordMismatchError();

});

test('Empty required fields test', async ({ pages }) => {

  await pages.register.submitForm();
  await pages.register.verifyAllRequiredFieldsErrors();

});

test('Weak password test', async ({ pages }) => {

  await pages.register.fillPasswordInput(userData.password.slice(0, 7));
  await pages.register.fillConfirmPasswordInput(userData.password.slice(0, 7));
  await pages.register.focusConfirmEmailInput();
  await pages.register.verifyWeakPasswordError();

});

test('Unchecked terms and conditions test', async ({ pages }) => {

  await pages.register.fillUsernameInput(userData.username);
  await pages.register.fillEmailInput(userData.email);
  await pages.register.fillConfirmEmailInput(userData.email)
  await pages.register.fillPasswordInput(userData.password);
  await pages.register.fillConfirmPasswordInput(userData.password);
  await pages.register.submitForm();
  await pages.register.verifyTermsAndConditionsError();

});

// test('Duplicate email test', async ({ pages }) => {

//   await pages.register.fillSignupForm(Util.generateTimestampedUsername(), email, email, userData.password, userData.password);
//   await pages.register.acceptTerms();
//   await pages.register.subscribeNewsletters();
//   await pages.register.submitForm();

// });

test('Duplicate username test', async ({ pages }) => {

  const newEmail = Util.generateTimestampedEmail();

  await pages.register.fillSignupForm(username, newEmail, newEmail, userData.password, userData.password);
  await pages.register.acceptTerms();
  await pages.register.subscribeNewsletters();
  await pages.register.submitForm();
  await pages.register.verifyDuplicateUsernameError();

});

test('Invalid username characters test', async ({ pages }) => {

  await pages.register.fillUsernameInput(`${userData.username}///`);
  await pages.register.focusEmailInput();
  await pages.register.verifyInvalidCharactersInUsernameError()

});

test('Short username test', async ({ pages }) => {

  await pages.register.fillUsernameInput(userData.username.slice(0, 4));
  await pages.register.focusEmailInput();
  await pages.register.verifyShortUsernameError();

});

test('Invalid username with spaces test', async ({ pages }) => {

  await pages.register.fillUsernameInput(`${userData.username} `);
  await pages.register.focusEmailInput();
  await pages.register.verifyInvalidCharactersInUsernameError();

});

test('Password and Confirm Password visibility toggle test', async ({ pages }) => {

  await pages.register.fillPasswordInput(userData.password);
  await pages.register.fillConfirmPasswordInput(userData.password);

  await pages.register.verifyPasswordInputType('password');
  await pages.register.verifyConfirmPasswordInputType('password');

  await pages.register.togglePasswordVisibility();

  await pages.register.verifyPasswordInputType('text');
  await pages.register.verifyConfirmPasswordInputType('text');

  await pages.register.toggleConfirmPasswordVisibility();

  await pages.register.verifyPasswordInputType('password');
  await pages.register.verifyConfirmPasswordInputType('password');

});


test('Navigate to login page via sign in link test', async ({ pages }) => {

  await pages.register.clickOnSignupLink();
  await pages.navigation.verifyLoginPageIsLoaded();

});

test('Terms page is loaded test', async ({ pages }) => {
  
  const popup = await pages.register.clickTermsLink();
  await new NavigationPage(popup).verifyTermsPageIsLoaded();

});

test('Unsubscribe page is loaded test', async ({ pages }) => {

  const popup = await pages.register.clickUnsubscribeLink();
  await new NavigationPage(popup).verifyUnsubscribePageIsLoaded();

});
