import { ProfileProps, profileCreatedProps } from "../../../src/employer/domain/EmployerDomainMapper";

export class RegisterMother{
    static createValid():profileCreatedProps{
        const profile: ProfileProps ={
            email: 'rrhhstaff2@firetech.com',
            password: 'Firetech1234*',
            companyName: "Firetech",
            logoURL: 'https://google.com',
            skills: [{ name: 'Java', category: 1, number:2 }],
            firstLineAddress: 'Colinas de Santa Monica',
            secondLineAddress: 'Final Av Simon Planas',
            city: 'Caracas',
            state: 'DC',
            zip: 1030,
            contacts:[{
                id: 500,
                firstName: 'David',
                lastName: 'Ortuño',
                jobTitle: 'Developer',
                phoneNumber: 584126110189,
                email: 'daortuno@firetech.com'
            }
        ]
        }
        return profile as profileCreatedProps
    }
    static createInvalid():profileCreatedProps{
        const profile: ProfileProps ={
            email: 'recruitmentstaff2@firetech.com',
            password: 'Firetech1234',
            companyName: "Firetech",
            logoURL: 'https://google.com',
            skills: [{ name: 'Java', category: 1, number:2 }],
            firstLineAddress: 'Colinas de Santa Monica',
            secondLineAddress: 'Final Av Simon Planas',
            city: 'Caracas',
            state: 'DC',
            zip: 1030,
            contacts:[{
                id: 500,
                firstName: 'David',
                lastName: 'Ortuño',
                jobTitle: 'Developer',
                phoneNumber: 584126110189,
                email: 'daortuno@firetech.com'
            }
        ]
        }
        return profile as profileCreatedProps
    }
}