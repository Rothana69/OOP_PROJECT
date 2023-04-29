import { Person } from "../../Person";
import { PilotCategory, Employee } from "../Employee";
import { Date } from "../../../DateTime/Date";
import { Gender } from "../../Gender";
import { Meal } from "../../passenger/Meal";

export class Chief extends Employee{
    private prepare_meals: Meal[] = []
    constructor(firstName: string, lastName: string, gender: Gender, dateOfBirth: Date, salary: number){
        super(firstName, lastName, gender, dateOfBirth, salary, PilotCategory.CHIEF)
    }
    public addMeal(meal: Meal){
        this.prepare_meals.push(meal)
    }
}
