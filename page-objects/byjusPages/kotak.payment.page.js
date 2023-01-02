import config from '../../lib/config'
import {expect} from'chai'


class kotakPaymentPage {


    get signinWithGoogle() {return $('.btn.btn-block.login-button')}
    get continueWithGoogle(){return $("(//*[@class='btn google-button socialButton-customizable'])[2]")}
    get tfemail(){return $('[type="email"]')}
    get btnNext(){return $("//span[text()='Next']/..")}
    get tfpassword(){return $("input[type='password']")}
    get btnKotakPay(){return $("a[href='/kotak']>button")}
    get btnSkipDocument(){return $('.btn.btn-secondary')}
    get borrowerfirstName(){return $("[label='Borrower First Name']")}
    get borrowerlastname(){return $("[label='Borrower Last Name']")}
    get checkBox() {return $("input[type='checkbox']")}
    geterrorMSGfromFieldElement(fieldText){return $(`input[name='${fieldText}']+div`)}
    geterrorMSGfromDropDown(errorMSG){return $(`//small[text()='${errorMSG}']`)}
    getErrorMSGfromLabel(address){return $(`textarea[name='${address}']+div`)}
    get btnNextotp(){return $('.btn.btn-success')}
    get tfpanNo(){return $('input[name="panNo"]')}
    get ddDobYear(){return $("span[class*=year-read-view--down]")}
    get ddDobMonth(){return $('span[class*=month-read-view--down]')}
    get ttDob(){return $('input[name="dateOfBirth"]')}
    ddDobYearSelector(year){return $("//div[text()='"+year+"']")}
    ddDobmonthSelector(month){return $(`//div[text()='${month}']`)}
    // ddDobDaySelector(day){return $("//div[@aria-label='day-"+day+"']")}
    ddDobDaySelector(day){return $(`//div[@aria-label='day-${day}']`)}
    get ddGender (){return $("//label[@for='Gender']/../div/div")}
    get tfmobileNumber() {return $('input[name="telephoneNumber"]')}
    get tfAlternateMobileNumber(){return $('input[name="alternateTelephoneNumber"]')}
    get tfemailAddress (){return $('input[name="emailAddress"]')}
    get tffathername() {return $('input[name="fathersName"]')}
    get tfMotherName(){ return $('input[name="mothersName"]')}
    get ddMartialStatus(){return $('//label[@for="Marital Status"]/../div/div')}
    get ddEducation(){return $('//label[@for="Education"]/../div/div')}
    get ddEmployementtype(){ return $('//label[@for="Employment"]/../div/div')}
    get tfCompanyName(){return $('input[name="companyName"]')}
    get tfCompanyAddress(){return $("textarea[name='officeAddress']")}
    get ddIncomeSlab(){return $('//label[@for="Income Slab"]/../div/div')}
    get tfAddress(){return $('input[name="addressLine1"]')}
    get tfLandMark (){return $('input[name="landmark"]')}
    get ddPropertyType() {return $('//label[@for="Property Type"]/../div/div')}
    get tfPincode(){return $('input[name="pinCode"]')}
    get ddState(){return $('//label[@for="State"]/../div/div')}
    get ddCity() {return $('//label[@for="City"]/../div/div')}
    get ddLoanTenure(){return $('//label[@for="Loan Tenure"]/../div/div')}
    get tfloanAmount(){return $('input[name="requestedLoanAmount"]')}
    get tfProductName(){return $('input[name="productName"]')}
    get errorMsgSamePan(){return $('[class="modal-body"]')}



    async loginByjus(username , password){

        await this.signinWithGoogle.waitForExist()
        await this.signinWithGoogle.click()
        await this.continueWithGoogle.waitForExist()
         await this.continueWithGoogle.click()
        await this.tfemail.isDisplayed({ timeout: 5000 })
        await this.tfemail.setValue(username)
        await this.btnNext.isDisplayed({ timeout: 10000 })
        await this.btnNext.waitForEnabled()
        await this.btnNext.click()
        await this.tfpassword.waitForDisplayed({timeout:60000})
        await this.tfpassword.setValue(password)
        await this.btnNext.isDisplayed({timeout:10000})
        await this.btnNext.click()

    }    

