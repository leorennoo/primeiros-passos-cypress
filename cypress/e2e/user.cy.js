import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
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
        myInfoPage.fillPersonalDetails(chance.first(),chance.word(),chance.last())
        myInfoPage.fillEmployeeDetails(chance.integer({ min: 10000, max: 99999}),chance.integer({ min: 1000, max: 9999}),chance.integer({ min: 100, max: 999}),'2029-05-20')
        myInfoPage.fillStatus()
        myInfoPage.saveForm()
    })
})