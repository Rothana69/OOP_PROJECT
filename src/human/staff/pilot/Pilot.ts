import { Person } from "../../Person";
import { PilotCategory, Employee } from "../Employee";
import { Date } from "../../../DateTime/Date";
import { Gender } from "../../Gender";
import { Flight } from "../../../flight/Flight";

export class Pilot extends Employee{
    private flights: Flight[] = []
    constructor(firstName: string, lastName: string, gender: Gender, dateOfBirth: Date){
        super(firstName, lastName, gender, dateOfBirth, PilotCategory.PILOT)
    }
    public addFlight(flight: Flight){
        this.flights.push(flight)
    }
}