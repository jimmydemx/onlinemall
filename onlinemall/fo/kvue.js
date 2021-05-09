function defineReactivity(obj,key,val){

    observe(val)
    Object.defineProperty(obj,key,{
        // obj.key
        get(){
            console.log("get "+key)
            return val
        },

        // obj.key=xxxx
        set(newVal){
            if (newVal !==val)  {
                observe(newVal)
                val=newVal
                console.log("the new value is: "+val)

            }  
        }
    })
}


function observe(obj){
    if (typeof obj!=="object" || obj===null){
        return
    }

   new Observer(obj)

}



class KVue{

    constructor(options){
        this.$options=options;
        this.$data=options.data;
        observe(this.$data)
    }
    

}

class Observer{
    constructor(value){
        this.value=value

        if(typeof value==="object"){

            this.walk(value)

        }
    }
    walk(obj){
        Object.keys(obj).forEach(key=>{
            defineReactivity(obj,key,obj[key])
        })
    }

    // 数组的响应式    

}



// export default KVue