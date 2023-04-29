import { Flight } from "../../flight/Flight";
import { Seat } from "./Seat";
export class Aeroplane {
    private registrationNumber: string
    private flight: Flight[]=[];
    constructor(registrationNumber: string, private seat : Seat[]) {
        this.registrationNumber = registrationNumber;
        
    };

    public addFlight(flight: Flight){
        this.flight.push(flight);
    };
    public getFlight():Flight[]{
        return this.flight;
    };
    public getRegistratinNumber():string{
        return this.registrationNumber;
    }
}