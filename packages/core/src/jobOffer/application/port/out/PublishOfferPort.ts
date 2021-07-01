import { JobOffersWeb } from "../../../adapter/OfferWebModel";

export interface PublishOfferPort{
  publish(offer:JobOffersWeb):Promise<Boolean>
}