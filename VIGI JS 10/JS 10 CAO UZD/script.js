// ---  10 paskaita  1 uzduotis  Objektai dom   ----  
const car = {
    brand:"opel",
     model:"agila",
      doors:5};
      console.log(car.brand)

      // ---  10 paskaita  2 uzduotis  Objektai dom   ----  


//       document.querySelector('form').addEventListener('submit', (event) => {
// event.preventDefault();

// --- ilgas variantas  --

// const name = document.getElementById('name').value;
// const surname = document.querySelector('input:nth-of-type(2)').value
//       console.log(name, surname)

//       const persona ={
//           name: name,
//           surname: surname
//       }

// --- geroji praktika variantas  --

const person ={
 name : document.getElementById('name').value,
  surname : document.querySelector('input:nth-of-type(2)').value
         }
    console.log(person)

// })
            // ---  10 paskaita  3 uzduotis  Objektai dom   ----  

// Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus
//  duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. 
//  Name - string, o isLegalAge - boolean.

document.querySelector('form2').addEventListener('submit', (event) => {
                event.preventDefault();
                const name = event.target.elements.name.value;
                const age = Number(event.target.elements.age.value);
         const isLegalAge =  age >= 18;
// console.log(isLegalAge)

    const person = {
        name: name,
        isLegal: isLegalAge,
    }         
    console.log(person)
})
