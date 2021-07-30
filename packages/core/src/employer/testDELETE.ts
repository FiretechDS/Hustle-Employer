import { Profile } from "./domain/Profile";
import { ProfileProps } from "./domain/EmployerDomainMapper";
import { ProfileToDomainMapper } from "./domain/EmployerDomainMapper";
import { EmployerContact } from "./domain/valueObjects/ContactValueObject";
import { IdentifierEmployer } from "./domain/valueObjects/IdentifiersValueObject";
import { AddressEmployer } from "./domain/valueObjects/AddressValueObject";


   /* const register:ProfileProps={
        id:1,
        email: "daortuno.17@gmail.com",
        password: "David123456*",
        companyName: "Firetech",
        logoURL: "https://www.firetech.com/image.png",
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
       }/*,
        {
            firstName:"Luis",
            lastName: "Castillo",
            jobTitle:"Full Stack",
            phoneNumber: 584129998877,
            email:"luiscastillo@gmail.com"
        }]
    } */

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
    console.log(csvo);

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


