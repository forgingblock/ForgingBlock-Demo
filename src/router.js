import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Stores from './views/Stores.vue'
import Invoices from './views/Invoices.vue'
import History from './views/History.vue'
import Payments from './views/Payments.vue'
import Crowdfunding from './views/Crowdfunding.vue'
import Integration from './views/Integration.vue'
import Account from './views/Account.vue'
import Logout from './views/Logout.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/stores',
            name: 'stores',
            component: Stores
        },
        {
            path: '/invoices',
            name: 'invoices',
            component: Invoices
        },
        {
            path: '/history',
            name: 'history',
            component: History
        },{
            path: '/payments',
            name: 'payments',
            component: Payments
        },{
            path: '/crowdfunding',
            name: 'crowdfunding',
            component: Crowdfunding
        },{
            path: '/integration',
            name: 'integration',
            component: Integration
        },{
            path: '/account',
            name: 'account',
            component: Account
        },{
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
