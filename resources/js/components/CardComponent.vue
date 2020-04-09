<template>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="card.img" :alt="card.name">
      <div class="card-body">
        <h5 class="card-title">{{card.name}}</h5>
        <p class="card-text">{{card.description}}</p>
      </div>
    </div>
</template>

<script>
export default {
   props: ['card'],
}
</script>

<style scoped lang="scss">
  .card-img-top{
    width: 50%;
  }
</style>