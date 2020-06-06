import axios from 'axios';

export default{
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
    }
}