<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <h1>Classi</h1>
      </div>
    </div>
    <div class="row">
      <card-component v-for="(classe, index) in classi" :key="index" v-bind:card="classe" v-on:addNumber="pushData"></card-component>
    </div>

  </div>
</template>

<script>
import CardComponent from '../components/CardComponent';

export default {
  components: {
    CardComponent
  },
 data() {
   return {
     classi: null,
     ages: []
   }
 },
 mounted() {
   this.classi = [
     {
       name: 'Classe 9',
       img: 'https://www.topolino.it/wp-content/uploads/2019/12/pippointera.png',
       description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem quia, alias cum dolores corrupti commodi dolorum tempora sed, magni, reiciendis neque in eveniet dolorem hic! Error molestiae corporis suscipit.'
     },
     {
       name: 'Classe 10',
       img: '',
       description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem quia, alias cum dolores corrupti commodi dolorum tempora sed, magni, reiciendis neque in eveniet dolorem hic! Error molestiae corporis suscipit.'
     },
     {
       name: 'Classe 11',
       img: '',
       description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem quia, alias cum dolores corrupti commodi dolorum tempora sed, magni, reiciendis neque in eveniet dolorem hic! Error molestiae corporis suscipit.'
     },
   ];

   console.log(this.classi); 
 },
 methods: {
    pushData: function (num) {
      this.ages.push(num);
      console.log(this.ages);
      
    }
 }
}
</script>

<style>

</style>