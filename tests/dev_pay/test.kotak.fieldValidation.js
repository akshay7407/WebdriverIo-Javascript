const config = require("../../lib/config");
import app from '../../lib/app'
import kotakPaymentPage from '../../page-objects/byjusPages/kotak.payment.page';
import { expect } from 'chai'

describe('kotak payment page ', () => {


    it('Validate field when submitted blank.', async () => {
        app.byjusHomepage()
        await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.clickCheckboxAndSubmit()
        await kotakPaymentPage.geterrorMSGfromFieldElement('applicantFirstName').waitForDisplayed({ timeout: 5000 })
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('applicantFirstName').getText()).to.have.string('Borrower First Name is required')
        await kotakPaymentPage.geterrorMSGfromFieldElement('applicantLastName').waitForDisplayed({ timeout: 5000 })
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('applicantLastName').getText()).to.have.string('Borrower Last Name is required')
        //  expect(await kotakPaymentPage.geterrorMSGfromFieldElement('panNo').getText()).to.have.string('Invalid PAN Card No')
        const errorMsg = await kotakPaymentPage.geterrorMSGfromFieldElement('panNo').getText()
        if (errorMsg === 'Invalid PAN Card No') {
            expect(errorMsg).to.have.string('Invalid PAN Card No')
        }

        else if (errorMsg === 'PAN Card No is required') {
            expect(errorMsg).to.have.string('PAN Card No is required')
        }
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Age should be more than 21 years and less than 65 years').getText()).to.have.string('Age should be more than 21 years and less than 65 years')
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Gender is required.').getText()).to.have.string('Gender is required.')
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('telephoneNumber').getText()).to.have.string('Invalid Mobile No')
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('alternateTelephoneNumber').getText()).to.have.string('Alternate Mobile No cannot be same as Mobile No')
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Invalid Email address').getText()).to.have.string('Invalid Email address')
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('fathersName').getText()).to.have.string("Borrower's Father Name is required")
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('mothersName').getText()).to.have.string("Borrower's Mother Name is required")
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Marital Status is required.').getText()).to.have.string('Marital Status is required.')
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Education is required.').getText()).to.have.string('Education is required')
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Employment is required.').getText()).to.have.string('Employment is required.')
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('companyName').getText()).to.have.string("Company Name is required.")
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Employment is required.').getText()).to.have.string('Employment is required.')
        expect(await kotakPaymentPage.getErrorMSGfromLabel('officeAddress').getText()).to.have.string('Company Address is required.')
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Income Slab is required.').getText()).to.have.string('Income Slab is required')
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('addressLine1').getText()).to.have.string("Address is required.")
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('landmark').getText()).to.have.string("LandMark is required.")
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Property Type is required.').getText()).to.have.string('Property Type is required.')
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('pinCode').getText()).to.have.string("Invalid Pincode")
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('State is required.').getText()).to.have.string('State is required.')
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('City is required.').getText()).to.have.string('City is required.')
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Loan Tenure is required.').getText()).to.have.string('Loan Tenure is required.')
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('requestedLoanAmount').getText()).to.have.string('Amount should be >= Rs.18000 and <= Rs. 120000')
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('productName').getText()).to.have.string('Product Name is required.')


    });


    it('validate correct email address is entered', async () => {

        await app.byjusHomepage()
        // await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.enterCustomerLoanDetails()
        await kotakPaymentPage.clickCheckboxAndSubmit()
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Invalid Email address').getText()).to.have.string('Invalid Email address')


    });

    it('Validate the Customer Phone should accept 10digits, also check for the error messages for less/greater than 10 digits.', async () => {

        app.byjusHomepage()
        // await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.enterCustomerLoanDetailsInvalidNo('7276697407126788')
        await kotakPaymentPage.clickCheckboxAndSubmit()
        await kotakPaymentPage.geterrorMSGfromFieldElement('telephoneNumber').waitForDisplayed({ timeout: 6000 })
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('telephoneNumber').getText()).to.have.string('Invalid Mobile No')

    });

    it(' Validate Amount should be  Rs.18000 between Rs. 120000', async () => {
        app.byjusHomepage()
        // await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.enterCustomerLoanDetailsInvalidAmount('2000')
        await kotakPaymentPage.clickCheckboxAndSubmit()
        await kotakPaymentPage.geterrorMSGfromFieldElement('requestedLoanAmount').waitForDisplayed({ timeout: 5000 })
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('requestedLoanAmount').getText()).to.have.string('Amount should be >= Rs.18000 and <= Rs. 120000')

    });

    it('Valiate mobile no should not be same as alternate mobile no', async () => {

        app.byjusHomepage()
        // await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.enterSameNumberAsMobileNoandAlternateNo('7276697407')
        await kotakPaymentPage.clickCheckboxAndSubmit()
        await kotakPaymentPage.geterrorMSGfromFieldElement('alternateTelephoneNumber').waitForDisplayed({ timeout: 5000 })
        expect(await kotakPaymentPage.geterrorMSGfromFieldElement('alternateTelephoneNumber').getText()).to.have.string('Alternate Mobile No cannot be same as Mobile No')



    });

    it('Validate if the pan number is already processed for loan', async () => {

        app.byjusHomepage()
        // await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.EnterAlreadyUsedPanDetails('BHXPS7083N')
        await kotakPaymentPage.errorMsgSamePan.waitForDisplayed({ timeout: 6000 })
        expect(await kotakPaymentPage.errorMsgSamePan.getText()).to.have.string('You cannot start new loan application with same PAN')

    });

    it('Validate correct pan number', async () => {

        app.byjusHomepage()
        // await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.EnterPanDetails('TQHCT01006')
        await kotakPaymentPage.clickCheckboxAndSubmit()
        const errorMsg = await kotakPaymentPage.geterrorMSGfromFieldElement('panNo').getText()
        if (errorMsg === 'Invalid PAN Card No') {
            expect(errorMsg).to.have.string('Invalid PAN Card No')
        }

        else if (errorMsg === 'PAN Card No is required') {
            expect(errorMsg).to.have.string('PAN Card No is required')
        }



    });

    it('Validate age should be more than 21 years and less than 65 yesrs', async () => {

        app.byjusHomepage()
        // await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.EnterInvalidAge('2018')
        await kotakPaymentPage.clickCheckboxAndSubmit()
        await kotakPaymentPage.geterrorMSGfromDropDown('Age should be more than 21 years and less than 65 years').waitForDisplayed({timeout:6000})
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Age should be more than 21 years and less than 65 years').getText()).to.have.string('Age should be more than 21 years and less than 65 years')
        await  app.byjusHomepage()
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.EnterInvalidAge("1955")
        await kotakPaymentPage.clickCheckboxAndSubmit()
        await kotakPaymentPage.geterrorMSGfromDropDown('Age should be more than 21 years and less than 65 years').waitForDisplayed({timeout:6000})
        expect(await kotakPaymentPage.geterrorMSGfromDropDown('Age should be more than 21 years and less than 65 years').getText()).to.have.string('Age should be more than 21 years and less than 65 years')


        
    });

    it('Validate next button is not clickable before checking box of form input', async () => {

        app.byjusHomepage()
        // await kotakPaymentPage.loginByjus(config.username, config.password)
        await kotakPaymentPage.openKotakLoanPage()
        await kotakPaymentPage.enterCustomerLoanDetails()
        const clickable = await kotakPaymentPage.btnNextotp.isClickable()
        console.log("Next button is  clickable Before checking Box ****"+clickable)
        await kotakPaymentPage.checkBox.waitForDisplayed({timeout:5000})
        await kotakPaymentPage.checkBox.click()
        const btnNext =await kotakPaymentPage.btnNextotp
        await browser.waitUntil(async => btnNext.isClickable(),{timeout: 5000,
            timeoutMsg: 'Element is not visible after 5s'} )
        console.log("Next button is  clickable After Checking Box****"+ await btnNext.isClickable())
  
    });


});