import { jobPresentationProps } from "./JobPresentationModel";


export interface LoadingOffersState{
  kind:"LoadingOffersState",
  offers:Array <jobPresentationProps>
}

export interface LoadedOffersState{
  kind:"LoadedOffersState",
  offers: Array <jobPresentationProps>
}

export interface ErrorOffersState{
  kind:"ErrorOfferState",
  type:string,
  error:string,
  reason:string,
}

export type OffersState = LoadingOffersState|LoadedOffersState|ErrorOffersState

export const offersInitialState: OffersState = {
  kind:"LoadingOffersState",
  offers:[]
}