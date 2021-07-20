import { Skill } from "../domain/Skill"

export interface LoadingSkillsState{
  kind:"LoadingSkillsState",
}

export interface LoadedSkillsState{
  kind:"LoadedSkillsState",
  skills: Array <Skill>
}

export interface EmptySkillsState{
  kind:"EmptySkillsState",
  skills: Array <Skill>
  message:string
}

export interface ErrorSkillsState{
  kind:"ErrorSkillsState",
  error:string,
}

export type SkillsState = LoadingSkillsState|LoadedSkillsState|ErrorSkillsState|EmptySkillsState

export const skillsInitialState: SkillsState = {
  kind:"LoadingSkillsState",
}