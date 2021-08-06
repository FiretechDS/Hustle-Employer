import { ProfileProps } from "../domain/EmployerDomainMapper";
import { profilePresentationProps } from "./EmployerPresentationModel";

export class EmployerPresentationToApplication{
  static map(offer:profilePresentationProps):ProfileProps{
    return{
      ...offer
    }
  }
}