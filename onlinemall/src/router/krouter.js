// 挂载$rounter到vue.prototype
// import Vue from 'vue'
let Vue;

class KVueRouter{
    constructor(options){

        this.$options=options
        //console.log("constructor",this) 指向KvueRouter

        //this.current传递给router-view进行render渲染不是响应式的
        //this.current="/"
        //所以需要直接定义响应式current属性
        Vue.util.defineReactive(this,'current','/')



        // 当前window绑定一个全局事件？
        window.addEventListener('hashchange',()=>{
            console.log(window.location.hash)
            this.current=window.location.hash.slice(1)

        })

    
    window.addEventListener('load',()=>{
        console.log(window.location.hash)
        this.current=window.location.hash.slice(1)
     
        })
    

    }
 
    
}



KVueRouter.install=function(_Vue){
    // _Vue是vue构造函数，会传过来
    Vue=_Vue

    //怎么样获取根实例中rounter选项
    // 混入所有组件的beforecreate中，
    Vue.mixin({
        beforeCreate(){
            //注意这里的this不是指向KvueRouter实例了
            console.log(this)
           //router 在根实例中注册,所以根实例的option中有router其它没有
           if (this.$options.router){
               // 然后在prototype上挂载，所有的实例都可以用了
                Vue.prototype.$router=this.$options.router

           }

        }
    })

    Vue.component('router-link',{
        props:{
            to:{
                type:String,
                required:true
                }
            },
        //  不能传template作为参数 因为template 不能被编译，只有在runnertime才能够被执行
        // 只能使用render函数
        // 渲染出<a href="#/about">abc</a>
        // <rounter- link to...>
        // h(tag,data,children)
         render(h){
             h('a',{attrs:{href:'#'+this.to}},this.$slots.default)
            
    }
     })
    Vue.component('router-view',{
        render(h){
            // 获取path对应的component
            // for each 中使用箭头函数的话？
            let component=null
            this.$router.$options.routes.forEach(route=>{
                if(route.path===this.$router.current){
                    component=route.component
                }
            })
            return h(component)
        }

     })

}


export default KVueRouter