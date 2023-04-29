import { Gate } from "./Gate";
import { Route } from "./Route";

export class Airport{
    private airport_name: string;
    private gate_number: Gate[] = [];
    private route_number: Route[] = [];
    constructor(airport_name: string){
        this.airport_name = airport_name;
    }
    add_gate(gate: Gate):void{
        this.gate_number.push(gate);
    }
    add_route(route: Route): void{
        this.route_number.push(route);
    }
}