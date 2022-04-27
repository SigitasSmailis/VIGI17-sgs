console.log('g')
function task() {
    console.log('Code academy');
}
function taskTwo() {
    console.log('Grazus');
    
}

// task(10, function()


function callbackFunction(text){
    alert('print this:' + text)
  }
  
function coreFunction (name, cbFn){
    cbFn(name.toUpperCase())
  }
  
  coreFunction("Petras", callbackFunction)



  