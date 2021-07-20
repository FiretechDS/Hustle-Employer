import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { JobApplicationProps } from "../../JobApplicationModel";
import { DeleteOfferPort } from "../out/DeleteOfferPort";

export interface DeleteOfferUseCase{
  deleteOfferPort:DeleteOfferPort,
  delete(offer:JobApplicationProps):Promise<Either<DataError,true>>
}