import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM Tests', () => {

    it('Login - Fail', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAcessInvalid()
    })

    it('Login - Success', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
        dashboardPage.checkDashboardPage()
    })
})