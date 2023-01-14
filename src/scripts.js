import './css/styles.scss';
import "./data/ghost-facts";
import Agent from "./classes/Agent";
import AllDestinations from './classes/AllDestinations';
import Glide from '@glidejs/glide';
import { callForData, makeTrip } from "./api";
// import './images/turing-logo.png'

let agent1;
//-----query-Selectors-----
let form = document.querySelector("#tripForm")
let myDropDown = document.querySelector("#select-destinations")


//-----event-Listeners-----
form.addEventListener("submit", formSubmitHandler);

//-----functions-----

Promise.all([callForData("travelers"), callForData("trips"), callForData("destinations")])
.then((promisedData) => {
    let allTravelersData = promisedData[0];
    let allTripsData = promisedData [1];
    let allDestinationData = promisedData [2];
    agent1 = new Agent(allDestinationData, allTripsData, allTravelersData);
    // getTripsDropdown();
    console.log(agent1);
    console.log("agent1 index 0:", agent1.placesData.destinations[0])
})
.catch(error => console.log(error));
    //-->figure out how to do error handling on the DOM so user know's what's going on, not just a console.log in the console

// const getTripsDropdown = () => {
//     let destinationNames = agent1.handleDestinationNames();
//     console.log(destinationNames);
//     destinationNames.forEach(place => {
//         myDropDown.innerHTML += <option value="place">${place}</option>;
//     })
// }

function formSubmitHandler(event) {
    event.preventDefault();
    const tripForm = new FormData(event.target)
    const makeThisTrip = {
        id: 1,
        userId: 1,
        destinationID: 1,
        travelers: 1,
        date:"",
        duration: 1,
        status: "pending",
        suggestedActivities: []
    }
    makeTrip(makeThisTrip);
    event.target.reset();
    //define the argument for POST
    //post the data
    //resent the event.target?
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



