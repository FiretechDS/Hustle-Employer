import { profileCreatedProps, ProfileProps } from "../domain/EmployerDomainMapper";

export type profilePresentationProps={
  [P in keyof profileCreatedProps]: profileCreatedProps[P] 
}

export type profileCreatePresentationProps={
  [P in keyof ProfileProps]: profileCreatedProps[P] 
}