import { OfferinMemoryPublisher } from "../../jobOffer";
import { OfferApiPublisher } from "../../jobOffer/adapter/out/OfferApiPublisher";
import { OfferApiRemover } from "../../jobOffer/adapter/out/OfferApiRemover";
import { OffersAPIRepository } from "../../jobOffer/adapter/out/OffersAPIRepository";
import { OffersInMemoryRepository } from "../../jobOffer/adapter/out/OffersInMemoryRepository";
import { LoadOffersService } from "../../jobOffer/application/services/LoadOffersService";
import { PublishOfferService } from "../../jobOffer/application/services/PublishOfferService";
import { RemoveOfferService } from "../../jobOffer/application/services/RemoveOfferService";
import { JobOfferPloc } from "../../jobOffer/presentation";

function provideJobOfferPloc(workLocal?:boolean):JobOfferPloc{
  //Adapters
  const createOfferRepo = workLocal? new OfferinMemoryPublisher():new OfferApiPublisher();
  const getOfferRepo = workLocal? new OffersInMemoryRepository(): new OffersAPIRepository();
  const deleteOfferRepo = new OfferApiRemover()

  //Use cases
  const getOffersQuery = new LoadOffersService(getOfferRepo);
  const publishOfferUseCase = new PublishOfferService(createOfferRepo);
  const removeOfferUseCase = new RemoveOfferService(deleteOfferRepo)

  //PLoC
  const jobOfferPloc = new JobOfferPloc(getOffersQuery,publishOfferUseCase,removeOfferUseCase);

  return jobOfferPloc;
}

export const dependenciesLocator = {
  provideJobOfferPloc
}