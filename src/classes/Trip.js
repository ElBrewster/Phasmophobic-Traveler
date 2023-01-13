class Trip {
    constructor(tripId, allTripData) {
        this.id = tripId;
        this.object = this.findTripObject(allTripData);
        this.userId = this.object.userID;
        this.destinationId = this.object.destinationID;
        this.travelerCount = this.object.travelers;
        this.dateString = this.object.date;
        this.tripLength = this.object.duration;
        this.status = this.object.status;
        this.suggestedActivities = this.object.suggestedActivities;
    }

    findTripObject(allTripData) {
        let tripObject = allTripData.find(element => {
            return element.id === this.id;
        })
        return tripObject;
    }
}

export default Trip;