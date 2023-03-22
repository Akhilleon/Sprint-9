import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/by-name/:name?',
    name: 'byName',
    component: () => import('../views/MealsByNameView.vue')
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: () => import('../views/IngredientsView.vue')
  },
  {
    path: '/by-ingredient/:ingredient',
    name: 'byIngredient',
    component: () => import('../views/MealsByIngredientView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/letter/:letter?',
    name: 'byLetter',
    component: () => import('../views/MealsByLetterView.vue')
  },
  {
    path: '/meal/:id',
    name: 'mealDetails',
    component: () => import('../views/MealDetailsView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  });
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't hace access");
      next('/');
    }
  } else {
    next();
  }
})

export default router
