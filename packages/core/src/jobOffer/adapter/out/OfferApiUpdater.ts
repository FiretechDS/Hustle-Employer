import apiFetcher from "../../../common/adapter/api/springBoot";
import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { UpdateOfferPort } from "../../application/port/out/UpdateOfferPort";
import { jobCreatedProps } from "../../domain/JobDomainMapper";
import { ApplicationToInfraMapper } from "../JobApplicationToInfraMapper";

export class OfferApiUpdater implements UpdateOfferPort{
  async update(offer: jobCreatedProps): Promise<Either<DataError, true>> {
    try {
      const mappedOffer = ApplicationToInfraMapper.map(offer)
      const offerDto = {...mappedOffer,EmployerId:mappedOffer.employerId, statusJobOfferModelId:mappedOffer.statusJobOfferModel}
      const updateResponse = await apiFetcher.post('job-offer/update',offerDto,{headers:{'Content-Type':'application/json'}})
      if (updateResponse.status===200){
        return Either.right(true)
      }
      return Either.left({kind:'ApiError',message:"Server error: couldn't update offer.",statusCode:updateResponse.status,error:updateResponse.statusText})
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }
  }


}