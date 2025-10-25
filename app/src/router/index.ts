import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from 'vue-router'
import AuthView from '@/views/auth/AuthView.vue'
import SigninView from '@/views/auth/SigninView.vue'
import SignupView from '@/views/auth/SignupView.vue'

import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth/signin',
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: 'signin',
          name: 'signin',
          component: SigninView,
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignupView,
        },
      ],
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiredAuth: true },
    },
  ],
})

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const authStore = useAuthStore()
    const isAuth: boolean = authStore.getEstaAutenticado
    const needAuthenticate: boolean = to.matched.some((record) => record.meta?.requiredAuth)

    if (needAuthenticate && !isAuth) next('/')
    else if (!needAuthenticate && isAuth) next('/home')
    else next()
  },
)

export default router
