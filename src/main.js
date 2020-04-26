// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import Axios from 'axios'
import './components/instruct'
// import $ from "jquery"
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
Vue.prototype.$http = Axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})