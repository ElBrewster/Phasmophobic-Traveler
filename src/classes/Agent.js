import AllDestinations from "./AllDestinations";
import Destination from "./Destination";
import Traveler from "./Traveler";
import Trip from "./Trip";
import dayjs from 'dayjs';


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

    filterClientsTripsThisYear(clientId) {
        let currYear = "2023/01/01";
        let client = this.getClient(clientId);
        let currentYearTrips = client.tripsList.filter(element => (dayjs(element.date).isAfter(dayjs(currYear))) || (dayjs(element.date).isSame(dayjs(currYear))));
        console.log("currYearTrips: ",currentYearTrips);
        return currentYearTrips;
    }

    calcClientTripsYearlyCost(clientId) {
        let currentTrips = this.filterClientsTripsThisYear(clientId);
        let totalArray = [];
        currentTrips.forEach(trip => {
            totalArray.push( this.calculateOneTripCost(trip.id));
        })
        let total = totalArray.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);
        return total;
    }

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
