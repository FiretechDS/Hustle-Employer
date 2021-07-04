import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { PublishOfferPort } from "../../application/port/out/PublishOfferPort";
import { jobCreationProps } from "../../domain/JobDomainMapper";
import apiFetcher from "../api/springBoot";
import { ApplicationToInfraMapper } from "../JobApplicationToInfraMapper";

export class OfferApiPublisher implements PublishOfferPort{
  async publish(offer: jobCreationProps): Promise<Either<DataError, true>> {
    try {
      const mappedOffer = ApplicationToInfraMapper.map(offer)
      const offerDto ={...mappedOffer, EmployerId:mappedOffer.employerId, statusJobOfferModelId:mappedOffer.statusJobOfferModel}
      const publishResult =await apiFetcher.post('/job-offer/create',offerDto,{headers:{'Content-Type':'application/json'}})
      if(publishResult.status===200){
        return Either.right(true)
      }
      return Either.left({kind:'ApiError',message:"Oops... the offer couldn't be published, try again later", error:publishResult.statusText,statusCode:publishResult.status})
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:new Error("The offer coulnd't be published, try again later.")})
    }
  }
  
}