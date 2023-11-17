import {test as base} from "@playwright/test"
import ProfilePage from "../pageObjects/profilePage/ProfilePage.js";
import WelcomePage from "../pageObjects/welcomePage/WelcomePage.js";
import {USERS} from "../data/dict/users.js";
import {STORAGE_STATE_USER_PATH} from "../data/storageState.js";

export const test = base.extend({
    headerLinks: ['Garage', 'Fuel expenses', 'Instructions'],
    userInfo: USERS.JOE_DOU,
    userProfilePage: async ({browser}, use)=>{
        const ctx = await browser.newContext({
            storageState: STORAGE_STATE_USER_PATH
        })
        const page = await ctx.newPage()
        const profilePage = new ProfilePage(page)
        await profilePage.navigate()

        // before test

        await use(profilePage)

        //after test
    },
    managerProfilePage: async ({page}, use)=>{
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        const popup = await welcomePage.openSignInPopup()
        await popup.signIn({
            email: USERS.JOE_DOU.email, // manager credentials
            password: USERS.JOE_DOU.password
        })

        const profilePage = new ProfilePage(page)
        await profilePage.navigate()
        await use(profilePage)
    },
}
)
