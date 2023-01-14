class AllDestinations {
    constructor(destinationData) {
        this.data = destinationData;
    }

    getRandomDestination(destination1data) {
        let object1 = destination1data[Math.floor(Math.random() * destination1data.length)];
        return object1;
    }

    getDestinationNames() {
        let placeNames = this.data.map(element => element.destination);
        return placeNames;
    }
}
export default AllDestinations;