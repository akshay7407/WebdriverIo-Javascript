const dataSet = require('../../lib/dataSet')

class questionsSet {

    get questionInputfield() {
        return $('#editTitle')
    }
    get dropDownElements() {
        return $$('ul.add-q-menu-left>li')
    }
    get dropDownPoint() {
        return $('#changeQType')
    }

    get nextQuestion() {
        return $('.main-add-question-cta.wds-button')
    }

    get saveSurvey() {
        return $('#editQuestion section.t1 a.save')
    }
    get pageTitle() {
        return $('h2.page-title-wrapper')
    }
    get checkPageTitle() {
        return $('h3.tbyb-topbar__header')
    }
    get pageTitleInput() {
        return $('#pageTitle')
    }
    get savePageTitle() {
        return $('#pageTitleForm >div a.save')
    }
    get collectorResponse() {
        return $("//a[contains(text(),'COLLECT RESPONSES')]")
    }
    choiceCount(num) {
        return $(`(//*[@data-rte='answer'])[${num}]`)
    }
    async waitForPage() {

        await this.collectorResponse.waitForExist()
        await this.checkPageTitle.waitForExist()

    }

    async createPageTitle(TitleName) {

        await this.pageTitle.waitForDisplayed()
        await this.pageTitle.waitForEnabled()
        await this.pageTitle.waitForExist()
        await this.pageTitle.click()
        await this.pageTitleInput.setValue(TitleName)
        await this.savePageTitle.click()
    }


    async addQuestions() {

        for (let i = 0; i < dataSet.Questions.length; i++) {
            if (dataSet.Questions[i].optType === 'Single Textbox') {
                await this.surveyQuestion(dataSet.Questions[i].Question)
                await this.selectOptionFromDropDown(dataSet.Questions[i].optType)

            }

            if (dataSet.Questions[i].optType === 'Multiple Choice') {
                await this.surveyQuestion(dataSet.Questions[i].Question)
                await this.selectOptionFromDropDown(dataSet.Questions[i].optType)
                await this.choiceSurveyQuestion(i)
            }
            await browser.pause(5000) // it will wait for next question load .

            if (i < parseInt(dataSet.Questions.length - 1)) {
                await this.saveSurveyClick()
                await browser.pause(5000) // it will wait for next question load .
                await this.clickNextSurveyQuestion()
            }

        }
        await this.saveSurveyClick()

    }

    async surveyQuestion(questionOne) {
        await this.questionInputfield.waitForDisplayed()
        await this.questionInputfield.waitForEnabled()
        await this.questionInputfield.setValue(questionOne)
    }

    async clickNextSurveyQuestion() {
        await this.nextQuestion.waitForExist()
        await this.nextQuestion.click()
    }

    async choiceSurveyQuestion(num) {
        const choiceCount = dataSet.Questions[num].options.length
        for (let c = 3, h = 0; c < choiceCount + 3; c++) {
            const options = await this.choiceCount(c)
            options.setValue(dataSet.Questions[num].options[h])
            h++

        }

    }
    async saveSurveyClick() {
        await this.saveSurvey.waitForExist()
        await this.saveSurvey.click()

    }
    async selectOptionFromDropDown(value) {
        await this.dropDownPoint.waitForExist()
        await this.dropDownPoint.click()
        const QueCategory = await this.dropDownElements
        QueCategory.forEach(async dropDown => {
            const dropDownValue = await dropDown.getText()
            console.log(' Drop down values ' + dropDownValue)
            if (value == dropDownValue) {
                await dropDown.waitForExist()
                await dropDown.click()
            }
        })
    }
}


export default new questionsSet()