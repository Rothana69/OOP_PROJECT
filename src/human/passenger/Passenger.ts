import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";

export class Passenger{
    private phone_number: string;
    private email_address: string;
    private booking: Booking[]=[];
    constructor(phone_number: string, email_address: string){
        this.phone_number= phone_number;
        this.email_address= email_address;
    };

    getBooking():Booking[]{
        return this.booking;
    };
    addBooking(booking: Booking){
        this.booking.push(booking);
    };

};