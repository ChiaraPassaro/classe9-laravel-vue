<template>
  <h1>{{message}}</h1>
</template>

<script>
export default {
  //nei componenti il data è una funzione che restituisce le nostre variabili sotto forma di oggetto
  data() {
    return {
      message: ''
    }
  },
  mounted(){
    //possiamo caricare i dati che ci servono prima di montare il componente
    this.message = 'About Classe 9';
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: red;
  }
</style>