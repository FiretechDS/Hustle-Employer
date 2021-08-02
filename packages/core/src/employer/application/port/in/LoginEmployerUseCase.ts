import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { LoginProps } from "../../../domain/EmployerDomainMapper"
import { LoginPort } from "../out/LoginPort";

export interface LoginEmployerUseCase{
    LoginPort : LoginPort,
//    publish(props: LoginProps):Promise<Either<DataError, loginPresentationProps>>
}