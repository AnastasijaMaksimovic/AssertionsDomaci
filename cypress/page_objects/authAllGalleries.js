class AuthAllGalleries {
    get loadMoreBtn () {
        return cy.get("button[class='btn btn-custom']");
    }
    get searchInput () {
        return cy.get("input[type='text']");
    }
    get filterBtn () {
        return cy.get("button[type='button']");
    }
    get mainPageHeading () {
        return cy.get('h1');
    }
}

export const authAllGalleries = new AuthAllGalleries();
