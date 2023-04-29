import { Person } from "../../Person";
import { Pilot_Category, Employees } from "../Employees";
import { Date } from "../../../date_time/Date";
import { Gender } from "../../Gender";
import { Meal } from "../../passenger/Meal";

export class Pilot extends Employees{
    private prepare_meals: Meal[] = []
    constructor(first_name: string, last_name: string, gender: Gender, date_of_birth: Date){
        super(first_name, last_name, gender, date_of_birth, Pilot_Category.CHIEF)
    }
    public addMeal(meal: Meal){
        this.prepare_meals.push(meal)
    }
}