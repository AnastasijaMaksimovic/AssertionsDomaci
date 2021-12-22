class AuthCreate {
    get titleInput () {
        return cy.get("#title");
    }
    get descriptionInput () {
        return cy.get("#description");
    }
    get imageInput () {
        return cy.get("input[type='url']");
    }
    get submitButton () {
        return cy.get("button[type='submit']").eq(0);
    }
    get createPageHeading () {
        return cy.get("h1");
    }
    get errorMsg () {
        return cy.get(".alert");
    }

    create(title, description, image) {
        this.titleInput.clear().type(title);
        this.descriptionInput.clear().type(description);
        this.imageInput.clear().type(image);
        this.submitButton.click();
    }
} 

export const authCreate = new AuthCreate();