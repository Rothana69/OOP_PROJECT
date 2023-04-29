import { Route } from "../airport/Route";
import { Gate } from "../airport/Gate";
import { Date } from "../DateTime/Date";
import { Aeroplane } from "../company/plane/Aeroplane";
import { Pilot } from "../human/staff/pilot/Pilot";
import { CoPilot } from "../human/staff/pilot/Co_Pilot";
export class Flight {
    private flightNumber: string;
    private gate: Gate;
    private plane: Aeroplane;
    private date: Date;

    
    private route: Route;
    private pilot : Pilot;
    private coPilot : CoPilot;
    private departure : String;
    private arrive : String;
    constructor(flightNumber: string, gate: Gate, route: Route, plane: Aeroplane, date: Date, pilot: Pilot, copilot: CoPilot, departure: String, arrive: String) {
        this.flightNumber = flightNumber;
        this.date = date;
        this.gate = gate;
        this.plane = plane;
        this.route = route;
        this.pilot = pilot;
        this.coPilot = copilot;
        this.departure = departure;
        this.arrive = arrive;

    };
    public getPilot():Pilot {
        return this.pilot;
    }
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