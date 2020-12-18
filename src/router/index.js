import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../pages/Login';
import Personnel from'../components/Personnel';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/personnel",
    name: "Personnel",
    component:Personnel
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
