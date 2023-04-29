import { BookingFlight } from "../BookingFlight/BookingFlight";
import { Date } from "../../DateTime/Date";

export class TripBooking{
    private from: string;
    private to: string;
    public bookingFlight: BookingFlight[]=[];
    public returnTicket?: Date|undefined;
    constructor(from: string, to: string, returnTicket?:Date|undefined){
        this.from= from;
        this.to= to;
        this.returnTicket= returnTicket;
    };

    addBookingFlight(bookingFlight: BookingFlight){
        this.bookingFlight.push(bookingFlight);
    };
    getBookigFlight(): BookingFlight[]{
        return this.bookingFlight;
    };
    getAReturnTicket(): Date|undefined{
        return this.returnTicket;
    };
}