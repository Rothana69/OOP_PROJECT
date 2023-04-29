import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";
import { Gender } from "../Gender";
import { Person } from "../Person";
import { Date } from "../../DateTime/Date";
import { Meal } from "./Meal";
import { BookingFlight } from "../../booking/BookingFlight/BookingFlight";
import { TripBooking } from "../../booking/BookingTrip/BookingTrip";
import { Flight } from "../../flight/Flight";
import { Aeroplane } from "../../company/Airline";
import { Aeroplane } from "../../company/plane/Aeroplane";
export class Passenger{
    private phoneNumber: string;
    private emailAddress: string;
    public bookings: Booking[]=[];
    constructor(phoneNumber: string, emailAddress: string){
        this.phoneNumber= phoneNumber;
        this.emailAddress= emailAddress;
    };

    getBooking():Booking[]{
        return this.bookings;
    };
    addBooking(booking: Booking): void{
        this.bookings.push(booking);
    };
    findBookingTrip(plane: Aeroplane){
        this.bookings.forEach(booking=>{
            let bookingTrips= booking.getTripBooking();
            this.findBookingFlight(bookingTrips);
        })
    };
    findBookingFlight(bookingTrips: TripBooking[]){
        for(let trip of bookingTrips){
            let bookingFlight= trip.getBookigFlight();
            this.findAllFlights(bookingFlight);
        }
    };
    findAllFlights(bookingFlight: BookingFlight[]){
        for(let allflights of bookingFlight){
            let flights= allflights.getFlight();
            this.findFlight(flights)
        }
    };
    findFlight(flights: Flight[]){
        for(let flight of flights){
            console.log(flight.getGate());
        }
    }
};