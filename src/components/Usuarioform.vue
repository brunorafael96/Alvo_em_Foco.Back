<template>
  <form>
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" v-model="nome" />

    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email" />

    <label for="senha">Senha</label>
    <input type="password" id="password" name="password" v-model="password" />

    <label for="cep">Cep</label>
    <input
      type="text"
      id="cep"
      name="cep"
      v-model="cep"
      @keyup="preencherCep"
    />

    <label for="rua">Rua</label>
    <input type="text" id="rua" name="rua" v-model="rua" />

    <label for="numero">Número</label>
    <input type="text" id="numero" name="numero" v-model="numero" />

    <label for="bairro">Bairro</label>
    <input type="text" id="bairro" name="bairro" v-model="bairro" />

    <label for="cidade">Cidade</label>
    <input type="text" id="cidade" name="cidade" v-model="cidade" />

    <label for="estado">Estado</label>
    <input type="text" id="estado" name="estado" v-model="estado" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { getCep } from "@/services.js";
export default {
  name: "Usuarioform",
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "password",
        "rua",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado"
      ],
      base: "user",
      mutation: "UPDATE_USUARIO"
    })
  },
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then((response) => {
          console.log(response.data);
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.cidade = response.data.localidade;
          this.estado = response.data.uf;
        });
      }
    }
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1 fr;
  align-items: center;
}
</style>
