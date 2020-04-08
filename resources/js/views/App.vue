<template>
  <div>  <!-- un template può avere un unico figlio -->
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
// importiamo il nostro componente header
import HeaderComponent from '../components/HeaderComponent.vue';

//ed esportiamo per la creazione del file compilato tutte le regole di default
export default {
  components: { 
    //ecco il nostro componente che deve essere usato per renderizzare l'header
    HeaderComponent
  }
}
</script>