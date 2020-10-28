import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
        id: '',
        isAdmin: ''
    },
  },
  
  mutations: {
    saveUserInfos(state, [id, isAdmin]) {
        state.user.id = id,
        state.user.isAdmin = isAdmin
    },
  },
  
  actions: {
    getUserInfos(context) {
        fetch("http://localhost:3000/api/user",  {
             headers: {
                'authorization': 'bearer ' + localStorage.getItem('token')
            }})
            //Choisir le bon user
      .then (response => {
          context.commit('saveUserInfos', [response.data.id, response.data.isAdmin])
      }) 
      .catch(error => {
         console.log('Erreur auth', error);
    });
  },
},
});