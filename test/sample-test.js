import chai from 'chai';
const expect = chai.expect;
//Wishlist:
//1. use <optgroup> tag for dropdown to let user select a continent, have function to filter destinations into continent groups
describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

const travelers = [
  {
  id: 1,
  name: "Ham Leadbeater",
  travelerType: "relaxer"
  },
  {
  id: 2,
  name: "Rachael Vaughten",
  travelerType: "thrill-seeker"
  },
  {
  id: 3,
  name: "Sibby Dawidowitsch",
  travelerType: "shopper"
  },
  {
  id: 4,
  name: "Leila Thebeaud",
  travelerType: "photographer"
  },
  {
  id: 5,
  name: "Tiffy Grout",
  travelerType: "thrill-seeker"
  }
];
let tripsData = [
  {
  id: 1,
  userID: 44,
  destinationID: 49,
  travelers: 1,
  date: "2022/09/16",
  duration: 8,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 2,
  userID: 35,
  destinationID: 25,
  travelers: 5,
  date: "2022/10/04",
  duration: 18,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 3,
  userID: 3,
  destinationID: 22,
  travelers: 4,
  date: "2022/05/22",
  duration: 17,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 46,
  userID: 44,
  destinationID: 33,
  travelers: 2,
  date: "2020/08/24",
  duration: 11,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 48,
  userID: 44,
  destinationID: 14,
  travelers: 6,
  date: "2021/02/10",
  duration: 8,
  status: "pending",
  suggestedActivities: [ ]
  }, 
];

const destinations = [
  {
  id: 1,
  destination: "Lima, Peru",
  estimatedLodgingCostPerDay: 70,
  estimatedFlightCostPerPerson: 400,
  image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  alt: "overview of city buildings with a clear sky"
  },
  {
  id: 2,
  destination: "Stockholm, Sweden",
  estimatedLodgingCostPerDay: 100,
  estimatedFlightCostPerPerson: 780,
  image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  alt: "city with boats on the water during the day time"
  },
  {
  id: 3,
  destination: "Sydney, Austrailia",
  estimatedLodgingCostPerDay: 130,
  estimatedFlightCostPerPerson: 950,
  image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  alt: "opera house and city buildings on the water with boats"
  }
];
// "http://localhost:3001/api/v1/travelers/50" gives me traveler50:
const traveler1 = {
  id: 50,
  name: "Morey Flanders",
  travelerType: "foodie"
  };
//   const dayjs = require('dayjs')
// //import dayjs from 'dayjs' // ES 2015
// dayjs().format()
//https://unsplash.com/@jessebowser 

// https://unsplash.com/@janjakubnanista

// https://www.pexels.com/@andreea-ch-371539/
// https://www.pexels.com/@octoptimist/ Ekaterina Astakhova
// https://www.pexels.com/@estonian-stalker-154793302/