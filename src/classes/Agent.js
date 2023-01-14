import AllDestinations from "./AllDestinations";
import Destination from "./Destination";
import Traveler from "./Traveler";
import Trip from "./Trip";

//this is my class highway 
class Agent {
    constructor(allDestinationData, allTripData, allTravelersData, localeId, tripId, clientId) {
        this.placesData = allDestinationData;
        this.tripsData = allTripData;
        this.clientsData = allTravelersData;
    }

    getClient(clientId) {
        return new Traveler(clientId, this.clientsData, this.tripsData);
    }

    // handleDestinationNames() {

    // }

    calculateOneTripCost(tripId) {
        let trip1 = new Trip(tripId, this.tripsData);
        let destId = trip1.destinationId;
        let destination1 = new Destination(destId, this.placesData);
        let lodgingCost = destination1.lodgingCost * trip1.tripLength;
        let flightCost = destination1.flightCost * 2;
        let oneTravelerCost = lodgingCost + flightCost;
        let tripCost = oneTravelerCost * trip1.travelerCount;
        let totalTripCost = tripCost + (tripCost / 10);
        return totalTripCost;

    }
}

export default Agent;
