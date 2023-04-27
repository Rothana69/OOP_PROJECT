import { Ticket_Type } from "./ticket_type"
export class Ticket{
    ticket_type: Ticket_Type
    constructor(private price: number){}
}