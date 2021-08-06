module.exports = {
    '@disabled': false,
    'Login - Acceptance Test' : function (browser){

        const createdUser = {
          username: 'luiscasm2501@yomail.com',
          password: 'Gothitelle1*',
        }

        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body')
            .waitForElementVisible('.white-card-body')
            .assert.visible('#mail-login')
            .setValue('#mail-login',createdUser.username)
            .assert.visible('#password-login')
            .setValue('#password-login',createdUser.password)
            .assert.visible('#login-button')
            .click('#login-button')
            .waitForElementVisible('#create-new-offer-button')
            .url(function(result) {
                this.assert.equal(result.value, 'http://localhost:8080/offers', 'User has logged in');
              })
    }
}
