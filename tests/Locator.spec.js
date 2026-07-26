import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('//input[@id="login-button"]').click()
})


        