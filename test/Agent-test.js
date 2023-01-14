import { expect } from "chai";
import Agent from "../src/classes/Agent";
import Traveler from "../src/classes/Traveler";

describe("Agent", () => {
    let agent1;
    let traveler1;
    let clientId = 3;
    let tripId1 = 2;
    let tripId2 = 1;

    let allTripData = [
        {id: 1, userID: 44, destinationID: 49, travelers: 1, date: "2022/09/16", duration: 8, status: "approved", suggestedActivities: [ ]},
        {id: 2, userID: 35, destinationID: 25, travelers: 5, date: "2022/10/04", duration: 18, status: "approved", suggestedActivities: [ ]},
        {id: 3, userID: 3, destinationID: 22, travelers: 4, date: "2022/05/22", duration: 17, status: "approved", suggestedActivities: [ ]}];

    let allDestinationData = [{
        id: 1, destination: "Lima, Peru", estimatedLodgingCostPerDay: 70,
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
        }];

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
        console.log("method0, traveler: ", method0);
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
//method to get total cost for 1 trip for a user: this is for a trip request
        let method1 = agent1.calculateOneTripCost(tripId1);
        let method1b = agent1.calculateOneTripCost(tripId2);
        expect(method1).to.be.equal(23320);
        expect(method1b).to.be.equal(2596);
//there's got to be so many sad paths for this :grimace:
    });

    it("Should have a method to insantiate AllDestinations to call the method getDestinationNames", () => {
        let method2 = agent1.handleDestinationNames();
        expect(method2).to.have.deep.members(["Lima, Peru", "Stockholm, Sweden", "Sydney, Austrailia"]);
    });

    it("Should have a method2 to get the total cost for all trips for a user for one year to display on the dash", () => {
        //so call method1 on each trip in a user's trip list. Instantiate Traveler to access this list?
        //method to get total cost for all trips for a user
//--> get a user's trip list, then calculateOneTripCost on each element in that list
    })

    it("Should have a method3 to get the total cost for all trips for all users for the past year to get the agent's yearly income", () => {
        //so call method2 on each traveler to get the total cost for all trips for all users this past year
    });

    it("Should have a method4 to get all pending trips for agent's display", () => {

    });

    it("Should have a method5 to get all travelers on trips 'today' for display", () => {

    });

    it("Should have a method6 to approve a user's trip", () => {
//make sure "Agent" doesn't make the change, but that the right class does this!
// change trip status to "approve"
    });

    it("Should have a method7 to delete a user's upcoming trip", () => {
//what does delete mean, remove from data set? remove from traveler's list? attach to button click?
    });

    it("Should have a method to search by AllTravelers by name and return the id to instantiate the Traveler", () => {
//do we need just the id, or the whole object? is this just for login? or pageload?
    });
})