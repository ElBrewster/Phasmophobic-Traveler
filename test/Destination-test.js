import { expect } from "chai";
import Destination from "../src/classes/Destination";

describe("Destination", () => {
    let destination1;
    let destination1data;
    let destId = 3;
    let dest3 = {id: 3, destination: "Sydney, Austrailia", estimatedLodgingCostPerDay: 130,
    estimatedFlightCostPerPerson: 950,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    alt: "opera house and city buildings on the water with boats"
    };

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
        destination1 = new Destination(destId, smallDestinationList);
      });

      it("Should be a function and instantiate our good friend Destination", () => {
        expect(Destination).to.be.a("function");
        expect(destination1).to.be.an.instanceOf(Destination);
      });

      it("Should have a property to store a destination id", () => {
        expect(destination1.id).to.be.equal(3);
      });

      it("Should have a method to find and instantiate itself using a destination id passed in as an argument", () => {
        let method0 = destination1.findDestinationObject(smallDestinationList);
        expect(method0).to.be.equal(destination1.object);
      });

      it("Should have a property to store the results of that method", () => {
        expect(destination1.object).to.deep.equal(dest3);
      });

      it("Should have a property to store a destination location name", () => {
        expect(destination1.location).to.be.equal("Sydney, Austrailia");
      });

      it("Should have a property to store the estimated lodging cost per day", () => {
        expect(destination1.lodgingCost).to.be.equal(130);
      });

      it("Should have a property to store the estimate flight cost per person", () => {
        expect(destination1.flightCost).to.be.equal(950);
      });

      it("Should have a property to store a url image for destination display", () => {
        let url1 = "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
        expect(destination1.imageURL).to.be.equal(url1);
      });

      it("Should have a property to store the alt text for the url image display", () => {
        let picAlt = "opera house and city buildings on the water with boats";
        expect(destination1.imageAlt).to.be.equal(picAlt);
      });


      it("Should have a method to get the cost per person for the destination that combines lodging and flight cost", () => {
        let method1 = destination1.calculateTripCost();
        expect(method1).to.be.equal(1080);
      });
});