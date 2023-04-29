import { Flight } from "../flight/Flight";

export class Gate{
<<<<<<< HEAD
    flight: Flight[]=[];
    constructor(private gate_number: string){};
=======
    private gate_number:string
    constructor(gate_number:string){
        this.gate_number = gate_number
    }
>>>>>>> ff41c64ac339512ce69ad58d951480c2584dd229
}