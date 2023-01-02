import { expect } from 'chai'
import { wait } from '../../lib/config'


class collectResponse {


    get collectResponseLink() {

        return $("//a[contains(text(),'COLLECT RESPONSES')]")
    }

    get sendSurveyLink() {

        return $$('.wds-type--center>b')
    }
    get shareLinks() {

        return $$('.sm-create-collector-button.wds-flex>div>h3')
    }

    get url() {
        return $('input#weblink-url')
    }


    get shareSurveyTitle() {
        return $('.wds-type--page-title')
    }

    get linkPageTitle() {
        return $("button[data-testid='CreateCollectorButton__weblink']>div>h3")
    }

    get postOnSocialMedia() {
        return $("button[data-testid='CreateCollectorButton__social_media']>div>h3")
    }

    get sendByMail() {
        return $("button[data-testid='CreateCollectorButton__email']>div>h3")
    }

    get advanceOptions(){
        return $("div.footer>.toggle-options")
    }

    get passwordProtectionLink(){
        return $('[target="#panel-password-protection"]')
    }

    get passwordOnRadioButton(){
        return $("section#panel-password-protection>ul>li:first-of-type")
    }

    get passwordInputField(){
                 
        return $("[data-model-property='password_plain_text']")
    }
    get passwordLabel(){
        return $("[data-model-property='password_label']")
    }
    get submitButtonLabel(){
        return $("[data-model-property='password_button_label']")
    }
    get passwordErrorInput(){
        return $("[data-model-property='password_error_message']")
    }
  
    get socialMedia(){
        return $("[collector-type='facebook']")
    }

    get moreWaysToSend(){
        return $('.collector-ads .wds-type--section-title')
    }

    get failedMessege(){
        return $("[data-model-property='password_error_message']+p")
    }

    get submitButtonerrorMsg(){
        return  $("[data-model-property='password_button_label']+p")
    }

    get passLabelErrorMsg(){
      return  $("[data-model-property='password_label']+p")
    }
    get saveTextNotification(){
        return $('.sm-notification-message-title')
    }
    async navigateCollectResponse() {
        await this.collectResponseLink.waitForExist()
        await this.collectResponseLink.click()

    }
    async checkForSendSurveyTitle() {

        await this.shareSurveyTitle.waitForExist()
        await this.shareSurveyTitle.waitForDisplayed()

    }

    async waitForPage() {

        await this.shareSurveyTitle.waitForExist()
        await this.linkPageTitle.waitForExist()
        await this.sendByMail.waitForExist()
        await this.postOnSocialMedia.waitForExist()

    }
    async sendSurvey(surveyType) {
        const responseType = await this.sendSurveyLink
        responseType.forEach(async type => {
            const responseText = await type.getText()
            if (surveyType === responseText) {
                await type.waitForExist()
                await type.click()
            }
        })

    }

    async shareSurveyLinks(linkName) {
        const links = await this.shareLinks
        links.forEach(async link => {
            const linkText = await link.getText()
            if (linkName === linkText) {

                await link.waitForExist()
                await link.click()

            }
        })
    }

    async clickAdvanceOptions (){

        await this.advanceOptions.scrollIntoView()
        await this.advanceOptions.waitForExist()
        await this.advanceOptions.click()
    }
    async clickPasswordProtectionLink(){
        await this.passwordProtectionLink.waitForExist()
        await this.passwordProtectionLink.waitForDisplayed()
        await this.passwordProtectionLink.click()
    }
    async clickOnradioButon(){
        await this.passwordOnRadioButton.waitForEnabled()
        await this.passwordOnRadioButton.click()

    }
    async setPassword (pass){

        await this.passwordInputField.waitForDisplayed()
        await this.passwordInputField.setValue(pass)
        await this.passwordLabel.waitForExist()
        await this.passwordLabel.click()   

    }

    async checkSavePasswordText(){
        await browser.waitUntil(async()=> await this.saveTextNotification.getText() === 'Your changes have been saved',
        {timeout:30000 ,
        timeoutMsg:'Expected is not visible'})
    }
    async waitForPassPage (){
        await this.moreWaysToSend.scrollIntoView()
        await this.moreWaysToSend.waitForExist()

    }

    async verifyPassMessageError(){
        await this.passwordErrorInput.waitForExist()
        expect(await this.passwordErrorInput.getText()).to.equal('The password entered was incorrect please check your data and try again.')
        await this.passwordErrorInput.clearValue()
        await this.passwordLabel.waitForExist()
        await this.passwordLabel.click()
        expect(await this.failedMessege.getText()).to.equal('Enter a password failed message.')
       
       
    }

    async verifySubmitLabel(){

        await this.submitButtonLabel.waitForExist()
        expect(await this.submitButtonLabel.getValue()).to.equal('Submit Password')
        await this.submitButtonLabel.clearValue()
        await this.passwordLabel.waitForExist()
        await this.passwordLabel.click()
        expect (await this.submitButtonerrorMsg.getText()).to.equal('Enter a submit button label.')
    


    }

    async verifyPassLabel(){

        await this.passwordLabel.waitForExist()
        expect(await this.passwordLabel.getValue()).to.equal('Enter Password')
        await this.passwordLabel.clearValue()
        await this.passwordErrorInput.waitForExist()
        await this.passwordErrorInput.click()
        expect (await this.passLabelErrorMsg.getText()).to.equal('Enter a password label.')
    }

    async VerifyCharLength (data){

           const length = data.length
          
           if (length <= 2000){
               console.log('character length is in limit')
               await this.passwordErrorInput.setValue(data)
           }
           else if(length > 2000) {
               console.log('character length is  not in limit')
               console.log("character length : -"+ data.length)

           }
        }

        async verifySubmitLabelCharLength(data){
        
            const size=data.length
            if (size <=50){
                console.log('character length is in limit')
                await this.submitButtonLabel.addValue(data)

            }
            else if (size >50) {
                console.log('character length is not in limit')
                console.log('character length '+size)
                await this.submitButtonLabel.addValue(data)

            }


        }
        async verifyPassLabelCharLength(data){
            
            const size=data.length
            if (size  <=50){
                console.log('character length is in limit')
                await this.passwordLabel.addValue(data)

            }
            else if (size>50) {
                console.log('character length is not in limit')
                console.log('character length ==='+size)
                await this.passwordLabel.addValue(data)

            }
        
        }
    

}

export default new collectResponse()