describe('login test', () => {

    it('login without email adress', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#password').type('anjaitoni111');
        cy.get('button[class="btn btn-custom"]').click();
      
      });

    it('login without password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('anastasija.maksimovic21@gmail.com')
        cy.get('button[class="btn btn-custom"]').click();
      
      });

    it('login with invalid email address', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('anastasija.maksimovic321@gmail.com')
        cy.get('#password').type('anjaitoni111');
        cy.get('button[class="btn btn-custom"]').click();
      
      });

    it('login with all space password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('anastasija.maksimovic321@gmail.com')
        cy.get('#password').type('          ');
        cy.get('button[class="btn btn-custom"]').click();
      
      });

    it('login with non-existing email address', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('maksa.1973@gmail.com')
        cy.get('#password').type('anjaitoni111');
        cy.get('button[class="btn btn-custom"]').click();
      
      });

    it('login with all space email address', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('                    ')
        cy.get('#password').type('anjaitoni111');
        cy.get('button[class="btn btn-custom"]').click();
      
      });
      
    it('login with space in email adress', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('anastasija. maksimovic21@gmail.com')
        cy.get('#password').type('anjaitoni111');
        cy.get('button[class="btn btn-custom"]').click();
      
      });

      it('login with one character in password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('anastasija.maksimovic21@gmail.com')
        cy.get('#password').type('a');
        cy.get('button[class="btn btn-custom"]').click();
      
      });

    it('login with dooble email', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('anastasija.maksimovic21@gmail.comanastasija.maksimovic21@gmail.com')
        cy.get('#password').type('anjaitoni111');
        cy.get('button[class="btn btn-custom"]').click();
      
      });

    it('login with spaces in email and password', () => {
      cy.visit('/');
      cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
      cy.get('.nav-link').eq(1).click();
      cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
      cy.get('#email').type('                           ')
      cy.get('#password').type('           ');
      cy.get('button[class="btn btn-custom"]').click();
    
    });

    it('login with valid credentials', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('anastasija.maksimovic21@gmail.com')
        cy.get('#password').type('anjaitoni111');
        cy.get('button[class="btn btn-custom"]').click();
      
      });

    it('loguot', () => {
        cy.wait(1000);
        cy.get('a[role="button "]').click();
    });

});