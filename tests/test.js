const selectors = require('../supporting/selectors')

module.exports = {
    beforeEach : browser => {
        browser.url("https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html")
    },
    after : browser => {
        browser.end()
    },
    'TEXT CONTAIN TEST' :  browser => {
        browser
            .useXpath()
            .verify.containsText(selectors['Enter Wanted'], 'Enter Wanted')
            
            .useCss()
            .verify.containsText(selectors['Header'], 'Header')
            .verify.containsText(selectors['MKE'], 'MKE')
            .verify.containsText(selectors['Originating Agency Identifier'], 'Originating Agency Identifier')
            
    },
    'ELEMENT PRESENT TEST' : browser => {
        browser
            .useXpath()
            .verify.elementPresent(selectors['Enter Wanted'])
            
            .useCss()
            .verify.elementPresent(selectors['MKE'])
    },
    'INPUT TEXT FIELD TEST' : browser => {
        browser
            .click(selectors['Header Input'])
            
    }
}