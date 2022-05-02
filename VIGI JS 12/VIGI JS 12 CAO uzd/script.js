// -------  1 uzduotis Bolean     --- -------
let isLegalAge = true;
    console.log(isLegalAge)
    console.log(isLegalAge.toString())
    console.log(!isLegalAge.valueOf())

// -------  1 uzduotis Number     --- -------

let milkPrice = 3.20;
if (Number.isInteger(milkPrice)){
alert('nereikes centu') }
    else {
        alert('reikes centu')
}

// -------  2 uzduotis Number     --- -----

// let milkPrice2 = 2.0;
// if (Number.isInteger(milkPrice2)){
// alert('nereikes centu. ' + milkPrice2.toPrecision(3)+ ' EUR') }
//     else {
//         alert('reikes centu')}
  

 // -------  3 uzduotis Number     --- -----

document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const price = Number(document.getElementById('price').value);
    const amount = Number(document.getElementById('amount').value);
 
    const total = price * amount

    const priceDisplay = document.createElement('h1');
    priceDisplay.textContent = total.toFixed(2);
    document.body.append(priceDisplay);
})
// -------  3 uzduotis Number     --- -----

document.body.style.margin = '1rem'
document.querySelector('input').style.margin = '1rem'

document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();

const name = document.getElementById('name').value;
const number = Number(document.getElementById('quant').value);

if (Number.isInteger(number)){
    const h1 = document.createElement('h1');
    h1.textContent = name.repeat(number);
    document.body.append(h1);
    } else{
        alert('Number is not an integer')
    }
})


