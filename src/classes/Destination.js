class Destination {
    constructor(destId, destinationData) {
        this.id = destId;
        this.object = this.findDestinationObject(destinationData);
        this.location = this.object.destination;
        this.lodgingCost = this.object.estimatedLodgingCostPerDay;
        this.flightCost = this.object.estimatedFlightCostPerPerson;
        this.imageURL = this.object.image;
        this.imageAlt = this.object.alt;
    }

    findDestinationObject(destinationData) {
        let destinationObject = destinationData.find(element => {
            return element.id === this.id;
        })
        return destinationObject;
    }

    calculateTripCost() {
        let oneTravelerCost = this.lodgingCost + this.flightCost;
        return oneTravelerCost;
    }

}

export default Destination;