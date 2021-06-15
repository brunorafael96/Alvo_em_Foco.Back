<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label>
    <input type="text " id="nome" name="nome" v-model="produto.nome" />

    <label for="preco">Preço (R$)</label>
    <input type="number " id="preco" name="preco" v-model="produto.preco" />

    <label for="fotos">Fotos</label>
    <input id="fotos" type="file" name="fotos" ref="fotos" />

    <label for="descricao">Descrição</label>
    <textarea
      type="text "
      id="descricao"
      name="descricao"
      v-model="produto.descricao"
    >
    </textarea>

    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="adicionarProduto"
      :disabled="disable"
    />
  </form>
</template>

<script>
//importando axios
import { api } from "@/services.js";
export default {
  name: "ProdutoAdicionar",
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        descricao: "",
        fotos: null,
        disable: false
      }
    };
  },
  methods: {
    formatarProduto() {
      this.produto.usuario_id = this.$store.state.user._id;
    },
    adicionarProduto() {
      this.formatarProduto();
      this.disable = true;
      api.post("/produto/add", this.produto).then(() => {
        this.$store.dispatch("getUsuarioProdutos");
      });
      this.disable = false;
    }
  },
  created() {
    this.disable = false;
  }
};
</script>

<style scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
