import { expect, test } from "@playwright/test";

test.describe("Signup negative testcases", () => {
  test("Signup all fields empty", async ({ page }) => {
    const signUpName = "";
    const signUpLastName = "";
    const email = "";
    const password = "";
    const repeatPassword = "";

    await page.goto("/");

    const signUpButton = page.locator(
      "button.hero-descriptor_btn.btn.btn-primary"
    );
    await expect(
      signUpButton,
      "Sign up button should be visible"
    ).toBeVisible();
    await expect(
      signUpButton,
      "Sign up button should be enabled"
    ).toBeEnabled();

    await signUpButton.click();

    const popup = page.locator("div.modal-content");
    await expect(popup, "Sign up popup should be visible").toBeVisible();

    const nameInput = popup.locator("input#signupName");
    const lastNameInput = popup.locator("input#signupLastName");
    const emailInput = popup.locator("input#signupEmail");
    const passwordInput = popup.locator("input#signupPassword");
    const repeatPasswordInput = popup.locator("input#signupRepeatPassword");
    const registerInput = popup.locator(".btn-primary");

    await nameInput.fill(signUpName);
    await lastNameInput.fill(signUpLastName);
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await repeatPasswordInput.fill(repeatPassword);
    await passwordInput.fill(password);
    await registerInput.isDisabled();

    const nameEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(1) div.invalid-feedback p"
    );

    const lastnameEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(2) div.invalid-feedback p"
    );
    const emailEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(3) div.invalid-feedback p"
    );
    const passwordEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(4) div.invalid-feedback p"
    );
    const repeatPasswordEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(5) div.invalid-feedback p"
    );

    await expect(
      nameEmptyErrorMessage,
      "Error message should be displayed when name is invalid"
    ).toHaveText("Name required");

    await expect(
      lastnameEmptyErrorMessage,
      "Error message should be displayed when lastname is invalid"
    ).toHaveText("Last name required");

    await expect(
      emailEmptyErrorMessage,
      "Error message should be displayed when email is invalid"
    ).toHaveText("Email required");
    await expect(
      passwordEmptyErrorMessage,
      "Error message should be displayed when password is invalid"
    ).toHaveText("Password required");
    await expect(
      repeatPasswordEmptyErrorMessage,
      "Error message should be displayed when repeatPassword is invalid"
    ).toHaveText("Re-enter password required");
  });

  test("Signup Name field empty", async ({ page }) => {
    const signUpName = "";
    const signUpLastName = "Geller";
    const email = "aqa-ross@test.com";
    const password = "12345678Qwerty";
    const repeatPassword = "12345678Qwerty";

    await page.goto("/");

    const signUpButton = page.locator(
      "button.hero-descriptor_btn.btn.btn-primary"
    );
    await expect(
      signUpButton,
      "Sign up button should be visible"
    ).toBeVisible();
    await expect(
      signUpButton,
      "Sign up button should be enabled"
    ).toBeEnabled();

    await signUpButton.click();

    const popup = page.locator("div.modal-content");
    await expect(popup, "Sign up popup should be visible").toBeVisible();

    const nameInput = popup.locator("input#signupName");
    const lastNameInput = popup.locator("input#signupLastName");
    const emailInput = popup.locator("input#signupEmail");
    const passwordInput = popup.locator("input#signupPassword");
    const repeatPasswordInput = popup.locator("input#signupRepeatPassword");
    const registerInput = popup.locator(".btn-primary");
    const nameEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(1) div.invalid-feedback p"
    );

    await nameInput.fill(signUpName);
    await lastNameInput.fill(signUpLastName);
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await repeatPasswordInput.fill(repeatPassword);
    await expect(
      nameEmptyErrorMessage,
      "Error message should be displayed when name is invalid"
    ).toHaveText("Name required");
    await registerInput.isDisabled();
  });

  test("Signup Lastname field empty", async ({ page }) => {
    const signUpName = "Ross";
    const signUpLastName = "";
    const email = "aqa-ross@test.com";
    const password = "12345678Qwerty";
    const repeatPassword = "12345678Qwerty";

    await page.goto("/");

    const signUpButton = page.locator(
      "button.hero-descriptor_btn.btn.btn-primary"
    );
    await expect(
      signUpButton,
      "Sign up button should be visible"
    ).toBeVisible();
    await expect(
      signUpButton,
      "Sign up button should be enabled"
    ).toBeEnabled();

    await signUpButton.click();

    const popup = page.locator("div.modal-content");
    await expect(popup, "Sign up popup should be visible").toBeVisible();

    const nameInput = popup.locator("input#signupName");
    const lastNameInput = popup.locator("input#signupLastName");
    const emailInput = popup.locator("input#signupEmail");
    const passwordInput = popup.locator("input#signupPassword");
    const repeatPasswordInput = popup.locator("input#signupRepeatPassword");
    const registerInput = popup.locator(".btn-primary");
    const lastnameEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(2) div.invalid-feedback p"
    );

    await nameInput.fill(signUpName);
    await lastNameInput.fill(signUpLastName);
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await repeatPasswordInput.fill(repeatPassword);
    await expect(
      lastnameEmptyErrorMessage,
      "Error message should be displayed when lastname is invalid"
    ).toHaveText("Last name required");
    await registerInput.isDisabled();
  });

  test("Signup email field empty", async ({ page }) => {
    const signUpName = "Ross";
    const signUpLastName = "Geller";
    const email = "";
    const password = "12345678Qwerty";
    const repeatPassword = "12345678Qwerty";

    await page.goto("/");

    const signUpButton = page.locator(
      "button.hero-descriptor_btn.btn.btn-primary"
    );
    await expect(
      signUpButton,
      "Sign up button should be visible"
    ).toBeVisible();
    await expect(
      signUpButton,
      "Sign up button should be enabled"
    ).toBeEnabled();

    await signUpButton.click();

    const popup = page.locator("div.modal-content");
    await expect(popup, "Sign up popup should be visible").toBeVisible();

    const nameInput = popup.locator("input#signupName");
    const lastNameInput = popup.locator("input#signupLastName");
    const emailInput = popup.locator("input#signupEmail");
    const passwordInput = popup.locator("input#signupPassword");
    const repeatPasswordInput = popup.locator("input#signupRepeatPassword");
    const registerInput = popup.locator(".btn-primary");
    const emailEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(3) div.invalid-feedback p"
    );

    await nameInput.fill(signUpName);
    await lastNameInput.fill(signUpLastName);
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await repeatPasswordInput.fill(repeatPassword);
    await expect(
      emailEmptyErrorMessage,
      "Error message should be displayed when email is invalid"
    ).toHaveText("Email required");
    await registerInput.isDisabled();
  });

  test("Signup password field empty", async ({ page }) => {
    const signUpName = "Ross";
    const signUpLastName = "Geller";
    const email = "aqa-ross@test.com";
    const password = "";
    const repeatPassword = "12345678Qwerty";

    await page.goto("/");

    const signUpButton = page.locator(
      "button.hero-descriptor_btn.btn.btn-primary"
    );
    await expect(
      signUpButton,
      "Sign up button should be visible"
    ).toBeVisible();
    await expect(
      signUpButton,
      "Sign up button should be enabled"
    ).toBeEnabled();

    await signUpButton.click();

    const popup = page.locator("div.modal-content");
    await expect(popup, "Sign up popup should be visible").toBeVisible();

    const nameInput = popup.locator("input#signupName");
    const lastNameInput = popup.locator("input#signupLastName");
    const emailInput = popup.locator("input#signupEmail");
    const passwordInput = popup.locator("input#signupPassword");
    const repeatPasswordInput = popup.locator("input#signupRepeatPassword");
    const registerInput = popup.locator(".btn-primary");
    const passwordEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(4) div.invalid-feedback p"
    );

    await nameInput.fill(signUpName);
    await lastNameInput.fill(signUpLastName);
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await repeatPasswordInput.fill(repeatPassword);
    await expect(
      passwordEmptyErrorMessage,
      "Error message should be displayed when password is invalid"
    ).toHaveText("Password required");
    await registerInput.isDisabled();
  });

  test("Signup repeatPassword field empty", async ({ page }) => {
    const signUpName = "Ross";
    const signUpLastName = "Geller";
    const email = "aqa-ross@test.com";
    const password = "12345678Qwerty";
    const repeatPassword = "";

    await page.goto("/");

    const signUpButton = page.locator(
      "button.hero-descriptor_btn.btn.btn-primary"
    );
    await expect(
      signUpButton,
      "Sign up button should be visible"
    ).toBeVisible();
    await expect(
      signUpButton,
      "Sign up button should be enabled"
    ).toBeEnabled();

    await signUpButton.click();

    const popup = page.locator("div.modal-content");
    await expect(popup, "Sign up popup should be visible").toBeVisible();

    const nameInput = popup.locator("input#signupName");
    const lastNameInput = popup.locator("input#signupLastName");
    const emailInput = popup.locator("input#signupEmail");
    const passwordInput = popup.locator("input#signupPassword");
    const repeatPasswordInput = popup.locator("input#signupRepeatPassword");
    const registerInput = popup.locator(".btn-primary");
    const repeatPasswordEmptyErrorMessage = popup.locator(
      "div.modal-body div.form-group:nth-child(5) div.invalid-feedback p"
    );

    await nameInput.fill(signUpName);
    await lastNameInput.fill(signUpLastName);
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await repeatPasswordInput.fill(repeatPassword);
    await passwordInput.fill(password);
    await expect(
      repeatPasswordEmptyErrorMessage,
      "Error message should be displayed when repeatPassword is invalid"
    ).toHaveText("Re-enter password required");
    await registerInput.isDisabled();
  });
});
