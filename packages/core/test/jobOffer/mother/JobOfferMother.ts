import { jobCreatedProps, jobCreationProps } from "../domain/JobDomainMapper";

export class JobOfferMother{
  static createValid():jobCreatedProps{
    const offer: jobCreationProps ={
      deadline: new Date('01-01-2022'),
      duration: Math.floor( Math.random()*(72-24)+24),
      title: 'Full Stack',
      specialRequirements: 'None',
      skills: [{ name: 'Java', category: 1, number:2 }],
      status: 0,
      hourlyRate:Math.floor( Math.random()*(99-10)+10),
      schedules: ['monday', 'tuesday', 'friday'],
      location: 'Caracas, Venezuela',
      startHour: 9,
      endHour: 18,
      employerId: 2,
      id:Math.floor( Math.random()*(100-1)+1)
    }
      return offer as jobCreatedProps
  }
  static createInvalid():jobCreationProps{
      return{
      deadline: new Date('01-01-2019'),
      duration: 200,
      title: 'Full Stack',
      specialRequirements: 'None',
      skills: [{ name: 'Java', category: 1, number:2 }],
      status: 2,
      hourlyRate: -200,
      schedules: ['monday', 'tuesday', 'friday'],
      location: 'Caracas, Venezuela',
      startHour: 9,
      endHour: 18,
      employerId: 2,
    }
  }
}