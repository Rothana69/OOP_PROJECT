import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";
import { Meal } from "./Meal";

export class Passenger{
    private phone_number: string;
    private email_address: string;
    private meal: Meal;
    public booking: Booking[]=[];
    constructor(phone_number: string, email_address: string, meal: Meal){
        this.phone_number= phone_number;
        this.email_address= email_address;
        this.meal= meal;
    };

    getBooking():Booking[]{
        return this.booking;
    };
    addBooking(booking: Booking){
        this.booking.push(booking);
    };

};