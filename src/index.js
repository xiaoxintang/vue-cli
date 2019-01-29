import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import routes from 'src/config/router';

Vue.use(Router);

const router = new Router({
  routes,
})
console.log(routes)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // routes,
})