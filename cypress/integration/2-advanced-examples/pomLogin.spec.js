import {authLogin} from '../page_objects/authLogin';
import { header } from '../page_objects/header';

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
        authLogin.login(userData.randomEmail, userData.randomPassword);
        cy.url().should("contains", "/login");

    });

    it('login with valid credentials', () => {
        header.loginBtn.click();
        cy.url().should('contains', '/login');

        authLogin.login(validEmail, validPass);
        cy.wait(20000);
        cy.url().should("not.contain", "/login");

    });

    it('logout',() => {
        header.logoutBtn.click();
    });

});