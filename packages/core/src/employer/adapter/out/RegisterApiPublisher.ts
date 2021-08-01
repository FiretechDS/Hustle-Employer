import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { ProfileProps, ProfileToDomainMapper } from "../../domain/EmployerDomainMapper";
import { profilePresentationProps } from "../../presentation/EmployerPresentationModel";
import { ProfileToPresentationMapper } from "../../presentation/EmployerPresentationMapper";
import { ProfileApplicationProps } from "../../application/EmployerAplicationModel";
import { RegisterEmployerUseCase } from "../../application/port/in/RegisterEmployerUseCase";
import { RegisterPort } from "../../application/port/out/RegisterPort";

export class RegisterApi implements RegisterPort{
    async publish(offer: ProfileProps): Promise<Either<DataError, true>> {
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