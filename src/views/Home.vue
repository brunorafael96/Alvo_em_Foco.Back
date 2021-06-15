<template>
  <section>
    <h1>👍Compre ou venda 👍</h1>
    <ProdutosBuscar />
    <ProdutosListar />
  </section>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar";
import ProdutosListar from "@/components/ProdutosListar";

export default {
  name: "Home",

  components: {
    ProdutosBuscar,
    ProdutosListar
  }
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 48px;
  text-align: center;
}
</style>
