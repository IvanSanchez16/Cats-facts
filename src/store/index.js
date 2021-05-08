import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fekts: [],
    fekt: {},
    randomFekt: {}
  },
  mutations: {
    SET_FEKTS(state, fekts){
      state.fekts = fekts;
    },
    SET_FEKT(state, fekt){
      state.fekt = fekt;
    },
    SET_RANDOM_FEKT(state, randomfekt){
      state.randomFekt = randomfekt;
    }
  },
  actions: {
    getFekts({ commit }){
      axios.get('https://cat-fact.herokuapp.com/facts')
      .then( response => {
        commit('SET_FEKTS',response.data);
      }).catch( error => console.log(error) );
    },
    getFekt({ commit },id){
      axios.get(`https://cat-fact.herokuapp.com/facts/${id}`)
      .then( response => {
        commit('SET_FEKT',response.data);
      }).catch( error => console.log(error));
    },
    getRandomFekt({ commit }){
      axios.get('https://cat-fact.herokuapp.com/facts/random')
      .then( response => {
        commit('SET_RANDOM_FEKT',response.data);
      }).catch( error => console.log(error));
    }
  },
  modules: {
  }
})
