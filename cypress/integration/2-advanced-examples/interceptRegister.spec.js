import {  authRegister  } from '../../page_objects/authRegister';
import {  header  } from '../../page_objects/header';

describe('POM register', () => {
    let validEmail1 = "milevaDjurisic_0123@gmail.com";
    let validPassword1 = "mileva12345678";
    let validConfirmedPassword = "mileva12345678";
    let validFirstName = "Mileva";
    let validLastName = "Djurisic";

    before('visit app page', () => {
        cy.visit('/');
        cy.url().should("contains", "gallery-app");
    });

    it('register with valid credentials', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/register'
        }).as('register');

        header.registerBtn.click();
        cy.url().should("contains", "/register");

        authRegister.register(validFirstName, validLastName, validEmail1, validPassword1, validConfirmedPassword)
        
        cy.wait('@register').then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).eq(200);
        })
    });
});
