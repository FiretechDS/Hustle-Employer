import { DataError } from "../../common/domain/DataError";
import { profilePresentationProps } from "./EmployerPresentationModel";

export interface LoadingProfileState{
  kind:'loading'
}
export interface ErrorProfileState{
  kind:'error',
  error:string
}
export interface LoadedProfileState{
  kind:'loaded',
  profile:profilePresentationProps
}

export type ProfileState = LoadingProfileState|ErrorProfileState|LoadedProfileState

export const profileInitialState:ProfileState={
  kind:'loading'
}