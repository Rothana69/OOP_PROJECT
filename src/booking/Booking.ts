import { TripBooking } from "./BookingTrip/BookingTrip";

export class Booking{
    private bookingID: number;
    public tripBooking: TripBooking[]=[];
    constructor(bookingID: number){
        this.bookingID= bookingID;
    };

    addTripBooking(tripBooking: TripBooking){
        this.tripBooking.push(tripBooking);
    };
};