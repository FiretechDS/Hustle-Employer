import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { PublishOfferPort } from "../../application/port/out/PublishOfferPort";
import { jobCreationProps } from "../../domain/JobDomainMapper";
import { ApplicationToInfraMapper } from "../JobApplicationToInfraMapper";

export class OfferinMemoryPublisher implements PublishOfferPort{
  publish(offer: jobCreationProps): Promise<Either<DataError,true>> {
    return new Promise((resolve,reject)=>{
      try {
        ApplicationToInfraMapper.map(offer);
        resolve (Either.right(true))
      } catch (error) {
        resolve(Either.left(error))
      }

    }) 
  }
  
}