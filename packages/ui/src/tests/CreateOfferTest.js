module.exports = {
    'Create Job Offer - Acceptance Test' : function (browser){
        
        const validOffer = {
            deadline: '01-01-2022',
            duration: '200',
            title: 'Full Stack',
            specialRequirements: 'None',
            skills: [{ name: 'Java', category: 1, number:2 }],
            status: 2,
            hourlyRate: '400',
            schedules: ['monday', 'tuesday', 'friday'],
            location: 'Caracas, Venezuela',
            employerId: 1,
            description: 'We need a good developer'
        };

        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body')
            .assert.visible('.button')
            .click('.button')
            .waitForElementVisible('.modal')
            .assert.visible('.create-job-offer-form')
            .setValue('#title-input',validOffer.title)
            .setValue('#location-input',validOffer.location)
            .setValue('#hourlyRate-input',validOffer.hourlyRate)
            .click('.multiselect.schedule-multiselect')
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
            .keys("\uE007")
            .setValue('#description-input',validOffer.description)
            .click('#create-button')
            //.click('.btn-close')
            
            .saveScreenshot('tests_output/form.png')
    }
}
