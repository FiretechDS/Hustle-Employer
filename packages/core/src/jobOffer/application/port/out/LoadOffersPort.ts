import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { JobApplicationProps } from "../../JobApplicationModel";

export interface LoadOffersPort{
  loadOffers(employerID:number):Promise<Either<DataError, JobApplicationProps[]>>
}