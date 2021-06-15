import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      _id: "",
      nome: "",
      email: "",
      password: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      role: "user",
      tokenReturn: ""
    },
    usuario_produtos: null
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.user = Object.assign({}, state.user, payload);
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos = payload;
    },
    ADD_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos.unshift(payload);
    }
  },
  getters: {
    users(state) {
      return state.user;
    }
  },
  actions: {
    getUsuarioProdutos(context) {
      console.log("to em produto: ", context.state.user._id);
      const usuario_id = context.state.user._id;
      api.get(`/produto/listUser?usuario_id=${usuario_id}`).then((response) => {
        console.log("peguei os produtos atualizados do bd: ", response.data);
        context.commit("UPDATE_USUARIO_PRODUTOS", response.data);
      });
    },
    getUsuario(context, payload) {
      console.log("getUser: ", payload);
      return api
        .post("/usuario/login", { payload })
        .then((response) => {
          console.log("resposta certa do back: ", response.data);
          context.commit("UPDATE_USUARIO", response.data.user);
          context.commit("UPDATE_LOGIN", true);
        })
        .catch((err) => {
          console.log("erro de senha errada", err);
        });
    },
    criarUsuario(context, payload) {
      console.log("vuex criando usuario: ", payload);

      context.commit("UPDATE_USUARIO", payload);
      console.log("vuex user para ser criado: ", context.state.user);
      delete context.state.user.tokenReturn;
      delete context.state.user._id;

      console.log("vuex user após ser modificado: ", context.state.user);

      return api.post("/usuario/add", context.state.user);
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        _id: "",
        nome: "",
        email: "",
        password: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: ""
      });
      context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {}
});
