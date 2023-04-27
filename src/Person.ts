import { Date } from "./date";
import { Gender } from "./gender";
export class Person{
    constructor(private first_name: string, private last_name: string, private gender: Gender, private date_of_birth: Date){}
}