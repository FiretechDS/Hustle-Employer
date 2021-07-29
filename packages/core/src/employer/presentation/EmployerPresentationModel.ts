import { profileCreatedProps, ProfileProps } from "../domain/EmployerDomainMapper";

export type profilePresentationProps={
  [P in keyof profileCreatedProps]: profileCreatedProps[P] extends Date? string : P extends "status"?string:  profileCreatedProps[P]
}

export type profileCreatePresentationProps={
  [P in keyof ProfileProps]: profileCreatedProps[P] extends Date? string : P extends "status"?string:  profileCreatedProps[P]
}