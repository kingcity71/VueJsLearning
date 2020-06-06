<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <v-catalog />
    <v-cart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import vCart from "./v-cart";
import vCatalog from "./v-catalog";
import { mapGetters } from "vuex";
export default {
  name: "v-main-wrapper",
  components: {
    vCart,
    vCatalog
  },
  props: {},
  data() {
    return {
      title: "Main wrapper"
    };
  },
  computed: {
    ...mapGetters(["CART"])
  },
  methods: {},
  watch: {},
  mounted() {}
};
</script>

<style>
.v-main-wrapper {
  margin: 0 auto;
}
</style>