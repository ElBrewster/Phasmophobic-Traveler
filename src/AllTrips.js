class AllTrips {
    constructor(tripsData) {
        this.data = tripsData;
    }

    findOneClientTrips(userID1) {
        let oneUserTrips = this.data.filter(element => element.userID === userID1)
        return oneUserTrips;
    }
}

export default AllTrips;