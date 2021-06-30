import { OfferinMemoryPublisher } from "../../jobOffer/adapter/out/OfferInMemoryPublisher";
import { OffersInMemoryRepository } from "../../jobOffer/adapter/out/OffersInMemoryRepository";
import { loadOffersService } from "../../jobOffer/application/services/LoadOffersService";
import { PublishOfferService } from "../../jobOffer/application/services/PublishOfferService";
import { JobOfferPloc } from "../../jobOffer/presentation";

function provideJobOfferPloc():JobOfferPloc{
  const createOfferRepo = new OfferinMemoryPublisher();
  const getOfferRepo = new OffersInMemoryRepository();
  const getOffersQuery = new loadOffersService(getOfferRepo);
  const publishOfferUseCase = new PublishOfferService(createOfferRepo);
  const jobOfferPloc = new JobOfferPloc(getOffersQuery,publishOfferUseCase);

  return jobOfferPloc;
}

export const dependenciesLocator = {
  provideJobOfferPloc
}