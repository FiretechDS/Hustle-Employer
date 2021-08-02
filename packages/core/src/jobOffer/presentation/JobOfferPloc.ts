import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation";
import { LoadOffersQuery } from "../application/port/in/LoadOffersQuery";
import { PublishOfferUseCase } from "../application/port/in/PublishOfferUseCase";
import { PresentationToApplicationMapper } from "./JobPresentApplicationMapper";
import { offersInitialState, OffersState } from "./JobOffersState";
import { jobCreatePresentationProps, jobPresentationProps } from "./JobPresentationModel";
import { DeleteOfferUseCase } from "../application/port/in/DeleteOfferUseCase";
import { plocResult } from "../../common/presentation/PlocResult";
import { UpdateOfferUseCase } from "../application/port/in/UpdateOfferUseCase";

const employerID = 100;

export class JobOfferPloc extends Ploc<OffersState>{
  private loadOffersQuery:LoadOffersQuery
  private publishOfferUseCase:PublishOfferUseCase;
  private deleteOfferUseCase:DeleteOfferUseCase;
  private updateOfferUseCase:UpdateOfferUseCase;
  constructor ( loadOffersQueryProp:LoadOffersQuery,  publishOfferUseCaseProp:PublishOfferUseCase, deleteOfferUseCase:DeleteOfferUseCase,updateUseCaseProp:UpdateOfferUseCase ){
    super(offersInitialState);
    this.loadOffersQuery=loadOffersQueryProp;
    this.publishOfferUseCase = publishOfferUseCaseProp;
    this.deleteOfferUseCase=deleteOfferUseCase;
    this.updateOfferUseCase=updateUseCaseProp;
    this.loadOffers();
  }

  public reload():void{
    this.changeState({kind:'LoadingOffersState'})
    this.loadOffers()
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
    offer.title=this.checkTitle(offer.title)
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

  async updateOffer(offerNumber:number,updatedOffer:jobPresentationProps):Promise<plocResult>{
    const result:plocResult ={success:false,value:'An unexpected error has occurred while updating. '}
    const foundOffer = this.findOffer(offerNumber)
    if (foundOffer){
      const updateResult = await this.updateOfferUseCase.updateOffer(PresentationToApplicationMapper.mapCreated(updatedOffer))
      updateResult.fold(
        (err)=>{
          result.value=err.kind==='UnexpectedError'? err.message.message:err.message
        },
        ()=>{
          this.loadOffers()
          result.success=true
          result.value = `"${foundOffer.title}" was updated successfully.`
        }
      )
    }
    return result
  }

  async deleteOffer(offerNumber:number):Promise<plocResult>{
    const result:plocResult ={success:false,value:'An unexpected error has occurred. '}
      const foundOffer = this.findOffer(offerNumber)
      if (foundOffer){
        const deleteResult = await this.deleteOfferUseCase.delete(PresentationToApplicationMapper.mapCreated(foundOffer))
        deleteResult.fold( 
          (error)=>{
           if (error.kind==='UnexpectedError')  result.value=error.message.message
          },
          ()=>{
            result.success=true
            result.value=`"${foundOffer.title}" offer was removed successfully.`
            this.loadOffers()
          }
        )
      }

    return result
  }

  private mapToUpdatedState(props: jobPresentationProps[]):OffersState{
    const activeOffer:jobPresentationProps[]=[]
    const archiveOffer:jobPresentationProps[]=[]
    props.forEach(offer=>{
      if (offer.status==='Open'||offer.status==='Closed'){
        activeOffer.push(offer)
      }else if (offer.status==='Posted'||'Cancelled'){
        archiveOffer.push(offer)
      }
    })

    return{
      kind:"LoadedOffersState",
      archiveOffers:archiveOffer,
      activeOffers:activeOffer
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
    }
  }
    
  private findOffer(offerNumber:number){
    if (this.state.kind==='LoadedOffersState'){
      const foundOffer =  this.state.archiveOffers.concat(this.state.activeOffers).find((offer:jobPresentationProps)=>{
       return offer.id===offerNumber
      } )
      return foundOffer
    }
  }

  private checkTitle(title:string):string{
    if (this.state.kind==='LoadedOffersState'){
      const repeats = this.state.activeOffers.concat(this.state.archiveOffers).filter((value:jobPresentationProps)=>{
        const trimedTitle = title.trim()
        if (value.title.startsWith(trimedTitle)){
          const checkRegexp = value.title.match(/^.*(\((\d+)\))/)
          return value.title===trimedTitle||checkRegexp
        }
        return false
      })
      if (repeats.length>0){
        return `${title} (${repeats.length})`
      }
    }
    return title
}
}

