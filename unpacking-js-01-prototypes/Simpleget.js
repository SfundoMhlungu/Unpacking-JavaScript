function get_(obj_, key){
    let type = typeof obj_[key]

     switch (type) {
              case "function":
                   obj_[key]()
                  
                  break;
          
              default:
                   return obj_[key]
                  break;
  }

}


let ob = {
  name : "John",
  surname: "Doe", 
  print: function() {
      console.log(this.name, " ", this.surname)
  }

}

console.log(get_(ob, "name"))

get_(ob, "print")