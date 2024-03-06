<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';

export default {
  name: 'AutoCard',
  props: {
    auto: Object
  },
  
  data() {
    return {
      store,
    }
  },
  methods: {
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div class="col-12 col-md-4 mt-5">
    <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="link">
      <div class="card">
          <img :src="auto.img" alt="" class="card-img-top">
          <div class="card-body">
              <h5 class="card-title text-capitalize">{{ auto.model }}</h5>
              <p class="card-text"><strong>Prezzo:</strong> {{ auto.price }}</p>
          </div>
            <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Anno:</strong> {{ auto.year }}</li>
                  <li class="list-group-item"><strong>Carburante: </strong>{{ auto.fuel_type }}</li>
              </ul>
          <div class="card-body">
          </div>  
      </div>
    </router-link>
 </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

.link{
  text-decoration: none;
}

</style>