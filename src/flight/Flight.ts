import { Route } from "../airport/Route";
import { Gate } from "../airport/Gate";
import { Date } from "../date_time/Date";
import { Aeroplanes } from "../company/plane/Aeroplane";
export class Flight{
    private flight_number: String;
    private flightNumber: number;
    constructor(flight_number: string){
        this.flight_number = flight_number;
    }
}