const {test,expect}=require('@playwright/test')

test('Open google page and check title',async({page})=>
    {
        await page.goto("https://google.com")
        const pageTitle=page.title
        const pageUrl=page.url
        console.log("page title is:",pageTitle)
        await expect(page).toHaveTitle(/Google/)
    }
)