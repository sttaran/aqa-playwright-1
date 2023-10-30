import {expect, test} from "@playwright/test";


test.describe.skip("Auth", ()=>{
    test.skip("locator 1", async ({page})=>{
        await page.goto('/')
        // const rightHeaderBlock = page.locator('.header_right', {has: guestLoginButton})
        // const guestLoginButton = page.locator('.header-link', {hasText: 'Guest log in'})
        const guestLoginButton = page.locator('.header-link').filter({hasText: 'Guest log in'})

        await guestLoginButton.click()
    })

    test.skip("locator 2", async ({page})=>{
       await page.goto('/')
        const rightHeaderBlock = page.locator('.header_right')
       const guestLoginButton = rightHeaderBlock.locator('.header-link', {hasText: 'Guest log in'})

        await guestLoginButton.click()
    })

    test("Should display all navigation buttons", async ({page})=>{
        await page.goto('/')
        const expectedButtonsText = ['Home', 'About', 'Contacts', 'Guest log in']
        const buttons = page.locator('.header-link')

        const actualButtons = []

        // const count = await buttons.count()
        // for (let i = 0; i < count; i++) {
        //     const text = await buttons.nth(i).innerText()
        //     actualButtons.push(text)
        // }

        for (const buttonItem of await buttons.all()) {
            actualButtons.push(await buttonItem.innerText())
        }


        expect(actualButtons).toEqual(expectedButtonsText)
    })

    test("Actions", async ({page})=>{
      const input = page.locator('input')

        await input.fill('hello', { force: true })
        await input.pressSequentially('hello')
        await input.pressSequentially('hello')
        await input.press('Enter')

        await input.clear()
        await input.type('hello')

        // same for checkboxes
        const radio = page.locator('input')
        await radio.check()
        await radio.uncheck()


        const button = page.locator('button')
        await button.click()
        await button.dblclick()

        //
        const select = page.locator('select')
        await select.selectOption('blue')

        //
        const text = await button.innerText()
    })
})


