import {test} from "@playwright/test";

test.describe("Test", ()=>{
    test('Guest', async({page})=>{
        await page.goto('https://qauto.forstudy.space/');
        await page.getByRole('button', { name: 'Guest log in' }).click();
        await page.getByRole('button', { name: 'Add car' }).click();
        await page.getByText('BrandAudiBMWFordPorscheFiatModelTTR8Q7A6A8Mileagekm').click();
        await page.getByLabel('Brand').selectOption('1: 2');
        await page.getByLabel('Model').selectOption('12: 8');
        await page.getByText('Mileage').click();
        await page.getByLabel('Mileage').click();
        await page.getByLabel('Mileage').fill('12');
        await page.getByRole('button', { name: 'Add' }).click();
        await page.getByRole('link', { name: ' Fuel expenses' }).click();
        await page.getByRole('button', { name: 'Add an expense' }).click();
        await page.getByLabel('Number of liters').click();
        await page.getByLabel('Number of liters').fill('20');
        await page.getByLabel('Total cost').click();
        await page.getByLabel('Total cost').fill('110');
        await page.getByLabel('Mileage').click();
        await page.getByLabel('Mileage').fill('14');
        await page.getByRole('button', { name: 'Add' }).click();
        await page.getByRole('link', { name: ' Garage' }).click();
        await page.getByRole('button', { name: '' }).click();
        await page.getByLabel('Model').selectOption('3: 9');
        await page.getByRole('button', { name: 'Save' }).click();
    })
})
