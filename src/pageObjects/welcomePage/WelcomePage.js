import BasePage from "../BasePage.js";
import {expect} from "@playwright/test";
import GaragePage from "../panel/garagePage/GaragePage.js";

export default class WelcomePage extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('button', {hasText: 'Guest log in'}));
    }

    async loginAsGuest(){
        await this.header.guestLoginButton.click()
        await expect(this._page).toHaveURL('/panel/garage')
        return new GaragePage(this._page)
    }
}
