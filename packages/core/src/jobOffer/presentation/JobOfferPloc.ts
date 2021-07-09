import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation";
import { LoadOffersQuery } from "../application/port/in/LoadOffersQuery";
import { PublishOfferUseCase } from "../application/port/in/PublishOfferUseCase";
import { PresentationToApplicationMapper } from "./JobPresentApplicationMapper";
import { offersInitialState, OffersState } from "./JobOffersState";
import { jobCreatePresentationProps, jobPresentationProps } from "./JobPresentationModel";

const employerID = 100;

export class JobOfferPloc extends Ploc<OffersState>{
  private loadOffersQuery:LoadOffersQuery
  private publishOfferUseCase:PublishOfferUseCase;
  constructor ( loadOffersQueryProp:LoadOffersQuery,  publishOfferUseCaseProp:PublishOfferUseCase ){
    super(offersInitialState);
    this.loadOffersQuery=loadOffersQueryProp;
    this.publishOfferUseCase = publishOfferUseCaseProp
    this.loadOffers();
  }

   async loadOffers(){
 
      const offersResult = await  this.loadOffersQuery.load(employerID);
      offersResult.fold((error)=>{
           this.changeState( this.handleError(error))
      },(offers)=>{
          if(offers.length>0) this.changeState(this.mapToUpdatedState(offers))
          else this.changeState(this.handleEmpty())
      } )
  }

   async createOffer(offer:jobCreatePresentationProps){
    const publishResult =  await this.publishOfferUseCase.publish((PresentationToApplicationMapper.mapToCreate( {...offer,employerId:employerID})));
     const message = publishResult.fold(error=>{
        if( error.kind==='ApiError')
        return "Coudn't connect to server, try again later."
        return error.message.message
      }, (offer:jobPresentationProps)=>{
          if(this.state.kind==='EmptyOffersState'||this.state.kind==='LoadedOffersState'){ 
            this.changeState(this.mapToUpdatedState([offer,...this.state.offers]))
          }
          return 'Offer published successfully'
      } )
      return message 
  }

  private mapToUpdatedState(props: jobPresentationProps[]):OffersState{
    return{
      kind:"LoadedOffersState",
      offers:props.map((offer:jobPresentationProps)=>{
        return offer
      })
    }
  }


  private handleError(error:DataError):OffersState{
    switch(error.kind){
     case "UnexpectedError": 
      return{
        kind:'ErrorOfferState',
        reason:error.message.message,
        error:'An unexpected error has occurred',
        type: error.kind
        
      }
      case 'ApiError':
        return{
          kind:'ErrorOfferState',
          reason:error.message,
          error:error.error,
          type:error.kind
        }
  }
  }

  private handleEmpty():OffersState{
    return{
      kind:'EmptyOffersState',
      message:"You've no offers currently.",
      offers:[]
    }
  }
}

