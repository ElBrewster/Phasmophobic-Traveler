import dayjs from 'dayjs';

class AllTrips {
    constructor(tripsData) {
        this.data = tripsData;
    }

    filterOneClientTrips(userID1) {
        let oneUserTrips = this.data.filter(element => element.userID === userID1)
        return oneUserTrips;
    }

    checkClientTripApprovals(userID1, todayDate) {
        let userTrips1 = this.filterOneClientTrips(userID1);
        let upcomingApprovedTrips = userTrips1.filter(element => ((dayjs(element.date).isAfter(todayDate)) && (element.status === "approved")));

        console.log("upcomingApprovedTrips", upcomingApprovedTrips);
        return upcomingApprovedTrips;
    }

    checkClientPendingTrips(userID1) {
        let userTrips = this.filterOneClientTrips(userID1);
    }

    checkClientTripCompletion(userID1){
        let userTrips = this.filterOneClientTrips(userID1);
    }
}

export default AllTrips;