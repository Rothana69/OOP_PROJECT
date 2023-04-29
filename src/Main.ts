import { Gender } from "./human/Gender";
import { Passenger } from "./human/passenger/Passenger";
import { Date } from "./DateTime/Date";
import { Booking } from "./booking/Booking";
import { TripBooking } from "./booking/BookingTrip/BookingTrip";
import { Flight } from "./flight/Flight";
import { BookingFlight } from "./booking/BookingFlight/BookingFlight";
import { Airline } from "./company/Airline";
import { Baggage } from "./human/meterial/Baggage";
import { BagTag } from "./human/meterial/BagTag";
import { Route } from "./airport/Route";
import { Gate } from "./airport/Gate";
import { Aeroplane } from "./company/plane/Aeroplane";
import { Seat } from "./company/plane/Seat";
import { Employee } from "./human/staff/Employee";
import { Pilot } from "./human/staff/pilot/Pilot";
import { CoPilot } from "./human/staff/pilot/Co_Pilot";
import { Farebasis } from "./company/plane/FareBasis";
// =====Date=====
let date1= new Date(13, 4, 2000);
let date2= new Date(21, 3, 1999);
let date3= new Date(30, 12, 1998);
// ====Passenger====
// ====Booking Trip====
let trip1= new TripBooking("Cambodia", "Lao", date2);
// ====BagTag====
let bagtag1= new BagTag("Chenel");
let bagtag2= new BagTag("LV");
// ====Baggage====
let baggage1= new Baggage(1, bagtag1);
let baggage2= new Baggage(2, bagtag2);

// ====Route====
let route1= new Route("street371");
let route2= new Route("Street271");
// ====Gate====
let gate1= new Gate("12A");
let gate2= new Gate("11B");
// ====Seat====
let seat1= new Seat(1, Farebasis.BusinessClass);
let seat2= new Seat(2, Farebasis.EconomyClassic);
// ====Aeroplane====
let Aeroplane1= new Aeroplane("OH-LWP", [seat1, seat2]);
let Aeroplane2= new Aeroplane("OH-LWP", [seat1, seat2]);
// ====Employee====
let employee1= new Employee("Ki", "KAKO", Gender.FEMALE, date3, 2000);
let employees2= new Employee("Ci", "KAKO", Gender.FEMALE, date1, 2000);
let employee3= new Employee("Pa", "Chi", Gender.MALE, date2, 1500);

