import { expect } from "chai";
import Traveler from "../src/classes/Traveler";

describe("Traveler", () => {
    let traveler1;
    let travelerId = 3;
    const travelersData = [
        {
        id: 1,
        name: "Ham Leadbeater",
        travelerType: "relaxer"
        },
        {
        id: 2,
        name: "Rachael Vaughten",
        travelerType: "thrill-seeker"
        },
        {
        id: 3,
        name: "Sibby Dawidowitsch",
        travelerType: "shopper"
        },
        {
        id: 4,
        name: "Leila Thebeaud",
        travelerType: "photographer"
        }];

        beforeEach(function() {
            traveler1 = new Traveler(travelerId, travelersData);
        });

        it("Should be a function and instantiate our good friend Traveler", () => {
            expect(Traveler).to.be.a("function");
            expect(traveler1).to.be.an.instanceOf(Traveler);
        });
    
        it("Should have a property to store a traveler id", () => {
            expect(traveler1.id).to.be.equal(3);
        });

        it("Should have a method to find and instantiate itself using a traveler id passed in as an argument", () => {
            let method0 = traveler1.findTravelerObject(travelersData);
            expect(method0).to.be.equal(traveler1.object);
        });
    
        it("Should have a property to store the results of that method", () => {
            expect(traveler1.object).to.deep.equal(travelersData[2]);
        });
})