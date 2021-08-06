import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { jobCreatedProps } from "../../../domain/JobDomainMapper";

export interface UpdateOfferPort{
  update(offer:jobCreatedProps):Promise<Either<DataError,true>>
}