import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { profileCreatedProps } from "../../../domain/EmployerDomainMapper";

export interface UpdateEmployerPort{
  update(employer:profileCreatedProps):Promise<Either<DataError,true>>
}