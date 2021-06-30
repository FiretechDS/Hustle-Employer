import { Ploc } from "../../common/presentation";
import { LoadOffersQuery } from "../application/port/in/LoadOffersQuery";
import { PublishOfferUseCase } from "../application/port/in/PublishOfferUseCase";
import { jobPresentationProps } from "../domain/JobDomainMapper";
import { JobOfferProps } from "../domain/JobOffer";
import { offersInitialState, OffersState } from "./JobOffersState";

const employerID = 1;

export class JobOfferPloc extends Ploc<OffersState>{
  constructor (private loadOffersQuery:LoadOffersQuery, private publishOfferUseCase:PublishOfferUseCase ){
    super(offersInitialState);
    this.loadOffers();
  }

  private async loadOffers(){
    try {
      const offersResult = await this.loadOffersQuery.load(employerID);
      this.changeState(this.mapToUpdatedState(offersResult))
    } catch (error) {
      console.log(error.message)
    }

  }

  createOffer(offer:JobOfferProps):string{
    try {
      const isCreated =  this.publishOfferUseCase.publish(offer);
      if (isCreated){
        return 'Offer created succesfully'
      }else{
        return "An error has occurred"
      }
    } catch (error) {
      return error.message;
    }

  }

  mapToUpdatedState(props: jobPresentationProps[]):OffersState{
    return{
      kind:"LoadedOffersState",
      offers:props.map((offer:jobPresentationProps)=>{
        return offer 
      })
    }
  }
  private handleError(error:string){
    
  }
}