import { Person } from "../../Person";
import { Pilot_Category, Employees } from "../Employees";
import { Date } from "../../../DateTime/Date";
import { Gender } from "../../Gender";

export class Pilot extends Employees{
    constructor(first_name: string, last_name: string, gender: Gender, date_of_birth: Date){
        super(first_name, last_name, gender, date_of_birth, Pilot_Category.PILOT)
    }
    
}