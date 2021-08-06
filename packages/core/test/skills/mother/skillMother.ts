import { skillMappedProps } from "..";

export class SkillMother{
  static createValid(skillNumber:number=1,skills:skillMappedProps[]=[],count:number=0):skillMappedProps[]{
    if (skillNumber<=count){
      return skills
    }
    skills.push({
      name:`Skill nº ${Math.floor(Math.random()*(100-1)+1)}`,
      number:Math.floor(Math.random()*(100-1)+1),
      category: Math.floor(Math.random()*(2-1)+1)
    })
    return this.createValid(skillNumber,skills,count+1)
  }
}