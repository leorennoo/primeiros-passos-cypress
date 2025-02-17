import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
it('User Info Update - Sucess', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
        dashboardPage.checkDashboardPage()
        menuPage.acessMyInfo()
        myInfoPage.editMyInfo()
    })
    it.only('Login - Fail', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        cy.get('.oxd-alert-content').should('be.visible')
    })
})