<template>
    <router-link :to="`/detalle/${id}`">
        <div class="FactCard factcard">
            <h3>ID: {{id}}</h3>
            <p>{{title}}</p>
        </div>   
    </router-link>
    
</template>

<script>

export default {
    name: 'FactCard',
    props: {
        id: String,
        title: String
    }    
}

</script>

<style scoped>

.factcard {
    border: 2.5px solid #B88F22;
    background: #F5CE66;
    text-decoration: none;
    color: black;
}

p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: 450;
}    

</style>