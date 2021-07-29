import { OfferinMemoryPublisher } from "../../jobOffer";
import { OfferApiPublisher } from "../../jobOffer/adapter/out/OfferApiPublisher";
import { OfferApiRemover } from "../../jobOffer/adapter/out/OfferApiRemover";
import { OfferApiUpdater } from "../../jobOffer/adapter/out/OfferApiUpdater";
import { OffersAPIRepository } from "../../jobOffer/adapter/out/OffersAPIRepository";
import { OffersInMemoryRepository } from "../../jobOffer/adapter/out/OffersInMemoryRepository";
import { LoadOffersService } from "../../jobOffer/application/services/LoadOffersService";
import { PublishOfferService } from "../../jobOffer/application/services/PublishOfferService";
import { RemoveOfferService } from "../../jobOffer/application/services/RemoveOfferService";
import { UpdateOfferService } from "../../jobOffer/application/services/UpdateOfferService";
import { JobOfferPloc } from "../../jobOffer/presentation";

function provideJobOfferPloc(workLocal?:boolean):JobOfferPloc{
  //Adapters
  const createOfferRepo = workLocal? new OfferinMemoryPublisher():new OfferApiPublisher();
  const getOfferRepo = workLocal? new OffersInMemoryRepository(): new OffersAPIRepository();
  const deleteOfferRepo = new OfferApiRemover()
  const updateOfferRepo = new OfferApiUpdater()
  //Use cases
  const getOffersQuery = new LoadOffersService(getOfferRepo);
  const publishOfferUseCase = new PublishOfferService(createOfferRepo);
  const removeOfferUseCase = new RemoveOfferService(deleteOfferRepo)
  const updateOfferUseCase = new UpdateOfferService(updateOfferRepo)
  //PLoC
  const jobOfferPloc = new JobOfferPloc(getOffersQuery,publishOfferUseCase,removeOfferUseCase,updateOfferUseCase);

  return jobOfferPloc;
}

export const dependenciesLocator = {
  provideJobOfferPloc
}