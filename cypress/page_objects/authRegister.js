class AuthRegister {
    get firstNameInput () {
        return cy.get("a[href='/register']");
    }
    get lastNameInput () {
        return cy.get("input[id='first-name']");
    }
    get emailAddressInput () {
        return cy.get("#email");
    }
    get passwordInput () {
        return cy.get("#password");
    }
    get passwordConfirmationInput () {
        return cy.get("#password-confirmation");
    }
    get acceptTermsCheckbox () {
        return cy.get("input[class='form-check-input']");
    }
    get sumbitButton () {
        return cy.get("button[type='submit']");
    }

    register(firstName, lastName, email, password, confirmedPassword) {
        this.firstNameInput.clear().type(firstName);
        this.lastNameInput.clear().type(lastName);
        this.emailAddressInput.clear().type(email);
        this.passwordInput.clear().type(password);
        this.passwordConfirmationInput.clear().type(confirmedPassword);
    }
}

export const authRegister = new AuthRegister();
