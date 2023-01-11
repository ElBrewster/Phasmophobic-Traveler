class AllTrips {
    constructor(tripsData) {
        this.data = tripsData;
    }

    filterOneClientTrips(userID1) {
        let oneUserTrips = this.data.filter(element => element.userID === userID1)
        return oneUserTrips;
    }

    checkClientTripApprovals(userID1, todayDate) {
        let userTrips = this.filterOneClientTrips(userID1);
    }

    checkClientPendingTrips(userID1) {
        let userTrips = this.filterOneClientTrips(userID1);
    }

    checkClientTripCompletion(userID1){
        let userTrips = this.filterOneClientTrips(userID1);
    }
}

export default AllTrips;