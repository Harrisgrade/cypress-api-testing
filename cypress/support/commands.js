Cypress.Commands.add("call1", () => {
      cy.request({
      method: "GET",
      url: "https://rickandmortyapi.com/graphql/",
      qs: {
        query: `{
          character(id: 1) {
            name
            status
            species
            type
            gender
    				created
      }
           episode (id:1) {
    			  name
        }
           location (id: 1) {
            name
  }
        }`,
      }
    })
});
 
