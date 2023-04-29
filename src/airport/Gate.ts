import { Flight } from "../flight/Flight";

export class Gate{
    private gateNumber:string
    public flights: Flight[]=[];
    constructor(gateNumber:string){
        this.gateNumber = gateNumber
    };
    addFlight(flight:Flight){
        this.flights.push(flight);
    };
    getFlight():Flight[]{
        return this.flights
    };

}