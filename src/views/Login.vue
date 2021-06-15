<template>
  <section class="login">
    <h1>Login</h1>
    <form action="">
      <label for="email">Email</label>
      <input type="text" id="email" name="email" v-model="login.email" />

      <label for="senha">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        v-model="login.password"
      />

      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="esqueceu-senha">
      <a href="/" target="_blank">Esqueceu a senha? Clique aqui.</a>
    </p>
    <span>Usuario logado: </span> {{ $store.state.user.role || "falso" }}
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar";
export default {
  name: "Login",
  components: {
    LoginCriar
  },
  data() {
    return {
      login: {
        email: "ana@gmail.com",
        password: "123"
      }
    };
  },
  methods: {
    logar() {
      this.$store.dispatch("getUsuario", this.login);
      this.$router.push({ name: "usuario" });
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
form {
  display: grid;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.esqueceu-senha {
  text-align: center;
  margin: 20px auto 0 auto;
}

.esqueceu-senha a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
