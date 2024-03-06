<script>
import { store } from "../store";
import axios from 'axios';
export default {
    data() {
        return {
            store,
            autos: [],
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getAutos()
    },
    methods: {
        getAutos(pageNumber){
            axios.get(`${store.ApiUrl}api/Autos/${this.$route.params.slug}`, {
                params:{
                    page: pageNumber
                }
            }).then( response =>{
                this.autos = response.data.results
                this.currentPage = response.data.results.current_page
                this.lastPage = response.data.results.last_page
            })
        }
    },
}
</script>
<template lang="">
    <div>
        {{autos}}
    </div>
</template>
<style lang="">
    
</style>