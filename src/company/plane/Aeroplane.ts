import { Seat } from "./Seat";
export class Aeroplane {
    private registrationNumber: string
    
    constructor(registrationNumber: string, private seat : Seat[]) {
        this.registrationNumber = registrationNumber;
        
    }
}