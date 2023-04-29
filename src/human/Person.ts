import { Date } from "../DateTime/Date";
import { Gender } from "./Gender";
export abstract class Person{
    protected firstName: string
    protected lastName: string
    protected gender: Gender
    protected dateOfBirth: Date
    constructor(firstName: string, lastName: string, gender: Gender, dateOfBirth: Date){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.dateOfBirth = dateOfBirth
    }
}