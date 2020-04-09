<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <h1>About</h1>
        <p>{{message}}</p>
      </div>
    </div>
    <div class="row">
      <card-component v-for="(student, index) in students" :key="index" v-bind:card="student"></card-component>
    </div>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';

export default {
  components: { 
    //ecco il nostro componente che deve essere usato per renderizzare l'Card
    CardComponent
  },
  //nei componenti il data è una funzione che restituisce le nostre variabili sotto forma di oggetto
  data() {
    return {
      message: '',
      students: null
    };
  },
  mounted() {
    //possiamo caricare i dati che ci servono prima di montare il componente
    this.message = 'About Classe 9';

    let self = this;
    axios.get('/api/students')
    .then(function (response) {
      // handle success
      console.log(response.data);
      let students = response.data;
      self.students = students;
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  }
};
</script>

<style scoped lang="scss">
// Possiamo creare degli style che funzionano solo in un dato componente
h1 {
  color: red;
}
</style>