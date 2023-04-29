import { Flight } from "../../flight/Flight";
import { Meal } from "../../human/passenger/Meal";

export class BookingFlight{
    private flight: Flight[]=[];
    private meal: Meal[]=[];

    public addFlight(flight: Flight){
        this.flight.push(flight);
    };
    public getFlight():Flight[]{
        return this.flight;
    }
    public addMeal(meal: Meal){
        this.meal.push(meal);
    };
};