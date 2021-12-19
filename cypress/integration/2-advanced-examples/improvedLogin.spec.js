const Locators = require('../fixtures/Locators.json');
const faker = require("faker");


describe('login test', () => {
let validEmail = "anastasija.maksimovic21@gmail.com";
let validPass = 'anjaitoni111';

let userData = {
    randomName: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.datatype.number()
}

    before('visit app page', () => {
        cy.visit('/');
        cy.url().should('contains', 'https://gallery-app');
    });

    it('Login with invalid credentials', () => {
        cy.get(Locators.Header.LoginButton).click();
        cy.url().should('contains', '/login');
        cy.get(Locators.LoginPage.EmailInput).type(userData.randomEmail);
        cy.get(Locators.LoginPage.PasswordInput).type(userData.randomPassword);
        cy.get(Locators.LoginPage.SubmitButton).click();
        cy.url().should('contains', '/login');
    });

    it('login with valid credentials', () => {
        cy.get(Locators.Header.LoginButton).click();
        cy.url().should('contains', '/login');
        cy.get(Locators.LoginPage.EmailInput).clear().type(validEmail);
        cy.get(Locators.LoginPage.PasswordInput).clear().type(validPass);
        cy.get(Locators.LoginPage.SubmitButton).click();
    });

    it('loguot', () => {
        cy.wait(1000);
        cy.get(Locators.Logout.LogoutButton).eq(3).click();
    });
});
