const fetchData = (urlPath) => {
    return fetch(`http://localhost:3001/api/v1/${urlPath}`)
        .then(response => response.json());
}

const postTrip = () => {

}
// Feedback from Cass on fitlit: Consider in future projects making sure users can’t add negative numbers in forms and consider blocking dates that don’t make sense for a user to be able to add. For example, a user probably shouldn’t be able to add data to a day that hasn’t yet occurred.











export { fetchData };
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

        