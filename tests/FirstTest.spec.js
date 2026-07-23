const {test,expect}=require('@playwright/test')

test('Open google page and check title',async({page})=>
    {
        await page.goto("https://google.com")
        const pageTitle=await page.title()
        const pageUrl=page.url()
        console.log("page title is:",pageTitle)
        console.log("page url is:",pageUrl)
        await expect(page).toHaveTitle(/Google/)
    }
)