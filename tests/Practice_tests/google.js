import { short , medium, long } from '../lib/timeout'
import { mobile,desktop,tablet } from '../lib/devices'
// import { expect } from "../node_modules/chai/chai"

describe('First Steps with WebdrverIO', () => {
    it('Load google Website', () => {
        browser.url('http://www.example.com')
        browser.pause(9000)
        expect(browser).toHaveUrl('http://www.example.com/')
        const title= $('body > div > h1')
        expect(title).toHaveText('example')
    })
    //  it('image is present',() => {
    //   const h1 = $('h1')
    //     expect(h1).toBeVisible()
    // })

    it('to check the link ', ()=>{
         const link =$ ('a')
         link.waitForExist()
        expect(link).toHaveLink('href="https://www.iana.org/domains/example')
    })
    
    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText("explain domain")
    })

    it ('saves screenshot',()=>
    {
        
        browser.pause(5000)
        browser.saveScreenshot('facebook.png')
    })
    
    it('set window size', ()=> {
        browser.url('https://www.facebook.com')
        browser.setWindowSize(1000, 500)
        browser.pause(5000)
    })
    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })
 
    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    })
 
    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
    
})
