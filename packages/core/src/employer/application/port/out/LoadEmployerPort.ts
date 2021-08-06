import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { profileCreatedProps } from "../../../domain/EmployerDomainMapper";

export interface LoadEmployerPort{
  load(employerId:number):Promise<Either<DataError,profileCreatedProps>>
}