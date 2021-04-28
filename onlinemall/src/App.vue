<template>
  <div id="app">
    <img src="./assets/logo.png">
    <child1 :valuetochild1="t">{{t+1}}</child1>
    <child2 ref="c2"></child2>
    <p>{{pp}}</p>
  </div>
</template>

<script>

import child1 from './test/child1.vue'
import child2 from './test/child2.vue'

export default {
  name: 'app',
  components: {
    child1,child2
  },
  data: ()=>{
    return {
      t:1231,
      pp:this.children[1].c2m()
    }
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
