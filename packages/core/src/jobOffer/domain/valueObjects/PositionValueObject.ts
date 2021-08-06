import { ValueObject } from "../../../common/domain/ValueObject";

interface positionProps{
  latitude:number,
  longitude:number
}

export class Position extends ValueObject<positionProps>{
  latitude:number
  longitude: number

  private constructor(props:positionProps){
    super(props)
    this.latitude=props.latitude
    this.longitude=props.longitude
  }

  public static create(latitude:number,longitude:number):Position{
    if (Math.abs( latitude)<0 || Math.abs(latitude)>180){
      throw new Error('Latitude coordinates must be between 0 and 180 degrees')
    }
    if(Math.abs(longitude)<0 || Math.abs(longitude)>360){
      throw new Error ('Longitude coordinate must be between 0 and 360 degrees')
    }
    return new Position({latitude:latitude,longitude:longitude})
  }
}