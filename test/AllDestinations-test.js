import chai, { expect } from 'chai';
import AllDestinations from "../src/classes/AllDestinations";

describe("AllDestinations", () => {
    let allDestinations1;
    let smallDestinationList = [{
        id: 1, destination: "Lima, Peru", estimatedLodgingCostPerDay: 70,
        estimatedFlightCostPerPerson: 400,
        image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        alt: "overview of city buildings with a clear sky"
        },
        {id: 2, destination: "Stockholm, Sweden", estimatedLodgingCostPerDay: 100,
        estimatedFlightCostPerPerson: 780,
        image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "city with boats on the water during the day time"
        },
        {id: 3, destination: "Sydney, Austrailia", estimatedLodgingCostPerDay: 130,
        estimatedFlightCostPerPerson: 950,
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "opera house and city buildings on the water with boats"
        }
      ];

      beforeEach(function() {
        allDestinations1 = new AllDestinations(smallDestinationList);
      });

      it("Should be a function and instantiate our good friend Destination", () => {
        expect(AllDestinations).to.be.a("function");
        expect(allDestinations1).to.be.an.instanceOf(AllDestinations);
      });

      it("Should have a property to store the destination data from fetch request", () => {
        expect(allDestinations1.data).to.be.equal(smallDestinationList);
      });

      it("Should have a function to provide a random set of destinations for display purposes", () => {
        let method1 = allDestinations1.getRandomDestination(smallDestinationList);
        expect(method1).to.be.an("object");
      });
})
