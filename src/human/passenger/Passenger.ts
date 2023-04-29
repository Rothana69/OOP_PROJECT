import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";
import { Baggage } from "../meterial/Baggage";
import { Gender } from "../Gender";
import { Person } from "../Person";
import { Date } from "../../DateTime/Date";
import { Meal } from "./Meal";
export class Passenger{
    private phoneNumber: string;
    private emailAddress: string;
    public booking: Booking[]=[];
    constructor(phoneNumber: string, emailAddress: string){
        this.phoneNumber= phoneNumber;
        this.emailAddress= emailAddress;
    };

    public getBooking():Booking[]{
        return this.booking;
    };

    public addBooking(booking: Booking){
        this.booking.push(booking);
    };
};