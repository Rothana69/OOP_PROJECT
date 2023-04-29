import { Flight } from "../flight/Flight";

export class Gate{
    flight: Flight[]=[];
    constructor(private gate_number: string){};
}