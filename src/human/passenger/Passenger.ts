import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";
import { Gender } from "../Gender";
import { Person } from "../Person";
import { Date } from "../../DateTime/Date";

export class Passenger extends Person{
    private phone_number: string;
    private email_address: string;
    public booking: Booking[]=[];
    constructor( first_name: string, last_name: string, gender: Gender, date_of_birth: Date, phone_number: string, email_address: string){
        super(first_name, last_name, gender, date_of_birth);
        this.phone_number= phone_number;
        this.email_address= email_address;
    };

    getBooking():Booking[]{
        return this.booking;
    };
    addBooking(booking: Booking): void{
        this.booking.push(booking);
    };
};