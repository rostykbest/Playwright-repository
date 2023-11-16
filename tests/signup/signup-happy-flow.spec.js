import { expect, test } from "@playwright/test";

test.describe("Signup happy flow", () => {
  test("Login", async ({ page }) => {
    const signUpName = "Ross";
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

    await nameInput.fill(signUpName);
    await lastNameInput.fill(signUpLastName);
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await repeatPasswordInput.fill(repeatPassword);
    await registerInput.click();
  });
});
