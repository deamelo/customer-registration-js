export class Input {
  static async inputInfo(e){
    e.preventDefault()
    
    const inputs = e.target

    const info = {}
    for(let i = 0; i<inputs.length; i++){
      if(inputs[i].name){
          info[inputs[i].name] = inputs[i].value
      }
    }
  }
}