import { Booking } from "../booking/Booking";
import { Flight } from "../flight/Flight";

export class Aeroplane{
    private airline_name: string;
    private flights: Flight[];
    private aeroplane : Aeroplane[];
    private booking : Booking[];
    constructor(airline_name: string){
        this.airline_name = airline_name;
    }
    
}