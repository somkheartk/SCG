
  import Vue from 'vue'
  import App from './App'
  import VueRouter from 'vue-router'
  /* components */
  import Page1 from './components/page1'
  import Page2 from './components/page2'
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  Vue.use(VueRouter)

  const routes = [

    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
  ]
  const router = new VueRouter({ routes })
  /* eslint-disable no-new */
  new Vue({
    router,
    el: '#app',
    render: h => h(App)
  }).$mount('#app')