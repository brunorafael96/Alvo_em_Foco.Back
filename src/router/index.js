import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/produto/:id",
    name: "produto",
    props: true,

    component: () =>
      import(/* webpackChunkName: "produto" */ "../views/Produto.vue")
  },
  {
    path: "/login",
    name: "login",

    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/usuario",

    component: () =>
      import(/* webpackChunkName: "login" */ "../views/usuario/Usuario.vue"),
    children: [
      {
        path: "",
        name: "usuario",
        component: () =>
          import(
            /* webpackChunkName: "usuario" */ "../views/usuario/UsuarioProdutos.vue"
          )
      },
      {
        path: "compras",
        name: "compras",
        component: () =>
          import(
            /* webpackChunkName: "compras" */ "../views/usuario/UsuarioCompras.vue"
          )
      },
      {
        path: "vendas",
        name: "vendas",
        component: () =>
          import(
            /* webpackChunkName: "vendas" */ "../views/usuario/UsuarioVendas.vue"
          )
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: () =>
          import(
            /* webpackChunkName: "usuario-editar" */ "../views/usuario/UsuarioEditar.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

export default router;
