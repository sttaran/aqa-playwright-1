import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByPlaceholder('What needs to be done?').fill('show how codegen works');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByPlaceholder('What needs to be done?').fill('buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.locator('li').filter({ hasText: 'show how codegen works' }).getByLabel('Toggle Todo').check();
    await page.locator('li').filter({ hasText: 'buy milk' }).getByLabel('Toggle Todo').check();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByLabel('Delete').click();
    await page.goto('https://www.google.com/search?q=htttps%3A%2F%2Fgoogle.com&oq=htttps%3A%2F%2Fgoogle.com&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEINzAzNGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8');
    await page.getByRole('combobox', { name: 'Пошук' }).click();
    await page.getByRole('combobox', { name: 'Пошук' }).click();
    await page.getByRole('combobox', { name: 'Пошук' }).click();
    await page.locator('#tsf div').filter({ hasText: 'htttps://google.comЩоб перейти до вікна пошуку, натисніть /htttps://google.com' }).nth(3).click();
    await page.getByRole('combobox', { name: 'Пошук' }).click({
        clickCount: 3
    });
    await page.getByRole('combobox', { name: 'Пошук' }).click();
    await page.getByRole('combobox', { name: 'Пошук' }).click();
    await page.getByRole('combobox', { name: 'Пошук' }).press('Control+a');
    await page.getByRole('combobox', { name: 'Пошук' }).fill('playwright');
    await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ... Playwright https://playwright.dev' }).click();
    await page.getByRole('link', { name: 'API', exact: true }).click();
    await page.getByLabel('Search').click();
    await page.getByPlaceholder('Search docs').fill('codege');
    await page.getByRole('link', { name: 'Running Codegen​ Generating tests' }).click();
});