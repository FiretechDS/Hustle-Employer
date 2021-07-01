import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { jobPresentationProps } from "../../../presentation/JobPresentationModel";
import {LoadOffersPort } from "../out/LoadOffersPort";

export interface LoadOffersQuery{
  getOffersPort:LoadOffersPort
  load(employerID: number): Promise<Either<DataError,jobPresentationProps[]>>
}