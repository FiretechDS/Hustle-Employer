import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { ProfileProps } from "../../../domain/EmployerDomainMapper"
import { profilePresentationProps } from "../../../presentation/EmployerPresentationModel";
import { RegisterPort } from "../out/RegisterPort";

export interface RegisterEmployerUseCase{
    registerPort : RegisterPort,
    register(props: ProfileProps):Promise<Either<DataError, true>>
}