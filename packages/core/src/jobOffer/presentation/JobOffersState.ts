import { jobPresentationProps } from "./JobPresentationModel";


export interface LoadingOffersState{
  kind:"LoadingOffersState",
}

export interface LoadedOffersState{
  kind:"LoadedOffersState",
  offers: Array <jobPresentationProps>
}

export interface EmptyOffersState{
  kind:"EmptyOffersState",
  offers: Array <jobPresentationProps>
  message:string
}

export interface ErrorOffersState{
  kind:"ErrorOfferState",
  type:string,
  error:string,
  reason:string,
}

export type OffersState = LoadingOffersState|LoadedOffersState|ErrorOffersState|EmptyOffersState

export const offersInitialState: OffersState = {
  kind:"LoadingOffersState",
}