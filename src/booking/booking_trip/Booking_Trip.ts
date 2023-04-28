import { BookingFlight } from "../booking_flight/Booking_Flight";

export class TripBooking{
    private from: string;
    private to: string;
    public bookingFlight: BookingFlight[]=[];
    constructor(from: string, to: string){
        this.from= from;
        this.to= to;
    };

    addBookingFlight(bookingFlight: BookingFlight){
        this.bookingFlight.push(bookingFlight);
    };
}