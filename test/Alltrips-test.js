import { expect } from 'chai';
import AllTrips from "../src/AllTrips";

describe("AllTrips", () => {
    let alltrips1;
    let alltrips2;
    let oneUserTrips;
    let oneUserTrips2;
    let userID1 = 44;
    let today1 = "2020/07/24"
    let today2;
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
        status: "pending",
        suggestedActivities: [ ]
        }, 
      ];
    let tripsData2 = [
        {id: 187, userID: 43, date: "2020/11/12", duration: 18, status: "approved"},
        {id: 171, userID: 2, date: "2020/12/27", duration: 18, status: "pending"},
        {id: 155, userID: 43, date: "2020/05/16", duration: 11, status: "approved"},
        {id: 143, userID: 43, date: "2020/02/25", duration: 12, status: "approved"},
        {id: 80, userID: 43, date: "2019/09/28", duration: 4, status: "approved"},
        {id: 43, userID: 43, date: "2021/01/09", duration: 5, status: "approved"},
        {id: 44, userID: 43, date: "2020/09/12", duration: 4, status: "approved"}
    ];
    beforeEach(function() {
        alltrips1 = new AllTrips(tripsData);
        alltrips2 = new AllTrips(tripsData2);
        oneUserTrips = [
            {id: 1, userID: 44, date: "2022/09/16", duration: 8, status: "approved"},
            {id: 46, userID: 44, date: "2020/08/24", duration: 11, status: "approved"},
            {id: 48, userID: 44, date: "2021/02/10", duration: 8, status: "pending"}, 
            ];
        oneUserTrips2 = [
            {id: 187, userID: 43, date: "2020/11/12", duration: 18, status: "approved"},
            {id: 155, userID: 43, date: "2020/05/16", duration: 11, status: "approved"},
            {id: 143, userID: 43, date: "2020/02/25", duration: 12, status: "approved"},
            {id: 80, userID: 43, date: "2019/09/28", duration: 4, status: "approved"},
            {id: 43, userID: 43, date: "2021/01/09", duration: 5, status: "approved"},
            {id: 44, userID: 43, date: "2020/09/12", duration: 4, status: "approved"}
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
        expect(aUserID).to.equal(userID1);
    });

    it("Should have a method to find all trips for one user, with a userID passed in as a parameter", () => {
//-->what if the parameter is not great, doesn't have data I can use?
        let method1 = alltrips1.findOneClientTrips(userID1);
        console.log("method1: ", method1);
        expect(method1).to.have.deep.members(oneUserTrips);
    });
    it("Should have a method to check whether a trip is upcoming and is 'approved' from the method1 list", () => {
        let method2 = alltrips1.checkClientTripApprovals();
//-->check date and status. before "2020/08/24"
        let today = "2020/07/24";
    });

    it("Should have a method to filter the list from method1 for trip status 'pending' using method1", () => {
        let method3 = alltrips1.checkClientPendingTrips();
        //sad path: trip is pending but before today's date
//past?
//upcoming?
//pending?
    });

    it("Should evaluate whether a trip is completed based on the date of an 'approved' trip referencing the current date", () => {
        let method4 = alltrips1.checkClientTripCompletion();
        //just evaluate on approved and date I think? And if duration is over! because if it was a pending approval and past date, they didn't go
    });
});

//in destinations instantiate AllTrips to get one user's trips, then evaluate base cost of desinations there, and do the fee in a Agent class?
let trips2 = [
    {id: 187, userID: 43, date: "2020/11/12", duration: 18, status: "approved"},
    {id: 171, userID: 2, date: "2020/12/27", duration: 18, status: "pending"},
    {id: 155, userID: 43, date: "2020/05/16", duration: 11, status: "approved"},
    {id: 143, userID: 8, date: "2020/02/25", duration: 12, status: "approved"},
    {id: 80, userID: 43, date: "2019/09/28", duration: 4, status: "approved"},
    {id: 43, userID: 50, date: "2021/01/09", duration: 5, status: "approved"},
    {id: 44, userID: 27, date: "2020/09/12", duration: 4, status: "approved"}
];