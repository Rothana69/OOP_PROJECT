import { Passenger } from "../human/passenger/Passenger";
import { TripBooking } from "./booking_trip/Booking_Trip";

export class Booking{
    private bookingID: number;
    private passegger : Passenger;
    public tripBooking: TripBooking[]=[];
    constructor(bookingID: number){
        this.bookingID= bookingID;
    };

    addTripBooking(tripBooking: TripBooking){
        this.tripBooking.push(tripBooking);
    };
    get_passegger(){
        return this.passegger;
    }
};