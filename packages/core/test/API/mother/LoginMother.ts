import { loginProps, LoginCreatedProps } from "../../../src/employer/domain/EmployerDomainMapper";

export class LoginMother{
    static createValid():LoginCreatedProps{
        const credentials:loginProps={
            email: 'luiscasm2501@yomail.com',
            password: 'Gothitelle1*'
        }
        return credentials as LoginCreatedProps
    }
    static createInvalid():LoginCreatedProps{
        const credentials:loginProps={
            email: 'rrhhstaff@firetech.com',
            password: 'Firetech*'
        }
        return credentials as LoginCreatedProps
    }
}