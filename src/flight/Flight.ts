import { Route } from "../airport/Route";
import { Gate } from "../airport/Gate";
import { Date } from "../DateTime/Date";
import { Aeroplane } from "../company/plane/Aeroplane";
export class Flight{
    private flightNumber: string;
    private gate: Gate;
    private plane: Aeroplane;
    private date: Date;

    
    private route: Route;
    constructor(flightNumber: string, gate: Gate,route:Route, plane: Aeroplane, date: Date) {
        this.flightNumber = flightNumber;
        this.date = date;
        this.gate = gate;
        this.plane = plane;
        this.route = route;
    };
    public getGate(): Gate { 
        return this.gate;
    }
    public getDate(): Date { 
        return this.date;
    }
    getFlightNumber(): string{
        return this.flightNumber;
    }
};                  