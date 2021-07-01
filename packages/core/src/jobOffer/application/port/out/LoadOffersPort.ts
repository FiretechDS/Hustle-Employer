import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { JobOffersWeb } from "../../../adapter/OfferWebModel";

export interface LoadOffersPort{
  loadOffers(employerID:number):Promise<Either<DataError, JobOffersWeb[]>>
}