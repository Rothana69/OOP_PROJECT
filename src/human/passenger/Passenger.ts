import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";
import { Meal } from "./Meal";

export class Passenger{
    private phoneNumber: string;
    private emailAddress: string;
    private meal: Meal;
    public booking: Booking[]=[];
    constructor(phoneNumber: string, emailAddress: string, meal: Meal){
        this.phoneNumber= phoneNumber;
        this.emailAddress= emailAddress;
        this.meal= meal;
    };

    getBooking():Booking[]{
        return this.booking;
    };
    addBooking(booking: Booking){
        this.booking.push(booking);
    };

};