import { Baggage } from "../human/meterial/Baggage";
import { Passenger } from "../human/passenger/Passenger";
import { TripBooking } from "./BookingTrip/BookingTrip";
export class Booking{
    private bookingID: string;
    private passenger: Passenger;
    private tripBooking: TripBooking[]=[];
    private baggage : Baggage[] = [];
    constructor(bookingID: string,baggage : Baggage[], passenger: Passenger){
        this.bookingID= bookingID;
        this.baggage = baggage;
        this.passenger= passenger;
    };

    public addTripBooking(tripBooking: TripBooking){
        this.tripBooking.push(tripBooking);
    };
    public getTripBooking(): TripBooking[]{
        return this.tripBooking;
    };
    public getPassenger(): Passenger{
        return this.passenger;
    };
    public getBookingID(){
        return this.bookingID
    }
};