import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

axios.defaults.baseURL = 'https://api.forgingblock.io';
//axios.defaults.headers.common['Authorization'] = "Bearer " + window.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

        register(context, payload) {
            console.log(payload);
            axios.post('/register', payload)
                 .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error.response);
                    //reject(error);
                })
            //return new Promise((resolve,reject)=>{ })
        },
    }
})
