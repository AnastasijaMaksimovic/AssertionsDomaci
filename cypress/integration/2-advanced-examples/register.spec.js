const { cyan } = require("colorette")

describe('register case', () => {

    it('register with non-existing email address', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera763@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register without @', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera5gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with all spaces in email address', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('                    ');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with already taken email address', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('anastasija.maksimovic21@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with double email address', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera5@gmail.com testprovera@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with a space in email address', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera 5@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with all spaces first name', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('       ');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera5@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with chinese first name', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('亚历克斯');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera5@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with all spaces last name', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('          ');
        cy.get('#email').type('testprovera5@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with chinese last name', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('亚历克斯');
        cy.get('#email').type('testprovera5@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with all spaces password', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera5@gmail.com');
        cy.get('#password').type('         ');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register password with no digit', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera5@gmail.com');
        cy.get('#password').type('testtest');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register password with less then 8 characters', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera5@gmail.com');
        cy.get('#password').type('test');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with different confirmed password', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera5@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest555');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('register with valid credentials', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id="first-name"]').type('Test');
        cy.get('input[id="last-name"]').type('Provera');
        cy.get('#email').type('testprovera58764@gmail.com');
        cy.get('#password').type('testtest5');
        cy.get('#password-confirmation').type('testtest5');
        cy.get('input[class="form-check-input"]').click();
        cy.get('button[type="submit"]').click();
    });

    it('loguot', () => {
        cy.wait(500);
        cy.get('.nav-link').eq(3).click();
    });

});