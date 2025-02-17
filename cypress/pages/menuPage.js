class MenuPage {

    selectorsList() {
        const selectors ={
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']"
        }

        return selectors
    }

    acessAdmin(){
        cy.get(this.selectorsList().adminButton).click()
    }

    acessPIM(){
        cy.get(this.selectorsList().pimButton).click()
    }

    acessLeave(){
        cy.get(this.selectorsList().leaveButton).click()
    }

    acessTime(){
        cy.get(this.selectorsList().timeButton).click()
    }

    acessRecruitment(){
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    acessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

}

export default MenuPage