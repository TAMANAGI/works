import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

function loadView(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [{
    path: "",
    name: "home",
    component: Home,
    meta: {
      requiredAuth: true
    } //Homeコンポーネントの表示には認証が必要と定義する
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: loadView('SignIn')
  },
  {
    path: "/profile",
    name: "profile",
    component: loadView("Profile")
  },
  {
    path: "/unity/app/1",
    name: "1stApp",
    component: loadView("Unity1stApp")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;