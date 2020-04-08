<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <h1>About</h1>
        <p>{{message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //nei componenti il data è una funzione che restituisce le nostre variabili sotto forma di oggetto
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    //possiamo caricare i dati che ci servono prima di montare il componente
    this.message = 'About Classe 9';
  }
};
</script>

<style scoped lang="scss">
// Possiamo creare degli style che funzionano solo in un dato componente
h1 {
  color: red;
}
</style>