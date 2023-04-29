import { Date } from "../DateTime/Date";
import { Booking } from "../booking/Booking";
import { Flight } from "../flight/Flight";
import { Employee } from "../human/staff/Employee";
import { Pilot } from "../human/staff/pilot/Pilot";

export class Airline {
    private airlineName: string;
    private flights: Flight[]=[];
    private booking: Booking[];
    constructor(airlineName: string) {
        this.airlineName = airlineName;
    }
    addflight(flight: Flight) {
        this.flights.push(flight);
    }
    getFlights(pilot: Pilot, date: Date): Flight[] {
        let flightOfPilot: Flight[] = []
        this.flights.forEach(flight => {
            if (flight.getPilot() == pilot && flight.getDate() == date) {
                flightOfPilot.push(flight);
            }
        })
        return flightOfPilot;
    }

}