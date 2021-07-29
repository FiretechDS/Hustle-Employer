import { Ploc } from "../../common";
import { DataError } from "../../common/domain/DataError";
import { GetSkillsQuery } from "../application/port/in/GetSkillsQuery";
import { Skill } from "../domain/Skill";
import { skillsInitialState, SkillsState } from "./SkillsState";
export class SkillPloc extends Ploc<SkillsState>{

  constructor(private loadSkillsUseCase:GetSkillsQuery){
    super(skillsInitialState)
    this.loadSkills()
  }

  private async loadSkills(){
    const skillsOrError= await this.loadSkillsUseCase.findSkills()
    skillsOrError.fold(
      (error=>{
        this.changeState(this.handleError(error))
      }),(skills=>{
          this.changeState(this.handleLoaded(skills))
      })
    )
  }
  private handleLoaded(skills:Skill[]):SkillsState{
    return{
      kind:'LoadedSkillsState',
      skills:skills
    }
  }
  private handleError(error:DataError):SkillsState{
    return{
      kind:'ErrorSkillsState',
      error:error.kind==='ApiError'?error.message:error.message.message
    }
  }
}