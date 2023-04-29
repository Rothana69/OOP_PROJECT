import { Gender } from "../human/Gender";
import { Person } from "../human/Person";
import { Date } from "../DateTime/Date";
import { Flight } from "../flight/Flight";
export class Airline_Manager extends Person{
    constructor(public first_name: string, public last_name: string, public gender: Gender,public date_of_birth: Date){
        super (first_name, last_name, gender, date_of_birth);
    };
    getFlight(flight: Flight): Flight{
        return flight;
    };

};