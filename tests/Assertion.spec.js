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
    const errorMessage=page.locator('[data-test="error"]')
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

    expect(usernameInput).toHaveAttribute('placeholder','Username')

    //3.text and value assertion
    await usernameInput.fill('standard_user')
    await expect(usernameInput).toHaveValue('standard_user')

    await passwordInput.fill('secret_sauce')
    await expect(passwordInput).toHaveValue('secret_sauce')

    //verify error message to be hidden befre login attempt
    await expect(errorMessage).toBeHidden()

    await loginButton.click()
    await expect(page).toHaveURL(/inventory/)
    const productTitle=page.locator('.title')
    await expect(productTitle).toBeVisible()
    await expect(productTitle).toHaveText('Products')

    //class assertion
    await expect(productTitle).toHaveClass('title')

    //id assertion-verify shoppig cart id value
    const cartIcon=page.locator('.shopping_cart_container')
    await expect(cartIcon).toHaveId('shopping_cart_container')

    //count-assertion
    //verify total number of product displayed
    const productItems=page.locator('.inventory_item_name')
    await expect(productItems).toHaveCount(6)

    //Screenshot visual assertion
    //locate web element sauce lab bag pack

    const bagitem=page.getByAltText('Sauce labs Backpack')
    await expect(bagitem).toHaveScreenshot('bagItem.png')
 })