import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      component: () =>
        import( /* webpackChunkName: "login" */ './views/login.vue')
    },
    {
      path: '/home',
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
        },
        {
          path: '/map',
          name: 'map',
          component: () =>
            import( /* webpackChunkName: "home" */ './components/map.vue')
        },
        {
          path: '/news',
          name: 'news',
          component: () =>
            import( /* webpackChunkName: "home" */ './components/news.vue')
        },
        {
          path: '/game',
          name: 'game',
          component: () =>
            import( /* webpackChunkName: "home" */ './components/game.vue')
        },
        {
          path: '/tongji',
          name: 'tongji',
          component: () =>
            import( /* webpackChunkName: "home" */ './components/tongji.vue')
        }
      ],
      component: () =>
        import( /* webpackChunkName: "home" */ './views/Home.vue')

    }

  ]
})