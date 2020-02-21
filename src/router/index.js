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
    path: "/unity/avatar",
    name: "Unity Avatar",
    component: loadView("UnityAvatar")
  },
  {
    path: "/unity/ball",
    name: "Unity Ball",
    component: loadView("UnityBall")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;