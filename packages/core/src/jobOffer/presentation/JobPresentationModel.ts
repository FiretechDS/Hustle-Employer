import { jobCreatedProps, jobCreationProps } from "../domain/JobDomainMapper";

export type jobPresentationProps={
  [P in keyof jobCreatedProps]: jobCreatedProps[P] extends Date? string : P extends "status"?string:  jobCreatedProps[P]
}

export type jobCreatePresentationProps={
  [P in keyof jobCreationProps]: jobCreatedProps[P] extends Date? string : P extends "status"?string:  jobCreatedProps[P]
}