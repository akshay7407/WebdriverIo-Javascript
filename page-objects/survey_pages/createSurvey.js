

class CreateSurvey {
    get
        createSurveyButton() {

        return $('a.create-survey.alt')
    }

    get surveyElements() {

        return $$('.wds-button--primary.wds-button--solid')
    }


    get createSurveyTitle() {

        return $('.wds-type--left')
    }


    get allButton() {
        return $('.sm-my-surveys-tab__all-button')
    }

    async clickOnCreateSurvey() {
        await this.createSurveyButton.waitForExist()
        await this.createSurveyButton.click()


    }
    async waitForPage() {
        await this.allButton.waitForExist()
        await this.createSurveyTitle.waitForExist()

    }

    async surveyElementsCategory(ElementName) {
        const elements = await this.surveyElements
        elements.forEach(async element => {
            const button = await element.getText()
            if (button == ElementName) {
                await element.waitForExist()
                await element.click()
            }
        })
    }




}


export default new CreateSurvey()