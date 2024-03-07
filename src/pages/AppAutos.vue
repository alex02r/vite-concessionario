<!-- SEZIONE JS SCRIPT -->
<script>
import AutoCard from '../components/AutoCard.vue'
import { store } from '../store.js';
import axios from 'axios';

export default {
    components: {
        AutoCard
    },

    data() {
        return {
            store,
            autos: [],
            currentautoPage: 1,
            lastautoPage: null,
        }
    },
    created() {
        this.getAutos();
    },
    methods: {
        getAutos(page_number){
            axios.get(`${this.store.ApiUrl}api/autos`, {
                params: {
                    page: page_number
                }
            }).then((response) => {
                this.autos = response.data.results.data;
                this.currentautoPage = response.data.results.current_page;
                this.lastautoPage = response.data.results.last_page;
            })
        },
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <main>
        <div class="container mt-5"> 
            <div class="row"> 
                <div class="col-12"> 
                    <h1 class="text-center">BoolAuto Concessionario</h1>
                </div>
                <div class="row"> 
                    <AutoCard v-for="auto, index in autos" :key="index" :auto="auto" />
                </div>
                <div class="row"> 
                    <div class="col-12">
                        <ul class="pagination d-flex justify-content-center">
                            <li> <button :class="currentautoPage == 1 ? 'disabled' : ''" class="btn btn-square btn-outline-success me-3 fw-bold" @click="getAutos(currentautoPage - 1)">Precedente</button> </li>
                            <li> <button :class="currentautoPage == lastautoPage ? 'disabled' : ''" class="btn btn-outline-success fw-bold" @click="getAutos(currentautoPage + 1)">Successivo</button> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>

.pagination{
    margin: 20px 10px;
}
</style>