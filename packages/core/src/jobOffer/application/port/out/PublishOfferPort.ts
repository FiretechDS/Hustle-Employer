import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { jobCreationProps } from "../../../domain/JobDomainMapper";

export interface PublishOfferPort{
   publish(offer:jobCreationProps):Promise<Either<DataError,true>>
}