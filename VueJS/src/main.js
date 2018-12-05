import Vue from 'vue'
import './plugins/vuetify.js'
import App from './App.vue'
import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import UslugeCentraView from './components/UslugeCentraView.vue'
import NovostiView from './components/NovostiView.vue'
import OnlinePrijavaView from './components/OnlinePrijavaView.vue'
import BlogView from './components/BlogView.vue'
import KontaktView from './components/KontaktView.vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'



var routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/uslugecentra',
    name: 'UslugeCentra',
    component: UslugeCentraView
  },
  {
    path: '/novosti',
    name: 'novosti',
    component: NovostiView
  },
  {
    path: '/onlineprijava',
    name: 'onlineprijava',
    component: OnlinePrijavaView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: KontaktView
  }

]

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.config.productionTip = false

var router = new VueRouter({
  mode: 'hash',
  base: window.location.href,
  routes: routes
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
