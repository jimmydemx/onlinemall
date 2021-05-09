let obj={}

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


obj={foo:1,bar:2,barr:{a:1}}

observe(obj)
obj.foo
obj.foo="11"
obj.bar
obj.bar="22"
obj.barr.a
obj.barr.a="33"



obj.barr={b:100}
obj.barr.b=100000



obj.aaa="123"
var array=[1,2,3]









// defineReactivity(obj,"foo","foo")
// obj.foo;

// obj.foo="foooooooooooooo"