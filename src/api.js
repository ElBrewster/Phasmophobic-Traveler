const fetchData = (urlPath) => {
    return fetch(`http://localhost:3001/api/v1/${urlPath}`)
        .then(response => response.json());
}

const fetchDataOneUser = (urlPath, idNum) => {
    return fetch(`http://localhost:3001/api/v1/${urlPath}/${idNum}`)
        .then(response => response.json());
}




export { fetchData };
export { fetchDataOneUser };

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

        