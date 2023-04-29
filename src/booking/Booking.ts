import { Baggage } from "../human/meterial/Baggage";
import { TripBooking } from "./BookingTrip/BookingTrip";
export class Booking{
    private bookingID: string;
    private tripBooking: TripBooking[]=[];
    private baggage : Baggage[] = [];
    constructor(bookingID: string,baggage : Baggage[]){
        this.bookingID= bookingID;
        this.baggage = baggage;
    };

    addTripBooking(tripBooking: TripBooking){
        this.tripBooking.push(tripBooking);
    };
    // get_passegger(){
    //     return this.passegger;
    // }
};