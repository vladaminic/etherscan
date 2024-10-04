## Test Cases

### 1. Valid Signup Test
**Description:** This test verifies the user registration process with valid input data. It checks whether the user can successfully sign up with a unique username and email.
- **Steps:**
  1. Open the registration page.
  2. Fill in the signup form with valid username, email, and password.
  3. Accept the terms and conditions.
  4. Subscribe to newsletters.
  5. Submit the form.
  6. Verify that the success message is visible.

### 2. Invalid Email Format Test
**Description:** This test checks the system's response to an incorrectly formatted email address during registration.
- **Steps:**
  1. Open the registration page.
  2. Fill in the email input with an invalid email format.
  3. Focus on the password input.
  4. Verify that the invalid email error message is displayed.

### 3. Mismatched Email Test
**Description:** This test verifies that the system correctly identifies when the confirmation email does not match the initial email input.
- **Steps:**
  1. Open the registration page.
  2. Fill in the email and confirmation email inputs with different values.
  3. Submit the form.
  4. Verify that the invalid email error message is displayed.

### 4. Mismatched Passwords Test
**Description:** This test checks that the system alerts the user when the password and confirmation password do not match.
- **Steps:**
  1. Open the registration page.
  2. Fill in the password and confirmation password inputs with different values.
  3. Focus on the confirmation email input.
  4. Verify that the password mismatch error message is displayed.

### 5. Empty Required Fields Test
**Description:** This test verifies that all required fields must be filled in to successfully submit the registration form.
- **Steps:**
  1. Open the registration page.
  2. Submit the form without filling any fields.
  3. Verify that error messages for all required fields are displayed.

### 6. Weak Password Test
**Description:** This test checks that the system validates the strength of the password and gives an error for weak passwords.
- **Steps:**
  1. Open the registration page.
  2. Fill in the password input with a weak password (less than the minimum required length).
  3. Fill in the confirmation password input with the same weak password.
  4. Focus on the confirmation email input.
  5. Verify that the weak password error message is displayed.

### 7. Unchecked Terms and Conditions Test
**Description:** This test verifies that users must accept the terms and conditions to successfully register.
- **Steps:**
  1. Open the registration page.
  2. Fill in all required fields without checking the terms and conditions.
  3. Submit the form.
  4. Verify that the terms and conditions error message is displayed.

### 8. Duplicate Username Test
**Description:** This test checks that the system correctly identifies when a username is already taken.
- **Steps:**
  1. Open the registration page.
  2. Fill in the signup form with an already existing username and a unique email.
  3. Accept the terms and conditions.
  4. Subscribe to newsletters.
  5. Submit the form.
  6. Verify that the duplicate username error message is displayed.

### 9. Invalid Username Characters Test
**Description:** This test checks that the system does not accept usernames containing invalid characters.
- **Steps:**
  1. Open the registration page.
  2. Fill in the username input with invalid characters (e.g., slashes).
  3. Focus on the email input.
  4. Verify that the invalid characters in username error message is displayed.

### 10. Short Username Test
**Description:** This test verifies that usernames must meet the minimum length requirement.
- **Steps:**
  1. Open the registration page.
  2. Fill in the username input with a short username (fewer than the minimum required characters).
  3. Focus on the email input.
  4. Verify that the short username error message is displayed.

### 11. Invalid Username with Spaces Test
**Description:** This test checks that the system does not accept usernames with leading or trailing spaces.
- **Steps:**
  1. Open the registration page.
  2. Fill in the username input with spaces.
  3. Focus on the email input.
  4. Verify that the invalid characters in username error message is displayed.

### 12. Password and Confirm Password Visibility Toggle Test
**Description:** This test verifies that users can toggle the visibility of their passwords while entering them.
- **Steps:**
  1. Open the registration page.
  2. Fill in the password and confirmation password inputs.
  3. Verify that both inputs are initially masked (type 'password').
  4. Toggle password visibility and verify that both inputs show the password (type 'text').
  5. Toggle back to verify that both inputs are masked again.

### 13. Navigate to Login Page via Sign In Link Test
**Description:** This test checks that users can navigate to the login page using the sign-in link from the registration page.
- **Steps:**
  1. Open the registration page.
  2. Click on the sign-in link.
  3. Verify that the login page is loaded.

### 14. Terms Page is Loaded Test
**Description:** This test verifies that the terms page is accessible from the registration page.
- **Steps:**
  1. Open the registration page.
  2. Click on the terms link.
  3. Verify that the terms page is loaded.

### 15. Unsubscribe Page is Loaded Test
**Description:** This test verifies that the unsubscribe page is accessible from the registration page.
- **Steps:**
  1. Open the registration page.
  2. Click on the unsubscribe link.
  3. Verify that the unsubscribe page is loaded.
