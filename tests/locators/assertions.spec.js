import {expect, test} from "@playwright/test";

test.describe('Assertions @regression', ()=>{
    test('Regular assertions primitives', async ()=>{
        const actual = 1
        const expected = 2

        expect(actual).toBe(expected)

        expect([1,2,3]).toEqual([1,2,3])
    })

    test('Regular assertions complex types', async ()=>{

        expect.soft('111').not.toBe(111)

        expect([1,2,3]).toEqual([1,2,3])
    })
})

test.describe.skip('Assertions', ()=>{
    test('Web first assertions (page)', async ({page})=>{
        await page.goto('/')
        await expect(page).toHaveURL('https://qauto.forstudy.space/')
    })

    test('Web first assertions (locator)', async ({page})=>{
        await page.goto('/')

        const guestLoginButton = page.locator('.header-link', {hasText: 'Guest log in'})

        expect(await guestLoginButton.isVisible()).toBe(true)
        expect(await guestLoginButton.isEnabled()).toBe(true)

        await expect(guestLoginButton).toBeVisible()
        await expect(guestLoginButton).toBeEnabled()
    })
})