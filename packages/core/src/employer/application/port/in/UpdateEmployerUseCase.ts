import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { profileCreatedProps } from "../../../domain/EmployerDomainMapper";
import { UpdateEmployerPort } from "../out/UpdateEmployerPort";

export interface UpdateEmployerUseCase{
  port: UpdateEmployerPort
  updateEmployer(employer:profileCreatedProps):Promise<Either<DataError,true>>
}