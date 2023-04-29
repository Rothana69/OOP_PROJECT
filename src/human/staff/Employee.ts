import { Gender } from "../Gender";
import { Person } from "../Person";
import { Date } from "../../DateTime/Date";

export enum PilotCategory {
    CO_PILOT,
    PILOT,
    CHIEF
}

export class Employee extends Person{
    protected salary: number
    protected category: PilotCategory
    constructor(firstName: string, lastName: string, gender: Gender, dateOfBirth: Date, salary: number){
        super(firstName, lastName, gender, dateOfBirth)
        this.salary = salary
        
    }
    public setCategory(category: PilotCategory){
        this.category = category
    }

    public getSalary(): number{
        return this.salary
    }
}