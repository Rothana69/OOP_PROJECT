import { Person } from "../../Person";
import { PilotCategory, Employee } from "../Employee";
import { Date } from "../../../DateTime/Date";
import { Gender } from "../../Gender";
import { Flight } from "../../../flight/Flight";

export class CoPilot{
    private flights: Flight[] = []
    private employee: Employee
    constructor(employee: Employee) {
        this.employee = employee;
    }
    public addFlight(flight: Flight){
        this.flights.push(flight)
    }
}