
import {expect, test} from "@playwright/test";
import {config} from "../../config/config.js";
import {USERS} from "../../src/data/dict/users.js";

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

test("Create user", async ()=>{
    const res = await createUser(USERS.JOE_DOU)
    const body = await res.json()
})
