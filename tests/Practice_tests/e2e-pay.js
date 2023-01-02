// import {expect  } from "chai";
import app from '../page-objects/pages/app'
import loginPage from '../page-objects/pages/loginPage'
import payPage from '../page-objects/pages/payPage'

describe('E2E Tests - Pay', () => {
	it ('Should log into application', async () => {
		// browser.url('http://zero.webappsecurity.com/index.html')
		// $('#signin_button').waitForExist()
		// $('#signin_button').click()
		// $('#login_form').waitForExist()
		// $('#user_login..').setValue('username')
		// $('#user_password').setValue('password')
		// $('input[type="submit"]').click()
		// $('.nav-tabs').waitForExist()
		app.homePage()
		loginPage.pauseMedium()
		await loginPage.signclick()
		await loginPage.fillForm('username','password')
		await loginPage.submitForm()
		await loginPage.navbarexist()
	})
 
	it('Should make payment', async () => {
		// $('#pay_bills_tab').click()
		await payPage.paybilltabF()
		 const selectPaye = payPage.selectpayeetab
		 selectPaye.waitForExist()
		await selectPaye.selectByAttribute('value', 'apple')
		const selectAccount = payPage.selectAC
		selectAccount.waitForExist()
		selectAccount.selectByVisibleText('Loan')
		// $('#sp_amount').setValue('500')
		// $('#sp_date').setValue('2020-03-31')
		// $('#sp_description').setValue('Test')
		await payPage.amountF('500')
		await payPage.dateF('2020-03-31')
		await payPage.descriptionF('testing automation')
        browser.pause(20000)
		// $('#pay_saved_payees').click()
		payPage.savedPayeeF()
		const message =  payPage.alertPop
		expect(message).toHaveText('The payment was successfully submitted.')
	})
})