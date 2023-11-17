
import {expect, test} from "@playwright/test";
import {config} from "../../config/config.js";
import {USERS} from "../../src/data/dict/users.js";
import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js";
import {STORAGE_STATE_USER_PATH} from "../../src/data/storageState.js";

async function createUser(data){
    const res = await fetch(`${config.baseURL}api/auth/signup`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }

    })

    return res
}

test("Login as user and save storage state", async ({page, context})=>{
    const welcomePage = new WelcomePage(page)
    await welcomePage.navigate()
    const popup = await welcomePage.openSignInPopup()
    await popup.signIn({
        email: USERS.JOE_DOU.email,
        password: USERS.JOE_DOU.password
    })
    await context.storageState({
        path: STORAGE_STATE_USER_PATH
    })
})


test("Login as admin and save storage state", async ({page, context})=>{
    const welcomePage = new WelcomePage(page)
    await welcomePage.navigate()
    const popup = await welcomePage.openSignInPopup()
    await popup.signIn({
        email: USERS.JOE_DOU.email,
        password: USERS.JOE_DOU.password
    })
    await context.storageState({
        path: STORAGE_STATE_USER_PATH
    })
})