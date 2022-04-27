// ----VIDMANTO paskaita  --  FUNKCIJA

console.log(Math.floor(Math.random ()*8)+5);

function agerange (name, age ){
    console.log(name, age)
return 5
}
agerange('peet' ,2)
agerange('ok',22)
agerange('ger',13)
agerange('tim', 15)

let nam  = agerange('joe', 3)
console.log(nam)

function substra(n1, n2){
   let calcul = n1+ (n1*n2)/n1
   
   if (calcul === 6){
       return calcul
   } else {return 'netinkamas'}
}
console.log(substra(5,2))
console.log(substra(45,25))
console.log(substra(54,25))
document.body.textContent = substra(54,25)

// VIDMANTO paskaita  --  EVENT

console.log(document.querySelector('button').addEventListener('click', onclick ))
    function onclick(){
        console.log ('paspaude mygtuka')
    }

    //  CHANGE  -----------------

    document.querySelector('input').addEventListener('change', onChange)
    function onChange(){
        console.log(document.querySelector('input').value)
    }
    console.log(document.querySelector('input').value)

    //  Copy  -----------------

    document.querySelector('p').addEventListener('copy', copyY)
    function copyY(){
        alert ('nukopijavote')
    }



// --------------- Petro paskaita  --  FUNKCIJA

function myFRunction(){
    return 2;
}
    console.log(myFRunction())
   
    function multi(n1,n2){
        return n1*n2
    }
   console.log (multi (4,3))

   function substr(n1,n2){
    return n1- n2
}
console.log (substr(4,3))
console.log (substr(multi (4,3),2))

function randomN (min, max){
  let random=Math.random()
  random = random * max;
  random = random - min;
  random = Math.floor(random);
return random;
}
console.log(randomN(2,8))

// Petro paskaita  --  EVENT


