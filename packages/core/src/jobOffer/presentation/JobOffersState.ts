import { jobPresentationProps } from "../domain/JobDomainMapper";


export interface LoadingOffersState{
  kind:"LoadingOffersState"
}

export interface LoadedOffersState{
  kind:"LoadedOffersState",
  offers: Array <jobPresentationProps>
}

export interface ErrorOffersState{
  kind:"ErrorOfferState",
  error:string
}

export type OffersState = LoadingOffersState|LoadedOffersState|ErrorOffersState

export const offersInitialState: OffersState = {
  kind:"LoadingOffersState"
}