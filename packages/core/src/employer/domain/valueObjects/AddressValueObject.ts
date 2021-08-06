import { ValueObject } from "../../../common/domain/ValueObject";

interface AddressProps{
    firstLineAddress: string,
    secondLineAddress: string,
    state: string,
    city: string,
    zip: number
}

export class AddressEmployer extends ValueObject<AddressProps>{
    readonly firstLineAddress:string;
    readonly secondLineAddress:string;
    readonly state:string;
    readonly city:string;
    readonly zip:number;

    private constructor(props:AddressProps){
        super(props);
        this.firstLineAddress = props.firstLineAddress;
        this.secondLineAddress = props.firstLineAddress;
        this.state = props.state;
        this.city = props.city;
        this.zip = props.zip;
    }

    public static create(firstLineAddress: string, secondLineAddress: string, state: string, city: string, zip: number):AddressEmployer{
        if (firstLineAddress.trim()===''){
            throw new Error("First Line Address can't be blank")
        }
        if (secondLineAddress.trim()===''){
            throw new Error("Second Line Address can't be blank")
        }
        if (state.trim()===''){
            throw new Error("City can't be blank")
        }
        if (city.trim()===''){
            throw new Error("State can't be blank")
        }
        if (zip===0){
            throw new Error("ZIP can't be blank")
        }
        if ((zip.toString().length===4)&&(zip.toString().length===5)){
            throw new Error("Invalid ZIP")
        }
        return new AddressEmployer({firstLineAddress: firstLineAddress, secondLineAddress: secondLineAddress, state:state, city: city, zip:zip })
    }

}