import { OfferinMemoryPublisher } from "../../jobOffer";
import { OfferApiPublisher } from "../../jobOffer/adapter/out/OfferApiPublisher";
import { OffersAPIRepository } from "../../jobOffer/adapter/out/OffersAPIRepository";
import { OffersInMemoryRepository } from "../../jobOffer/adapter/out/OffersInMemoryRepository";
import { LoadOffersService } from "../../jobOffer/application/services/LoadOffersService";
import { PublishOfferService } from "../../jobOffer/application/services/PublishOfferService";
import { JobOfferPloc } from "../../jobOffer/presentation";

function provideJobOfferPloc(workLocal?:boolean):JobOfferPloc{
  const createOfferRepo = workLocal? new OfferinMemoryPublisher():new OfferApiPublisher();
  const getOfferRepo = workLocal? new OffersInMemoryRepository(): new OffersAPIRepository();
  const getOffersQuery = new LoadOffersService(getOfferRepo);
  const publishOfferUseCase = new PublishOfferService(createOfferRepo);
  const jobOfferPloc = new JobOfferPloc(getOffersQuery,publishOfferUseCase);

  return jobOfferPloc;
}

export const dependenciesLocator = {
  provideJobOfferPloc
}