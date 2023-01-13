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
        return upcomingApprovedTrips;
    }

    checkClientPendingTrips(userID1) {
        let userTrips2 = this.filterOneClientTrips(userID1);
        let pendingTrips = userTrips2.filter(element => element.status === "pending");
        return pendingTrips;
    }

    checkClientTripCompletion(userID1, todayDate){
        let userTrips3 = this.filterOneClientTrips(userID1);
        let completeTrips = userTrips3.filter(element => (element.status === "approved") && (dayjs(element.date).isBefore(todayDate)));
        return completeTrips;
    }
}

export default AllTrips;