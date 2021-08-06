import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { profileCreatedProps, ProfileProps } from "../../../domain/EmployerDomainMapper";
import { LoadEmployerPort } from "../out/LoadEmployerPort";


export interface LoadEmployerUseCase{
  loadPort: LoadEmployerPort,
  loadEmployer(employerId:number):Promise<Either<DataError,profileCreatedProps>>
}