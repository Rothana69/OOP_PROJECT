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

