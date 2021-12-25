import {  authLogin  } from '../../page_objects/authLogin';
import { header } from '../../page_objects/header';
import { authCreate } from "../../page_objects/authCreate";

describe('POM Create gallery', () => {
    let galleryId = '';
    let authToken = window.localStorage.getItem('token');
  
  
    let validEmail = 'anastasija.maksimovic21@gmail.com';
    let validPass = 'anjaitoni111';
    let title = 'Priroda';
    let description = 'Neki opis nove galerije.';
    let image = 'https://www.studyinserbia.rs/uploads/attachment/strana/228/large_tara-mountain-5520592_1920.jpg';

    beforeEach('visit app', () => {
        cy.visit('/')
        cy.url().should('contains', 'gallery-app')
    
        header.loginBtn.click();
        authLogin.login(validEmail, validPass);
        cy.url().should('not.contains', '/login');
    
        cy.visit('/create');
        cy.url().should('contains', '/create');
      });

      it('Create new gallery', () => {
        cy.intercept ({
            method: 'POST',
            url: "https://gallery-api.vivifyideas.com/api/galleries"
        }).as('createGallery');
  
      authCreate.create(title, description, image);
  
      cy.wait('@createGallery').then((interception) => {
          console.log(interception.response);
          expect(interception.response.statusCode).eq(201);
          galleryId = interception.response.body.id;
         });
  
      cy.url().should('not.include', '/create');
      authCreate.createPageHeading.should('have.text', 'All Galleries');
    });

    it('edit gallery', () => {
        cy.intercept({
          method: "PUT",
        }).as('editGallery');
    
        cy.visit(`/galleries/${galleryId}`);
        cy.url(`/galleries/${galleryId}`);

        cy.get('button').contains('Edit').click();
        cy.get('description').type('editovan komentar');
        cy.get('button').contains('Submit').click();
    
        cy.wait('@editGallery').then((interception) => {
          console.log(interception.response);
          expect(interception.response.statusCode).eq(200);
        })
    });

    it('delete gallery', () => {
        cy.intercept({
          method: "DELETE",
        }).as('deleteGallery');
    
        cy.visit(`/galleries/${galleryId}`);
        cy.url(`/galleries/${galleryId}`);
    
        cy.get('button').contains('Delete').click();
    
        cy.wait('@deleteGallery').then((interception) => {
          console.log(interception.response);
          expect(interception.response.statusCode).eq(200);
        })
    });
});
