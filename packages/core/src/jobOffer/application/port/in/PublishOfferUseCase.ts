import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { jobCreationProps } from "../../../domain/JobDomainMapper";
import { jobPresentationProps } from "../../../presentation";
import { PublishOfferPort } from "../out/PublishOfferPort";

export interface PublishOfferUseCase{
   publishOfferPort : PublishOfferPort,
   publish(props: jobCreationProps):Promise<Either<DataError, jobPresentationProps>>
}