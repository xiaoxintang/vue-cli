// import home from 'src/pages/home.vue';
// import hello from 'src/pages/hello.vue';
export default [
  {
    path: '/',
    // component: () => import(/* webpackChunkName: "route" */ 'src/pages/home.vue'),
    component: () => import('src/pages/home.vue'),

    // component: home,
  },
  {
    path: '/hello',
    // component: () => import(/* webpackChunkName: "route" */ 'src/pages/hello.vue'),
    component: () => import('src/pages/hello.vue'),

    // component: hello

  },
]
