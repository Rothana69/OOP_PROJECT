import { Date } from "./DateTime/Date";
import { Gate } from "./airport/Gate";
import { Route } from "./airport/Route";
import { Aeroplane } from "./company/plane/Aeroplane";
import { Seat } from "./company/plane/Seat";
import { Flight } from "./flight/Flight";

let seat1 = new Seat(1)
let seat2 = new Seat(2)
let seat3 = new Seat(3)
let seat4 = new Seat(4)
let aeroplane = new Aeroplane("HT_05",[seat1,seat2,seat3,seat4])
let day1 = new Date(12,5,2023);
let gate1 = new Gate("A01");
let route  = new Route("Sate");

let flight = new Flight("F1",gate1,route,aeroplane,day1);

console.log(flight);

