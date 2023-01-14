const callForData = (urlPath) => {
    return fetch(`http://localhost:3001/api/v1/${urlPath}`)
        .then(response => response.json());
}

const makeTrip = (makeThisTrip) => {
    fetch("http://localhost:3001/api/v1/trips", {
        method: "POST",
        headers: {"Conten-type": "application/json",
            Accept: "application/json"    
        },
        body: JSON.stringify(makeThisTrip)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw new Error()
        })
        .then()
        .catch((err) => {
            throw new Error("This didn't work!", { cause: err });
        })
    })

}
// Feedback from Cass on fitlit: Consider in future projects making sure users can’t add negative numbers in forms and consider blocking dates that don’t make sense for a user to be able to add. For example, a user probably shouldn’t be able to add data to a day that hasn’t yet occurred.










export { makeTrip };
export { callForData };
//--------------prototype----------------------------------///
// fetch(url, {
//     method: 'POST',
//     headers: {'Conten-type': 'application/json'},
//     body: JSON.stringify(data)
//     //body: JSON.stringify({id: 1, name: "me", status: "online", interests: "science"})
// })
//     .then(response => {
//         //data returned from a POST is the successfully created resource object
//         //Cass said sometimes you need ALL of the data?
//         //Cass said something about making a get request here?
//     if (response.ok) {
//     response.json()
//     }
//     throw Error("Missing input fields :P")
// }).then(data => cbFunc(data))
// .catch(error => console.log(error))

        