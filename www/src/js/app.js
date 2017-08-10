import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import App from './components/App.vue'
import Login from './components/Login.vue'
import Order from './components/Order.vue'
import View from './components/View.vue'

const routes = [
	{ path: '/', component: Login },
	{ path: '/order', component: Order },
	{ path: '/view', component: View }
]

const router = new VueRouter({
  	routes
})

window.ai = {
	api: {
		url: 'http://airport-info-backend.dev/'
	}
}

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
