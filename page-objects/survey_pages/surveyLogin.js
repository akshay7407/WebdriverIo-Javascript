import base from "../pages/base"

class surveyLogin extends base {

    get loginButton() {

        return $('.wds-button--charcoal')
    }

    get usernameBox() {
        return $('#username')
    }
    get passwordBox() {
        return $('#password')
    }

    get loginSubmit() {

        return $('button.wds-button')
    }

    async loginForm(username, password) {
        await this.loginButton.waitForExist()
        await this.loginButton.click()
        await this.usernameBox.setValue(username)
        await this.passwordBox.waitForExist()
        await this.passwordBox.setValue(password)
    }

    async clickLoginSubmit() {
        await this.loginSubmit.waitForExist()
        await this.loginSubmit.click()
    }


}

export default new surveyLogin()