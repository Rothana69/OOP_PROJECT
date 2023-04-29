import { Route } from "../airport/Route";
import { Gate } from "../airport/Gate";
import { Date } from "../DateTime/Date";
import { Aeroplanes } from "../company/plane/Aeroplane";
export class Flight{
    private flight_number: string;
    private gate: Gate;
    private plane: Aeroplanes[]=[];
    private date: Date;
    constructor(flight_number: string){
        this.flight_number = flight_number;
    };

    getFlightNumber(): string{
        return this.flight_number;
    }
}