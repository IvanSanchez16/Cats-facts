<template>
    <div class="details">
        <h1>Fact details</h1>
        <h3>ID: {{fekt._id}}</h3>
        <p>{{fekt.text}}</p>
        <p>{{ fekt.createdAt.substring(0,10) }}</p>
    </div>
</template>


<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: 'Details',
    components: {
    },
    computed:{
        ...mapState(['fekt'])
    },
    methods:{
        ...mapActions(['getFekt'])
    },
    created() {
        this.getFekt(this.$route.params.id);
    }
}
</script>

<style>

</style>