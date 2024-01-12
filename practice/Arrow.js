const obj = 
{
    value: 20,

    arrowFun: ()=>
    {
        console.log("Arrow Function this: ",this.value)
        console.log("Arrow Function arguments: ",arguments);
    },
    normalFun:function myFun()
    {
        console.log("Normal Function this: ",this.value)
        console.log("Normal Function arguments: ",arguments);

    }

}

obj.arrowFun(20,"yxz",false)
obj.normalFun(11,"abc",true)