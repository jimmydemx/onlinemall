<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if='error'>{{error}}</p>
        <!-- <p>{{form.model}}</p> -->
    </div>

</template>

<script>
// Asyc-validate
import Schema from "async-validator"

export default {
     name:"kinputitem",
    inject:['form'],
    data(){
        return{
            error:""       

        }
    },

    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String,
            default:''
        }
    },
    mounted(){
        this.$on("validate",()=>{
            this.validate()
        })
    },
    methods:{
        validate(){
            // 规则
            // console.log(this.form.rules)
            //console.log(this._uid)
            const rules=this.form.rules[this.prop]

            //当前值
            const value=this.form.model[this.prop]
            // 校验描述对象
            let g=this.prop
            const desc={[this.prop]:rules}
            console.log("total",`rules=${rules},value=${value},desc=${desc},${[this.prop] instanceof Array},${this.prop}`)
            // 创建schema实例
            const schema=new Schema(desc)
           return schema.validate({[this.prop]:value},errors=>{
                if(errors){
                    this.error=errors[0].message
                }else{
                    this.error=""

                }

            })
            
        }
    }

}
</script>

<style>

</style>