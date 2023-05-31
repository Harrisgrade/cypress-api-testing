// <reference types="cypress" />

import {data} from "../fixtures/one.json";

const result = {
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  created: "2017-11-04T18:48:46.250Z"
};

describe("validate responses", () => {
  beforeEach(() => {
    cy.call1().as("response1");
  });
  it("vaild response data", () => {
    cy.get("@response1").then((response => { 
      expect(response.body).to.be.an("object").that.has.all.keys('data');
      cy.wrap(response.body.data.character).should("contain", result);
    }));
  });
  it('valid types', () => {
    cy.get("@response1").then((response => {
      expect(response.body.data.location).to.be.an('object');
      cy.wrap(response.body.data.location).should("contain", {name: 'Earth (C-137)'});
      expect(response.body.data.episode).to.be.an('object');
      cy.wrap(response.body.data.episode).should("contain", {name: 'Pilot'});
    }));
  });
});
