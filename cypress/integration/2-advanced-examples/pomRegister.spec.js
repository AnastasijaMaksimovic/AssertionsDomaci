import {  authRegister  } from '../../page_objects/authRegister';
import {  header  } from '../../page_objects/header';
import {  validationMessages  } from '../../fixtures/validationMessages.json';

const faker = require("faker");

describe('POM register', () => {
    let validEmail1 = "milevaDjurisic12345@gmail.com";
    let validPassword1 = "mileva12345";
    let validConfirmedPassword = "mileva12345";
    let validFirstName = "Mileva";
    let validLastName = "Djurisic";


    let userData = {
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomNewPassword: faker.internet.password(),
        randomShortPassword: faker.internet.password(5)
    };

    before('visit app page', () => {
        cy.visit('/');
        cy.url().should("contains", "gallery-app");
    });

    it('register with invalid credentials', () => {
        header.registerBtn.click();
        authRegister.registerPageHeading.should('be.visible');
        authRegister.register(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomShortPassword)
        cy.url().should("contains", "/register");
    });

    it('register with valid credentials', () => {
        header.registerBtn.click();
        cy.url().should("contains", "/register");

        authRegister.register(validFirstName, validLastName, validEmail1, validPassword1, validConfirmedPassword)
        cy.wait(1000);
        cy.url().should("contains", "/register");
    });

    it('loguot', () => {
        cy.wait(500);
        header.logoutBtn.click();
    });
});
