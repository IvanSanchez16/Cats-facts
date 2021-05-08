<template>
  <div class="home">
    <h1>All the cats facts</h1>
    <div class="cards-container">
      <div
      v-for="f in fekts"
      :key="f._id" class="tarjeta">
        <FactCard :id="f._id" :title="f.text"></FactCard>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import FactCard from '../components/FactCard.vue'

export default {
  name: 'Home',
  components: {
    FactCard
  },
  computed: {
    ...mapState(['fekts'])
  },
  methods:{
    ...mapActions(['getFekts'])
  },
  created() {
    this.getFekts()
  }
}
</script>

<style scoped>

.tarjeta {
  width: 50%;
  margin-bottom: 25px;
}

.cards-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