    async openKotakLoanPage(){

        await this.btnKotakPay.waitForDisplayed({timeout:70000})
        await this.btnKotakPay.click()
        await this.btnSkipDocument.waitForDisplayed()
        await this.btnSkipDocument.click()
      
       
    }

    async clickCheckboxAndSubmit(){
        await this.checkBox.scrollIntoView({timeout:60000})
        await this.checkBox.waitForDisplayed()
        await this.checkBox.click()
        await this.btnNextotp.scrollIntoView()
        await this.btnNextotp.waitForDisplayed()
        await this.btnNextotp.click()

    }
    async enterCustomerLoanDetails(){


        await this.borrowerfirstName.waitForDisplayed()
        await this.borrowerfirstName.setValue('dummy')
        await this.borrowerlastname.setValue('customer name')
        await this.tfpanNo.setValue('BQJPG0712H')
        await this.ttDob.waitForEnabled({timeout:60000})
        await this.ttDob.click()
        await this.ddDobYear.click()
        await this.ddDobYearSelector("1990").click()
        await this.ddDobMonth.click()
        await this.ddDobmonthSelector("June").click()
        await this.ddDobDaySelector('28').click()
        await this.ddGender.click()
        await browser.keys(["M",'a','Tab'])
        await this.tfmobileNumber.setValue('8888031987')
        await this.tfAlternateMobileNumber.setValue('7276697407')
        await this.tfemailAddress.setValue('akshay.gaikwadinfobeans')
        await this.tffathername.setValue('Borrower Father Name')
        await this.tfMotherName.setValue('Borrower Mother Name')
        await this.ddMartialStatus.click()
        await browser.keys(["S",'i','Tab'])
        await this.ddEducation.click()
        await browser.keys(["P",'o','s','t','Tab'])
        await this.ddEmployementtype.click()
        await browser.keys(["S",'a','l','a','r','Tab'])
        await this.tfCompanyName.setValue('Company name')
        await this.tfCompanyAddress.setValue('Company address')
        await this.ddIncomeSlab.click()
        await browser.keys(['1','0','0','Tab'])
        await this.tfAddress.setValue('shambhonagar ,katraj kondhwa road')
        await this.tfLandMark.setValue('shambhonagar ,katraj kondhwa road')
        await this.ddPropertyType.click()
        await browser.keys(["O",'w','n','Tab'])
        await this.tfPincode.setValue('411046')
        await this.ddState.isDisplayed({timeout:60000})
        await this.ddState.click()
        await browser.keys(['G','o','a','Tab'])
        await this.ddCity.isDisplayed({timeout:50000})
        await this.ddCity.click()
        await browser.keys(['B','A','S','Tab'])
        await this.tfloanAmount.setValue('30000')
        await this.ddLoanTenure.click()
        await browser.keys(['9','Tab'])
        await this.tfProductName.setValue('product name')

    }

    async enterCustomerLoanDetailsInvalidNo(InvalidMobileNumber){


        await this.borrowerfirstName.waitForDisplayed()
        await this.borrowerfirstName.setValue('dummy')
        await this.borrowerlastname.setValue('customer name')
        await this.tfpanNo.setValue('BQJPG0712H')
        await this.ttDob.waitForEnabled({timeout:60000})
        await this.ttDob.click()
        await this.ddDobYear.click()
        await this.ddDobYearSelector("1990").click()
        await this.ddDobMonth.click()
        await this.ddDobmonthSelector("June").click()
        await this.ddDobDaySelector('28').click()
        await this.ddGender.click()
        await browser.keys(["M",'a','Tab'])
        await this.tfmobileNumber.setValue(InvalidMobileNumber)
        await this.tfAlternateMobileNumber.setValue('7276697407')
        await this.tfemailAddress.setValue('akshay.gaikwad@infobeans.com')
        await this.tffathername.setValue('Borrower Father Name')
        await this.tfMotherName.setValue('Borrower Mother Name')
        await this.ddMartialStatus.click()
        await browser.keys(["S",'i','Tab'])
        await this.ddEducation.click()
        await browser.keys(["P",'o','s','t','Tab'])
        await this.ddEmployementtype.click()
        await browser.keys(["S",'a','l','a','r','Tab'])
        await this.tfCompanyName.setValue('Company name')
        await this.tfCompanyAddress.setValue('Company address')
        await this.ddIncomeSlab.click()
        await browser.keys(['1','0','0','Tab'])
        await this.tfAddress.setValue('shambhonagar ,katraj kondhwa road')
        await this.tfLandMark.setValue('shambhonagar ,katraj kondhwa road')
        await this.ddPropertyType.click()
        await browser.keys(["O",'w','n','Tab'])
        await this.tfPincode.setValue('411046')
        await this.ddState.isDisplayed({timeout:60000})
        await this.ddState.click()
        await browser.keys(['G','o','a','Tab'])
        await this.ddCity.isDisplayed({timeout:50000})
        await this.ddCity.click()
        await browser.keys(['B','A','S','Tab'])
        await this.tfloanAmount.setValue('30000')
        await this.ddLoanTenure.click()
        await browser.keys(['9','Tab'])
        await this.tfProductName.setValue('product name')
    }

