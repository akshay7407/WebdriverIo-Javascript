import base from '../pages/base'

class loginPage extends base {

    get loginForm() {

        return $('body > div.wrapper > div.container > div > div > div > div > h3')
    }
    get userInput() {
        return $('#user_login')
    }
    get passInput() {
        return $('#user_password')
    }
     get signinClick()
     {
        
         return $('#signin_button')
     }

    get submit() {

        return $('input[type="submit"]')
    }

    get navbar(){

        return $('.nav-tabs')
    }
    async formisVisible () {

        await this.loginForm.waitForExist()

    }

   async fillForm (username, password) {

        await this.userInput.setValue(username)
        await this.passInput.setValue(password)
    }
     
    async submitForm (){

        await this.submit.click()
    }

        async signclick(){
            this.signinClick.waitForExist()

            this.signinClick.click()

        }

        async navbarexist(){
            await this.navbar.waitForExist()
        }
    }

 export default new loginPage()