<template>
<div>
    <!-- 用户名 -->
    <kform :model="userInfo" :rules="rules" ref="loginForm">
        <kformitem label="用户名" prop="username">
             <kinput v-model="userInfo.username" placeholder="请输入用户名"></kinput>
        </kformitem>

        <kformitem label="密码" prop="password">
            <kinput type="password" v-model="userInfo.password" placeholder="请输入密码"></kinput>
         </kformitem>

        <kformitem>
            <button @click="login">登陆</button>
        </kformitem>
    </kform>
    <!-- 密码 -->
    
</div>
  
</template>

<script>
import kinput from "./Kinput.vue"
import kformitem from "./kformitem.vue"
import kform from './Kform.vue'

export default {
     name:"kinputindex",
   
    data(){
        return{
            userInfo:{
                username:'',
                password:''

            },
            rules:{
                username:[{required:true,message:"请输入用户名称"}],
                password:[{required:true,message:"请输入密码"}]
            }
        }
    },
    components:{
        kinput,kformitem,kform
    },
    methods:{
        login(){
            this.$refs["loginForm"].validate(valid=>{
                if(valid){
                    alert("submit");
                }else {
                    console.log("error submit")
                    return false;
                }

            });
        }
    }

}
</script>

<style>

</style>