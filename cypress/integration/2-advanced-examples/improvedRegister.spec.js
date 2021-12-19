const Locators = require('../fixtures/Locators.json');
const faker = require("faker");

describe('register case', () => {

    let userData = {
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomNewPassword: faker.internet.password(),
        randomShortPassword: faker.internet.password(5)
    }

    before('visit app page', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
    });

    it('register with invalid credentials', () => {
        cy.get(Locators.Header.RegisterButton).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get(Locators.RegisterPage.FirstNameInput).type(userData.randomName);
        cy.get(Locators.RegisterPage.LastNameInput).type(userData.randomLastName);
        cy.get(Locators.RegisterPage.EmailInput).type(userData.randomEmail);
        cy.get(Locators.RegisterPage.PasswordInput).type(userData.randomPassword);
        cy.get(Locators.RegisterPage.ConfirmedPassword).type(userData.randomPassword);
        cy.get(Locators.RegisterPage.AccepTearms).click();
        cy.get(Locators.RegisterPage.SubmitButton).click();
    });

    it('loguot', () => {
        cy.wait(1000);
        cy.get(Locators.Logout.LogoutButton).eq(3).click();
    });

    it('register with valid credentials', () => {
        cy.get(Locators.Header.RegisterButton).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get(Locators.RegisterPage.FirstNameInput).type('Test');
        cy.get(Locators.RegisterPage.LastNameInput).type('Provera');
        cy.get(Locators.RegisterPage.EmailInput).type('testprovera58764@gmail.com');
        cy.get(Locators.RegisterPage.PasswordInput).type('testtest5');
        cy.get(Locators.RegisterPage.ConfirmedPassword).type('testtest5');
        cy.get(Locators.RegisterPage.AccepTearms).click();
        cy.get(Locators.RegisterPage.SubmitButton).click();
    });
});
