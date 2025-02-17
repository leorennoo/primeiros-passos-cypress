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

    fillPersonalDetails(firstName,middleName,lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId,otherId,driversLicense,driversLicenseDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBoxButton).eq(0).click()
        cy.get(this.selectorsList().genericComboBoxOptions).contains('Brazilian').click()
        cy.get(this.selectorsList().genericComboBoxButton).eq(1).click()
        cy.get(this.selectorsList().genericComboBoxOptions).contains('Other').click()
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('.oxd-toast-close')
    }

}

export default MyInfoPage