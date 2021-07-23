import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { ToDomainMapper } from "../../domain/JobDomainMapper";
import { statuses } from "../../domain/valueObjects/StatusValueObject";
import { JobCreatedApplicationProps, mappedDomainProps } from "../JobApplicationModel";
import { DeleteOfferUseCase } from "../port/in/DeleteOfferUseCase";
import { DeleteOfferPort } from "../port/out/DeleteOfferPort";

export class RemoveOfferService implements DeleteOfferUseCase{
  deleteOfferPort:DeleteOfferPort
  constructor( deleteOfferPort:DeleteOfferPort){
    this.deleteOfferPort=deleteOfferPort;
  }

  async delete(offer:JobCreatedApplicationProps): Promise<Either<DataError, true>> {
    const domainOffer = ToDomainMapper.map(offer)
    if(domainOffer.status.value!==statuses.Posted){
      return Either.left({kind:'UnexpectedError',message:new Error(`This offer is ${domainOffer.status.statusName}. Only archived offers can be deleted`)})
    }
    const deleteResult = await this.deleteOfferPort.delete(domainOffer.idValue) 
    return deleteResult;
  }

}