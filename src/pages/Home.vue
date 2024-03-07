<!-- SEZIONE JS SCRIPT -->
<script>
import AutoCard from '../components/AutoCard.vue'
import Header from '../components/Header.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name:'Home',
    components: {
        Header
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <div>
        <Header/>
    </div>


</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>

</style>