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

    Object.keys(obj).forEach(key=>{
        defineReactivity(obj,key,obj[key])
    })

}

function proxy(obj,key){
    console.log(obj)
    // app.$data.counter=>app.counter
    // obj=instance of Vue, key $data
    // keyofdate=counter obj=app 
    Object.keys(obj[key]).forEach(keyofdata=>{

    // here obj:app key1 is the counter
        Object.defineProperty(obj,keyofdata,{
            get(){
                //console.log(obj[key])
                return obj[key][keyofdata]   

            },
            set(newVal){
                console.log(newVal)
                obj[key][keyofdata]=newVal
            }

         })
    })

}

class Vue{
    constructor(options){
        this.$options=options
        this.$data=options.data
        
        observe(this.$data)
        proxy(this,'$data')
       
        

    }


}