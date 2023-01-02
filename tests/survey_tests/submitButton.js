import surveyLogin from "../../page-objects/survey_pages/surveyLogin"
import app from "../../lib/app"
import {  medium} from "../../lib/timeout"
import config from '../../lib/config'
import createSurvey from "../../page-objects/survey_pages/createSurvey"
import collectResponse from "../../page-objects/survey_pages/collectResponse"
import { expect } from 'chai'
const dataSet = require('../../lib/dataSet')
import dialogbox from '../../page-objects/survey_pages/dialogBox/dialogBox'


describe('verify Submit Button', () => {

    it('login to survey monkey', async () => {
      await app.openHomepage()
      await surveyLogin.loginForm(config.username, config.password)
      await surveyLogin.clickLoginSubmit()
    })
  
    it('Selection of type of survey  ', async () => {
  
      await createSurvey.clickOnCreateSurvey()
      await createSurvey.waitForPage()
      await createSurvey.surveyElementsCategory('Start from scratch')
  
    })
  
    it('selection title and category in dialog box ', async () => {
  
      await browser.pause(medium) // Dilaog box Element is not fetching text within time.
      await dialogbox.createSurveyTitle('logical Survey')
      await dialogbox.selectbyVisibleText('Customer feedback')
      await dialogbox.clickOnnewSurvey()
    });
  
    it('Selection of Collect Response', async () => {
  
      await collectResponse.navigateCollectResponse()
      await collectResponse.checkForSendSurveyTitle()
      await collectResponse.sendSurvey('Send surveys your way')
      await collectResponse.waitForPage()
      await collectResponse.shareSurveyLinks('Share a survey link')
  
    })


    it('Validate submit button label', async () => {
        await collectResponse.waitPaasPage()
        await collectResponse.clickAdvanceOptions()
        await collectResponse.clickPasswordProtectionLink()
        await collectResponse.clickOnradioButon()
        await collectResponse.verifySubmitLabel()
        await collectResponse.verifySubmitLabelCharLength(dataSet.character[0].characterNotInLimit)
        

    });

})