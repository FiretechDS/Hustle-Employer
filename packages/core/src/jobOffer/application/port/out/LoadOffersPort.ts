import { JobOffersWeb } from "../../../adapter/WebModel";

export interface LoadOffersPort{
  loadOffers(employerID:number):Promise<JobOffersWeb[]>
}