import './css/styles.scss';
import "./data/ghost-facts";
import Agent from "./classes/Agent";
import Glide from '@glidejs/glide';
import { callForData, makeTrip } from "./api";
import dayjs from 'dayjs';

let agent1;
let clientId1;

//-----query-Selectors-----
let dateSpot = document.querySelector("#todaysDate")
let form = document.querySelector("#tripForm");
let myDropDown = document.querySelector("#select-destinations");
let numTraveling = document.querySelector("#numTravelers");
let numDays = document.querySelector("#numDays");
let costEstimatePrint = document.querySelector("#costEstimate");
let expensesDisplay = document.querySelector("#moneyTracker");
let glideSlides = document.querySelector("#glideSlides");
let newUserName = document.querySelector("#userName");
let upcomingTrips = document.querySelector("#upcomingTrip");
let loginSubmitbtn = document.querySelector("#loginSubmit")
let username1 = document.querySelector("#signupUsername");
let password1 = document.querySelector("#password");
//-----event-Listeners-----
form.addEventListener("submit", formSubmitHandler);
form.addEventListener("change", estimatedCost);
loginSubmitbtn.addEventListener("click", function(event) {
    event.preventDefault();
    checkSubmission();
    pageLoad();
});

//-----login-page-----

function checkSubmission() {
    let password = username1.value;
    checkPassword(password);
    console.log("clientId1?", clientId1);
    console.log("username?", username1.value);
    if((checkPassword(password) || "agent") && (password1.value === "travel")){
        document.querySelector("#loginPage").classList.add("hidden")
        // document.querySelector("#hiddenFunctionality").classList.remove("hidden");
        document.querySelector("#travelAgency").classList.remove("hidden");
        document.querySelector("#mainSection").classList.remove("hidden");
        document.querySelector("#logoLinks").classList.remove("hidden");
    }
    if((username1.value === "agent") && (password1.value === "travel")){
        document.querySelector("#loginPage").classList.add("hidden")
        // document.querySelector("#hiddenFunctionality").classList.remove("hidden");
        document.querySelector("#travelAgency").classList.remove("hidden");
        document.querySelector("#mainSection").classList.remove("hidden");
        document.querySelector("#logoLinks").classList.remove("hidden");
    }
}

function checkPassword(password) {
    let userNameEntry = password;
    console.log("userNameEntry", userNameEntry)
    let slicedId = userNameEntry.slice(-2) * 1;
    clientId1 = slicedId;
    if(((typeof(slicedId) === "number") && (slicedId < 51)) && (userNameEntry === `traveler${slicedId}`)) {
       return clientId1;
    } else {
        console.log("Please enter a good username/password combo");
        document.querySelector("#loginPage").classList.remove("hidden")
        // document.querySelector("#hiddenFunctionality").classList.add("hidden");
        document.querySelector("#travelAgency").classList.add("hidden");
        document.querySelector("#mainSection").classList.add("hidden");
        document.querySelector("#logoLinks").classList.add("hidden");
    }
    console.log("slicedId: ", slicedId)
}

//-----functions-----
function pageLoad() {
    dateSpot.innerText = dayjs().toDate();
    doPromise();
}

function doPromise() {
    Promise.all([callForData("travelers"), callForData("trips"), callForData("destinations")])
    .then((promisedData) => {
        let allTravelersData = promisedData[0].travelers;
        let allTripsData = promisedData[1].trips;
        let allDestinationData = promisedData[2].destinations;
        agent1 = new Agent(allDestinationData, allTripsData, allTravelersData);
        getTripsDropdown();
        console.log("clientId?", clientId1);
        getClientDisplay(clientId1);
        startGlide();
    })
    .catch(error => console.log(error));
}

function getClientDisplay(clientId1) {
    glideSlides.innerHTML = "";
    let currUser = agent1.getClient(clientId1);
    displayClientName(currUser);
    showOldTrips(currUser.id);
    displayCurrentAndUpcomingTrips(currUser.id);
    displayExpenses(currUser.id);
}

function showOldTrips(clientId1) {
    let oldTrips = agent1.filterClientsTripsBeforeThisYear(clientId1);
    oldTrips.forEach(trip => {
        let randomNum = getRandomArbitrary();
        let glideDisplay = agent1.provide1TripDisplayData(trip.id);
        glideSlides.innerHTML += `<li class="glide__slide"><p class="slideText" id="slideText">You made memories on ${glideDisplay.date} at ${glideDisplay.location_name} and saw ${randomNum} ghosts!</p><img class="one-slide" src="${glideDisplay.url}" alt="${glideDisplay.urlAlt}" width="400" height="275"></li>`;
    })
}

function getRandomArbitrary() {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min) + min);
}

function displayExpenses() {
    let dollarText = agent1.calcClientTripsYearlyCost(clientId1);
    let dollarTextFormat = new Intl.NumberFormat().format(dollarText);
    expensesDisplay.innerText = `Your current expenses this year: $${dollarTextFormat}.00`;
}

function displayClientName(currUser) {
    let username = currUser.name;
    newUserName.innerText = `Hello there, ${username}`;
}

function displayCurrentAndUpcomingTrips(clientId1) {
    let currentTrips = agent1.filterClientsTripsThisYear(clientId1);
    currentTrips.forEach(trip => {
        upcomingTrips.innerHTML += `<p class="upcoming">Your upcoming trip on ${trip.date} is ${trip.status}.</p>`
    })
}

//-----form-functions-----
function getTripsDropdown() {
    agent1.placesData.forEach(place => {
        myDropDown.innerHTML += `<option id="some${place.id}" value="${place.id}">${place.destination}</option>`;
    })
}

function estimatedCost() {
    if(numDays.value && numTraveling.value && myDropDown.value) {
        console.log("tripId", tripiD)
        let estimate = agent1.calculateOneTripCost(109);
        costEstimatePrint.innerHTML = `These trip selections tally at $${estimate}.`
    }
}

function formSubmitHandler(event) {
    event.preventDefault();
    const tripForm = new FormData(event.target);
    const makeThisTrip = {
        id: agent1.tripsData.length + 1,
        userID: clientId1,
        destinationID: Number(tripForm.get("destinations")),
        travelers: tripForm.get("numberTravelers"),
        date: tripForm.get("date").replaceAll("-", "/"),
        duration: tripForm.get("numberDays"),
        status: "pending",
        suggestedActivities: []
    }
    makeTrip(makeThisTrip);
    doPromise();
    event.target.reset();
}

//-----glide-----
function startGlide() {
    // might need a  ---> glideInstance.destroy(); somewhere 
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
//-----glide^-----

//----news-ticker?-----
// const windowLoad = document.addEventListener("load", newsTicker);

// const newsTicker = () => {
//     ghostFacts.forEach(fact => console.log(fact));
// }


