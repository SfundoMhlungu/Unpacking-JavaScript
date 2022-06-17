function handleInherit(obj_, property){
     let current = obj_

    while(current){
        if(current[property]){
            break
        }
        else if(current.inheritFrom){
            
            current = current.inheritFrom
        }
        else{
            current = null
        }
    }

    return current
}

function protoRunTime(obj_, property) {
     
          if(obj_[property]){
              let type = typeof obj_[property]

              switch (type) {
                  case "function":
                       obj_[property]()
                      
                      break;
              
                  default:
                       return obj_[property]
                      break;
              }
          }
          else if(obj_.inheritFrom){
              // inheritFrom obj_ exists
           let result = handleInherit(obj_.inheritFrom,property)
            if(result !== null){
               return protoRunTime(result, property)
             
            }
            else{
                throw new Error(`${property} does not exist on ${obj_} prototype also`)
            }
          }
          else{
              throw new Error(`${property} does not exist on ${obj_}`)
          }

}


let baseGoodbye = {
     h :function(){
       console.log("base bye! ")
     },

    inheritFrom: null
}


let goodbye = {
   // will override base bye
	h: "Good Bye",
    
    inheritFrom: baseGoodbye
}



let Obj ={

    hello: ()=>{
        console.log("hello world")
    },
    init: "init",
    inheritFrom: goodbye
}

protoRunTime(Obj, "hello")
console.log(protoRunTime(Obj, "init"))
console.log(protoRunTime(Obj, "h"))


