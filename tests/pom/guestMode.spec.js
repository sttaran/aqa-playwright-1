import {expect, test} from "@playwright/test";
import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js";
import { HEADER_LINKS} from "./fixtures/welcome.fixtures.js";

test.describe.only("Guest mode", ()=>{
    let page
    let welcomePage
    let garagePage

    test.beforeAll(async ({browser})=>{
       const context = await browser.newContext({
                viewport: {
                    width: 1920,
                    height: 1080
                }
       })

        page = await context.newPage()
        welcomePage = new WelcomePage(page)
        await welcomePage.open()
        await welcomePage.waitLoaded()
    })

    test.beforeEach(async ()=>{
        garagePage = await welcomePage.loginAsGuest()
    })

    test.afterEach(async ()=>{
        await garagePage.logout()
    })

    test('should contain all required links in header', async ()=>{
        const linksText = await garagePage.header.getLinksText()
        expect(linksText, "All required links should be present").toEqual(HEADER_LINKS)
    })
})