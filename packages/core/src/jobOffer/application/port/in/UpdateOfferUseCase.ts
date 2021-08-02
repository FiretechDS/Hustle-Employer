import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { JobApplicationProps, JobCreatedApplicationProps } from "../../JobApplicationModel";
import { UpdateOfferPort } from "../out/UpdateOfferPort";

export interface UpdateOfferUseCase {
  port: UpdateOfferPort
  updateOffer(offer:JobCreatedApplicationProps):Promise<Either<DataError,true>>
}