// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Test", () => {
  test.beforeAll(async () => {
    //
  });

  test.beforeEach(async () => {
    //
  });

  test.afterEach(async () => {
    //
  });

  test.afterAll(async () => {
    //
  });

  test("has title1", async ({ page }) => {
    await test.step("Navigate to Playwrite site", async () => {
      await page.goto("https://playwright.dev/");
    });

    await test.step("check page title", async ({ page }) => {
      await expect(page).toHaveTitle(/Playwright/);
    });
  });

  test("has title2", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle(/'Hello'/);
  });

  test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });
});
