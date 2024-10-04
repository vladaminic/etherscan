# Etherscan Testing Project

This project is designed for testing the Etherscan application using Playwright. It implements a structured approach to automate user registration and validation processes.

## Captcha Automation Limitation

Please note that the captcha implemented on the Etherscan website cannot be automated due to its design. As a result, it is not possible to register users through automated tests. Some test cases may include steps as if the captcha does not exist; however, these tests will ultimately fail due to redirection and validation processes associated with the captcha. To run the tests successfully, it is necessary to execute them in an environment where the captcha is disabled.

## Test Cases Location

The test cases for the Etherscan Testing Project are documented in the [`TEST_CASES`](./TEST_CASES.md) file. Each test case is outlined with steps that describe the actions taken during the test. 

## Project Structure

```
etherscan/
├── config/
│   ├── app.config.json            # Configuration settings for the application.
│   └── routes.config.json         # Configuration for application routes.
├── data/
│   ├── register.data.json         # Test data for user registration.
│   └── validation.messages.json    # Validation error messages used in tests.
├── helper/
│   ├── util.ts                     # Utility functions for generating test data for user registration.
├── package.json                    # Project metadata and dependencies.
├── package-lock.json               # Lock file for exact dependency versions.
├── pages/
│   ├── base-page.ts               # Base page class with common functionality for all pages.
│   ├── navigation-page.ts         # Navigation page class for handling navigation-related actions.
│   └── register-page.ts           # Page class specifically for user registration actions.
├── playwright.config.ts            # Configuration file for Playwright settings and options.
├── selectors/
│   └── register.selectors.json     # JSON file containing selectors used in the registration tests.
└── tests/
    ├── pages.ts                    # Page object model tests for various pages.
    └── register.spec.ts            # Specification file for registration tests.
```

Here's a section you can add to your README file for installing and running Playwright in your Etherscan Testing Project:

```markdown
## Installation and Running Playwright Tests

To set up and run Playwright tests, follow the steps below:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version 14 or later is recommended).
- It’s also recommended to have [npm](https://www.npmjs.com/) (Node Package Manager) installed, which usually comes with Node.js.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vladaminic/etherscan.git
   cd etherscan
   ```

2. **Install dependencies**:
   Run the following command to install Playwright and other project dependencies:
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**:
   After installing the dependencies, you need to install the browsers required for testing. Run:
   ```bash
   npx playwright install
   ```

### Running Tests

To execute the tests, use the following command:
```bash
npx playwright test
```

### Running Tests with Specific Options

You can run tests with additional options:

- **Run a specific test file**:
   ```bash
   npx playwright test tests/register.spec.ts
   ```

- **Run tests in headed mode** (to see the browser UI):
   ```bash
   npx playwright test --headed
   ```

- **Generate a report after the tests**:
   ```bash
   npx playwright test --reporter=html
   ```

The report will be generated in the `test-results` directory, and you can open it in your browser.

### Additional Configuration

You can customize Playwright configuration options in the `playwright.config.ts` file, such as setting base URLs, timeout settings, and global setup or teardown processes.

