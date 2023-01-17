import './css/styles.scss';
import { ghostFacts } from "./data/ghost-facts";
console.log(ghostFacts[0]);
import Agent from "./classes/Agent";
import Glide from '@glidejs/glide';
import { callForData, makeTrip } from "./api";
import dayjs from 'dayjs';
import "./images/marker.svg";
let agent1;
let clientId1;

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
let formLink = document.querySelector("#formLink");
let factsBox = document.querySelector("#smallTopLeft");

form.addEventListener("submit", formSubmitHandler);
form.addEventListener("change", estimatedCost);
factsBox.addEventListener("dblclick", displayFact);

loginSubmitbtn.addEventListener("click", function(event) {
    event.preventDefault();
    checkSubmission();
    pageLoad();
});

function checkSubmission() {
    let travelerUserName = username1.value;
    checkAgent(travelerUserName);

    if((checkPassword(travelerUserName)) && (password1.value === "travel")){
        document.querySelector("#loginPage").classList.add("hidden")
        document.querySelector("#travelAgency").classList.remove("hidden");
        document.querySelector("#mainSection").classList.remove("hidden");
    }
    if((travelerUserName === "agent") && (password1.value === "travel")){
        document.querySelector("#loginPage").classList.add("hidden")
        document.querySelector("#travelAgency").classList.remove("hidden");
        document.querySelector("#mainSection").classList.remove("hidden");
    }
}
function checkAgent(travelerUserName) {
    if((travelerUserName === "agent")) {
        return travelerUserName;
    } else {
        checkPasswordLength(travelerUserName);
        checkPassword(travelerUserName);
    }
}

function checkPasswordLength(travelerUserName) {
    if((travelerUserName.length === 10)) {
        return travelerUserName;
    } else{
        document.location.reload();
    }
}

function checkPassword(travelerUserName) {
    let userNameEntry = travelerUserName;
    let slicedId = userNameEntry.slice(-2) * 1;
    clientId1 = slicedId;
    if(((typeof(slicedId) === "number") && (slicedId < 51)) && (userNameEntry === `traveler${slicedId}`)) {
       return clientId1;
    } else {
        formLink.innerText = "Please enter a good username/password combo";
        //^this needs a timout
        console.log("Please enter a good username/password combo");
        document.querySelector("#loginPage").classList.remove("hidden")
        document.querySelector("#travelAgency").classList.add("hidden");
        document.querySelector("#mainSection").classList.add("hidden");
    }
}

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
        console.log("myDropdown.value", myDropDown.value);
        let tripLength = numDays.value;
        let numberTraveling = numTraveling.value;
        let estimate = agent1.calculateOneTripCost(tripLength, numberTraveling, (+myDropDown.value));
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
    console.log("makeThisTrip.id", makeThisTrip.id);
    // console.log("destionations", destionationID)
    makeTrip(makeThisTrip);
    doPromise();
    event.target.reset();
}

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

let counter = 0;
function displayFact() {
    factsBox.innerHTML = "";
    console.log("ghostFact?", ghostFacts[counter]);
    factsBox.innerHTML = `<p>${ghostFacts[counter]}</p>`;
    counter++;
}