    async enterCustomerLoanDetailsInvalidAmount(InvalidLoanAmount){
if (InvalidLoanAmount < 18000){
        await this.borrowerfirstName.waitForDisplayed()
        await this.borrowerfirstName.setValue('dummy')
        await this.borrowerlastname.setValue('customer name')
        await this.tfpanNo.setValue('BQJPG0712H')
        await this.ttDob.waitForEnabled({timeout:60000})
        await this.ttDob.click()
        await this.ddDobYear.click()
        await this.ddDobYearSelector("1990").click()
        await this.ddDobMonth.click()
        await this.ddDobmonthSelector("June").click()
        await this.ddDobDaySelector('28').click()
        await this.ddGender.click()
        await browser.keys(["M",'a','Tab'])
        await this.tfmobileNumber.setValue('8888031987')
        await this.tfAlternateMobileNumber.setValue('7276697407')
        await this.tfemailAddress.setValue('akshay.gaikwad@infobeans.com')
        await this.tffathername.setValue('Borrower Father Name')
        await this.tfMotherName.waitForExist({timeout:5000})
        await this.tfMotherName.setValue('Borrower Mother Name')
        await this.ddMartialStatus.click()
        await browser.keys(["S",'i','Tab'])
        await this.ddEducation.click()
        await browser.keys(["P",'o','s','t','Tab'])
        await this.ddEmployementtype.click()
        await browser.keys(["S",'a','l','a','r','Tab'])
        await this.tfCompanyName.setValue('Company name')
        await this.tfCompanyAddress.setValue('Company address')
        await this.ddIncomeSlab.click()
        await browser.keys(['1','0','0','Tab'])
        await this.tfAddress.setValue('shambhonagar ,katraj kondhwa road')
        await this.tfLandMark.setValue('shambhonagar ,katraj kondhwa road')
        await this.ddPropertyType.click()
        await browser.keys(["O",'w','n','Tab'])
        await this.tfPincode.setValue('411046')
        await this.ddState.isDisplayed({timeout:60000})
        await this.ddState.click()
        await browser.keys(['G','o','a','Tab'])
        await this.ddCity.isDisplayed({timeout:50000})
        await this.ddCity.click()
        await browser.keys(['B','A','S','Tab'])
        await this.tfloanAmount.setValue(InvalidLoanAmount)
        await this.ddLoanTenure.click()
        await browser.keys(['9','Tab'])
        await this.tfProductName.setValue('product name')
    }
    if (InvalidLoanAmount > 120000){

        await this.borrowerfirstName.waitForDisplayed()
        await this.borrowerfirstName.setValue('dummy')
        await this.borrowerlastname.setValue('customer name')
        await this.tfpanNo.setValue('BQJPG0712H')
        await this.ttDob.waitForEnabled({timeout:60000})
        await this.ttDob.click()
        await this.ddDobYear.click()
        await this.ddDobYearSelector("1990").click()
        await this.ddDobMonth.click()
        await this.ddDobmonthSelector("June").click()
        await this.ddDobDaySelector('28').click()
        await this.ddGender.click()
        await browser.keys(["M",'a','Tab'])
        await this.tfmobileNumber.setValue('8888031987')
        await this.tfAlternateMobileNumber.setValue('7276697407')
        await this.tfemailAddress.setValue('akshay.gaikwad@infobeans.com')
        await this.tffathername.setValue('Borrower Father Name')
        await this.tfMotherName.setValue('Borrower Mother Name')
        await this.ddMartialStatus.click()
        await browser.keys(["S",'i','Tab'])
        await this.ddEducation.click()
        await browser.keys(["P",'o','s','t','Tab'])
        await this.ddEmployementtype.click()
        await browser.keys(["S",'a','l','a','r','Tab'])
        await this.tfCompanyName.setValue('Company name')
        await this.tfCompanyAddress.setValue('Company address')
        await this.ddIncomeSlab.click()
        await browser.keys(['1','0','0','Tab'])
        await this.tfAddress.setValue('shambhonagar ,katraj kondhwa road')
        await this.tfLandMark.setValue('shambhonagar ,katraj kondhwa road')
        await this.ddPropertyType.click()
        await browser.keys(["O",'w','n','Tab'])
        await this.tfPincode.setValue('411046')
        await this.ddState.isDisplayed({timeout:60000})
        await this.ddState.click()
        await browser.keys(['G','o','a','Tab'])
        await this.ddCity.isDisplayed({timeout:50000})
        await this.ddCity.click()
        await browser.keys(['B','A','S','Tab'])
        await this.tfloanAmount.setValue(InvalidLoanAmount)
        await this.ddLoanTenure.click()
        await browser.keys(['9','Tab'])
        await this.tfProductName.setValue('product name')

    }
}

async enterSameNumberAsMobileNoandAlternateNo(DuplicateNo){

    await this.borrowerfirstName.waitForDisplayed()
    await this.borrowerfirstName.setValue('dummy')
    await this.borrowerlastname.setValue('customer name')
    await this.tfpanNo.setValue('BQJPG0712H')
    await this.ttDob.waitForEnabled({timeout:60000})
    await this.ttDob.click()
    await this.ddDobYear.click()
    await this.ddDobYearSelector("1990").click()
    await this.ddDobMonth.click()
    await this.ddDobmonthSelector("June").click()
    await this.ddDobDaySelector('28').click()
    await this.ddGender.click()
    await browser.keys(["M",'a','Tab'])
    await this.tfmobileNumber.setValue(DuplicateNo)
    await this.tfAlternateMobileNumber.setValue(DuplicateNo)
    await this.tfemailAddress.setValue('akshay.gaikwadinfobeans.com')
    await this.tffathername.setValue('Borrower Father Name')
    await this.tfMotherName.setValue('Borrower Mother Name')
    await this.ddMartialStatus.click()
    await browser.keys(["S",'i','Tab'])
    await this.ddEducation.click()
    await browser.keys(["P",'o','s','t','Tab'])
    await this.ddEmployementtype.click()
    await browser.keys(["S",'a','l','a','r','Tab'])
    await this.tfCompanyName.setValue('Company name')
    await this.tfCompanyAddress.setValue('Company address')
    await this.ddIncomeSlab.click()
    await browser.keys(['1','0','0','Tab'])
    await this.tfAddress.setValue('shambhonagar ,katraj kondhwa road')
    await this.tfLandMark.setValue('shambhonagar ,katraj kondhwa road')
    await this.ddPropertyType.click()
    await browser.keys(["O",'w','n','Tab'])
    await this.tfPincode.setValue('411046')
    await this.ddState.isDisplayed({timeout:60000})
    await this.ddState.click()
    await browser.keys(['G','o','a','Tab'])
    await this.ddCity.isDisplayed({timeout:50000})
    await this.ddCity.click()
    await browser.keys(['B','A','S','Tab'])
    await this.tfloanAmount.setValue('30000')
    await this.ddLoanTenure.click()
    await browser.keys(['9','Tab'])
    await this.tfProductName.setValue('product name')


}

async EnterAlreadyUsedPanDetails(PanNO){

    await this.borrowerfirstName.waitForDisplayed()
    await this.borrowerfirstName.setValue('dummy')
    await this.borrowerlastname.setValue('customer name')
    await this.tfpanNo.setValue(PanNO)
   

}

async EnterPanDetails(panNo){
    await this.borrowerfirstName.waitForDisplayed()
    await this.borrowerfirstName.setValue('dummy')
    await this.borrowerlastname.setValue('customer name')
    await this.tfpanNo.setValue(panNo)
    await this.ttDob.waitForEnabled({timeout:60000})
    await this.ttDob.click()
    await this.ddDobYear.click()
    await this.ddDobYearSelector("1990").click()
    await this.ddDobMonth.click()
    await this.ddDobmonthSelector("June").click()
    await this.ddDobDaySelector("15").click()
    await this.ddGender.click()
    await browser.keys(["M",'a','Tab'])
    await this.tfmobileNumber.setValue('8888031987')
    await this.tfAlternateMobileNumber.setValue('7276697407')
    await this.tfemailAddress.setValue('akshay.gaikwadinfobeans.com')
    await this.tffathername.setValue('Borrower Father Name')
    await this.tfMotherName.setValue('Borrower Mother Name')
    await this.ddMartialStatus.click()
    await browser.keys(["S",'i','Tab'])
    await this.ddEducation.click()
    await browser.keys(["P",'o','s','t','Tab'])
    await this.ddEmployementtype.click()
    await browser.keys(["S",'a','l','a','r','Tab'])
    await this.tfCompanyName.setValue('Company name')
    await this.tfCompanyAddress.setValue('Company address')
    await this.ddIncomeSlab.click()
    await browser.keys(['1','0','0','Tab'])
    await this.tfAddress.setValue('shambhonagar ,katraj kondhwa road')
    await this.tfLandMark.setValue('shambhonagar ,katraj kondhwa road')
    await this.ddPropertyType.click()
    await browser.keys(["O",'w','n','Tab'])
    await this.tfPincode.setValue('411046')
    await this.ddState.isDisplayed({timeout:60000})
    await this.ddState.click()
    await browser.keys(['G','o','a','Tab'])
    await this.ddCity.isDisplayed({timeout:50000})
    await this.ddCity.click()
    await browser.keys(['B','A','S','Tab'])
    await this.tfloanAmount.setValue('30000')
    await this.ddLoanTenure.click()
    await browser.keys(['9','Tab'])
    await this.tfProductName.setValue('product name')
}

async EnterInvalidAge(InvalidAge){

    await this.borrowerfirstName.waitForDisplayed()
        await this.borrowerfirstName.setValue('dummy')
        await this.borrowerlastname.setValue('customer name')
        await this.tfpanNo.setValue('BQJPG0712H')
        await this.ttDob.waitForEnabled({timeout:60000})
        await this.ttDob.click()
        await this.ddDobYear.click()
        await browser.pause(2000)
        await this.ddDobYearSelector(InvalidAge).click()
        await this.ddDobMonth.click()
        await this.ddDobmonthSelector("June").waitForDisplayed({timeout:5000})
        await this.ddDobmonthSelector("June").click()
        await this.ddDobDaySelector("15").waitForExist({timeout:5000})
        await this.ddDobDaySelector("15").click()
        await this.ddGender.waitForClickable({timeout:5000})
        await this.ddGender.click()
        await browser.keys(["M",'a','Tab'])
        await this.tfmobileNumber.setValue('8888031987')
        await this.tfAlternateMobileNumber.setValue('7276697407')
        await this.tfemailAddress.setValue('akshay.gaikwadinfobeans')
        await this.tffathername.setValue('Borrower Father Name')
        await this.tfMotherName.setValue('Borrower Mother Name')
        await this.ddMartialStatus.click()
        await browser.keys(["S",'i','Tab'])
        await this.ddEducation.click()
        await browser.keys(["P",'o','s','t','Tab'])
        await this.ddEmployementtype.click()
        await browser.keys(["S",'a','l','a','r','Tab'])
        await this.tfCompanyName.setValue('Company name')
        await this.tfCompanyAddress.setValue('Company address')
        await this.ddIncomeSlab.click()
        await browser.keys(['1','0','0','Tab'])
        await this.tfAddress.setValue('shambhonagar ,katraj kondhwa road')
        await this.tfLandMark.setValue('shambhonagar ,katraj kondhwa road')
        await this.ddPropertyType.click()
        await browser.keys(["O",'w','n','Tab'])
        await this.tfPincode.setValue('411046')
        await this.ddState.isDisplayed({timeout:60000})
        await this.ddState.click()
        await browser.keys(['G','o','a','Tab'])
        await this.ddCity.isDisplayed({timeout:50000})
        await this.ddCity.click()
        await browser.keys(['B','A','S','Tab'])
        await this.tfloanAmount.setValue('30000')
        await this.ddLoanTenure.click()
        await browser.keys(['9','Tab'])
        await this.tfProductName.setValue('product name')


}

}


export default new kotakPaymentPage()