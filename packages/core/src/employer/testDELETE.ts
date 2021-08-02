import { Profile } from "./domain/Profile";
import { ProfileProps } from "./domain/EmployerDomainMapper";
import { ProfileToDomainMapper } from "./domain/EmployerDomainMapper";
import { EmployerContact } from "./domain/valueObjects/ContactValueObject";
import { IdentifierEmployer } from "./domain/valueObjects/IdentifiersValueObject";
import { AddressEmployer } from "./domain/valueObjects/AddressValueObject";
import { RegisterService } from "./application/services/RegisterService";
import { RegisterApi } from "./adapter/out/RegisterApiPublisher";
import { ApplicationToInfraMapper } from "./adapter/ProfileApplicationToInfraMapper";


    const register:ProfileProps={
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
    const registerService:RegisterService = new RegisterService(new RegisterApi())
  async function registerFunction(){
    try {
       const res = await registerService.register(register)
       const infraMapped = ApplicationToInfraMapper.map(register)
       console.log(infraMapped)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    }
    registerFunction()
    //const perfil:ProfileToDomainMapper = ProfileToDomainMapper.map(register);
    const contact = {
        id: 1,
        firstName:"David",
        lastName: "Ortuño",
        jobTitle:"Developer",
        phoneNumber: 584126110189,
        email:"ortuod@gmail.com"
    };
    const cvo = EmployerContact.create(contact.id,contact.firstName,contact.lastName,contact.jobTitle,contact.phoneNumber,contact.email);
    
    const contacts = [{
        id: 1,
        firstName:"David",
        lastName: "Ortuño",
        jobTitle:"Developer",
        phoneNumber: 584126110189,
        email:"ortuod@gmail.com"
    },{
        id: 2,
        firstName:"David",
        lastName: "Ortuño",
        jobTitle:"Developer",
        phoneNumber: 584126110189,
        email:"ortuod@gmail.com"
    }]
    const csvo = EmployerContact.createList(contacts);

    /* const credentials = {
        email: "daortuno.17@est.ucab.edu.ve",
        password: "David1311*"
    } 
    const crvo = IdentifierEmployer.create(credentials.email,credentials.password);
    console.log(crvo);
    
    /*const dir = {
        firstLineAddress: "Avenida 1",
        secondLineAddress: "Qta Mis Amores",
        city: "Caracas",
        state: "DF",
        zip: 1030,
    }
    const avo = AddressEmployer.create(dir.firstLineAddress,dir.secondLineAddress,dir.city,dir.state,dir.zip);
    console.log(avo); */


