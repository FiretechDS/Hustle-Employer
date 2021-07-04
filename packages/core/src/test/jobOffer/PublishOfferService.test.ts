import { PublishOfferService } from '../../jobOffer/application/services/PublishOfferService';
import { Either } from '../../common/domain/Either';
import { OfferinMemoryPublisher } from '../../jobOffer/adapter/out/OfferInMemoryPublisher';
import { PublishOfferPort } from '../../jobOffer/application/port/out/PublishOfferPort';
import { PublishOfferUseCase } from '../../jobOffer/application/port/in/PublishOfferUseCase';
import { jobCreationProps } from '../../jobOffer/domain/JobDomainMapper';
import { JobOfferMother } from './JobOfferMother';
import { DataError } from '../../common/domain/DataError';
import { jobPresentationProps } from '../../jobOffer/presentation';

describe('Create Offer',  () => {
  test('Prueba de valores validos',async () => {
    var memory: PublishOfferPort = new OfferinMemoryPublisher();
    var service:PublishOfferUseCase = new PublishOfferService(memory);

    var validTestOffer:jobCreationProps = JobOfferMother.createValid()
    const publishResult:Either<DataError,jobPresentationProps> = await service.publish(validTestOffer);
 
    expect(publishResult.isRight()).toBe(true);
    expect(publishResult.isLeft()).toBe(false)
  });

  test('Prueba de valores invalidos',async () => {
    var memory: PublishOfferPort = new OfferinMemoryPublisher();
    var service:PublishOfferUseCase = new PublishOfferService(memory);

    var invalidTestOffer:jobCreationProps = JobOfferMother.createInvalid()
    const publishResult:Either<DataError,jobPresentationProps> = await service.publish(invalidTestOffer);
 
    expect(publishResult.isRight()).toBe(false);
    expect(publishResult.isLeft()).toBe(true)
  });
});

