import { Flight } from "../../flight/Flight";
import { Meal } from "../../human/passenger/Meal";

export class BookingFlight{
    public flight: Flight[]=[];
    public meal: Meal[]=[];

    addFlight(flight: Flight){
        this.flight.push(flight);
    };
    getFlight():Flight[]{
        return this.flight;
    }
    addMeal(meal: Meal){
        this.meal.push(meal);
    };
};