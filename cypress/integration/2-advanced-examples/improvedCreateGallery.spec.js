const Locators = require('../../fixtures/Locators.json');

describe('create gallery test', () => {

    let validEmail = "anastasija.maksimovic21@gmail.com";
    let validPass = 'anjaitoni111';
    let validTitle = "novaGalerija";
    let validDescription = "opisNoveGalerije";
    let validImage = "https://www.w3schools.com/howto/img_forest.jpg";
    let invalidTitle = "x";
    let invalidImage = "https://www.akkole.rs/wp-content/uploads/2019/09/Giulia-Quadrifoglio-stil-AK-Kole.jpg";


it('login with valid credentials', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get(Locators.LoginPage.EmailInput).type(validEmail)
    cy.get(Locators.LoginPage.PasswordInput).type(validPass);
    cy.get(Locators.LoginPage.SubmitButton).click();
  
})

it('create gallery with invalid credentials', () => {
    cy.get(Locators.Header.CreateButton).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create');
    cy.get(Locators.CreateGallery.TitleInput).type(invalidTitle);
    cy.get(Locators.CreateGallery.DesciptionInput).type(validDescription);
    cy.get(Locators.CreateGallery.ImageInput).type(invalidImage);
    cy.get(Locators.CreateGallery.SubmitButton).eq(0).click();
})

it('create gallery with valid credentials', () => {
    cy.get(Locators.Header.CreateButton).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create');
    cy.get(Locators.CreateGallery.TitleInput).clear().type(validTitle);
    cy.get(Locators.CreateGallery.DesciptionInput).clear().type(validDescription);
    cy.get(Locators.CreateGallery.ImageInput).clear().type(validImage);
    cy.get(Locators.CreateGallery.SubmitButton).eq(0).click();
})

it('loguot', () => {
    cy.wait(1000);
    cy.get(Locators.Logout.LogoutButton).eq(3).click();
})
});
