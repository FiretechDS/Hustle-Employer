import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { ProfileProps } from "../../../domain/EmployerDomainMapper"

export interface RegisterPort{
    publish(employerData:ProfileProps):Promise<Either<DataError,true>>
}