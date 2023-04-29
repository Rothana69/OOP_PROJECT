import { Farebasis } from "./FareBasis";

export class Seat {
    private seatNumber: number;
    private price: number;
    private fareBasis: Farebasis
    constructor(seatNumber:number , fareBasis: Farebasis) {
        this.seatNumber = seatNumber;
        this.fareBasis = fareBasis;
    }
}