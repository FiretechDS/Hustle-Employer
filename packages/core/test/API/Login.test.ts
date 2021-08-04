import { LoginMother } from './mother/LoginMother';
import { Either } from '../common/domain/Either';
import { DataError } from '../common/domain/DataError';
import { LoginEmployerUseCase } from '../employer/application/port/in/LoginEmployerUseCase';
import { LoginPort } from '../employer/application/port/out/LoginPort';
import { LoginService } from '../employer/application/services/LoginService';
import { ProfileProps, profileCreatedProps } from "../employer/domain/EmployerDomainMapper";
import { LoginApi } from '../employer/adapter/out/LoginApi'
import { loginProps, LoginCreatedProps } from "../employer/domain/EmployerDomainMapper";

describe('Login Employer', () =>{
    test('Prueba de valores validos',async () => {
        var memory: LoginPort = new LoginApi();
        var service:LoginEmployerUseCase = new LoginService(memory);
        var validLoginData:loginProps = LoginMother.createValid();
        const loginResult:Either<DataError,LoginCreatedProps> = await service.login(validLoginData);

        expect(loginResult.isRight()).toBe(true);
        expect(loginResult.isLeft()).toBe(false)
    })
    test('Prueba de valores invalidos',async () => {
        var memory: LoginPort = new LoginApi();
        var service:LoginEmployerUseCase = new LoginService(memory);
        var invalidadLoginData:loginProps = LoginMother.createInvalid();
        const loginResult:Either<DataError,LoginCreatedProps> = await service.login(invalidadLoginData);

        expect(loginResult.isRight()).toBe(false);
        expect(loginResult.isLeft()).toBe(true)
    })
})