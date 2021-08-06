import { jobPresentationProps } from "./JobPresentationModel";


export interface LoadingOffersState{
  kind:"LoadingOffersState",
}

export interface LoadedOffersState{
  kind:"LoadedOffersState",
  activeOffers: Array <jobPresentationProps>,
  archiveOffers: Array <jobPresentationProps>

}

export interface EmptyOffersState{
  kind:"EmptyOffersState",
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