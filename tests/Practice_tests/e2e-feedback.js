import app from "../page-objects/pages/app"

describe('using feedack form', () => {
    it.only(' load the feedback form', () => {

        //  browser.url('http://zero.webappsecurity.com/ihtmlndex.')
        app.homePage()
        $('#feedback').waitForExist()
        $('#feedback').click()
        // browser.waitAndClick('#feedback')
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/feedback.html')
    })
    it('fill the form', () => {

        $('#name').setValue('akshay gaikwad')
        $('#email').setValue('akshay@gaikwad')
        $('#subject').setValue('Subjects')
        $('#comment').setValue('Just a message!')
        $('input[type="submit"]').click()
        expect(browser).toHaveUrl(
            'http://zero.webappsecurity.com/sendFeedback.html'
        )

    })

})