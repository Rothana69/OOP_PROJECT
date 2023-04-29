import { BookingFlight } from "../BookingFlight/BookingFlight";
import { Date } from "../../DateTime/Date";

export class TripBooking{
    private from: string;
    private to: string;
    private bookingFlight: BookingFlight[]=[];
    private returnTicket?: Date|undefined;
    constructor(from: string, to: string, returnTicket?:Date|undefined){
        this.from= from;
        this.to= to;
        this.returnTicket= returnTicket;
    };

    public addBookingFlight(bookingFlight: BookingFlight){
        this.bookingFlight.push(bookingFlight);
    };
    public getBookigFlight(): BookingFlight[]{
        return this.bookingFlight;
    };
    public getAReturnTicket(): Date|undefined{
        return this.returnTicket;
    };
}