import './css/styles.scss';
import "./data/ghost-facts";
import Agent from "./classes/Agent";
import Glide from '@glidejs/glide';
import { callForData } from "./api";
import { makeTrip } from './api';
import { locale } from 'dayjs';
// import './images/turing-logo.png'

let agent1;
//-----query-Selectors-----
let form = document.querySelector("#tripForm");
let myDropDown = document.querySelector("#select-destinations");


//-----event-Listeners-----
form.addEventListener("submit", formSubmitHandler);

//-----functions-----

Promise.all([callForData("travelers"), callForData("trips"), callForData("destinations")])
.then((promisedData) => {
    let allTravelersData = promisedData[0].travelers;
    let allTripsData = promisedData[1].trips;
    let allDestinationData = promisedData[2].destinations;
    agent1 = new Agent(allDestinationData, allTripsData, allTravelersData);
    getTripsDropdown();

})
.catch(error => console.log(error));


function getTripsDropdown() {
    agent1.placesData.forEach(place => {
        myDropDown.innerHTML += `<option id="some${place.id}" value="${place.id}">${place.destination}</option>`;
    })
}

function formSubmitHandler(event) {
    event.preventDefault();
    const tripForm = new FormData(event.target);
    const makeThisTrip = {
        id: agent1.tripsData.length + 1,
        userID: 1,
        //whatever user is at login, or randomly generated?
        destinationID: Number(tripForm.get("destinations")),
        travelers: tripForm.get("numberTravelers"),
        date: tripForm.get("date").replaceAll("-", "/"),
        duration: tripForm.get("numberDays"),
        status: "pending",
        suggestedActivities: []
    }
    makeTrip(makeThisTrip);
    event.target.reset();
}

//-----glide?
let glide = new Glide('.glide');
glide.mount()
//-----glide^?

//----news-ticker?-----
// const windowLoad = document.addEventListener("load", newsTicker);

// const newsTicker = () => {
//     ghostFacts.forEach(fact => console.log(fact));
// }
//----accordion?-----
// let acc = document.getElementsByClassName("accordion");
// let i;
// let panel = this.nextElementSibling;

//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function() {
//             this.classList.toggle("active");
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//       });
//     }



//  for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//             this.classList.toggle("active");
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//       });
//     }



