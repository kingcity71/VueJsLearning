import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        products:[],
        cart:[]
    },
    mutations:{
        SET_PRODUCTS_TO_STATE : (state, products)=>{
            state.products = products;
        },
        SET_CART: (state, product)=>{
            if(state.cart.length){
                let isProductExists = false;
                state.cart.map(function(item){
                    if(item.article===product.article){
                        isProductExists = true;
                        item.quantity++;
                    }
                });
                if(!isProductExists)
                    state.cart.push(product);
            }
            else{
                state.cart.push(product);
            }
        },
        REMOVE_FROM_CART: (state, index)=>{
            state.cart.splice(index,1);
        },
        DECREMENT_CART_ITEM: (state, index)=>{
            if(state.cart[index].quantity==1)
                state.cart.splice(index,1);
            else
                state.cart[index].quantity--;
        },
        INCREMENT_CART_ITEM: (state, index)=>{
            state.cart[index].quantity++;
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}){
            let url = "http://localhost:3000/products";
            return axios(url, {
                method:"GET"
            })
            .then((products)=>{
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({commit},index){
            commit('REMOVE_FROM_CART', index)
        },
        DECREMENT_CART_ITEM({commit}, index){
            commit("DECREMENT_CART_ITEM", index);
        },
        INCREMENT_CART_ITEM({commit}, index){
            commit("INCREMENT_CART_ITEM", index);
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        },
        CART(state){
            return state.cart;
        }
    }
});

export default store;