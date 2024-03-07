<!-- SEZIONE JS SCRIPT -->
<script>
import AppHeader from './components/AppHeader.vue';

// IMPORTO LE COMPONTENTI

export default {
  components: {
      AppHeader
  },
  data() {
    return {
      
    }
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <AppHeader/>
  <router-view></router-view>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss">
  @use './styles/generals.scss';
</style>