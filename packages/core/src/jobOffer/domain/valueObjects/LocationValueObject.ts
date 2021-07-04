import { ValueObject } from "../../../common/domain/ValueObject";

interface locationProps{
  value:string
}

export class Location extends ValueObject<locationProps>{
  public readonly value: string;

  private constructor(props: locationProps){
    super(props);
    this.value=props.value;
  }

  public static create(location:string ){
    if(location.trim()===''){
      throw new Error("Location can't be empty")
    }
    return new Location({value:location})
  }
}