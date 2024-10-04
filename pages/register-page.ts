import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base-page';
import * as messages from "../data/validation.messages.json";
import * as selectors from "../selectors/register.selectors.json";


export class RegisterPage extends BasePage {

  private usernameInput: Locator;
  private emailInput: Locator;
  private confirmEmailInput: Locator;
  private passwordInput: Locator;
  private confirmPasswordInput: Locator;
  private termsCheckbox: Locator;
  private subscribeNewsletterCheckbox: Locator;
  private submitButton: Locator;

  private successMessage: Locator;
  private duplicateCredentialsError: Locator;

  private usernameErrorMessage: Locator;
  private emailErrorMessage: Locator;
  private confirmEmailErrorMessage: Locator;
  private passwordErrorMessage: Locator;
  private confirmPasswordErrorMessage: Locator;
  private acceptTermsErrorMessage: Locator;

  private passwordToggle: Locator;
  private confirmPasswordToggle: Locator;

  private signInHereLink: Locator;


  constructor(page: Page) {
    super(page);

    this.usernameInput = this.page.locator(selectors.signupForm.usernameInput);
    this.emailInput = this.page.locator(selectors.signupForm.emailInput);
    this.confirmEmailInput = this.page.locator(selectors.signupForm.confirmEmailInput);
    this.passwordInput = this.page.locator(selectors.signupForm.passwordInput);
    this.confirmPasswordInput = this.page.locator(selectors.signupForm.confirmPasswordInput);
    this.termsCheckbox = this.page.locator(selectors.signupForm.termsCheckbox);
    this.subscribeNewsletterCheckbox = this.page.locator(selectors.signupForm.subscribeNewsletterCheckbox);
    this.submitButton = this.page.locator(selectors.signupForm.submitButton);

    this.successMessage = this.page.locator(selectors.messages.successRegistrationMessage);
    this.duplicateCredentialsError = this.page.locator(selectors.messages.duplicateCredentialsErrorMessage);

    this.usernameErrorMessage = this.page.locator(selectors.messages.usernameErrorMessage);
    this.emailErrorMessage = this.page.locator(selectors.messages.emailErrorMessage);
    this.confirmEmailErrorMessage = this.page.locator(selectors.messages.confirmEmailErrorMessage);
    this.passwordErrorMessage = this.page.locator(selectors.messages.passwordErrorMessage);
    this.confirmPasswordErrorMessage = this.page.locator(selectors.messages.confirmPasswordErrorMessage);

    this.passwordToggle = this.page.locator(selectors.signupForm.passwordToggle);
    this.confirmPasswordToggle = this.page.locator(selectors.signupForm.confirmPasswordToggle);

    this.signInHereLink = this.page.locator(selectors.signupForm.signInHereLink);

  }

  async fillSignupForm(username: string, email: string, confirmEmail: string, password: string, confirmPassword: string) {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.confirmEmailInput.fill(confirmEmail);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async subscribeNewsletters() {
    await this.subscribeNewsletterCheckbox.check();
  }

  async submitForm() {
    await this.submitButton.click();
  }


  async fillUsernameInput(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillEmailInput(email: string) {
    await this.emailInput.fill(email);
  }

  async fillConfirmEmailInput(confirmEmail: string) {
    await this.confirmEmailInput.fill(confirmEmail);
  }

  async fillPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillConfirmPasswordInput(confirmPassword: string) {
    await this.passwordInput.fill(confirmPassword);
  }

  async togglePasswordVisibility(): Promise<void> {
    await this.passwordToggle.click();
  }

  async toggleConfirmPasswordVisibility(): Promise<void> {
    await this.confirmPasswordToggle.click();
  }

  async clickOnSignupLink(): Promise<void> {
    await this.page.locator(selectors.signupForm.signInHereLink).click();
  }

  async clickTermsLink(): Promise<Page> {

    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.locator(selectors.signupForm.termsLink).click(),
    ]);

    await newPage.waitForLoadState('load');

    return newPage;
  }

  async clickUnsubscribeLink(): Promise<Page> {

    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.locator(selectors.signupForm.unsubscribeLink).click(),
    ]);

    await newPage.waitForLoadState('load');

    return newPage;
  }

  async focusUsernameInput(): Promise<void> {
    await this.usernameInput.focus();
  }

  async focusEmailInput(): Promise<void> {
    await this.emailInput.focus();
  }

  async focusConfirmEmailInput(): Promise<void> {
    await this.confirmEmailInput.focus();
  }

  async focusPasswordInput(): Promise<void> {
    await this.passwordInput.focus();
  }

  async focusConfirmPasswordInput(): Promise<void> {
    await this.confirmPasswordInput.focus();
  }

  async focusTermsCheckbox(): Promise<void> {
    await this.termsCheckbox.focus();
  }

  async focusSubscribeNewsletterCheckbox(): Promise<void> {
    await this.subscribeNewsletterCheckbox.focus();
  }

  async verifyUsernameInputVisibility() {
    await expect(this.usernameInput).toBeVisible();
  }

  async verifySuccessMessageVisibility() {
    await expect(this.successMessage).toHaveText(messages.successMessages.registration);
  }

  async verifyInvalidEmailError() {
    await expect(this.emailErrorMessage).toHaveText(messages.errorMessages.invalidEmail);
  }

  async verifyEmailMismatchError() {
    await expect(this.confirmEmailErrorMessage).toHaveText(messages.errorMessages.emailMismatch);
  }

  async verifyPasswordMismatchError() {
    await expect(this.confirmPasswordErrorMessage).toHaveText(messages.errorMessages.passwordMismatch);
  }

  async verifyAllRequiredFieldsErrors() {
    await expect(this.usernameErrorMessage).toHaveText(messages.errorMessages.usernameEmptyField);
    await expect(this.emailErrorMessage).toHaveText(messages.errorMessages.emailEmptyField);
    await expect(this.confirmEmailErrorMessage).toHaveText(messages.errorMessages.confirmEmailEmptyField);
    await expect(this.passwordErrorMessage).toHaveText(messages.errorMessages.passwordEmptyField);
    await expect(this.confirmPasswordErrorMessage).toHaveText(messages.errorMessages.confirmPasswordEmptyField);
    await expect(this.acceptTermsErrorMessage).toHaveText(messages.errorMessages.acceptTeamsNotChecked);
  }

  async verifyWeakPasswordError() {
    await expect(this.passwordErrorMessage).toHaveText(messages.errorMessages.weakPassword);
    await expect(this.confirmPasswordErrorMessage).toHaveText(messages.errorMessages.weakPassword);
  }


  async verifyTermsAndConditionsError() {
    await expect(this.acceptTermsErrorMessage).toHaveText(messages.errorMessages.acceptTeamsNotChecked);
  }

  async verifyInvalidCharactersInUsernameError() {
    await expect(this.usernameErrorMessage).toHaveText(messages.errorMessages.invalidUsername);
  }

  async verifyShortUsernameError() {
    await expect(this.usernameErrorMessage).toHaveText(messages.errorMessages.shortUsername);
  }

  async verifyDuplicateUsernameError() {
    await expect(this.duplicateCredentialsError).toHaveText(messages.errorMessages.duplicateUsername);
  }

  async verifyPasswordInputType(expectedType: 'password' | 'text'): Promise<void> {
    const type = await this.passwordInput.getAttribute('type');
    await expect(type).toBe(expectedType);
  }

  async verifyConfirmPasswordInputType(expectedType: 'password' | 'text'): Promise<void> {
    const type = await this.confirmPasswordInput.getAttribute('type');
    await expect(type).toBe(expectedType);
  }

}