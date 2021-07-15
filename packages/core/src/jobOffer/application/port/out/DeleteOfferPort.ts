import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";

export interface DeleteOfferPort{
  delete(offerId:number):Promise<Either<DataError,true>>
}