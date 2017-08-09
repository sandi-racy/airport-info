import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App.vue'
import Login from './components/Login.vue'
import Order from './components/Order.vue'

const routes = [
	{ path: '/', component: Login },
	{ path: '/order', component: Order },
]

const router = new VueRouter({
  	routes
})

var Phonegap = {
	initialize() {
		this.bindEvents()
		this.setupVue()
	},

	bindEvents() {
		document.addEventListener('deviceready', this.onDeviceReady, false)
	},

	onDeviceReady() {
	},

	setupVue() {
		new Vue({
            router,
		  	render: h => h(App)
		}).$mount('#app')
	}
}

Phonegap.initialize()
