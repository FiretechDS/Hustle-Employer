import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation";
import { LoadOffersQuery } from "../application/port/in/LoadOffersQuery";
import { PublishOfferUseCase } from "../application/port/in/PublishOfferUseCase";
import { PresentationToApplicationMapper } from "./JobPresentApplicationMapper";
import { offersInitialState, OffersState } from "./JobOffersState";
import { jobCreatePresentationProps, jobPresentationProps } from "./JobPresentationModel";

const employerID = 2;

export class JobOfferPloc extends Ploc<OffersState>{
  private loadOffersQuery:LoadOffersQuery
  private publishOfferUseCase:PublishOfferUseCase;
  constructor ( loadOffersQueryProp:LoadOffersQuery,  publishOfferUseCaseProp:PublishOfferUseCase ){
    super(offersInitialState);
    this.loadOffersQuery=loadOffersQueryProp;
    this.publishOfferUseCase = publishOfferUseCaseProp
    this.loadOffers();
  }

  private async loadOffers(){
 
      const offersResult = await  this.loadOffersQuery.load(employerID);
      offersResult.fold((error)=>{
           this.changeState( this.handleError(error))
      },(offers)=>{
          this.changeState(this.mapToUpdatedState(offers))
      } )
  }

   async createOffer(offer:jobCreatePresentationProps){
    const publishResult =  await this.publishOfferUseCase.publish((PresentationToApplicationMapper.mapToCreate( {...offer,employerId:employerID})));
     const message = publishResult.fold(error=>{
        if( error.kind==='ApiError')
        return error.message
        return error.message.message
      }, (offer:jobPresentationProps)=>{
          if(this.state.kind!=='ErrorOfferState'){ 
            this.changeState(this.mapToUpdatedState([offer,...this.state.offers]))
          }
          return 'Offer published successfully'
      } )
      return message 
  }

  mapToUpdatedState(props: jobPresentationProps[]):OffersState{
    return{
      kind:"LoadedOffersState",
      offers:props.map((offer:jobPresentationProps)=>{
        return offer
      })
    }
  }


  private handleError(error:DataError):OffersState{
    return{
      kind:"ErrorOfferState",
      error:'Ha ocurrido un error inesperado al cargar las ofertas.',
      type:error.kind,
      reason: error.kind==='ApiError'?error.message:error.kind==='UnexpectedError'?error.message.message: 'Error desconocido'
    }
  }
}