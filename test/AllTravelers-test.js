import { expect } from "chai";
import AllTravelers from "../src/classes/AllTravelers";

describe("AllTravelers", () => {
    let allTavelers1;
    let allTravelers1Data;

    beforeEach(function() {
        allTravelers1Data = [
            {id: 1, name: "Ham Leadbeater", travelerType: "relaxer"},
            {id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"},
            {id: 3, name: "Sibby Dawidowitsch", travelerType: "shopper"},
            {id: 4, name: "Leila Thebeaud", travelerType: "photographer"},
            {id: 5, name: "Tiffy Grout", travelerType: "thrill-seeker"}];
        
        allTavelers1 = new AllTravelers(allTravelers1Data);
    });

    it("Should be a function and instantiate our good friend Destination", () => {
        expect(AllTravelers).to.be.a("function");
        expect(allTavelers1).to.be.an.instanceOf(AllTravelers);
      });

      it("Should have a property to store the destination data from fetch request", () => {
        expect(allTavelers1.data).to.be.equal(allTravelers1Data);
      });
})
