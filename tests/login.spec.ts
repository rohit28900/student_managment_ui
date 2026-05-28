import { test, expect } from "@playwright/test";

test("login and navigate to all pages", async ({ page }) => {
  // Open login page
  await page.goto("http://localhost:3000/login");

  // Fill email
  await page.fill(
    'input[type="email"]',
    "rohit@test.com"
  );

  // Fill password
  await page.fill(
    'input[type="password"]',
    "test123"
  );

  // Click login
  await page.click('button[type="submit"]');

  // Wait for dashboard
  await page.waitForURL(
    "http://localhost:3000/dashboard"
  );

  // Dashboard verification
  await expect(
    page.getByRole("heading", {
      name: "Dashboard",
      exact: true,
    })
  ).toBeVisible();

  // =========================
  // STUDENTS PAGE
  // =========================

  await page.getByRole("link", {
    name: "Students",
  }).click();

  await page.waitForURL(
    "http://localhost:3000/students"
  );

  await expect(
    page.getByRole("heading", {
      name: "Students",
      exact: true,
    })
  ).toBeVisible();

  // =========================
  // COURSES PAGE
  // =========================

  await page.getByRole("link", {
    name: "Courses",
  }).click();

  await page.waitForURL(
    "http://localhost:3000/course"
  );

  await expect(
    page.getByRole("heading", {
      name: "Courses",
      exact: true,
    })
  ).toBeVisible();

  // =========================
  // ATTENDANCE PAGE
  // =========================

  await page.getByRole("link", {
    name: "Attendance",
  }).click();

  await page.waitForURL(
    "http://localhost:3000/attendance"
  );

  await expect(
    page.getByRole("heading", {
      name: "Attendance",
      exact: true,
    })
  ).toBeVisible();

  // =========================
  // PROFILE PAGE
  // =========================

  await page.getByRole("link", {
    name: "Profile",
  }).click();

  await page.waitForURL(
    "http://localhost:3000/profile"
  );

  await expect(
    page.getByRole("heading", {
      name: "Profile",
      exact: true,
    })
  ).toBeVisible();

  // =========================
  // SETTINGS PAGE
  // =========================

  await page.getByRole("link", {
    name: "Settings",
  }).click();

  await page.waitForURL(
    "http://localhost:3000/settings"
  );

  await expect(
    page.getByRole("heading", {
      name: "Settings",
      exact: true,
    })
  ).toBeVisible();
});