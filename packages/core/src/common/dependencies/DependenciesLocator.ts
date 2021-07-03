import { OfferinMemoryPublisher } from "../../jobOffer/adapter/out/OfferInMemoryPublisher";
import { OffersAPIRepository } from "../../jobOffer/adapter/out/OffersAPIRepository";
import { OffersInMemoryRepository } from "../../jobOffer/adapter/out/OffersInMemoryRepository";
import { LoadOffersService } from "../../jobOffer/application/services/LoadOffersService";
import { PublishOfferService } from "../../jobOffer/application/services/PublishOfferService";
import { JobOfferPloc } from "../../jobOffer/presentation";

function provideJobOfferPloc():JobOfferPloc{
  const createOfferRepo = new OfferinMemoryPublisher();
  const getOfferRepo = new OffersAPIRepository();
  const getOffersQuery = new LoadOffersService(getOfferRepo);
  const publishOfferUseCase = new PublishOfferService(createOfferRepo);
  const jobOfferPloc = new JobOfferPloc(getOffersQuery,publishOfferUseCase);

  return jobOfferPloc;
}

export const dependenciesLocator = {
  provideJobOfferPloc
}