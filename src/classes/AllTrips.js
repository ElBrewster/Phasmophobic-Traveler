class AllTrips {
    constructor(tripsData) {
        this.data = tripsData;
    }

    filterOneClientTrips(userID1) {
        let oneUserTrips = this.data.filter(element => element.userID === userID1)
        return oneUserTrips;
    }

    // mutateString(todayDate) {
    //     let dateString = String(todayDate);
    //     let dateString2 = dateString.replace("/", "").replace("/", "");
    //     console.log("dateString: ", dateString2);
    //     return dateString2;
    // }

    // mutateToSortOneClientTrips(userID1) {
    //     let userTrips = this.filterOneClientTrips(userID1);
    //     const noSlashArray = userTrips.reduce((acc, curr) => {
    //         let newDate = curr.date.replace("/", "").replace("/", "");
    //         curr.date = newDate;
    //         acc.push(curr);
    //         return acc;
    //     }, []).sort((a, b) => b.date - a.date );
    //     console.log("noSlashArray: ", noSlashArray);
    //     return noSlashArray;
    // }
    checkClientTripApprovals(userID1, todayDate) {
        let newDate = this.mutateString(todayDate);
        let sortedData = this.mutateToSortOneClientTrips(userID1);
        let upcomingApprovedTrips = sortedData.filter(element => {
            element.date >= newDate;
        });
        console.log("upcomingApprovedTrips", upcomingApprovedTrips);
        return upcomingApprovedTrips;
    }

    checkClientPendingTrips(userID1) {
        let userTrips = this.filterOneClientTrips(userID1);
    }

    checkClientTripCompletion(userID1){
        let userTrips = this.filterOneClientTrips(userID1);
    }
}

export default AllTrips;