<!-- SEZIONE JS SCRIPT -->
<script>

export default {
  name: 'Header.vue',
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
          <li class="nav-item">
            <a class="nav-link" href="#auto">Auto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#optionals">Optionals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#brands">Brands</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>


</style>