module.exports = {
    '@disabled': false,
    'Create Job Offer - Acceptance Test' : function (browser){

        const connection = 'http://localhost:8080'
        const validOffer = {
            deadline: '01-01-2022',
            duration: '200',
            title: 'AcceptanceTest',
            hourlyRate: '100',
            location: 'New York, US',
            description: 'This is an acceptance test.'
        };
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
            .waitForElementVisible('body')
            .assert.visible('#create-new-offer-button')
            .click('#create-new-offer-button')
            //.waitForElementVisible('.create-job-offer-form')
            //.assert.visible('.create-job-offer-form')
            .setValue('#title-input',validOffer.title)
            .setValue('#location-input',validOffer.location)
            .setValue('#hourlyRate-input',validOffer.hourlyRate)
            //.click('.multiselect.schedule-multiselect')
            .keys("\uE004")
            .keys("\uE015")
            .keys("\uE007")
            .click('#start-hour-input')
            .keys("\uE015")
            .keys("\uE007")
            .click('#end-hour-input')
            .keys("\uE015")
            .keys("\uE015")
            .keys("\uE007")
            .setValue('#deadline-input',validOffer.deadline)
            .setValue('#duration-input',validOffer.duration)
            .keys("\uE004")
            .keys("\uE015")
            .keys("\uE015")
            .keys("\uE007")
            .keys("\uE015")
            .keys("\uE007")
            .setValue('#description-input',validOffer.description)
            .assert.visible('#create-button')
            .click('#create-button')
            //.waitForElementVisible('.form-result')
            //.assert.containsText('.form-result', 'Offer published successfully')

            //Not-happy-path Validation: when duration equals 0
            //.assert.containsText('.form-result', 'Job duration must be greater than zero')
            .saveScreenshot('tests_output/create_job_offer.png')
    }
}
