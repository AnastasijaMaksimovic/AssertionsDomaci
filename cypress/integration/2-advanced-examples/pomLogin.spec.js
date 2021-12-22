import {  authLogin  } from '../../page_objects/authLogin';
import { header } from '../../page_objects/header';

const faker = require("faker");

describe('POM login', () => {
let validEmail = "anastasija.maksimovic21@gmail.com";
let validPass = 'anjaitoni111';

let userData = {
    randomEmail: faker.internet.email(),
    randomPassword: faker.datatype.number(),
};

    before('visit app', () => {
        cy.visit("/");
        cy.url().should("contains", "gallery-app");
    });

    it('login with invalid credentials', () => {
        header.loginBtn.click();
        authLogin.loginPageHeading.should('be.visible');
        cy.contains('Please login');

        authLogin.login(userData.randomEmail, userData.randomPassword);
        authLogin.errorMsg.should('be.visible');
        authLogin.errorMsg.should('have.text', 'Bad Credentials');
        authLogin.errorMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
        authLogin.errorMsg.should('have.css', 'border-color', 'rgb(245, 198, 203)');
        cy.url().should("contains", "/login");

    });

    it('login with valid credentials', () => {
        header.loginBtn.click();
        authLogin.loginPageHeading.should('be.visible');
        authLogin.loginPageHeading.should('have.css', 'color', 'rgb(72, 73, 75)');
        authLogin.loginPageHeading.should('have.css', 'text-align', 'center');
        authLogin.loginPageHeading.should('have.css', 'font-size', '45px');
        cy.url().should('contains', '/login');

        authLogin.login(validEmail, validPass);
        cy.wait(20000);
        cy.url().should("not.contain", "/login");

    });

    it('logout',() => {
        header.logoutBtn.click();
    });

});