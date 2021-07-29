import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { ProfileProps } from "../../../domain/EmployerDomainMapper"
// import { jobPresentationProps } from "../../../presentation"; Mapper en presentation
import { RegisterPort } from "../out/RegisterPort";

export interface RegisterEmployerUseCase{
    RegisterPort : RegisterPort,
//    publish(props: ProfileProps):Promise<Either<DataError, registerPresentationProps>>
}