import { Flight } from "../../flight/Flight";
import { Seat } from "./Seat";
export class Aeroplane {
    private registrationNumber: string
    public flight: Flight[]=[];
    constructor(registrationNumber: string, private seat : Seat[]) {
        this.registrationNumber = registrationNumber;
        
    };

    addFlight(flight: Flight){
        this.flight.push(flight);
    };
    getFlight():Flight[]{
        return this.flight;
    };
    getRegistratinNumber():string{
        return this.registrationNumber;
    }
}