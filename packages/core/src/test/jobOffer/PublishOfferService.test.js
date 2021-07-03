import { PublishOfferService } from "../../jobOffer/application/services/PublishOfferService";
import { Either } from "../../common/domain/Either";
import {OffersInMemoryPubliser} from "../../jobOffer/adapter/out/OfferInMemoryPublisher";

describe ('Create Offer',()=>{
    
    test('Prueba de valores validos', () => {
       
        var memory = new OfferInMemoryPublisher;
        var service = new PublishOfferService(memory);
        
        var validTestOffer = {
            deadline: '01-01-2022',
            duration: 200,
            title: 'Full Stack',
            specialRequirements: 'None',
            skills: [{name: 'Java', category: 'Master'}],
            status: 2,
            hourlyRate: 300,
            schedules: ['monday','tuesday','friday'],
            location: 'Caracas, Venezuela',
            startHour: 9,
            endHour: 18,
            employerID: 1
        };

        expect(service.publish(validTestOffer)).toBe(service.publish.isRight());

    })
    
    




})