import { expect } from "chai";
import Trip from "../src/classes/Trip";

describe("Trip", () => {
    let trip1;
    let tripId = 2;
    let allTripData = [
        {
        id: 1,
        userID: 44,
        destinationID: 49,
        travelers: 1,
        date: "2022/09/16",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
        },
        {
        id: 2,
        userID: 35,
        destinationID: 25,
        travelers: 5,
        date: "2022/10/04",
        duration: 18,
        status: "approved",
        suggestedActivities: [ ]
        },
        {
        id: 3,
        userID: 3,
        destinationID: 22,
        travelers: 4,
        date: "2022/05/22",
        duration: 17,
        status: "approved",
        suggestedActivities: [ ]
        }];

    beforeEach(function() {
        trip1 = new Trip(tripId, allTripData);
    });

    it("Should be a function and instantiate our good friend Trip", () => {
        expect(Trip).to.be.a("function");
        expect(trip1).to.be.an.instanceOf(Trip);
    });

    it("Should have a property to store a trip id", () => {
        expect(trip1.id).to.be.equal(2);
    });

    it("Should have a method to find and instantiate itself using a trip id passed in as an argument", () => {
        let method0 = trip1.findTripObject(allTripData);
        expect(method0).to.be.equal(trip1.object);
    });

    it("Should have a property to store the results of that method", () => {
        expect(trip1.object).to.equal(allTripData[1]);
    });
    
    it("Should have a property to store the userID", () => {
        expect(trip1.userId).to.be.equal(trip1.object.userID);
    });
    it("Should have a property to store the destinationID", () => {
        expect(trip1.destinationId).to.be.equal(trip1.object.destinationID);
    });
    it("Should have a property to store the travelers count", () => {
        expect(trip1.travelerCount).to.be.equal(trip1.object.travelers);
    });
    it("Should have a property to store the date", () => {
        expect(trip1.dateString).to.be.equal(trip1.object.date);
    });
    it("Should have a property to store the trip duration", () => {
        expect(trip1.tripLength).to.be.equal(trip1.object.duration);
    });
    it("Should have a property to store the trip status", () => {
        expect(trip1.status).to.be.equal(trip1.object.status);
    });
    it("Should have a property to store the trip suggested activities array", () => {
        expect(trip1.suggestedActivities).to.be.equal(trip1.object.suggestedActivities);
    });
})