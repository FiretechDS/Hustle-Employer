import { jobCreationProps } from "../../jobOffer/domain/JobDomainMapper";

export class JobOfferMother{
  static createValid():jobCreationProps{
    return{
      deadline: new Date('01-01-2022'),
      duration: 200,
      title: 'Full Stack',
      specialRequirements: 'None',
      skills: [{ name: 'Java', category: 1, number:2 }],
      status: 2,
      hourlyRate: 300,
      schedules: ['monday', 'tuesday', 'friday'],
      location: 'Caracas, Venezuela',
      startHour: 9,
      endHour: 18,
      employerId: 2,
    }
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