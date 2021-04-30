import Vue from "vue"

function create(Component,props){
    const vm = new Vue({

            // h是createElement，返回Vnode:object,虚拟DOM
        render: h=>h(Component,{props}),
            // 使用mount虚拟dom变成真实DOM，mount中没有mount的目标 比如#data，不会mount到特定tag上
            // 不能mount到body因为会覆盖body其它方面
    }).$mount()

 // vm.$el 保存真实DOM元素
document.body.appendChild(vm.$el)
    // comp是组件实例
const comp=vm.$children[0]


comp.remove=()=>{
    document.body.removeChild(vm.$el)
    vm.$destroy()

    
}

return comp 
}



export default create 