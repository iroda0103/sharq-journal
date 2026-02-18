import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/nashrlar",
    name: "publications",
    component: () => import("../views/PublicationsView.vue"),
  },
  {
    path: "/nashrlar/:year",
    name: "publications-year",
    component: () => import("../views/PublicationsYearView.vue"),
  },
  {
    path: "/maqolalar",
    name: "articles",
    component: () => import("../views/ArticlesView2.vue"),
  },
  {
    path: "/tahririyat",
    name: "editorial",
    component: () => import("../views/EditorialView.vue"),
  },
  {
    path: "/submit",
    name: "submit",
    component: () => import("../views/SubmitArticleView.vue"),
  },
  {
    path: "/jurnal-haqida",
    name: "about",
    component: () => import("../views/AboutJournalView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresAuth: true },
  },
  // Router configuration
{
  path: '/nashrlar/:year/:id',
  name: 'publication-detail',
  component: () => import("../views/PublicationDetailView.vue")
},
{
  path: '/maqola/:slug',
  name: 'article-detail',
  component: () => import("../views/ArticleDetailView2.vue")
},
{
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import("../views/NotFoundView.vue")
}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("auth_token");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: "home" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;