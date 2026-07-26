import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{
    //enter url
    await page.goto('https://www.saucedemo.com/')
    //enter user-name
    await page.locator('id=user-name').fill('standard_user')
    //enter password
    await page.locator('#password').fill('secret_sauce')
    //click on login button
    await page.locator('//input[@id="login-button"]').click()
    //find url to have particular word
    await expect(page).toHaveURL(/inventory.html/)
    //check the title have text Products
    await expect(page.locator('.title')).toHaveText('Products')

    const productElement=await page.locator('.title')
    await expect(productElement).toBeVisible()
    //console.log(productElement)
    //count products and print
    const productNames=await page.$$('.inventory_item_name')
    
    const count=(await productNames).length
    //printing number of element
    console.log(`${count} are number of products`)
    //loop through each element and print the product name
    for(const product of productNames){
        const name=await product.textContent()
        console.log(name)
    }
})


        