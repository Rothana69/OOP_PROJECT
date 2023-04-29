import { Gender } from "../Gender";
import { Person } from "../Person";
import { Date } from "../../DateTime/Date";

export enum Pilot_Category {
    CO_PILOT,
    PILOT
}

export class Employees extends Person{
    protected category: Pilot_Category
    constructor(first_name: string, last_name: string, gender: Gender, date_of_birth: Date, category: Pilot_Category){
        super(first_name, last_name, gender, date_of_birth)
        this.category = category
    }
}