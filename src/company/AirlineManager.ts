import { Gender } from "../human/Gender";
import { Person } from "../human/Person";
import { Date } from "../DateTime/Date";
import { Flight } from "../flight/Flight";
export class AirlineManager extends Person{
    constructor(public firstName: string, public lastName: string, public gender: Gender,public dateOfBirth: Date){
        super (firstName, lastName, gender, dateOfBirth);
    };
    getFlight(flight: Flight): Flight{
        return flight;
    };

};