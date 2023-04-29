import { Booking } from "../booking/Booking";
import { Passenger } from "../human/passenger/Passenger";
import { Gate } from "./Gate";
import { Route } from "./Route";

export class Airport{
    private airportName: string;
    private gateNumber: Gate[] = [];
    private routeNumber: Route[] = [];
    private bookings: Booking[] = []
    constructor(airport_name: string){
        this.airportName = airport_name;
    }

    addBooking(booking: Booking): void{
        this.bookings.push(booking)
    }

    add_gate(gate: Gate):void{
        this.gateNumber.push(gate);
    }

    add_route(route: Route): void{
        this.routeNumber.push(route);
    }


    getPassengerInfo(passenger: Passenger): Booking[]{
        let passengerInfo: Booking[] = [];
        this.bookings.forEach(booking => {
            if(booking.getPassenger() == passenger){
                passengerInfo.push(booking)
            }
        });
        return passengerInfo
    }
}