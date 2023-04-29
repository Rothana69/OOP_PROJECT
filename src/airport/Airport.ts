import { Gate } from "./Gate";
import { Route } from "./Route";

export class Airport{
    private airportName: string;
    private gateNumber: Gate[] = [];
    private routeNumber: Route[] = [];
    constructor(airportName: string){
        this.airportName = airportName;
    }
    addGate(gate: Gate):void{
        this.gateNumber.push(gate);
    }
    addRoute(route: Route): void{
        this.routeNumber.push(route);
    }
}