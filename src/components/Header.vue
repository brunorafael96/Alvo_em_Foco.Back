<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <span>Alvo em foco</span>
      </router-link>
      <router-link to="/usuario" v-if="$store.state.user.nome" class="btn">{{
        nome
      }}</router-link>
      <router-link to="/login" class="btn" v-else>Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    nome() {
      return this.$store.state.user.nome.replace(/ .*/, "");
    }
  }
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.2);
}

.logo {
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: #87f;
}

.logo img {
  width: 90px;
}
</style>
