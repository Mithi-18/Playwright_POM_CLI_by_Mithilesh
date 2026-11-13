const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../data/users.json');

for (const user of users) {
  test(`login: ${user.username} should result in ${user.expected}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(user.username, user.password);

    if (user.expected === 'success') {
      await expect.poll(() => inventoryPage.isLoaded()).toBe(true);
      await expect(page).toHaveURL(/inventory\.html/);
    } else if (user.expected === 'error') {
      await expect.poll(async () => (await loginPage.getErrorMessage()).length > 0).toBe(true);
      expect(await loginPage.getErrorMessage()).not.toBe('');
    } else {
      throw new Error(`Unsupported expected result: ${user.expected}`);
    }
  });
}
