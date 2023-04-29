import { TripBooking } from "./BookingTrip/BookingTrip";
export class Booking{
    private bookingID: string;
    public tripBooking: TripBooking[]=[];
    constructor(bookingID: string){
        this.bookingID= bookingID;
    };

    addTripBooking(tripBooking: TripBooking){
        this.tripBooking.push(tripBooking);
    };
    // get_passegger(){
    //     return this.passegger;
    // }
};