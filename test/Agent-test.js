import { expect } from "chai";
import Agent from "../src/classes/Agent";
import Traveler from "../src/classes/Traveler";

describe("Agent", () => {
    let agent1;

    beforeEach(function() {
        agent1 = new Agent();
    });

    it("Should have a method to get the total cost for one trip for a user passing their id as an argument", () => {
        // instantiate Traveler
        // reference Traveler.tripsList

    });
    //properties to store the login info? could use it to troubleshoot weird inputs? 
// username: agency
// password: travel
//(an agent would handle totals for the user)
    //method to get total cost for 1 trip for a user
    //method to get total cost for all trips for a user
    //method to get total cost/profit for all trips for all users (agent's total income)
    //method to get all pending trips for agent's display
    //method to get and show all travelers on trips "today"
    //method to delete a user's trip
    //method to search by AllTravelers by name and return id and instantiate Traveler
})