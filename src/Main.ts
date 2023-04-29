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
let passenger1= new Passenger( "To","YaTa", Gender.MALE, date1,"02342423", "tato@gmail.com");
let passenger2= new Passenger("Ka", "KITO", Gender.FEMALE, date2,"01243543", "tota@gmail.com");
// ====Booking Trip====
let trip1= new TripBooking("Cambodia", "Lao", date2);
// ====BagTag====
let bagtag1= new BagTag("Chenel");
let bagtag2= new BagTag("LV");
// ====Baggage====
let baggage1= new Baggage(1, bagtag1);
let baggage2= new Baggage(2, bagtag2);
// ====Booking====
let booking1= new Booking("12A", [baggage1], passenger1);
let booking2= new Booking("11B", [baggage2], passenger2);
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
// ====Pilot====
let pilot1= new Pilot(employee1);
let pilot2= new Pilot(employee3);
// ====CO Pipot====
let coPipot1= new CoPilot(employees2);
// ====Flight====
let flight1= new Flight("A122", gate1, route1, Aeroplane1, date1, pilot1, coPipot1, "Phnom Penh", "Lao");
let flight2= new Flight("A122", gate2, route2,Aeroplane1, date2, pilot2, coPipot1, "Wat Phnom", "Siem Reap");
// ====BookingFlight====
let bookingFlight1= new BookingFlight();
// ====AirLine Manager====
let airline1= new Airline("Ma");
// ====Call Function====
trip1.addBookingFlight(bookingFlight1);
bookingFlight1.addFlight(flight1);
booking1.addTripBooking(trip1);
passenger1.addBooking(booking1);
passenger1.addBooking(booking2);
airline1.addBooking(booking1);
airline1.addBooking(booking2);
airline1.passengersReturnTicket(flight2);
Aeroplane1.addFlight(flight1);
Aeroplane1.addFlight(flight2);
gate1.addFlight(flight1);
gate2.addFlight(flight2);
airline1.addEmployee(pilot1);
// ====Console====
console.log(airline1.getPassengersWithReturnTicket());
// console.log(Aeroplane1.getFlight());
// passenger1.findBookingTrip(Aeroplane2);