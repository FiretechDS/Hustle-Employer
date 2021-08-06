module.exports = {
  '@disabled': false,
    'Delete Job Offer - Acceptance Test' : function (browser){
        const connection = 'http://localhost:8080'
        const createdUser = {
          username: 'luiscasm2501@yomail.com',
          password: 'Gothitelle1*',
        }

        browser
            .url(connection)
            .waitForElementVisible('.white-card-body')
            .setValue('#mail-login',createdUser.username)
            .setValue('#password-login',createdUser.password)
            .click('#login-button')
            .saveScreenshot('tests_output/view_created_offers.png')
            .waitForElementVisible('#AcceptanceTest')
            .assert.visible('#AcceptanceTest')
            .click('#AcceptanceTest')
            .assert.visible('li[class=archive-button] > button[id=AcceptanceTest]')
            .click('li[class=archive-button] > button[id=AcceptanceTest]')
            .waitForElementVisible('div[class=buttons] > button:nth-child(2)',1000)
            .click('div[class=buttons] > button:nth-child(2)')
            .waitForElementVisible('#AcceptanceTest')
            .assert.visible('#AcceptanceTest')
            .click('#AcceptanceTest')
            .assert.visible('li[class=delete-button] > button[id=AcceptanceTest]')
            .click('li[class=delete-button] > button[id=AcceptanceTest]')
            .assert.visible('.p-confirm-dialog-accept')
            .click('.p-confirm-dialog-accept')
            .saveScreenshot('tests_output/delete_job_offer.png')


    }
}
