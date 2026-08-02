import {test,expect} from "@playwright/test"
 test ('AssertionTest',async({page})=>{
    //open url
    await page.goto("https://www.saucedemo.com/")
    //1.page level assertion
    //varify page titile
    await expect(page).toHaveTitle("Swag Labs")
    //varify page url
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    //2.element state assertions
    //locate username and password
    const usernameInput=page.locator('#user-name')
    const passwordInput=page.locator('#password')
    const loginButton=page.locator('#login-button')
    //varify input field username and password are visible
    await expect(usernameInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
    await expect(loginButton).toBeVisible()

    //verify if webelements are enabled and editable
    await expect(usernameInput).toBeEnabled()
    await expect(passwordInput).toBeEnabled()
    await expect(loginButton).toBeEnabled()

    await expect(usernameInput).toBeEditable()
    await expect(passwordInput).toBeEditable()
    //await expect(loginButton).toBeEditable()

    //3.text and value assertion
    await usernameInput.fill('standard_user')
    await expect(usernameInput).toHaveValue('standard_user')

    await passwordInput.fill('secret_sauce')
    await expect(passwordInput).toHaveValue('secret_sauce')

    await loginButton.click()
    await expect(page).toHaveURL(/inventory/)
    const productTitle=page.locator('.title')
    await expect(productTitle).toBeVisible()
    await expect(productTitle).toHaveText('Products')
 })