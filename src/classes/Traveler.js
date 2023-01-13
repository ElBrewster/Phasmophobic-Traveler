import AllTrips from "./AllTrips";

class Traveler {
    constructor(travelerId, allTravelerData, tripsData) {
        this.id = travelerId;
        this.object = this.findTravelerObject(allTravelerData);
        this.name = this.object.name;
        this.vibe = this.object.travelerType;
        this.tripsList = this.askForTripList(tripsData);

    }

    findTravelerObject(allTravelerData) {
        let travelerObject = allTravelerData.find(element => {
            return element.id === this.id;
        })
        return travelerObject;
    }

    askForTripList(tripsData) {
        let alltrips = new AllTrips(tripsData);
        let alltripslist = alltrips.filterOneClientTrips(this.id);
        return alltripslist;
    }
}

export default Traveler;