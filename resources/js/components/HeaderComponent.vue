<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <h2 class="navbar-brand">MyApp</h2> 
      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="(link, index) in links" :key="index">
            <a class="nav-link" :href="link.path">{{link.name}}</a>
            <!-- <router-link class="nav-link" :to="link.path">{{link.name}}</router-link>  -->
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { 
          path: "/", 
          name: "Home" 
        },
        { 
          path: "/about", 
          name: "About" 
        }
      ]
    };
  }
};
</script>

<style>
</style>