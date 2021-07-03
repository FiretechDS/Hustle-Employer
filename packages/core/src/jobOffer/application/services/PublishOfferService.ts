import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { jobCreationProps, ToDomainMapper } from "../../domain/JobDomainMapper";
import { jobPresentationProps } from "../../presentation";
import { ToPresentationMapper } from "../../presentation/JobPresentationMapper";
import { JobApplicationProps } from "../JobApplicationModel";
import { PublishOfferUseCase } from "../port/in/PublishOfferUseCase";
import { PublishOfferPort } from "../port/out/PublishOfferPort";

export class PublishOfferService implements PublishOfferUseCase{
  publishOfferPort: PublishOfferPort;

  constructor(port: PublishOfferPort){
    this.publishOfferPort=port 
  }  
  
 async publish(props: jobCreationProps):Promise<Either<DataError,jobPresentationProps>>{
    try {
      //Validate rules inside domain value objects
      const domainMapped = ToDomainMapper.map(props);
      const serviceResult:Either<DataError,true> = await this.publishOfferPort.publish(props);
      const errorOrOffer:Either<DataError,jobPresentationProps>= serviceResult.fold( 
      (error)=>{
        return Either.left(error)
      },(()=>{
        return Either.right(ToPresentationMapper.map(domainMapped))
      } )
      )
      return errorOrOffer
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }
  }

}