import { Date } from "../date_time/Date";
import { Gender } from "./Gender";
export abstract class Person{
    protected first_name: string
    protected last_name: string
    protected gender: Gender
    protected date_of_birth: Date
    constructor(first_name: string, last_name: string, gender: Gender, date_of_birth: Date){
        this.first_name = first_name
        this.last_name = last_name
        this.gender = gender
        this.date_of_birth = date_of_birth
    }
}