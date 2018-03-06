import Vue from 'vue'
import Router from 'vue-router'
import AllCards from '@/components/AllCards'
import ArenaPicker from '@/components/ArenaPicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "AllCards",
      component: AllCards
    },
    {
      path: "/picker",
      name: "ArenaPicker",
      component: ArenaPicker
    }
  ]
});
