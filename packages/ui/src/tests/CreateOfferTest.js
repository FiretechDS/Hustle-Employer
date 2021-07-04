module.exports = {
    'Create Job Offer - Acceptance Test' : function (browser){
        
        const validOffer = {
            deadline: new Date('01-01-2022'),
            duration: '200',
            title: 'Full Stack',
            specialRequirements: 'None',
            skills: [{ name: 'Java', category: 1, number:2 }],
            status: 2,
            hourlyRate: '300',
            schedules: ['monday', 'tuesday', 'friday'],
            location: 'Caracas, Venezuela',
            startHour: 9,
            endHour: 18,
            employerId: 1,
        };

        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body')
            .assert.visible('.button')
            .click('.button')
            .waitForElementVisible('.modal')
            .assert.visible('.create-job-offer-form')
            .setValue('input[placeholder=Título]',validOffer.title)
            .setValue('input[placeholder=Localización]',validOffer.location)
            .setValue('input[type=number]',validOffer.hourlyRate)
            .click('.multiselect.schedule-multiselect')
            .click('.multiselect-option')
            .click('.multiselect.hour-multiselect[name=Hora fin]')
            //.click('')
            .saveScreenshot('tests_output/form.png')
            //.assert.containsText('input[placeholder=Título]','Hola')
    }
}
