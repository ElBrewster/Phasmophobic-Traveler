class Traveler {
    constructor(travelerId, allTravelerData) {
        this.id = travelerId;
        this.object1 = this.findTravelerObject(allTravelerData);
    }

    findTravelerObject(allTravelerData) {
        let travelerObject = allTravelerData.find(element => {
            return element.id === this.id;
        })
        console.log("travelerObject: ", travelerObject);
        return travelerObject;
    }
}
//instantiate AllTrips to get 1traveler's trips with AllTrips method(s)
//or do this in Agent class? idk

//use Alltrips.filterOneClientTrips and set as a property for one traveler, matches userId passed in for AllTrips
//Alltrips will always hand data to user, whether one traveler or an agent; it handles trip data
//Agent handles classes

export default Traveler;