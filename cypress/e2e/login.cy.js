describe('Orange HRM Tests', () => {

    const selectorsList = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        sectionTitleTopBar: '.oxd-text--h6',
        wrongCredentialAlert: '.oxd-alert-content'
    }



    it('Login - Sucess', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorsList.usernameField).type('Admin')
        cy.get(selectorsList.passwordField).type('admin123')
        cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    })
    it('Login - Fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorsList.usernameField).type('Fail')
        cy.get(selectorsList.passwordField).type('TestFail')
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert)
    })
})