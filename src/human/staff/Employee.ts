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
    constructor(firstName: string, lastName: string, gender: Gender, dateOfBirth: Date, salary: number, category: PilotCategory){
        super(firstName, lastName, gender, dateOfBirth)
        this.salary = salary
        this.category = category
    }

    public getSalary(): number{
        return this.salary
    }
}