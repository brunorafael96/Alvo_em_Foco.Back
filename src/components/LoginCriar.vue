<template>
  <section>
    <h2>Crie a sua conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">
        Criar conta
      </button>
      <Usuarioform v-else>
        <button class="btn btn-form" @click.prevent="criarUsuario">
          Criar Usuário
        </button>
        {{ $store.state.usuario }}
      </Usuarioform>
    </transition>
  </section>
</template>

<script>
import Usuarioform from "@/components/Usuarioform";
export default {
  name: "loginCriar",
  components: {
    Usuarioform
  },
  data() {
    return {
      criar: false
    };
  },
  methods: {
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.user);
        await this.$store.dispatch("getUsuario", this.$store.state.user.email);
        this.$router.push({ name: "usuario" });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>
