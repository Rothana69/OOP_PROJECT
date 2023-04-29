import { Booking } from "../booking/Booking";
import { Flight } from "../flight/Flight";

export class Aeroplane{
    private airlineName: string;
    private flights: Flight[];
    private aeroplane : Aeroplane[];
    private booking : Booking[];
    constructor(airlineName: string){
        this.airlineName = airlineName;
    }
    
}