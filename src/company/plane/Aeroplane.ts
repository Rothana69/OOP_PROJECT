import { Seat } from "./Seat";
export class Aeroplane {
    private registrationNumber: string
    private seat : Seat[] = []
    constructor(registrationNumber: string, seats: Seat[]) {
        this.registrationNumber = registrationNumber;
    }
}