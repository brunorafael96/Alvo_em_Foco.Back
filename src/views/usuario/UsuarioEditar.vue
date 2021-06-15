<template>
  <section>
    <h1>Editar</h1>
    <span>usuario atual: </span> {{ $store.state.user }}
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/Usuarioform";
import { api } from "@/services";
export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    atualizarUsuario() {
      api.put("/usuario/update", this.$store.state.user).then((response) => {
        this.$store.commit("UPDATE_USUARIO", response.data);
        this.$router.push({ name: "usuario" });
      });
    }
  },
  created() {
    if (this.$store.state.user) {
      this.login.email = this.$store.state.user.email;
      this.login.password = this.$store.state.user.password;
    }
  }
};
</script>

<style scoped></style>
