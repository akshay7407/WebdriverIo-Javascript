class app {

  async openHomepage() {

    await browser.url('https://www.surveymonkey.com/')
  }
  async byjusHomepage(){
    await browser.url('https://dev-pay.byjusorders.com/')
  }
 
}
export default new app()