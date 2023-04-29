import { Gender } from "../human/Gender";
import { Person } from "../human/Person";
import { Date } from "../DateTime/Date";
import { Flight } from "../flight/Flight";
import { Booking } from "../booking/Booking";
import { BookingFlight } from "../booking/BookingFlight/BookingFlight";
import { TripBooking } from "../booking/BookingTrip/BookingTrip";
import { Passenger } from "../human/passenger/Passenger";
export class Airline_Manager extends Person{
    public booking: Booking[]=[];
    public passengers: Passenger[]=[];
    constructor(public first_name: string, public last_name: string, public gender: Gender,public date_of_birth: Date){
        super (first_name, last_name, gender, date_of_birth);

    };
    // getFlight(flight: Flight): Flight{
    //     return flight;
    // };
    addBooking(booking: Booking):void{
        this.booking.push(booking);
    };
    getBooking(): Booking[]{
        return this.booking;
    };
    passengersReturnTicket(ifflight: Flight){
        let customer: Passenger;
        this.booking.forEach(passenger => {
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
}