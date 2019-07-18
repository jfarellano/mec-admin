import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Carousel from './components/Carusel/index.vue'
import CreateCarousel from './components/Carusel/create.vue'
import Product from './components/Product/index.vue'
import CreateProduct from './components/Product/create.vue'
import EditProduct from './components/Product/edit.vue'
import Section from './components/Section/index.vue'
import CreateSection from './components/Section/create.vue'
import EditSection from './components/Section/edit.vue'
import Employee from './components/Employee/index.vue'
import CreateEmployee from './components/Employee/create.vue'
import EditEmployee from './components/Employee/edit.vue'
import Client from './components/Client/index.vue'
import CreateClient from './components/Client/create.vue'
import EditClient from './components/Client/edit.vue'
import User from './components/User.vue'
Vue.use(Router)
export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/carousel',
            name: 'Carousel',
            component: Carousel
        },
        {
            path: '/carousel/new',
            name: 'CreateCarousel',
            component: CreateCarousel
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/product/new',
            name: 'CreateProduct',
            component: CreateProduct
        },
        {
            path: '/product/:ProductID',
            name: 'EditProduct',
            component: EditProduct
        },
        {
            path: '/section',
            name: 'Section',
            component: Section
        },
        {
            path: '/section/new',
            name: 'CreateSection',
            component: CreateSection
        },
        {
            path: '/section/:SectionID',
            name: 'EditSection',
            component: EditSection
        },
        {
            path: '/employee',
            name: 'Employee',
            component: Employee
        },
        {
            path: '/employee/new',
            name: 'CreateEmployee',
            component: CreateEmployee
        },
        {
            path: '/employee/:EmployeeID',
            name: 'EditEmployee',
            component: EditEmployee
        },
        {
            path: '/client',
            name: 'Client',
            component: Client
        },
        {
            path: '/client/new',
            name: 'CreateClient',
            component: CreateClient
        },
        {
            path: '/client/:ClientID',
            name: 'EditClient',
            component: EditClient
        },
        {
            path: '/user',
            name: 'User',
            component: User
        }
    ]
})
