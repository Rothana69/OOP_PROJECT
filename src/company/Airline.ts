import { Date } from "../DateTime/Date";
import { Booking } from "../booking/Booking";
import { Flight } from "../flight/Flight";
import { Employee } from "../human/staff/Employee";
import { Pilot } from "../human/staff/pilot/Pilot";
import { Passenger } from "../human/passenger/Passenger";
import { TripBooking } from "../booking/BookingTrip/BookingTrip";
import { CoPilot } from "../human/staff/pilot/Co_Pilot";
import { Chief } from "../human/staff/chief/chief";

export class Airline {
    private airlineName: string;
    private flights: Flight[]=[];
    private bookings: Booking[]=[];
    public passengers: Passenger[]=[];
    private employees: Employee[]=[];
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
    getFlight(flight: Flight): Flight{
        return flight;
    };
    addBooking(booking: Booking):void{
        this.bookings.push(booking);
    };
    getBooking(): Booking[]{
        return this.bookings;
    };
    passengersReturnTicket(ifflight: Flight){
        let customer: Passenger;
        this.bookings.forEach(passenger => {
            let trip= passenger.getTripBooking();
            customer=passenger.getPassenger()
            this.findFlights(trip, ifflight, this.passengers, customer);
        });
    };
    findFlights(trips: TripBooking[], ifflight: Flight, passengers: Passenger[], customer: Passenger){
        for (let trip of trips){
            if(trip.getAReturnTicket()!=undefined){
                let bookingFlight= trip.getBookigFlight();
                for (let flights of bookingFlight){
                    let allFlight= flights.getFlight() 
                    this.findFlighNumber(allFlight, ifflight, passengers, customer);
                }
            }
            else{
                console.log("No Passenger have bought a return ticket");
            }
        }
    }
    findFlighNumber(flights: Flight[], ifFlight: Flight, passengers: Passenger[], customer: Passenger){
        for(let flight of flights){
            if(flight.getFlightNumber()==ifFlight.getFlightNumber()){
                passengers.push(customer);
            }
        }
    };
    getPassengersWithReturnTicket(): Passenger[]{
        return this.passengers;
    }
    addEmployee(employee: Employee|Pilot|CoPilot|Chief){
        this.employees.push(employee);
    };
    getEmployee(): Employee[]{
        return this.employees;
    };
}