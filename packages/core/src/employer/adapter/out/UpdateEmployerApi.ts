import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { UpdateEmployerPort } from "../../application/port/out/UpdateEmployerPort";
import { profileCreatedProps } from "../../domain/EmployerDomainMapper";

export class UpdateEmployerApi implements UpdateEmployerPort{
  update(employer: profileCreatedProps): Promise<Either<DataError, true>> {
    throw new Error("Method not implemented.");
  }
  
}