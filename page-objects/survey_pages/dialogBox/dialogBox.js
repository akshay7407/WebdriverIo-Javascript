class dialogBox {

    get surveyTitleInput() {
        return $('#surveyTitle')
    }

    get surveyCategory() {

        return $("select[data-testid='NewSurveyModal__SurveyCategory']")
    }
    get newSurvey() {
        return $('#newSurvey')
    }

    get checkDialogBox() {
        return $('div.wds-modal__title>h1')
    }

    async checkDialogBoxTitle() {

        await this.checkDialogBox.waitForExist()

    }
    async selectbyVisibleText(DropdownValue) {
        await this.surveyCategory.waitForExist()
        await this.surveyCategory.selectByVisibleText(DropdownValue)
    }

    async createSurveyTitle(Title) {
        await this.surveyTitleInput.waitForDisplayed()
        await this.surveyTitleInput.setValue(Title)

    }

    async clickOnnewSurvey() {

        await this.newSurvey.click()

    }
}

export default new dialogBox()