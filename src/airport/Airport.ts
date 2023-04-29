import { Gate } from "./Gate";
import { Route } from "./Route";

export class Airport{
    private airport_name: string;
    private gate_number: Gate[] = [];
    private route_number: Route[] = [];
    constructor(airport_name: string){
        this.airport_name = airport_name;
    }
    add_gate(gate: Gate): Gate[]{
        return [];
    }
    add_route(route: Route): Route[]{
        return [];
    }
}