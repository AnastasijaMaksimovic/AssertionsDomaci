const Locators = require("../../fixtures/Locators.json")

describe ('create gallery test', () => {

    it('login with valid credentials', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('anastasija.maksimovic21@gmail.com')
        cy.get('#password').type('anjaitoni111');
        cy.get('button[class="btn btn-custom"]').click();
      
    })

    it('create gallery with invalid credentials', () => {
        cy.get("a[href='/create']").click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create');
        cy.get("#title").type('x');
        cy.get("#description").type('opisNoveGalerije');
        cy.get("input[type='url']").type('https://www.akkole.rs/wp-content/uploads/2019/09/Giulia-Quadrifoglio-stil-AK-Kole.jpg');
        cy.get("button[type='submit']").eq(0).click();
    })

    it('create gallery with valid credentials', () => {
        cy.get("a[href='/create']").click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create');
        cy.get("#title").clear().type('novaGalerija');
        cy.get("#description").clear().type('opisNoveGalerije');
        cy.get("input[type='url']").clear().type('https://www.w3schools.com/howto/img_forest.jpg');
        cy.get("button[type='submit']").eq(0).click();
    });
});
