import Vue from 'vue'
import Router from 'vue-router'
import GameStart from '@/components/GameStart'
import GameJob from '@/components/GameJob'
import GameUser from '@/components/GameUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameStart',
      component: GameStart
    },
    {
      path: '/job',
      name: 'GameJob',
      component: GameJob
    },
    {
      path: '/user',
      name: 'GameUser',
      component: GameUser
    }
  ]
})
