class Compiler{

    constructor(el,vm){ 
        this.$vm=vm
        this.$el=document.querySelector(el)

        if(this.$el){
            this.compile(this.$el)
        }

}
    compile(el){

        const childNodes=el.childNodes;
        childNodes.forEach(node => {
                if(this.isElement(node)){
                    console.log("编译元素"+node.nodeName)
                }else if(this.isInter(node)){
                    console.log("编译插值绑定"+node.textContent)

                }
                if (node.childNodes &&node.childNodes.length >0){
                    this.compile(node)
                }
        });


    }

    isElement(){
            return node.nodeType===1
    }
    isInter(node){
        // test(x)检测x是否满足前面的/\{\{(.*)\}\}/ 正则
        return node.nodeType===3 && /\{\{(.*)\}\}/.test(node.textContent)
    }

}