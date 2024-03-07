<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store';
export default {
  data() {
    return {
      store
    }
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">Concessionario</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item, index) in store.menuItems" :key="index">
              <router-link :to="{ name: item.name }" class="nav-link">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>


</style>