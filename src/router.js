import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      redirect: '/helloWorld',
      children: [{
          path: '/helloWorld',
          name: 'helloWorld',
          component: () =>
            import( /* webpackChunkName: "home" */ './components/HelloWorld.vue')
        },
        {
          path: '/payOnline',
          name: 'payOnline',
          component: () =>
            import( /* webpackChunkName: "payOnline" */ './components/payOnline.vue')
        }
      ],
      component: () =>
        import( /* webpackChunkName: "home" */ './views/Home.vue')

    }

  ]
})