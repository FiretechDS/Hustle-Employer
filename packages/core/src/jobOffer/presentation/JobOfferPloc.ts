import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation";
import { LoadOffersQuery } from "../application/port/in/LoadOffersQuery";
import { PublishOfferUseCase } from "../application/port/in/PublishOfferUseCase";
import { jobPresentationProps, ToDomainMapper } from "../domain/JobDomainMapper";
import { offersInitialState, OffersState } from "./JobOffersState";

const employerID = 1;

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

  createOffer(offer:jobPresentationProps):string{
    try {
      const isCreated =  this.publishOfferUseCase.publish(ToDomainMapper.map(offer));
      if (isCreated){
        this.state.kind==="LoadedOffersState"&& this.state.offers.unshift(offer);
        return 'Offer created succesfully'
      }else{
        return "An error has occurred"
      }
    } catch (error) {
      this.handleError(error.message);
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


  private handleError(error:DataError):OffersState{
    return{
      kind:"ErrorOfferState",
      error:'Ha ocurrido un error inesperado al cargar las ofertas.',
      type:error.kind,
      reason: error.kind==='ApiError'?error.message:error.kind==='UnexpectedError'?error.message.message: 'Error desconocido'
    }
  }
}