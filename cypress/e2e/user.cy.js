import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        sectionTitleTopBar: '.oxd-text--h6',
        dashboardGrid: '.orangehrm-dashboard-grid',
        wrongCredentialAlert: '.oxd-alert-content',
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField: "[name='firstName']",
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        genericField: '.oxd-input--active',
        dateField: "[placeholder='yyyy-dd-mm']",
        customTestField: "[options='']",
        dateCloseButton: '.--close',
        submitButton: "[type='submit']",
        succesfullUpdated: '.oxd-toast'
    }

it.only('User Info Update - Sucess', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userSucess.username)
        cy.get(selectorsList.passwordField).type(userData.userSucess.password)
        cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorsList.dashboardGrid)
        cy.get(selectorsList.myInfoButton).click()
        cy.wait(2000)
        cy.get(selectorsList.firstNameField).clear().type('Marcos')
        cy.get(selectorsList.middleNameField).clear().type('Arruda')
        cy.get(selectorsList.lastNameField).clear().type('De Souza')
        cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeT')
        cy.get(selectorsList.genericField).eq(4).clear().type('OtherIDT')
        cy.get(selectorsList.genericField).eq(5).clear().type('182365')
        cy.get(selectorsList.dateField).eq(0).clear().type('2028-03-20')
        cy.get(selectorsList.dateCloseButton).click()
        cy.get(selectorsList.dateField).eq(1).clear().type('2003-01-15')
        cy.get(selectorsList.dateCloseButton).click()
        cy.get(selectorsList.submitButton).eq(0).click()
        cy.get('body').should('contain', 'Succesfully Updated')
    })
    it('Login - Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userFail.username)
        cy.get(selectorsList.passwordField).type(userData.userFail.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert)
    })
})