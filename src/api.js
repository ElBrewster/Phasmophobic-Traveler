const callForData = (urlPath) => {
    return fetch(`http://localhost:3001/api/v1/${urlPath}`)
        .then(response => response.json());
}

const makeTrip = (makeThisTrip) => {
    console.log(makeThisTrip);
    fetch("http://localhost:3001/api/v1/trips", {
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify(makeThisTrip)
    })
        .then(response => {
            if(!response.ok) {
                throw new Error("This didn't work!", (`${response.status}: ${response.statusText}`));
            }
            return response.json();
        })
        .then(data => console.log(data))

        .catch((err) => {
            console.log(err);
        })

}
// Feedback from Cass on fitlit: Consider in future projects making sure users can’t add negative numbers in forms and consider blocking dates that don’t make sense for a user to be able to add. For example, a user probably shouldn’t be able to add data to a day that hasn’t yet occurred.
// right now I can reselect a trip for the same date as a user

export { makeTrip };
export { callForData };


        