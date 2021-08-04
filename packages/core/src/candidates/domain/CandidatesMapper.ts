import { skillMappedProps } from "../../skills/domain/Skill";

interface certificatesList{
    id?: number,
    name: string,
    course: string,
    dateOfCompletition: string
}

interface workExperienceList{
    id: number,
    name?:string
}

interface referenceList{
    fullName: string,
    phoneNumber: string,
    email: string,
    jobTItle?: string
}
  
export enum enumEducationLevel{
    'None' = 0,
    'Elementary School' = 1,
    'Some High School' = 2,
    'High School or GED Diploma' =3,
    'Some College Studies' = 4,
    'Associate Degree' =5,
    "Bachelor's Degree" =6,
    'Some Postgraduate Studies' = 7,
    "Master's Degree" = 8,
    'Doctoral Degree' = 9,
    'Profesional Degree' = 10
}

export enum statusEmployee{
    'Created' = 0,
    'Pending Aproval' = 1,
    'Available' = 2,
    'Not Available' = 3,
    'Rejected' = 4,
    'Suspended' = 5
}

export interface candidateProps{
    firstName: string,
    middleName: string,
    lastName: string,
    dateApplied: string,
    phoneNumber: string,
    educationLevel: string,
    birthDate: string,
    streetAddress: string,
    cityAddress: string,
    stateAddress: string,
    ssn: string,
    certificates: Array<certificatesList>,
    skills: skillMappedProps[],
    workExperience: Array<workExperienceList>,
    references: Array<referenceList>,
    status: statusEmployee
}