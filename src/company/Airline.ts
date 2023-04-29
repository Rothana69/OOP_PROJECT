import { Date } from "../DateTime/Date";
import { Booking } from "../booking/Booking";
import { Flight } from "../flight/Flight";
import { Meal } from "../human/passenger/Meal";
import { Employee } from "../human/staff/Employee";
import { Pilot } from "../human/staff/pilot/Pilot";
import { Passenger } from "../human/passenger/Passenger";
import { TripBooking } from "../booking/BookingTrip/BookingTrip";


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
    getAllMeals():{
        VEGETARIAN: number,
        VEGAN: number,
        DAIRY_FREE: number,
        HALAL: number,
        KOSHER: number
        }{
        let allMeals: {
        VEGETARIAN: number,
        VEGAN: number,
        DAIRY_FREE: number,
        HALAL: number,
        KOSHER: number
        } ={
            VEGETARIAN: 0,
            VEGAN: 0,
            DAIRY_FREE: 0,
            HALAL: 0,
            KOSHER: 0
        }
        this.bookings.forEach(passBooking => {
            if(passBooking.getPassenger().getMeal() == Meal.VEGETARIAN){
                allMeals.VEGETARIAN += 1
            }else if(passBooking.getPassenger().getMeal() == Meal.VEGAN){
                allMeals.VEGAN += 1
            }else if(passBooking.getPassenger().getMeal() == Meal.DAIRY_FREE){
                allMeals.DAIRY_FREE += 1
            }else if(passBooking.getPassenger().getMeal() == Meal.HALAL){
                allMeals.HALAL += 1
            }else if(passBooking.getPassenger().getMeal() == Meal.KOSHER){
                allMeals.KOSHER += 1
            }
        });
        return allMeals
    }

    getAllSalary(): number{
        let tatolSalary: number = 0;

        this.employees.forEach(employee => {
            tatolSalary += employee.getSalary()
        });

        return tatolSalary;
    }
}