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
    let tripsData3 = [
            {id: 187, userID: 3, date: "2020/11/12", duration: 18, status: "pending"},
            {id: 171, userID: 2, date: "2020/12/27", duration: 18, status: "pending"},
            {id: 155, userID: 3, date: "2020/05/16", duration: 11, status: "approved"},
            {id: 143, userID: 1, date: "2020/02/25", duration: 12, status: "approved"},
            {id: 80, userID: 1, date: "2019/09/28", duration: 4, status: "approved"},
            {id: 43, userID: 3, date: "2021/01/09", duration: 5, status: "approved"},
            {id: 44, userID: 2, date: "2020/09/12", duration: 4, status: "pending"}
        ];
        beforeEach(function() {
            traveler1 = new Traveler(travelerId, travelersData, tripsData3);
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

        it("Should have a method to instantiate AllTrips to call filterOneClientTrips method", () => {
            let method1 = traveler1.askForTripList(tripsData3);
            let user3Trips = [
                {id: 187, userID: 3, date: "2020/11/12", duration: 18, status: "pending"},
                {id: 155, userID: 3, date: "2020/05/16", duration: 11, status: "approved"},
                {id: 43, userID: 3, date: "2021/01/09", duration: 5, status: "approved"}]
            expect(method1).to.have.deep.members(user3Trips);
        });

        it("Should have a property to store the results of that method upon Traveler instantiation", () => {
            let method1b = traveler1.askForTripList(tripsData3);
            expect(method1b).to.have.deep.members(traveler1.tripsList);
        });
})