class AllTravelers {
    constructor(allTravelerData) {
        this.data = allTravelerData;
    }

    searchByName(nameString) {
        let travelerId_s = [];
        this.data.forEach(element => {
            if(element.name === nameString) {
                travelerId_s.push(element.id);
            }
        });
        return travelerId_s;
    }
}

export default AllTravelers;