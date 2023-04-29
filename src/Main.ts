import { Gender } from "./human/Gender";
import { Passenger } from "./human/passenger/Passenger";
import { Date } from "./DateTime/Date";
import { Booking } from "./booking/Booking";
import { TripBooking } from "./booking/BookingTrip/BookingTrip";
import { Flight } from "./flight/Flight";
import { BookingFlight } from "./booking/BookingFlight/BookingFlight";
import { Airline_Manager } from "./company/AirlineManager";
import { Baggage } from "./human/meterial/Baggage";
import { BagTag } from "./human/meterial/BagTag";
import { Route } from "./airport/Route";
import { Gate } from "./airport/Gate";
import { Aeroplane } from "./company/plane/Aeroplane";
import { Seat } from "./company/plane/Seat";
// =====Date=====
let date1= new Date(13, 4, 2000);
let date2= new Date(21, 3, 1999);
// ====Passenger====
let passenger1= new Passenger( "02342423", "tato@gmail.com");
let passenger2= new Passenger("01243543", "tota@gmail.com");
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
let seat1= new Seat(1);
let seat2= new Seat(2);
// ====Aeroplane====
let Aeroplane1= new Aeroplane("OH-LWP", [seat1, seat2]);
let Aeroplane2= new Aeroplane("HAHA", [seat1, seat2]);
// ====Flight====
let flight1= new Flight("A122", gate1, route1, Aeroplane1, date1);
let flight2= new Flight("A122", gate2, route2,Aeroplane1, date2);
// ====BookingFlight====
let bookingFlight1= new BookingFlight();
// ====AirLine Manager====
let airLineManger1= new Airline_Manager("Ma","Karo", Gender.MALE, date2);
// ====Call Function====
trip1.addBookingFlight(bookingFlight1);
bookingFlight1.addFlight(flight1);
booking1.addTripBooking(trip1);
passenger1.addBooking(booking1);
passenger1.addBooking(booking2);
airLineManger1.addBooking(booking1);
airLineManger1.addBooking(booking2);
airLineManger1.passengersReturnTicket(flight2);
Aeroplane1.addFlight(flight1);
Aeroplane1.addFlight(flight2);
gate1.addFlight(flight1);
gate2.addFlight(flight2);
// ====Console====
// console.log(airLineManger1.getPassengersWithReturnTicket());
// console.log(Aeroplane1.getFlight());
// console.log(passenger1.findBookingTrip(Aeroplane2));
// import { Date } from "./DateTime/Date";
// import { Gate } from "./airport/Gate";
// import { Route } from "./airport/Route";
// import { Aeroplane } from "./company/plane/Aeroplane";
// import { Seat } from "./company/plane/Seat";
// import { Flight } from "./flight/Flight";
// import { PilotCategory, Employee } from "./human/staff/Employee"
// import { Pilot } from "./human/staff/pilot/Pilot";
// import { Person } from "./human/Person";
// import { Gender } from "./human/Gender";
// import { CoPilot } from "./human/staff/pilot/Co_Pilot";
// import { Airline } from "./company/Airline";


// //  -------------------- Add seat--------------------------------------------
// let seat1 = new Seat(1)
// let seat2 = new Seat(2)
// let seat3 = new Seat(3)
// let seat4 = new Seat(4)

// // --------------------Add Aeroplane--------------------------------------------
// let aeroplane = new Aeroplane("HT_05",[seat1,seat2,seat3,seat4])

// // -------------------- add date-----------------------------------------
// let day1 = new Date(12,5,2023);
// let day2 = new Date(23,5,2023);

// // --------------------add gate --------------------------------
// let gate1 = new Gate("A01");

// //  -------------------- add route --------------------------------
// let route  = new Route("Sate");

// // ------------------ add name pilot ----------------------
// let pilot1 = new Employee("Nana", "PIP", Gender.MALE, day1)
// pilot1.setCategory(PilotCategory.PILOT);


// // -------------------------add name copilot ------------------------
// let copilot1 = new Employee("Nana", "PIP", Gender.MALE, day1)
// copilot1.setCategory(PilotCategory.CO_PILOT);

// // -------------------------------- ceate person ------------------------
// let pilot = new Pilot(pilot1);
// let copilot = new CoPilot(copilot1);

// // -------------------------------- create flight ------------------------
// let flight = new Flight("F1",gate1,route,aeroplane,day1,pilot,copilot,"Phnom","China");
// let flight1 = new Flight("F2",gate1,route,aeroplane,day2,pilot,copilot,"Phnom","China");

// //create airline ----------------------------------------------------------------
// let airline = new Airline("PhnomPenh Airline")
// airline.addflight(flight);
// airline.addflight(flight1);
// pilot.addFlight(flight)
// pilot.addFlight(flight1)

// // console.log(pilot);

// console.log(airline.getFlights(pilot,day2));

