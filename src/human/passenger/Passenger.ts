import { Gate } from "../../airport/Gate";
import { Booking } from "../../booking/Booking";
import { Gender } from "../Gender";
import { Person } from "../Person";
import { Date } from "../../DateTime/Date";
import { Meal } from "./Meal";
import { BookingFlight } from "../../booking/BookingFlight/BookingFlight";
import { TripBooking } from "../../booking/BookingTrip/BookingTrip";
import { Flight } from "../../flight/Flight";
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
    findBookingTrip(ifplane: Aeroplane){
        this.bookings.forEach(booking=>{
            let bookingTrips= booking.getTripBooking();
            this.findBookingFlight(bookingTrips, ifplane);
        })
    };
    findBookingFlight(bookingTrips: TripBooking[], ifplane: Aeroplane){
        for(let trip of bookingTrips){
            let bookingFlight= trip.getBookigFlight();
            this.findAllFlights(bookingFlight, ifplane);
        }
    };
    findAllFlights(bookingFlight: BookingFlight[], ifplane:Aeroplane){
        for(let allflights of bookingFlight){
            let flights= allflights.getFlight();
            this.findFlight(flights, ifplane)
        }
    };
    findFlight(flights: Flight[], ifplane:Aeroplane){
        for(let flight of flights){
            let plane= flight.getPlane();
            if(plane.getRegistratinNumber()===ifplane.getRegistratinNumber()){
                console.log(this.getGateOfPlane(flight.getGate()));
            }
            else{
                console.log("Don't have this plane here");
            }
        };
    };
    getGateOfPlane(gate: Gate): string{
        return ("Your plane is waiting for gate: "+gate.getGateNumber());
    }
};