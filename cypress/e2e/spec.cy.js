// <reference types="cypress" />
const result = {
name: "Rick Sanchez",
status: "Alive",
species: "Human",
type: "",
gender: "Male",
};

describe('template spec', () => {
  it('passes', () => {
    cy.request({
      method: 'GET',
      url: 'https://rickandmortyapi.com/graphql/',
      qs: {
        query: `{
          character(id: 1) {
            name
            status
            species
            type
            gender
          }
        }`
      }
    }).then((response) => {
      expect(response.body.data.character.name).to.equal(result.name);
      cy.wrap(response.body.data.character.status).should('contain', result.status);
      cy.wrap(response.body.data.character.species).should('contain', result.species);  
    })
   
  })
})

     
