import { Date } from "../date_time/Date";
import { Gender } from "./Gender";
export class Person{
    constructor(private first_name: string, private last_name: string, private gender: Gender, private date_of_birth: Date){}
}