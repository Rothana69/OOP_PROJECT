import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";
import { Baggage } from "../meterial/Baggage";
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

    public getBooking():Booking[]{
        return this.booking;
    };

    public addBooking(booking: Booking){
        this.booking.push(booking);
    };

};