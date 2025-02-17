class MyInfoPage {

    selectorsList() {
        const selectors ={
        firstNameField: "[name='firstName']",
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        genericField: '.oxd-input--active',
        dateField: "[placeholder='yyyy-dd-mm']",
        customTestField: "[options='']",
        dateCloseButton: '.--close',
        submitButton: "[type='submit']",
        succesfullUpdated: '.oxd-toast',
        genericComboBoxButton: '.oxd-select-text-input',
        genericComboBoxOptions: '.oxd-select-dropdown'
        }

        return selectors
    }

    editMyInfo(){
        cy.get(this.selectorsList().firstNameField).clear().type('Marcos')
        cy.get(this.selectorsList().middleNameField).clear().type('Arruda')
        cy.get(this.selectorsList().lastNameField).clear().type('De Souza')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('EmployeeT')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIDT')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('182365')
        cy.get(this.selectorsList().genericComboBoxButton).eq(0).click()
        cy.get(this.selectorsList().genericComboBoxOptions).contains('Brazilian').click()
        cy.get(this.selectorsList().genericComboBoxButton).eq(1).click()
        cy.get(this.selectorsList().genericComboBoxOptions).contains('Other').click()
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2028-03-20')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('2003-01-15')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage