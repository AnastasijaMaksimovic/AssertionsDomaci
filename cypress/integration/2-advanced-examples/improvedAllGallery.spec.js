const Locators = require('../../fixtures/Locators.json');

describe('all gallery test', () => {
    it('search test', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get(Locators.AllGalleriesPage.SearchInput).type('galerija');
        cy.get(Locators.AllGalleriesPage.FilterButton).click();
        
    });
});
