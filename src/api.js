const callForData = (urlPath) => {
    return fetch(`http://localhost:3001/api/v1/${urlPath}`)
        .then(response => response.json());
}

const makeTrip = (makeThisTrip) => {
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

export { makeTrip };
export { callForData };


        