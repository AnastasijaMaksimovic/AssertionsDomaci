import {  authLogin  } from '../../page_objects/authLogin';
import { header } from '../../page_objects/header';

describe('POM login', () => {
    let validEmail = "anastasija.maksimovic21@gmail.com";
    let validPass = 'anjaitoni111';


    before('visit app', () => {
        cy.visit("/");
        cy.url().should("contains", "gallery-app");
    });

    it('login with valid credentials', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('login');
            

        header.loginBtn.click();
        cy.url().should('contains', '/login');

        authLogin.login(validEmail, validPass);

        cy.wait('@login').then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).eq(200);
        });

        cy.url().should("not.contain", "/login");

    });

    it('logout',() => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/logout'
        }).as('logout');

        header.logoutBtn.click();
        cy.url().should('contains', '/login');

        cy.wait('@logout').then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).eq(200);
        });
    });

});
