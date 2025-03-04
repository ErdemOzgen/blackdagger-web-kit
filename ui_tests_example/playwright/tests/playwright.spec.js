import { test, expect } from '../fixtures/fixtures.ts';

// Constants
const BASE_URL = 'https://demo.testfire.net/';
const EXTENSION_PATH = '/bptk/browser/rattacker.html';
const HIGH_TIMEOUT = 7000;
const LOW_TIMEOUT = 2000;

async function clearCookiesAndNavigate(context, page) {
  await context.clearCookies();
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
}

async function openExtensionPage(context, extensionId) {
  const extensionPage = await context.newPage();
  await extensionPage.goto(`chrome-extension://${extensionId}${EXTENSION_PATH}`, { waitUntil: 'domcontentloaded' });
  return extensionPage;
}

async function login(page) {
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.waitForTimeout(HIGH_TIMEOUT);
  await page.locator('#uid').fill('admin');
  await page.locator('#uid').press('Tab');
  await page.locator('#passw').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();

}

async function transferFunds(page) {
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.waitForTimeout(HIGH_TIMEOUT);
  await page.locator('#toAccount').selectOption('800001');
  await page.locator('#transferAmount').fill('1');
  await page.getByRole('button', { name: 'Transfer Money' }).click();
}

async function runScan(extensionPage,page) {
  await extensionPage.bringToFront();
  await extensionPage.getByText('Scan in runtime', { exact: true }).click();
  await extensionPage.getByText('Run scan').click();

}

async function verifyScanResults(extensionPage,page) {
page
  const highCount = await extensionPage.locator('#high_count').innerText();
  const mediumCount = await extensionPage.locator('#medium_count').innerText();
  const lowCount = await extensionPage.locator('#low_count').innerText();

  console.log("high count is " + highCount);
  console.log("medium count is " + mediumCount);
  console.log("low count is " + lowCount);

  await expect(highCount).toEqual("2");
  await expect(mediumCount).toEqual("0");
  await expect(lowCount).toEqual("10");
}

// Test Setup
test.beforeEach(async ({ page, context }) => {
  await clearCookiesAndNavigate(context, page);
});

// Test Case
test('initial login test', async ({ page, extensionId, context }) => {
  await page.waitForTimeout(HIGH_TIMEOUT);

  const extensionPage = await openExtensionPage(context, extensionId);
  await page.bringToFront();
  await page.waitForTimeout(LOW_TIMEOUT);
  await runScan(extensionPage);
  await page.bringToFront();

  await page.waitForTimeout(LOW_TIMEOUT);
  await page.goto(BASE_URL, { waitUntil: 'commit' });
  
  await page.waitForTimeout(LOW_TIMEOUT);
  await login(page);

  await page.waitForTimeout(LOW_TIMEOUT);
  await transferFunds(page);

  await page.waitForTimeout(7000);
  await extensionPage.goto(`chrome-extension://${extensionId}${EXTENSION_PATH}`, { waitUntil: 'domcontentloaded' });
  
  await extensionPage.waitForTimeout(6000);
  await verifyScanResults(extensionPage);

  await context.close();
});
