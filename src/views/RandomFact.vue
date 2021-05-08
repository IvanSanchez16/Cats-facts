<template>
    <div class="randomFact">
        <h1>Random Facts</h1>
        <button class="btnRandom" v-on:click="newRandomFact">Get random fact</button>
        
        <div v-if="randomFekt">
            <h3>{{randomFekt.type}}</h3>
            <p>{{randomFekt.text}}</p>
            <p v-if="randomFekt.status">{{ (randomFekt.status.verified ? 'Verificado' : 'Sin información sobre su verificación')  }}</p>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: 'RandomFact',
    computed: {
        ...mapState(['randomFekt'])
    },
    methods:{
        ...mapActions(['getRandomFekt']),
        newRandomFact: function(event){
            do {
                let aux = this.randomFekt;
                this.getRandomFekt();
            }while(typeof this.aux !== 'undefined' && aux._id === this.randomFekt._id);
        }
    },
    data() {
        return { reactive: true }
    }
}
</script>

<style scoped>

.btnRandom {
    font-size: 17px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 550;
}

</style>