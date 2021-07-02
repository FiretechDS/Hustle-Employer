import { jobCreationProps } from "../domain/JobDomainMapper";

export type jobPresentationProps={
  [P in keyof jobCreationProps]: jobCreationProps[P] extends Date? string : P extends "status"?string : jobCreationProps[P]
}
