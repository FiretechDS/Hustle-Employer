import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation";
import { LoadOffersQuery } from "../application/port/in/LoadOffersQuery";
import { PublishOfferUseCase } from "../application/port/in/PublishOfferUseCase";
import { PresentationToApplicationMapper } from "./JobPresentApplicationMapper";
import { offersInitialState, OffersState } from "./JobOffersState";
import { jobCreatePresentationProps, jobPresentationProps } from "./JobPresentationModel";
import { DeleteOfferUseCase } from "../application/port/in/DeleteOfferUseCase";
import { plocResult } from "../../common/presentation/PlocResult";

const employerID = 100;

export class JobOfferPloc extends Ploc<OffersState>{
  private loadOffersQuery:LoadOffersQuery
  private publishOfferUseCase:PublishOfferUseCase;
  private deleteOfferUseCase:DeleteOfferUseCase;
  constructor ( loadOffersQueryProp:LoadOffersQuery,  publishOfferUseCaseProp:PublishOfferUseCase, deleteOfferUseCase:DeleteOfferUseCase ){
    super(offersInitialState);
    this.loadOffersQuery=loadOffersQueryProp;
    this.publishOfferUseCase = publishOfferUseCaseProp;
    this.deleteOfferUseCase=deleteOfferUseCase;
    this.loadOffers();
  }

  private async loadOffers(){
 
      const offersResult = await  this.loadOffersQuery.load(employerID);
      offersResult.fold((error)=>{
           this.changeState( this.handleError(error))
      },(offers)=>{
          if(offers.length>0) this.changeState(this.mapToUpdatedState(offers))
          else this.changeState(this.handleEmpty())
      } )
  }

   async createOffer(offer:jobCreatePresentationProps):Promise<plocResult>{
     const result:plocResult ={success:false,value:'An unexpected error has occurred. '}
    const publishResult =  await this.publishOfferUseCase.publish((PresentationToApplicationMapper.mapToCreate( {...offer,employerId:employerID})));
    publishResult.fold(error=>{
        if( error.kind==='ApiError')  result.value= "Coudn't connect to server, try again later."
        else result.value = error.message.message
      }, ()=>{
          this.loadOffers()
          result.success =true
          result.value = 'Offer published successfully'
      } )
      return result 
  }

  async deleteOffer(offerNumber:number):Promise<plocResult>{
    const result:plocResult ={success:false,value:'An unexpected error has occurred. '}
    if (this.state.kind==='LoadedOffersState'){
      const foundOffer =  this.state.offers.find((offer:jobPresentationProps)=>{
       return offer.id===offerNumber
      } )
      if (foundOffer){
        const deleteResult = await this.deleteOfferUseCase.delete(PresentationToApplicationMapper.mapCreated(foundOffer))
        deleteResult.fold( 
          (error)=>{
           if (error.kind==='UnexpectedError')  result.value=error.message.message
          },
          ()=>{
            result.success=true
            result.value='Your job offer was removed successfully.'
            this.loadOffers()
          }
        )
      }
    }

    return result
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

