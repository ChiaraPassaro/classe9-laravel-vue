<template>
  <div class="col-6">
    <div class="card" style="width: 18rem;">
      <button v-on:click="$emit('addNumber', 10)">
        Click me to be welcomed
      </button>
      <div class="clearfix">
        <span class="badge badge-info float-right" @click="toggleCard" v-if="!isActive">V</span>
        <span class="badge badge-info float-right" @click="toggleCard" v-else>X</span>
      </div>
      <img class="card-img-top" :src="card.img" :alt="card.name" v-if="card.img && isActive">
      <div class="card-body" v-if="isActive">
        <h5 class="card-title">{{card.name}}</h5>
        <p class="card-text">{{card.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   props: ['card'],
   data() {
     return {
      isActive: true
     }
   },
   methods: {
     toggleCard(){
      //  console.log('cliccato');
      this.isActive = !this.isActive;
     }
   }

}
</script>

<style scoped lang="scss">
  .badge {
    margin: 10px;
  }
</style>