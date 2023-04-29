import { BookingFlight } from "../BookingFlight/BookingFlight";
import { Date } from "../../DateTime/Date";

export class TripBooking{
    private from: string;
    private to: string;
    public bookingFlight: BookingFlight[]=[];
    public return_ticket?: Date|undefined;
    constructor(from: string, to: string){
        this.from= from;
        this.to= to;
    };

    addBookingFlight(bookingFlight: BookingFlight){
        this.bookingFlight.push(bookingFlight);
    };

    getAReturnTicket(): Date|undefined{
        return this.return_ticket;
    }
}