import { Booking } from "../booking/Booking";
import { Passenger } from "../human/passenger/Passenger";
import { Airline } from "../company/Airline";
import { Gate } from "./Gate";
import { Route } from "./Route";

export class Airport{
    private airportName: string;
    private gateNumber: Gate[] = [];
    private routeNumber: Route[] = [];
    private airlines: Airline[] = [];
    constructor(airportName: string){
        this.airportName = airportName;
    }
    public addAirline(airline: Airline){
        this.airlines.push(airline);
    }
    public addGate(gate: Gate):void{
        this.gateNumber.push(gate);
    }
    public addRoute(route: Route): void{
        this.routeNumber.push(route);
    }
    public getPassengerTripInfo(bookingId: string):Booking|undefined{
        let passengerInfo: Booking|undefined = undefined;
        this.airlines.forEach(bookings => {
            bookings.getBooking().forEach(booking => {
                if(booking.getBookingID() == bookingId){
                    passengerInfo = booking
                }
            })
        });
        return passengerInfo;
    }
}
