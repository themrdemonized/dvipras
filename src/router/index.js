import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TradeArticlesManager from "../lib/trade/TradeArticlesManager";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: async (to, from, next) => {
      await Promise.allSettled([
        TradeArticlesManager.getArticles({ limit: 20, category_id: 2 }),
        TradeArticlesManager.getArticles({ limit: 5, category_id: 1 }),
      ]);
      next();
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue'),
    beforeEnter: async (to, from, next) => {
      await TradeArticlesManager.getArticles({ limit: 20, category_id: 2 }),
      next();
    },
  },
  /*{
    path: '/loading',
    name: 'Loading',
    component: () => import(/!* webpackChunkName: "loading" *!/ '../views/Loading.vue')
  },*/
  // {
  //   path: '/documents',
  //   name: 'Documents',
  //   component: () => import(/* webpackChunkName: "documents" */ '../views/Documents.vue')
  // },
  // {
  //   path: '/arts',
  //   name: 'Arts',
  //   component: () => import(/* webpackChunkName: "arts" */ '../views/Arts.vue'),
  //   beforeEnter: async (to, from, next) => {
  //     await TradeArticlesManager.getArticles({ limit: 8, category_id: 2 });
  //     next();
  //   }
  // },
  {
    path: '/news/:id(\\d+):pathMatch(.*)*',
    name: 'NewsArticle',
    component: () => import(/* webpackChunkName: "news_article" */ '../views/NewsArticle.vue'),
    beforeEnter: async (to, from, next) => {
      await TradeArticlesManager.getArticleById(to.params.id);
      next();
    },
    props: true
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
    beforeEnter: async (to, from, next) => {
      await TradeArticlesManager.getArticles({ limit: 18, category_id: 1 });
      next();
    }
  },
  { path: "/:pathMatch(.*)*", component: () => import(/* webpackChunkName: "page_not_found" */ '../views/PageNotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
