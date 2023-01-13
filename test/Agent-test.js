import { expect } from "chai";
import Agent from "../src/classes/Agent";
import Traveler from "../src/classes/Traveler";

describe("Agent", () => {
    let agent1;
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

    beforeEach(function() {
        agent1 = new Agent(allDestinationData, allTripData);
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
    })

    it("Should have a method to get the total cost for one trip for a user passing their id as an argument", () => {
        //(an agent would handle totals for the user)
//method to get total cost for 1 trip for a user: this is for a trip request
        let method1 = agent1.calculateOneTripCost(tripId1);
        let method1b = agent1.calculateOneTripCost(tripId2);
        expect(method1).to.be.equal(23320);
        expect(method1b).to.be.equal(2596);
//there's got to be so many sad paths for this :grimace:
    });

    //properties to store the login info? could use it to troubleshoot weird inputs? 
// username: agency
// password: travel
    //method to get total cost for all trips for a user
    //method to get total cost/profit for all trips for all users (agent's total income)
    //method to get all pending trips for agent's display
    //method to get and show all travelers on trips "today"
    //method to approve a user's trip
    //method to delete a user's trip
    //method to search by AllTravelers by name and return id and instantiate Traveler
})