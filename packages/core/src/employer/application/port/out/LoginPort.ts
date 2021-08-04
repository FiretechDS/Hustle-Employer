import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { LoginCreatedProps, loginProps } from "../../../domain/EmployerDomainMapper";

export interface LoginPort{
  login(loginProps:loginProps):Promise<Either<DataError,LoginCreatedProps>>
}