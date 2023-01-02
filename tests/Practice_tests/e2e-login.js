import app from '../page-objects/pages/app'
import base from '../page-objects/pages/base'
import loginPage from '../page-objects/pages/loginPage'

describe('E2E Tests - Login / Logout Flow',  () => {
    it ('Should not login with invalid credentials', async () => {
        // await browser.url('http://zero.webappsecurity.com/login.html') 
        // await $('#signin_button').waitForExist()
        // await $('#signin_button').click()
        // await $('#login_form').waitForExist()
        // await $('#user_login').setValue('invalid')
        // await $('#user_password').setValue('invalid')
        // await $('input[type="submit"]').click()
        // await loginPage.pauseLong()
        // browser.pause(9000)
        app.openHomepage()
        await loginPage.formisVisible()
        await loginPage.fillForm('user','opass')
        await loginPage.submitForm()
        const error = await $('.alert-error')
        await expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', async() => {
        // await $('#signin_button').waitForExist()
        // await $('#signin_button').click()
        // await $('#login_form').waitForExist()
        // await $('#user_login').setValue('username')
        // await $('#user_password').setValue('password')
        await app.homePage()
        await loginPage.signclick()
        await loginPage.formisVisible()
        await loginPage.fillForm('username','password')
        await loginPage.submitForm()
        await $('#account_activity_tab').waitForExist()
    })

    it('Should logout from app', async () => {
        await $('.icon-user').waitForExist()
        await $('.icon-user').click()
        await $('#logout_link').waitForExist()
        await $('#logout_link').click()
        await $('#pages-nav').waitForExist()
    })
})