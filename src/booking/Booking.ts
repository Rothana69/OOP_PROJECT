import { Passenger } from "../human/passenger/Passenger";
import { TripBooking } from "./BookingTrip/BookingTrip";
export class Booking{
    private bookingID: number;
    public passenger: Passenger;
    public tripBooking: TripBooking[]=[];
    constructor(bookingID: number, passenger: Passenger){
        this.bookingID= bookingID;
        this.passenger= passenger;
    };

    addTripBooking(tripBooking: TripBooking){
        this.tripBooking.push(tripBooking);
    };
    getTripBooking(): TripBooking[]{
        return this.tripBooking;
    };
    getPassenger(): Passenger{
        return this.passenger;
    };
};