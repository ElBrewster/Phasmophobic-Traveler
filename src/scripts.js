import './css/styles.scss';
import "./data/ghost-facts";
import Agent from "./classes/Agent";
import Glide from '@glidejs/glide';
import { callForData, makeTrip } from "./api";
// import { makeTrip } from './api';
import dayjs from 'dayjs';

// import './images/turing-logo.png'

let agent1;
let clientId = 44;
let tripId3 = 4;
//^make this dynamic and delete!
//-----query-Selectors-----
let dateSpot = document.querySelector("#todaysDate")
let form = document.querySelector("#tripForm");
let myDropDown = document.querySelector("#select-destinations");
let numTraveling = document.querySelector("#numTravelers");
let numDays = document.querySelector("#numDays");
let tripDate = document.querySelector("#travelDate");
let costEstimatePrint = document.querySelector("#costEstimate");
let expensesDisplay = document.querySelector("#moneyTracker");
let testerBox = document.querySelector("#smallTopLeft");
let glideSlides = document.querySelector("#glideSlides");


//-----event-Listeners-----
window.addEventListener("load", pageLoad)
form.addEventListener("submit", formSubmitHandler);
form.addEventListener("change", estimatedCost)
numDays.addEventListener("change", console.log);
tripDate.addEventListener("change", console.log);
numTraveling.addEventListener("change", console.log);
myDropDown.addEventListener("change", console.log);
//-----functions-----

Promise.all([callForData("travelers"), callForData("trips"), callForData("destinations")])
.then((promisedData) => {
    let allTravelersData = promisedData[0].travelers;
    let allTripsData = promisedData[1].trips;
    let allDestinationData = promisedData[2].destinations;
    agent1 = new Agent(allDestinationData, allTripsData, allTravelersData);
    getTripsDropdown();
    displayExpenses(clientId);
    displayATrip();
    getClientDisplay(clientId);
    startGlide();
})
.catch(error => console.log(error));

function pageLoad() {
    dateSpot.innerText = dayjs().toDate();
}

function getClientDisplay(clientId) {
    let currUser = agent1.getClient(clientId);
    //innerText function to say hellow to user
    let oldTrips = agent1.filterClientsTripsBeforeThisYear(currUser.id);
    console.log("oldTrips: ", oldTrips);
    //this function isn't returning anything yet. I want it to display username and old trips for now
}
// clear innerHTML if you need to at the beginning of functions?
// for each trip insert into Glide "glide__track" `<li class="glide__slide"><img src="${img url}" alt="${img alt} /></li>`

function displayATrip() {
    console.log(tripId3);
    let display = agent1.provide1TripDisplayData(tripId3);
    console.log("display: ", display);
    console.log(testerBox.innerText = `You made memories on ${display.date}.`);
    testerBox.innerHTML = `<img class="tester-box" src="${display.url}" alt="${display.urlAlt}">`;
    // glideSlides.innerHTML = `<li class="glide__slide"><img class="one-slide" src="${display.url}" alt="${display.urlAlt}"></li>`;
    console.log(display.location_name)
    glideSlides.innerHTML = `<li class="glide__slide">You made memories on ${display.date} at ${display.location_name}.<img class="one-slide" src="${display.url}" alt="${display.urlAlt}" width="400" height="275"></li>`;
}

// {/* <div class="swiper-slide" id="${destination.id}"><img alt="${destination.alt}" src="${destination.image}" width="400" height="275"></div> */}

function displayExpenses() {
    let dollarText = agent1.calcClientTripsYearlyCost(clientId);
    expensesDisplay.innerText = `Your current expenses: $${dollarText}.00`;
}
//-----form-functions-----

function getTripsDropdown() {
    agent1.placesData.forEach(place => {
        myDropDown.innerHTML += `<option id="some${place.id}" value="${place.id}">${place.destination}</option>`;
    })
}

function estimatedCost() {
    if(numDays.value && numTraveling.value && myDropDown.value) {
        console.log("Here is numDays: friends: destination:", numDays.value, numTraveling.value, myDropDown.value);
        let estimate = agent1.calculateOneTripCost(109);
        //this sets the id, so it's not dynamic after the first pass. Needs to ignore the id?
        console.log("estimate: ", estimate)
        // console.log("friends: ", numTraveling.value);
        // console.log("destination: ", myDropDown.value);
        costEstimatePrint.innerHTML = `These trip selections tally at $${estimate}.`

    }
}

function formSubmitHandler(event) {
    event.preventDefault();
    const tripForm = new FormData(event.target);
    const makeThisTrip = {
        id: agent1.tripsData.length + 1,
        userID: 1,
        //^whatever user is at login, or randomly generated? This needs to be dynamic
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
//this needs to happen after we fetch
function startGlide() {
    const config = {
        type: "carousel",
        perView: 3,
        peek: { before: 100, after: 50 },
        breakpoints: {
            1024: {perView: 2},
            800: {perView: 2}
        },
        focusAt: 1,
        keyboard: true
      }
      new Glide(".glide", config).mount();
    }
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



