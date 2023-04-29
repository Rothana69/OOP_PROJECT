import { Date } from "../DateTime/Date";
import { Booking } from "../booking/Booking";
import { Flight } from "../flight/Flight";
import { Meal } from "../human/passenger/Meal";
import { Employee } from "../human/staff/Employee";
import { Pilot } from "../human/staff/pilot/Pilot";

export class Airline {
    private airlineName: string;
    private flights: Flight[]=[];
    private booking: Booking[] = [];
    private employees: Employee[] = []
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
        this.booking.forEach(passBooking => {
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