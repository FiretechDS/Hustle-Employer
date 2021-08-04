import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { ProfileProps } from "../../../domain/EmployerDomainMapper";

export interface LoadEmployerPort{
  load(employerId:number):Promise<Either<DataError,ProfileProps>>
}