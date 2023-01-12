import { expect } from 'chai';
import AllTrips from "../src/AllTrips";
const dayjs = require('dayjs')
describe("AllTrips", () => {
    // console.log(dayjs);
    let alltrips1;
    let alltrips2;
    let oneUserTrips;
    let oneUserTrips2;
    let userID1 = 44;
    let userID2 = 43;
    let today;
    let tripsData1 = [
        {
        id: 1,
        userID: 44,
        date: "2022/09/16",
        duration: 8,
        status: "approved",
        },
        {
        id: 2,
        userID: 35,
        date: "2022/10/04",
        duration: 18,
        status: "approved",
        },
        {
        id: 3,
        userID: 3,
        date: "2022/05/22",
        duration: 17,
        status: "approved",
        },
        {
        id: 46,
        userID: 44,
        date: "2020/08/24",
        duration: 11,
        status: "approved",
        },
        {
        id: 48,
        userID: 44,
        date: "2021/02/10",
        duration: 8,
        status: "pending",
        }, 
      ];
    let tripsData2 = [
        {id: 187, userID: 43, date: "2020/11/12", duration: 18, status: "pending"},
        {id: 171, userID: 2, date: "2020/12/27", duration: 18, status: "pending"},
        {id: 155, userID: 43, date: "2020/05/16", duration: 11, status: "approved"},
        {id: 143, userID: 43, date: "2020/02/25", duration: 12, status: "approved"},
        {id: 80, userID: 43, date: "2019/09/28", duration: 4, status: "approved"},
        {id: 43, userID: 43, date: "2021/01/09", duration: 5, status: "approved"},
        {id: 44, userID: 43, date: "2020/09/12", duration: 4, status: "pending"}
    ];
    beforeEach(function() {
        alltrips1 = new AllTrips(tripsData1);
        alltrips2 = new AllTrips(tripsData2);
        oneUserTrips = [
            {id: 1, userID: 44, date: "2022/09/16", duration: 8, status: "approved"},
            {id: 46, userID: 44, date: "2020/08/24", duration: 11, status: "approved"},
            {id: 48, userID: 44, date: "2021/02/10", duration: 8, status: "pending"}, 
            ];
        oneUserTrips2 = [
            {id: 187, userID: 43, date: "2020/11/12", duration: 18, status: "pending"},
            {id: 155, userID: 43, date: "2020/05/16", duration: 11, status: "approved"},
            {id: 143, userID: 43, date: "2020/02/25", duration: 12, status: "approved"},
            {id: 80, userID: 43, date: "2019/09/28", duration: 4, status: "approved"},
            {id: 43, userID: 43, date: "2021/01/09", duration: 5, status: "approved"},
            {id: 44, userID: 43, date: "2020/09/12", duration: 4, status: "pending"}
        ];
        today =  "2019/09/28";
    });

    it("Should be a function and instantiate our good friend AllTrips", () => {
        expect(AllTrips).to.be.a("function");
        expect(alltrips1).to.be.an.instanceOf(AllTrips);
    });

    it("Should have a property that stores all the trip data", () => {
        let tripObject = tripsData1[0];
        let aUserID = alltrips1.data[0].userID;
        expect(alltrips1.data).to.be.a.property;
        expect(alltrips1.data[0]).to.equal(tripObject);
        expect(aUserID).to.equal(userID1);
    });

    it("Should have a method to filter all trips for one user, with a userID passed in as a parameter", () => {
//-->SAD PATH: what if the parameter is not great, doesn't have data I can use?
        let method1 = alltrips1.filterOneClientTrips(userID1);
        let method1b = alltrips2.filterOneClientTrips(userID2);
        console.log("method1: ", method1);
        expect(method1).to.have.deep.members(oneUserTrips);
        expect(method1b).to.have.deep.members(oneUserTrips2);
    });

    // it("Should have a helper function to ensure the date for today passed in as a parameter is a string for upcoming filter methods", () => {
    //     let methodA = alltrips1.mutateString(today);
    // });

    // it("Should have a helper function to mutate the oneUserTrips data to then sort that data for the following filter methods", () => {
    //     let methodB = alltrips1.mutateToSortOneClientTrips();
    // });

    it("Should have a method to filter the client's trips and return a list of trips that are both upcoming and 'approved' in the method1 list", () => {
        // let today =  "2019/09/28";
        let method2 = alltrips1.checkClientTripApprovals(userID1, today);
        let method2b = alltrips2.checkClientTripApprovals(userID2, today);
        let answer1 = [
            {id: 1, userID: 44, date: "2022/09/16", duration: 8, status: "approved"},
            {id: 46, userID: 44, date: "2020/08/24", duration: 11, status: "approved"}];
        let answer2 =  [
            {id: 155, userID: 43, date: "2020/05/16", duration: 11, status: "approved"},
            {id: 143, userID: 43, date: "2020/02/25", duration: 12, status: "approved"},
            {id: 80, userID: 43, date: "2019/09/28", duration: 4, status: "approved"},]
        expect(method2).to.have.deep.members(answer1);
        expect(method2b).to.have.deep.members(answer2);
//-->check date and status. before "2019/09/28"
//-->today - trip.duration, and approved status is 'true'
    });

    it("Should have a method to filter the list from method1 for trip status 'pending' using method1", () => {
        let method3 = alltrips1.checkClientPendingTrips();
        //sad path: trip is pending but before today's date
    });

    it("Should evaluate whether a trip is completed based on the date of an 'approved' trip referencing the current date", () => {
        let method4 = alltrips1.checkClientTripCompletion();
        //just evaluate on approved and date I think? And if duration is over! because if it was a pending approval and past date, they didn't go
    });
});

//in destinations instantiate AllTrips to get one user's trips, then evaluate base cost of desinations there, and do the fee in a Agent class?
