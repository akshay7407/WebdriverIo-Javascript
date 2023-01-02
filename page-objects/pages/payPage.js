import base from './base'

class payPage extends base {

    get paybilltab() {

        return $('#pay_bills_tab')
    }

    get selectpayeetab() {
        return $('#sp_payee')
    }
    get selectAC() {

        return $('#sp_account')
    }
    get amount() {
        //todo
        return $('#sp_amount')
    }
    get date() {
        //todo
        return $('#sp_date')
    }
    get description() {
        return $('#sp_description')
        ///todo
    }

    get savedPayee(){

        return $('#pay_saved_payees')
    }

    get alertPop (){

        return $('#alert_content')
    }


 async paybilltabF (){

    await this.paybilltab.click()
 }

 async amountF(value){

    await this.amount.setValue(value)
 }

async dateF (value){
    await this.date.setValue(value)
}

async descriptionF (value){

    await this.description.setValue(value)
}

async savedPayeeF(){

    await this.savedPayee.click()
}


}

export default new payPage()