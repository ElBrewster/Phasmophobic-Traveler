import { expect } from "chai";
import Agent from "../src/classes/Agent";
import Traveler from "../src/classes/Traveler";
import dayjs from 'dayjs';


describe("Agent", () => {
    let agent1;
    let traveler1;
    let clientId = 3;
    let clientId2 = 4;
    let tripId1 = 2;
    let tripId2 = 1;

    let allTripData = [
        {id: 1, userID: 44, destinationID: 49, travelers: 1, date: "2022/09/16", duration: 8, status: "approved", suggestedActivities: [ ]},
        {id: 2, userID: 4, destinationID: 25, travelers: 5, date: "2023/3/01", duration: 18, status: "approved", suggestedActivities: [ ]},
        {id: 3, userID: 3, destinationID: 22, travelers: 4, date: "2022/05/22", duration: 17, status: "approved", suggestedActivities: [ ]},
        {id: 46, userID: 44, destinationID: 33, travelers: 2, date: "2020/08/24", duration: 11, status: "approved", suggestedActivities: [ ]},
        {id: 48, userID: 44, destinationID: 14, travelers: 6, date: "2021/02/10", duration: 8, status: "pending", suggestedActivities: [ ]},
        {id: 21, userID: 4, destinationID: 10, travelers: 1, date: "2023/1/01", duration: 18, status: "approved", suggestedActivities: [ ]},
        {id: 22, userID: 4,destinationID: 9, travelers: 4, date: "2022/05/01", duration: 19, status: "approved", suggestedActivities: [ ]}
    ];

    let allDestinationData = [
        {id: 1, destination: "Lima, Peru", estimatedLodgingCostPerDay: 70,
        estimatedFlightCostPerPerson: 400,
        image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        alt: "overview of city buildings with a clear sky"
        },
        {id: 49, destination: "Stockholm, Sweden", estimatedLodgingCostPerDay: 100,
        estimatedFlightCostPerPerson: 780,
        image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "city with boats on the water during the day time"
        },
        {id: 25, destination: "Sydney, Austrailia", estimatedLodgingCostPerDay: 130,
        estimatedFlightCostPerPerson: 950,
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "opera house and city buildings on the water with boats"
        },
        {id: 10, destination: "New York, New York", estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people crossing the street during the day surrounded by tall buildings and advertisements"}];

    let allTravelersData = [
            {id: 1, name: "Ham Leadbeater", travelerType: "relaxer"},
            {id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"},
            {id: 3, name: "Sibby Dawidowitsch", travelerType: "shopper"},
            {id: 4, name: "Leila Thebeaud", travelerType: "photographer"},
            {id: 5, name: "Tiffy Grout", travelerType: "thrill-seeker"}];

    beforeEach(function() {
        agent1 = new Agent(allDestinationData, allTripData, allTravelersData);
    });

    it("Should be a function and instantiate our good friend the Agent", () => {
        expect(Agent).to.be.a("function");
        expect(agent1).to.be.an.instanceOf(Agent);
    });

    it("Should have a property to store destination data", () => {
        expect(agent1.placesData).to.be.equal(allDestinationData);
    });

    it("Should have a property to store all trip data", () => {
        expect(agent1.tripsData).to.be.deep.equal(allTripData);
    });

    it("Should have a property to store all their client's data", () => {
        expect(agent1.clientsData).to.be.deep.equal(allTravelersData);
    });

    it("Should have a method0 to instantiate the Traveler to hand that client to the DOM", () => {
        let method0 = agent1.getClient(clientId);
        expect(method0).to.be.an.instanceOf(Traveler);
        expect(method0).to.be.deep.equal({
            id: 3,
            object: { id: 3, name: 'Sibby Dawidowitsch', travelerType: 'shopper' },
            name: 'Sibby Dawidowitsch',
            vibe: 'shopper',
            tripsList: [
              {id: 3, userID: 3, destinationID: 22, travelers: 4, date: '2022/05/22', 
              duration: 17, status: 'approved', suggestedActivities: []}]});
    });

    it("Should have a method1 to get the total cost for one trip for a user passing their id as an argument", () => {
        //(an agent would handle totals for the user)
        let length1 = 1;
        let numberTrav = 2;
        let destId = 10;
//         {id: 10, destination: "New York, New York", estimatedLodgingCostPerDay: 175,
//         estimatedFlightCostPerPerson: 200,
//         image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//         alt: "people crossing the street during the day surrounded by tall buildings and advertisements"}];
// //method to get total cost for 1 trip for a user: this is for a trip request
//175
        let method1 = agent1.calculateOneTripCost(length1, numberTrav, destId);
        console.log(method1);
        // let method1b = agent1.calculateOneTripCost(length1, numberTrav, destId);
        expect(method1).to.be.equal(1265);
        // expect(method1b).to.be.equal(2596);
//there's got to be so many sad paths for this :grimace:
    });
    it("Should have a helper method2b to filter a client's trips for the current year", () => {
        let method2b = agent1.filterClientsTripsThisYear(clientId2);
        expect(method2b).to.be.deep.equal([
            {id: 2, userID: 4, destinationID: 25, travelers: 5, date: '2023/3/01', duration: 18, status: 'approved', suggestedActivities: []},
            {id: 21, userID: 4, destinationID: 10, travelers: 1, date: '2023/1/01', duration: 18, status: 'approved', suggestedActivities: []}])
    });

    it("Should have a method2 to get the total cost for all trips for a user for this year to display on the dash", () => {
        let method2 = agent1.calcClientTripsYearlyCost(clientId2);
        expect(method2).to.be.equal(27225);
    });

    it("Should have a display method3 to get display info for one trip", () => {
        let method3b = agent1.provide1TripDisplayData(tripId1);
        let tripDisplayObject = {location_name: 'Sydney, Austrailia', date: '2023/3/01', trip_length: 18, group_size: 5,
            url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            urlAlt: 'opera house and city buildings on the water with boats',
            status: 'approved'
          };
        expect(method3b).to.be.deep.equal(tripDisplayObject);
    });

    it("Should have a method4 to filter a client's trips before the current year to do memories display", () => {
        let method4 = agent1.filterClientsTripsBeforeThisYear(clientId);
        expect(method4).to.be.deep.equal([
            {
              id: 3,
              userID: 3,
              destinationID: 22,
              travelers: 4,
              date: '2022/05/22',
              duration: 17,
              status: 'approved',
              suggestedActivities: []
            }
          ]);
    })

//client.askfortriplist, then for each get the display info
    it("Should have a method5 to get the total cost for all trips for all users for the past year to get the agent's yearly income", () => {
        //so call method2 on each traveler to get the total cost for all trips for all users this past year
    });

    it("Should have a method6 to get all pending trips for agent's display", () => {

    });

    it("Should have a method7 to get all travelers on trips 'today' for display", () => {

    });

    it("Should have a method8 to approve a user's trip", () => {
//make sure "Agent" doesn't make the change, but that the right class does this!
// change trip status to "approve"
    });

    it("Should have a method9 to delete a user's upcoming trip", () => {
//what does delete mean, remove from data set? remove from traveler's list? attach to button click?
    });

    it("Should have a method10 to search by AllTravelers by name and return the id to instantiate the Traveler", () => {
//do we need just the id, or the whole object? is this just for login? or pageload?
    });
})