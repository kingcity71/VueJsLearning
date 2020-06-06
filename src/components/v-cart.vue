<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-cart__link_to_catalog">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products...</p>
    <v-cart-item
      v-for="(item,index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @decrementCartItem="decrementCartItem(index)"
      @incrementCartItem="incrementCartItem(index)"
    />
    <div v-if="cart_data.length" class="v-cart__total">
      <p class="total__name">Total : </p>
      <p>{{cartTotalCost}} $</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions } from "vuex";
export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return new []();
      }
    }
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART","DECREMENT_CART_ITEM","INCREMENT_CART_ITEM"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    decrementCartItem(index){
        console.log(index);
        this.DECREMENT_CART_ITEM(index);
    },
    incrementCartItem(index){
        this.INCREMENT_CART_ITEM(index);
    }
  },
  computed:{
      cartTotalCost(){
          let result = [];
          for(let item of this.cart_data){
              result.push(item.price * item.quantity);
          }
        result = result.reduce(function(sum,el){
            return sum + el;
        });
        return result;
      }
  }
};
</script>

<style lang="scss">
.v-cart {
    margin-bottom: 100px;
  &__link_to_catalog {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: 1px solid #aeaeae;
  }
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background:$green-bg;
    color: #ffffff;
    font-size: 20px;
  }
  .total__name{
      margin-right: $margin * 2;
  }
}
</style>