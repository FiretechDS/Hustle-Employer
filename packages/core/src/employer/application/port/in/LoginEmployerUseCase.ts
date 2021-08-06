import { DataError } from "../../../../common/domain/DataError";
import { Either } from "../../../../common/domain/Either";
import { LoginCreatedProps, loginProps } from "../../../domain/EmployerDomainMapper"
import { LoginPort } from "../out/LoginPort";

export interface LoginEmployerUseCase{
    LoginPort : LoginPort,
    login(props: loginProps):Promise<Either<DataError, LoginCreatedProps>>
}