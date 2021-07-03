import { PublishOfferService } from '../../jobOffer/application/services/PublishOfferService';
import { Either } from '../../common/domain/Either';
import { OfferinMemoryPublisher } from '../../jobOffer/adapter/out/OfferInMemoryPublisher';
import { PublishOfferPort } from '../../jobOffer/application/port/out/PublishOfferPort';
import { PublishOfferUseCase } from '../../jobOffer/application/port/in/PublishOfferUseCase';
import { jobCreationProps } from '../../jobOffer/domain/JobDomainMapper';
import { JobOfferMother } from './JobOfferMother';

 describe('Create Offer', async () => {
  test('Prueba de valores validos', () => {
    var memory: PublishOfferPort = new OfferinMemoryPublisher();
    var service:PublishOfferUseCase = new PublishOfferService(memory);

    var validTestOffer:jobCreationProps = JobOfferMother.createValid()
    const publishResult = await service.publish(validTestOffer);
 
    expect(publishResult.isRight()).toBe(true);
  });
});
