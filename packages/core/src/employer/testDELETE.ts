import { Profile } from "./domain/Profile";
import { loginProps, ProfileProps } from "./domain/EmployerDomainMapper";
import { ProfileToDomainMapper } from "./domain/EmployerDomainMapper";
import { contactMappedProps, EmployerContact } from "./domain/valueObjects/ContactValueObject";
import { IdentifierEmployer } from "./domain/valueObjects/IdentifiersValueObject";
import { AddressEmployer } from "./domain/valueObjects/AddressValueObject";
import { RegisterService } from "./application/services/RegisterService";
import { RegisterApi } from "./adapter/out/RegisterApiPublisher";
import { ApplicationToInfraMapper } from "./adapter/ProfileApplicationToInfraMapper";
import { LoginService } from "./application/services/LoginService";
import { LoginApi } from "./adapter/out/LoginApi";
import { validateContact } from "./presentation/RegisterValidator"


 /*   var contacto1:contactMappedProps = {
        id: 1,
        firstName:"David",
        lastName: "Ortuño",
        jobTitle:"Developer",
        phoneNumber: 584126110189,
        email:"ortuod@gmail.com"
    }   
    var contact1creado = EmployerContact.create(contacto1.id,contacto1.firstName,contacto1.lastName,contacto1.jobTitle,contacto1.phoneNumber,contacto1.email);
    console.log(contact1creado); 
*/
    const contacto:contactMappedProps ={
        id: 1,
        firstName: 'David',
        lastName: 'Ortuño',
        email: 'ortuod@gmail.com',
        phoneNumber: 584126110189,
        jobTitle: 'Developer'
    }

    var validacion = validateContact(contacto);
    console.log('Fallo '+validacion.isLeft());
    console.log('Paso '+validacion.isRight());

    /*const register:ProfileProps={
        id:undefined,
        email: "daortuno.17@gmail.com",
        password: "David123456*",
        companyName: "Firetech",
        logoURL: "https://scontent.fccs3-1.fna.fbcdn.net/v/t1.6435-9/116794707_635112637132092_6171251423925434618_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=973b4a&_nc_ohc=Hxm86X0rLtYAX-ruGpR&_nc_ht=scontent.fccs3-1.fna&oh=e96c6329e6fe2f8dcd7246b0c94fd044&oe=612DEC19",
        firstLineAddress: "Avenida 1",
        secondLineAddress: "Qta Mis Amores",
        city: "Caracas",
        state: "DF",
        zip: 1030,
        skills: [{name:'Java',number:1,category:1}],
        contacts: [{
            id: 1,
            firstName:"David",
            lastName: "Ortuño",
            jobTitle:"Developer",
            phoneNumber: 584126110189,
            email:"ortuod@gmail.com"
       },
        {
            id:2,
            firstName:"Luis",
            lastName: "Castillo",
            jobTitle:"Full Stack",
            phoneNumber: 584129998877,
            email:"luiscastillo@gmail.com"
        }]
    } 

   async function loginFunction(){
       const loginService = new LoginService(new LoginApi())
        const credentials:loginProps = {
            email:"luiscasm2501@yomail.com",
            password:"Gothitelle1*"
        }
       const res = await loginService.login(credentials)
       console.log(res)
   }
  
   const loginService = registerLocator.provideLoginService()
   console.log(loginService)
*/
