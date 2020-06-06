<template>
  <div id="app">
    <!-- <v-textfield
      v-model="model"
      label="placeholder"/> -->
    
    <v-main-wrapper/>
  </div>
  
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper";
//import vTextfield from './components/textfield/v-textfield';
export default {
  name: "App",
  components: {
    //vTextfield
     vMainWrapper
  },
  data(){
    return{
      // model:''
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>
