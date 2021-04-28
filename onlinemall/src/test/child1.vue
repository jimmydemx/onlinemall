<template>
  <div>
    <slot></slot>
    <grandson1></grandson1>
  <p>{{valuetochild1}}</p>
  </div>
</template>

<script>
import grandson1 from './gandson1'
export default {
    name:"child1",
    props:["valuetochild1"],
    components:{grandson1}
   
}
</script>

<style>

</style>