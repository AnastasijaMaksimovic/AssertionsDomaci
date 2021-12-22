import { authAllGalleries } from "../../page_objects/authAllGalleries";

describe('POM allGalleries', () => {
    let searchData = "nova galerija";
    let noSearchMoreData = "giulia"

before('visit app', () => {
    cy.visit("/");
    cy.url().should("contains", "gallery-app");
});

it('search test with load more button', () => {
    authAllGalleries.mainPageHeading.should('be.visible');
    authAllGalleries.mainPageHeading.should('have.text', 'All Galleries');
    authAllGalleries.mainPageHeading.should('have.css', 'color', 'rgb(72, 73, 75)');
    authAllGalleries.mainPageHeading.should('have.css', 'text-align', 'center');
    authAllGalleries.mainPageHeading.should('have.css', 'font-size', '45px');
    authAllGalleries.searchInput.type(searchData);
    authAllGalleries.searchInput.should('be.visible');
    authAllGalleries.searchInput.should('have.css', 'color', 'rgb(73, 80, 87)');
    authAllGalleries.searchInput.should('have.css', 'background-color', 'rgb(255, 255, 255)');
    authAllGalleries.filterBtn.click();
    authAllGalleries.filterBtn.should('be.visible');
    authAllGalleries.filterBtn.should('have.css', 'background-image', 'none');
    authAllGalleries.filterBtn.should('have.css', 'border-color', 'rgb(108, 117, 125)');
    authAllGalleries.loadMoreBtn.should('exist');
    authAllGalleries.loadMoreBtn.should('have.css', 'background-color', 'rgb(72, 73, 75)');
    authAllGalleries.loadMoreBtn.click();
    
});

it('search test without load more button', () => {
    authAllGalleries.mainPageHeading.should('be.visible');
    authAllGalleries.mainPageHeading.should('have.text', 'All Galleries');
    authAllGalleries.mainPageHeading.should('have.css', 'color', 'rgb(72, 73, 75)');
    authAllGalleries.mainPageHeading.should('have.css', 'text-align', 'center');
    authAllGalleries.mainPageHeading.should('have.css', 'font-size', '45px');
    authAllGalleries.searchInput.clear().type(noSearchMoreData);
    authAllGalleries.searchInput.should('be.visible');
    authAllGalleries.searchInput.should('have.css', 'color', 'rgb(73, 80, 87)');
    authAllGalleries.searchInput.should('have.css', 'background-color', 'rgb(255, 255, 255)');
    authAllGalleries.filterBtn.click();
    authAllGalleries.filterBtn.should('be.visible');
    authAllGalleries.filterBtn.should('have.css', 'background-image', 'none');
    authAllGalleries.filterBtn.should('have.css', 'border-color', 'rgb(108, 117, 125)');
    authAllGalleries.loadMoreBtn.should('not.exist');
    
    });
    
});
