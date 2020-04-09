//importiamo vue e vue-router
import Vue from "vue";
import VueRouter from "vue-router";

//importiamo le nostre pagine/componenti
import Home from "./pages/Home";
import About from "./pages/About";
import Classi from "./pages/Classi";

//diciamo a Vue che deve usare il plugin VueRouter
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history", //serve per non far comparire # quando passiamo da una rotta all'altra 
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/about",
        name: "about",
        component: About
      },
      {
        path: "/classi",
        name: "classi",
        component: Classi
      },
    ]
});

export default router;
