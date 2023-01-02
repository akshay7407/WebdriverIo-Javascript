import { short } from '../lib/timeout'
import { assert } from "chai"
 
describe('Browser Actions', () => {
	it('Inputs', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const input = $('#developer-name')
		input.waitForExist()
		input.setValue('Gaikwad')
		browser.pause(short)
		input.clearValue()
		browser.pause(short)
		input.addValue('Akshay')
		browser.pause(short)
	})
 
	it('Click', () => {
		const buttonPupulate = $('#populate')
		buttonPupulate.waitForExist()
		buttonPupulate.click()
	})
 
	it('Checkbox & Radio Button', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const radio = $('#linux')
		radio.waitForExist()
		radio.click()
		browser.pause(short)
 
		const checkbox = $('#remote-testing')
		checkbox.waitForExist()
		checkbox.click()
		browser.pause(short)
	})
 
	it('Select Box', () => {
		browser.url('https://devexpress.github.io/testcafe/example/')
		const select = $('#preferred-interface')
		select.waitForExist()
		select.selectByVisibleText('JavaScript API')
		browser.pause(short)
	})
})
