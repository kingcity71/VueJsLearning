import Vue from 'vue'
import Vuex from 'vuex'

import apiRequests from './actions/api-requests';
import commomActions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = {...commomActions, ...apiRequests}

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        products:[],
        cart:[]
    },
    actions,
    mutations,
    getters
});

export default store;