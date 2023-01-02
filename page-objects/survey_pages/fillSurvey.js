import { expect } from 'chai'
import { Questions } from '../../lib/dataSet'
const dataSet = require('../../lib/dataSet')


class fillSurvey {


    get okButton() {
        return $('.new-button.ok-button')
    }

    optionButton(questionData, answers) {

        return $(`//*[normalize-space(.)='${questionData}']/following::span[contains(text(),'${answers}')]`)

    }
    answerInput(data) {
        return $(`(//*[contains(@class,'qt-input_text text')])[${data}]`)
    }
    get doneButton() {

        return $('.btn.small.done-button')
    }
    get responseCount() {

        return $('#total-responses')
    }
    get collectResponseLink() {

        return $("//a[contains(text(),'COLLECT RESPONSES')]")
    }

    get passwordInput(){
        return $('#password-text')
    }
    get passwordSubmit(){
        return $('.password-submit-button')
    }

    async enterPassword(pass){
        await this.passwordInput.waitForExist()
        await this.passwordInput.setValue(pass)
        await this.passwordSubmit.waitForExist()
        await this.passwordSubmit.click()
    }
    async filltheSurvey() {

        for (let i = 0, t = 1; i < dataSet.Questions.length; i++, t++) {
            if (dataSet.Questions[i].optType === 'Single Textbox') {
                const inputAnswer = await this.answerInput(t)
                await inputAnswer.waitForExist()
                await inputAnswer.setValue(dataSet.Questions[i].answer)
                await this.okButton.click()
                await browser.pause(3000)
            }
            if (dataSet.Questions[i].optType === 'Multiple Choice') {
                const questionSet = dataSet.Questions[i].Question
                const answerSet = dataSet.Questions[i].answer
                const options = await this.optionButton(questionSet, answerSet)
                await options.waitForExist()
                await options.click()

            }
        }
    }

    async clickOnDone() {
        await this.doneButton.waitForDisplayed()
        await this.doneButton.waitForExist()
        await this.doneButton.click()

    }
    async verifyResponseCount(Num) {

        await this.collectResponseLink.waitForExist()
        await this.collectResponseLink.click()
        const totalResponseCount = await this.responseCount.getText()
        await expect(totalResponseCount).to.equal(Num)
    }
}

export default new fillSurvey()