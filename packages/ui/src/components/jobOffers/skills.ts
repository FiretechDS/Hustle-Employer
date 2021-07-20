const skillNames =[
    {habilityName:'Java'},
    {habilityName:'C'},
    {habilityName:'Dart'},
    {habilityName:'Spring'},
    {habilityName:'Critical Thinking'},
    {habilityName:'Creativity'},
    {habilityName:'Problem Solving'},
    {habilityName:'Public Speaking'},
    {habilityName:'Professional Writing'},
    {habilityName:'Teamworking'},
    {habilityName:'Digital Literacy'},
    {habilityName:'Leadership'},
    {habilityName:'Proffesional Attitude'},
    {habilityName:'Work Ethic'},
    {habilityName:'Big Data Analysis'},
    {habilityName:'HTML'},
    {habilityName:'CSS'},
    {habilityName:'JavaScript'},
    {habilityName:'TypeScript'},
    {habilityName:'Project Management'},
]

type skillType={
  habilityName:string,
  id:number
}

export const skills:skillType[] = skillNames.map(
  (skill,index)=>{
    return {...skill,id:index+1}
    
  }
)
