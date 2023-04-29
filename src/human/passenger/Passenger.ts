import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";
import { Baggage } from "../meterial/Baggage";
import { Gender } from "../Gender";
import { Person } from "../Person";
import { Date } from "../../DateTime/Date";
import { Meal } from "./Meal";
export class Passenger extends Person{
    private phoneNumber: string;
    private emailAddress: string;
    public booking: Booking[]=[];
    private meal: Meal 
    constructor(firstName: string, lastName: string, gender: Gender, dateOfBirth: Date, phoneNumber: string, emailAddress: string, meal: Meal){
        super(firstName, lastName, gender, dateOfBirth)
        this.phoneNumber= phoneNumber;
        this.emailAddress= emailAddress;
        this.meal = meal
    };

    public getBooking():Booking[]{
        return this.booking;
    };

    public addBooking(booking: Booking){
        this.booking.push(booking);
    };
    
    public getMeal(): Meal{
        return this.meal
    }
};