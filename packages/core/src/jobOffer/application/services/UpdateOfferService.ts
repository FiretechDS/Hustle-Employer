import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { ToDomainMapper } from "../../domain/JobDomainMapper";
import {  JobCreatedApplicationProps } from "../JobApplicationModel";
import { UpdateOfferUseCase } from "../port/in/UpdateOfferUseCase";
import { UpdateOfferPort } from "../port/out/UpdateOfferPort";

export class UpdateOfferService implements UpdateOfferUseCase{
  port: UpdateOfferPort;

  constructor(port:UpdateOfferPort){
    this.port = port;
  }
 async updateOffer(offer: JobCreatedApplicationProps): Promise<Either<DataError, true>> {
    try {
      ToDomainMapper.map(offer)
      if (offer.id){
        return await this.port.update(offer)
      }else{
        return Either.left({kind:'UnexpectedError',message:new Error('To update an offer, its id must be provided.')})
      }
    } catch (error) {
      return Either.left({kind:'UnexpectedError',message:error})
    }
  }
  
}