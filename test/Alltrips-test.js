import { expect } from 'chai';
import AllTrips from "../src/AllTrips";

describe("AllTrips", () => {
    let alltrips1;
    let oneUserTrips;
    let userID = 44;
    let tripsData = [
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
        },
        {
        id: 46,
        userID: 44,
        destinationID: 33,
        travelers: 2,
        date: "2020/08/24",
        duration: 11,
        status: "approved",
        suggestedActivities: [ ]
        },
        {
        id: 48,
        userID: 44,
        destinationID: 14,
        travelers: 6,
        date: "2021/02/10",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
        }, 
      ];

    beforeEach(function() {
        alltrips1 = new AllTrips(tripsData);
        oneUserTrips = [
            {id: 1, userID: 44, destinationID: 49, travelers: 1, date: "2022/09/16", duration: 8, status: "approved", suggestedActivities: [ ]},
            {id: 46, userID: 44, destinationID: 33, travelers: 2, date: "2020/08/24", duration: 11, status: "approved", suggestedActivities: [ ]},
            {id: 48, userID: 44, destinationID: 14, travelers: 6, date: "2021/02/10", duration: 8, status: "approved", suggestedActivities: [ ]}, 
            ];
    });

    it("Should be a function and instantiate our good friend AllTrips", () => {
        expect(AllTrips).to.be.a("function");
        expect(alltrips1).to.be.an.instanceOf(AllTrips);
    });

    it("Should have a property that stores all the trip data", () => {
        let tripObject = tripsData[0];
        let aUserID = alltrips1.data[0].userID;
        expect(alltrips1.data).to.be.a.property;
        expect(alltrips1.data[0]).to.equal(tripObject);
        expect(aUserID).to.equal(userID);
    });

    it("Should have a method to find all trips for one user, with a userID passed in as a parameter", () => {
//-->what if the parameter is not great, doesn't have data I can use?
        let method1 = alltrips1.getOneUserTrips(userID);

        expect(method1).to.be.equal(oneUserTrips)
        expect(method1).to.have.deep.members(oneUserTrips);
    });

    it("Should have a method to filter for trip status using method1", () => {
//past?
//upcoming?
//pending?
    })
})
// method1 finds trips for one user: past, upcoming, pending (is this one or 3 methods?)
//in destinations instantiate AllTrips to get one user's trips, then evaluate base cost of desinations there, and do the fee in a Dom class?