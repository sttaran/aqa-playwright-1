import {expect, test} from "@playwright/test";
import WelcomePage from "../../../../src/pageObjects/welcomePage/WelcomePage.js";
import StringUtils from "../../../../src/Utils/StringUtils.js";
import {USERS} from "../../../../src/data/dict/users.js";

test.describe('Auth', ()=>{
    let page
    let welcomePage
    let signUpPopup

    const borderErrorColor = "rgb(220, 53, 69)"
    const password = `AQA1${StringUtils.randomString()}`
    const baseSignUpData = {
        name: "Stanislav",
        lastName: "Taran",
        email: "staran@test.com",
        password,
        rePassword: password
    }

    test.beforeAll(async ({browser})=>{
        const ctx = await browser.newContext()
        page = await ctx.newPage()
        welcomePage = new WelcomePage(page)
    })

    test.beforeEach(async ()=>{
        await welcomePage.navigate()
        signUpPopup = await welcomePage.openSignUpPopup()
    })

    test.describe('Name validation', ()=>{
        test('should show error message if name is empty', async ()=>{
            const signUpData = {
                ...baseSignUpData,
                name: ""
            }

            await signUpPopup.fill(signUpData)
            await expect(signUpPopup.nameInput, "Input should have red border if value is invalid").toHaveCSS('border-color', borderErrorColor)
            await expect(signUpPopup.nameInputError, "Error message should be valid").toHaveText("Name required")
        })

        test('should show error message if name is incorrect', async ()=>{
            const signUpData = {
                ...baseSignUpData,
                name: "st.$.com"
            }

            await signUpPopup.fill(signUpData)
            await expect(signUpPopup.nameInput, "Input should have red border if value is invalid").toHaveCSS('border-color', borderErrorColor)
            await expect(signUpPopup.nameInputError, "Error message should be valid").toHaveText("Name is invalid")
        })

        test('should show error message if name length is less than 2', async ()=>{
            const signUpData = {
                ...baseSignUpData,
                name: "s"
            }

            await signUpPopup.fill(signUpData)
            await expect(signUpPopup.nameInput, "Input should have red border if value is invalid").toHaveCSS('border-color', borderErrorColor)
            await expect(signUpPopup.nameInputError, "Error message should be valid").toHaveText("Name has to be from 2 to 20 characters long")
        })
    })

    test.describe('Email validation', ()=>{
        test('should show error message if email is empty', async ()=>{
            const signUpData = {
                ...baseSignUpData,
                email: ""
            }

            await signUpPopup.fill(signUpData)
            await expect(signUpPopup.emailInput, "Input should have red border if value is invalid").toHaveCSS('border-color', borderErrorColor)
            await expect(signUpPopup.emailInputError, "Error message should be valid").toHaveText("Email required")
        })

        test('should show error message if email has wrong format', async ()=>{
            const signUpData = {
                ...baseSignUpData,
                email: "st.$.com"
            }

            await signUpPopup.fill(signUpData)
            await expect(signUpPopup.emailInput, "Input should have red border if value is invalid").toHaveCSS('border-color', borderErrorColor)
            await expect(signUpPopup.emailInputError, "Error message should be valid").toHaveText("Email is incorrect")
        })

        test('should show alert when user with particular email already exists', async ()=>{
            const signUpData = {
                ...baseSignUpData,
                email: USERS.JOE_DOU.email
            }

            await signUpPopup.fill(signUpData)
            await signUpPopup.signUpButton.click()
            await expect(signUpPopup.alertMessage, "Error message should be valid").toHaveText("User already exists")
        })
    })

    test.describe('Successful registration', ()=>{
        test('should register new user', async ()=>{
            await signUpPopup.registerNewUser(baseSignUpData)
            // Todo check name in profile
        })
    })
})