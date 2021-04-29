<template>
  <div>
      <input type="type" :value="value" @input="OnInput" :placeholder="placeholder">
  </div>
  
</template>

<script>
export default {
    name:"kinput",
    props:{
        value:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:"text"
        },
        placeholder:{
            type:String,
            default:""
        }
    
    },
    methods:{
        // 只要有input，就向上派发value 强化e.target
        OnInput(e){
            this.$emit("input",e.target.value)
        //通知校验
            //console.log(this)
            this.$parent.$emit('validate')


        }

    }
}
</script>

<style>

</style>