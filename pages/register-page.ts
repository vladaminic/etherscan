import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base-page';
import * as selectors from "../selectors/register.selectors.json";
import * as messages from "../data/validation.messages.json";


export class RegisterPage extends BasePage {

  private usernameInput: Locator;
  private emailInput: Locator;
  private confirmEmailInput: Locator;
  private passwordInput: Locator;
  private confirmPasswordInput: Locator;
  private termsCheckbox: Locator;
  private subscribeNewsletterCheckbox: Locator;
  private submitButton: Locator;
  private successMessages: Locator;

  constructor(page: Page) {
    super(page);
   
    this.usernameInput = page.locator(selectors.signupForm.usernameInput);
    this.emailInput = page.locator(selectors.signupForm.emailInput);
    this.confirmEmailInput = page.locator(selectors.signupForm.confirmEmailInput);
    this.passwordInput = page.locator(selectors.signupForm.passwordInput);
    this.confirmPasswordInput = page.locator(selectors.signupForm.confirmPasswordInput);
    this.termsCheckbox = page.locator(selectors.signupForm.termsCheckbox);
    this.subscribeNewsletterCheckbox = page.locator(selectors.signupForm.subscribeNewsletterCheckbox);
    this.submitButton = page.locator(selectors.signupForm.submitButton);
    this.successMessages = page.locator(selectors.signupForm.successMessages);
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

 async fillPasswordInput(password: string) {
    await this.passwordInput.fill(password);
 }

 async fillConfirmPasswordInput(confirmPassword: string) {
    await this.passwordInput.fill(confirmPassword);
 }

 async verifyUsernameInputVisibility(){
    await expect(this.usernameInput).toBeVisible(); // Ensure form is visible
 }

 async verifySuccessMessageVisibility() {
    await expect(this.successMessages).toHaveText(messages.successMessages.registration); // Ensure the success message is visible
}

//  async verifyEmailVerificationMessageVisibility(){
//     await expect(page.locator('text=Check your email to verify your account')).toBeVisible();
//  }
 
}