import { ValueObject } from "../../../common/domain/ValueObject";

export type skillCategory='technical'|'soft'

interface skillProps{
  name:string,
  category:skillCategory
}

export type stringSkillProps = {
  [P in keyof skillProps ]:string
}

export class Skill extends ValueObject<skillProps>{
  public readonly name:string
  public readonly category:skillCategory

  private constructor(props:skillProps){
    super(props);
    this.category=props.category;
    this.name=props.name;
  }

  public static create(nameProp: string, categoryProp:string ):Skill{
      if (nameProp.trim()===''){
        throw new Error("Skill name can't be blank")
      }
      let cat:skillCategory;
      switch (categoryProp.toLowerCase()){
        case 'soft':
          cat='soft'
          break;
        case 'technical':
          cat ='technical'
          break;
        default:
          throw new Error('Skill category must be either "soft" or "technical"')
          
      }
      return new Skill({category:cat, name:nameProp });
  }
 public static createList(skills:stringSkillProps[]):Skill[]{
    const skillList: Skill[] = [];
    skills.forEach( prop =>{
      const skill = this.create(prop.name,prop.category)
      skillList.push(skill);
    })
    return skillList;
 } 
}
