import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";

export interface LoginPort{
  login(offerId:number):Promise<Either<DataError,true>>
}