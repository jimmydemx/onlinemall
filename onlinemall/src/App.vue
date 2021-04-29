<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <child1 :vtochild1="t">{{t+1}}</child1>
    <child2 ref="c2"></child2> -->
    <!-- <p>{{pp()}}</p> -->
    <!-- <button @click="goHome">回家吃饭</button> -->
    <kformindex></kformindex>
  </div>
</template>

<script>

import child1 from './test/child1.vue'
import child2 from './test/child2.vue'
import kformindex from './Kform/index.vue'

export default {
  name: 'app',
  components: {
    child1,child2,kformindex
  },
  data: function(){
    return {
      t:1231,    
    }
  },
  methods:{
  //     goHome(){
  //    console.log(this.$refs.c2.c2m())  
  // } 
    },
   mounted(){
    //  this.goHome()
   } 
}
</script> 

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
