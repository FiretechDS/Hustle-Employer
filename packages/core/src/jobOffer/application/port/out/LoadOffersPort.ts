import { JobOffersWeb } from "../../../adapter/OfferWebModel";

export interface LoadOffersPort{
  loadOffers(employerID:number):Promise<JobOffersWeb[]>
}