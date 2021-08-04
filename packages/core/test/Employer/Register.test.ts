import { RegisterMother } from './mother/RegisterMother';
import { Either } from '../common/domain/Either';
import { DataError } from '../../src/common/domain/DataError';
import { RegisterEmployerUseCase } from '../../src/employer/application/port/in/RegisterEmployerUseCase';
import { RegisterPort } from '../../src/employer/application/port/out/RegisterPort';
import { RegisterService } from '../../src/employer/application/services/RegisterService';
import { ProfileProps, profileCreatedProps } from "../../src/employer/domain/EmployerDomainMapper";
import { RegisterApi } from '../../src/employer/adapter/out/RegisterApiPublisher'
import apiFetcher from '../../src/common/adapter/api/springBoot';

describe('Register Employer', () =>{

    afterEach(() => {
        jest.resetAllMocks();
    });

    jest.mock('../../src/common/adapter/api/springBoot');

    var registerPort: RegisterPort = new RegisterApi();
    var service:RegisterEmployerUseCase = new RegisterService(registerPort)

    test('Prueba de valores validos',async () => {
        apiFetcher.post = jest.fn().mockResolvedValue({status:200});
        var validRegisterData:ProfileProps = RegisterMother.createValid();
        const registerResult:Either<DataError,true> = await service.register(validRegisterData);

        expect(registerResult.isRight()).toBe(true);
        expect(registerResult.isLeft()).toBe(false)
    })

    test('Prueba de valores invalidos',async () => {
        apiFetcher.post = jest.fn().mockResolvedValue({status:401});
        var invalidRegisterData:ProfileProps = RegisterMother.createInvalid();
        const registerResult:Either<DataError,true> = await service.register(invalidRegisterData);

        expect(registerResult.isRight()).toBe(false);
        expect(registerResult.isLeft()).toBe(true)
    })
})