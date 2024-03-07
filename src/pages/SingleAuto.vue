<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name:'SingleAuto',
    
    data() {
        return {
            store,
            Auto: null,
            success: null,
        }
    },
    created() {
        this.getAutoData();
    },
    methods: {
        getAutoData(){
            axios.get(`${this.store.ApiUrl}api/autos/${this.$route.params.id}`).then((response) => {
                if(response.data.success){
                    this.auto = response.data.auto;
                    this.success = response.data.success;
                }
                else{
                    this.$router.push({name: 'not-found'});
                }
            });
        },
        getPrice(auto){
            let price = auto.price.slice(0, -1)
            price = parseInt(price)
            if (auto.optionals.length > 0) {
                auto.optionals.forEach(element => {
                let price_optional = element.price.slice(0, -1)
                price_optional = parseInt(price_optional)
                price += price_optional
                });
            }

            return price
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <main>
        <div class="container">
            <div class="row justify-content-center" v-if="success == true">
                <div class="col-7 my-5">
                    <div class="card">
                      <img :src="auto.img" alt="" class="card-img-top">
                      <div class="card-body">
                          <h5 class="card-title text-capitalize"><strong>Modello:</strong> {{ auto.model}}</h5>
                          <p class="card-text"><strong>Descrizione:</strong> {{ auto.description }}</p>
                      </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Prezzo: </strong>{{ getPrice(auto) }}€</li>
                            <li class="list-group-item"><strong>Anno:</strong> {{ auto.year }}</li>
                            <li class="list-group-item"><strong>Carburante: </strong>{{ auto.fuel_type }}</li>
                            <li class="list-group-item"><strong>Cilindrata: </strong>{{ auto.displacement }}</li>
                            <li class="list-group-item"><strong>Cavalli: </strong>{{ auto.horsepower }}</li>
                        </ul> 
                    </div>
                </div>
                <div class="col-12 text-center mt-5">
                <a href="/autos" > <button class="btn btn-secondary ms-5"><i class="fa-solid fa-door-open"></i> Torna indietro</button></a>
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