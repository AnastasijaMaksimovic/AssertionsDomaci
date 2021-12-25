import { authCreate } from "../../page_objects/authCreate";
import { header } from "../../page_objects/header";
import {  validationMessages  } from "../../fixtures/validationMessages.json";

describe('POM create', () => {
    let validTitle = "novaGalerija";
    let validDescription = "opisNoveGalerije";
    let validImage = "https://www.w3schools.com/howto/img_forest.jpg";
    let invalidTitle = "x";
    let invalidImage = "https://www.akkole.rs/wp-content/uploads/2019/09/Giulia-Quadrifoglio-stil-AK-Kole";

    let userData = {
        validEmail: "anastasija.maksimovic21@gmail.com",
        validPass: "anjaitoni111"
    };

    before('login', () => {
        cy.visit("/");
        cy.url().should("contains", "gallery-app");
        header.loginBtn.click();
        cy.url().should('contains', '/login');
        cy.get('#email').type(userData.validEmail)
        cy.get('#password').type(userData.validPass);
        cy.get('button[class="btn btn-custom"]').click();
    });

    it('create gallery with invalid title', () => {
        header.createBtn.click();
        authCreate.createPageHeading.should('be.visible');
        authCreate.create(invalidTitle, validDescription, validImage);
        authCreate.submitButton.click();
        authCreate.errorMsg.should('be.visible');
        authCreate.errorMsg.should('have.text', validationMessages.invalidTitle);
        authCreate.errorMsg.should('have.css', 'color', 'rgb(114, 28, 36)');
        authCreate.errorMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
        authCreate.errorMsg.should('have.css', 'border-color', 'rgb(245, 198, 203)');
        cy.url().should('contains', '/create');
    })

    it('create gallery with invalid image', () => {
        header.createBtn.click();
        authCreate.createPageHeading.should('be.visible');
        authCreate.create(validTitle, validDescription, invalidImage);
        authCreate.submitButton.click();
        authCreate.errorMsg.should('be.visible');
        authCreate.errorMsg.should('have.text', validationMessages.invalidImage);
        authCreate.errorMsg.should('have.css', 'color', 'rgb(114, 28, 36)');
        authCreate.errorMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
        authCreate.errorMsg.should('have.css', 'border-color', 'rgb(245, 198, 203)');
        cy.url().should('contains', '/create');
    })

    it('create gallery with valid data', () => {
        header.createBtn.click();
        authCreate.createPageHeading.should('be.visible');
        authCreate.createPageHeading.should('have.text', 'Create Gallery')
        authCreate.createPageHeading.should('have.css', 'color', 'rgb(72, 73, 75)');
        authCreate.createPageHeading.should('have.css', 'text-align', 'center');
        authCreate.createPageHeading.should('have.css', 'font-size', '45px');
        authCreate.create(validTitle, validDescription, validImage);
        authCreate.submitButton.click();
        authCreate.errorMsg.should('not.exist');
        cy.url().should('not.contains', '/create');
    });
});
