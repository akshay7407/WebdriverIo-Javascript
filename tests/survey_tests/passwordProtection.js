import surveyLogin from "../../page-objects/survey_pages/surveyLogin"
import app from "../../lib/app"
import {  medium} from "../../lib/timeout"
import config from '../../lib/config'
import createSurvey from "../../page-objects/survey_pages/createSurvey"
import collectResponse from "../../page-objects/survey_pages/collectResponse"
import { expect } from 'chai'
const dataSet = require('../../lib/dataSet')
import questionsSet from '../../page-objects/survey_pages/questionsSet'
import dialogbox from '../../page-objects/survey_pages/dialogBox/dialogBox'
import fillSurvey from "../../page-objects/survey_pages/fillSurvey"



describe('Verify password error message', () => {

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
  
  
    it('Add page title ', async () => {
      await questionsSet.waitForPage()
      await questionsSet.createPageTitle('Output')
  
    });
  
    it('Adding question to survey', async () => {
  
      await questionsSet.addQuestions()
      
    });
  
    it('Selection of Collect Response', async () => {
  
      await collectResponse.navigateCollectResponse()
      await collectResponse.checkForSendSurveyTitle()
      await collectResponse.sendSurvey('Send surveys your way')
      await collectResponse.waitForPage()
      await collectResponse.shareSurveyLinks('Share a survey link')
  
    })


    it('set the password', async () => {
        await collectResponse.waitForPassPage()
        await collectResponse.clickAdvanceOptions()
        await collectResponse.clickPasswordProtectionLink()
        await collectResponse.clickOnradioButon()
        await collectResponse.setPassword(config.password)
        await collectResponse.checkSavePasswordText()
    });

    it('Launching to new URL', async () => {
        
        await collectResponse.url.scrollIntoView()
        const webURl = await collectResponse.url.getValue()
        await browser.newWindow(webURl)
       
    
      });
      it('Filling survey data', async () => {
        await fillSurvey.enterPassword(config.password)
        await fillSurvey.filltheSurvey()
        await fillSurvey.clickOnDone()
    
      });
    
      it('Validate total Response', async () => {
        var handle = await browser.getWindowHandles()
        await browser.switchToWindow(handle[0])
        await fillSurvey.verifyResponseCount('1')
    
    
      });

})