import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'

Vue.use(VueRouter)
Vue.use(VueSession, { persist: true })

const session = Vue.prototype.$session
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/main-page/Home')
  },
  {
    path: '/personal',
    name: 'personal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/personal/Personal'),
    beforeEnter (to, from, next) {
      if (session.exists()) {
        next()
      } else {
        next('/')
      }
    },
    children: [
      {
        path: 'paymentHistory',
        name: 'paymentHistory',
        component: () => import('../components/personal/PersonalSimpleDataTable'),
        props: {
          service: {
            text: 'История платежей',
            icon: 'mdi-file-document-outline'
          },
          method: 'paymentHistory'
        }
      },
      {
        path: 'indicationsHistory',
        name: 'indicationsHistory',
        component: () => import('../components/personal/PersonalSimpleDataTable'),
        props: {
          service: {
            text: 'История показаний',
            icon: 'mdi-file-document-outline'
          },
          method: 'indicationsHistory'
        }
      },
      {
        path: 'mutualSettlements',
        name: 'mutualSettlements',
        component: () => import('../components/personal/PersonalSimpleDataTable'),
        props: {
          service: {
            text: 'Взаиморасчеты',
            icon: 'mdi-calculator'
          },
          method: 'mutualSettlements'
        }
      },
      {
        path: 'receipt',
        name: 'receipt',
        component: () => import('../components/personal/Receipt'),
        props: {
          service: {
            text: 'Квитанция',
            icon: 'mdi-printer'
          }
        }
      },
      {
        path: 'meteresInfo',
        name: 'meteresInfo',
        component: () => import('../components/personal/MeteresInfo'),
        props: {
          service: {
            text: 'Информация о приборах учета',
            icon: 'mdi-home'
          }
        }
      },
      {
        path: 'meteres',
        name: 'meteres',
        component: () => import('../components/personal/Meteres'),
        props: {
          service: {
            text: 'Передать показания',
            icon: 'mdi-speedometer'
          }
        }
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('../components/personal/Payment'),
        props: {
          service: {
            text: 'Оплатить услуги',
            icon: 'mdi-database'
          }
        }
      },
      {
        path: 'paymentResult/:paymentId/:success?',
        name: 'paymentResult',
        component: () => import('../components/personal/PaymentResult'),
        props: true
      }
    ]
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/auth/SignUp')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
