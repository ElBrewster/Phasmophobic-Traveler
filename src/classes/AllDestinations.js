class AllDestinations {
    constructor(destinationData) {
        this.data = destinationData;
    }

    getRandomDestination(destination1data) {
        let object1 = destination1data[Math.floor(Math.random() * destination1data.length)];
        return object1;
    }
}
export default AllDestinations;