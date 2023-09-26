import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WeatherReport from '../views/WeatherReport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Weather App'
      }
    },
    {
      path: '/weather-report',
      name: 'report',
      component: WeatherReport,
      meta: {
        title: 'Weather Report'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title =  to.meta.title
  next();
});

export default router
