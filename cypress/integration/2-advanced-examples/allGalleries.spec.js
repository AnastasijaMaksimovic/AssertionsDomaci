describe('all galleries', () => {

    it('search test', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get("input[type='text']").type('galerija');
        cy.get("button[type='button']").click();
        
    });
});
