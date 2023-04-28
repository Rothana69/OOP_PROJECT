import { Meal } from "./Meal";

export class Passenger{
    private phone_number: string;
    private email_address: string;
    private meal: Meal;
    constructor(phone_number: string, email_address: string, meal: Meal){
        this.phone_number= phone_number;
        this.email_address= email_address;
        this.meal= meal;
    };
};