<template>
  <div>
      <slot></slot>
  </div>
</template>

<script>
export default {
     name:"kform",
     provide(){
        return {
        form:this
        }
    },
    props:{
        model:{
            type:Object,
            requried:true
        },
        rules:{
            type:Object
        }

    },
    methods:{
        validate(cb){
            //获取所有kformitem
            const tasks=this.$children.filter(item=>item.prop) //过滤到没有prop属性的item
            .map(item=>item.validate())
            // tasks 都是Promise，现在统一处理所有promise结果
            Promise.all(tasks).then(()=>cb(true)).catch(()=>cb(false))

        }
    }
}
</script>

<style>

</style>