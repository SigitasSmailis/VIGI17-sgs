// -----------6 paskaita  UZDUOTIS 1   Form------
// Sukurk input į kurį įvestum savo vardą. Submit paspaudus
//  - išoktų alert su tavo vardu.

document.querySelector('form').addEventListener('submit', func1)
function func1 (event){
  event.preventDefault();
  // alert((event.target.elements.name.value))
}

// ---------  6 paskaita   UZDUOTIS 2  Form ------
// Sukurk input į kurį įvesi savo amžių. Padaryk, kad 
// submit paspaudus, viršuj esančiame h1 elemente atsirastų
//  "Tavo amžius: [amžius]".

// document.querySelector('form').addEventListener('submit', funct)
// function funct (event){
//   event.preventDefault();
//   document.querySelector('h2').textContent = document.querySelector(' input[id=age]').value
// } 
// ---------  6 paskaita   UZDUOTIS 3  Form ------
// Sukurk du input - į vieną įrašysi savo vardą,
//  į kitą - amžių. Jei daugiau nei 18 - išmeta h1
//   elemente "Vairuoti gali: [vardas]"; jei nėra 
//   išmeta: "Dar mokysis vairuotis: [vardas]".
document.querySelector('form').addEventListener('submit', test)
function test (event){
  event.preventDefault();
  if (document.getElementById('age').value >=18 ){
    document.querySelector('h1').textContent = document.querySelector(' input[id=name]').value
  } else {document.querySelector('h1').textContent = 'Dar mokysis vairuoti' 
  }
}
//  nebaigta reikia sudeti tektsa pire rezultato

// ---------  6 paskaita   UZDUOTIS 3.1  Form ------
// Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi 
// būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS 
// apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas 
// – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei
//  60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.



document.querySelector('form').addEventListener('submit', calc)
function calc (event) {
  event.preventDefault();
const standart = 6
const age = Number(ageIn.value)
const teen = standart/2
const old = standart/3

  document.querySelector('.kaina').textContent = result

}

// nesupratau net petro atsakymo

// ---------  6 paskaita   UZDUOTIS 3.2  Form ------

// Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir
//  30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, 
//  kuri su input + radio button pasakytų ar tam žmogui gali reikėti 
//  eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector
//   tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite 
//   jo reikšmę.

const ageIn = document.getElementById('age')
const tInput = document.querySelector('input[type=checkbox]')
const form = document.querySelector('form')
const result = document.getElementById('result')

form.addEventListener('submit',handleFrSu)

function handleFrSu(event){
  event.preventDefault;

  const age = Number(ageIn.value)
  const isConv = tInp.checked

  if (age>= 18 && age<= 30 && !isConv) {
    result.textContent = 'army is waiting'
      } else {result.textContent = 'no army for you'}
}
