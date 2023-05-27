// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.request({
      method: 'GET',
      url: 'https://rickandmortyapi.com/graphql/?query=%7B%0A%20%20character(id%3A%201)%20%7B%0A%20%20%20%20name%0A%20%20%20%20status%0A%20%20%20%20species%0A%20%20%20%20type%0A%20%20%20%20gender%0A%20%20%20%20image%0A%20%20%20%20episode%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20created%0A%20%20%7D%0A%7D',
    }).then((response) => {
      console.log(response.body);
      // cy.wrap(response).invoke('Message');
  })
  })  
})