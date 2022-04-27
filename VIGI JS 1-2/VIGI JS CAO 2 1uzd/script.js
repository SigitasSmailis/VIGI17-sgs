// 2 === 2  ---  true
// 2 == "2" ---  true
// 2 !== 2     --- false
// 5 < 5     --- false
// 5 >= 4    ---  true
// true !== false     --- false  TRUE
// 9 - 5 === 4  ---  true
// 5 * 5 !== "25"  ---  true
// true && true  ---  true
// 2 === 5 && true     --- false
// 6 * 6 === 36 && 15 - 9 == "6"  --- false TRUE
// false || false    --- false
// 10 === 10 || 5 == 2  ---  true
// 2 * 2 / 2 == "1" || 5 * 5 === 25  ---  true
// 14 * 2 !== "28" || "Jonas" == "Jonas"   ---  true
// 10 && 15 > 10   --  true
// "Petras" && 0      --- false  0
// ("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13)  ---  true ????
// "jonas" === "Jonas"    --- false
// "Petras" + 5 === "Petras" + "5"    --- false  TRUE
// "Jonas" + 5 + 5 === "Jonas10"    --- false
// 5 + 10 + "Antanas" === "15Antanas"    --- false   TRUE
// 2 + 1 + "Jonas" + 3 + 2 === "3Jonas5"   ----FALSE
// 10 % 1 === 1     --- false
// 5 * "5" === 25     --- false TRUE

// alert ('kaip cia');

console.log (2 + 1 + "Jonas" + 3 + 2 )
console.log ( 5 * "5" === 25    )
console.log ( "25" !== 25    )

if (5>=6 || (8<7 || 'ASILAS')){
    alert ('puiku')}
    else {alert('kazkur kalaida') }
    
    let asd=5
    if (asd >= 5) {
        alert ('daugiau')
    } else if (asd==6) {
        alert('dar biski')
    } else if (asd==='75') {
        alert ('na jau')
    }
    else (alert ('na ir tegul'))

let legalAge1 = 20;
let clientAge1 = 18;
if (clientAge1 >= legalAge1) {console.log('galima gert')}
else { console.log('negalima gert')}

let nameLength = 'puikus'
if (nameLength.length > 6){
    console.log('ilgas vardas')
}  else {console.log('trumpas vardas')}

const myAge = 85;
if (myAge > 100 || myAge < 0){console.log('invalid age')}
else if (myAge >= 1 && myAge<= 18){console.log('child')}
else  {console.log('adult')} 

let car1 ='VW'
 const VWGroup = [ 'VW','Audi','Bentley', 'Bugatti','Lamborghini', 'Porsche']
const BMWGroup = ['BMW','Mini','Rolls-Royce']
if (car1 === VWGroup) {console.log('priklaus vw group')}
else if (car1 === BMWGroup){console.log('priklauso bmw group')}
else {console.log('nepriklaudo nei vienai')}


// --------------  CAO UZDUOTIS NR 1 ---------------------------------
    let legalAge = 21
    let clientAge = 18
    if (clientAge===legalAge){
        alert('pasiekies')
    } else if (clientAge >= 22){
        alert('pasiekies') }
        else if (clientAge <= 21){
            alert('pasiekies') }
    else {alert('nepasiekes')}

// --------------  CAO UZDUOTIS NR 2 ----
const myName = 'Sigit'
if (myName.length >=6 ) {
    console.log('ilgas vardas')}
    else if (myName.length <=6 ) {
        console.log('trumpas vardas')
}
// --------------  CAO UZDUOTIS NR 3 ----

let myAgee = 55
if (myAgee >= 100 || myAgee < 0){
    console.log ('invalid age')
}
else if (myAgee >= 1 && myAgee <= 18){
    console.log ('child')
} else if (myAgee >= 19 && myAgee <= 99){
    console.log ('Adult')}

    // --------------  CAO UZDUOTIS NR 4 ----

let car ='zaz'
// const VWGroup = [car === 'VW' || car ==='Audi'|| car==='Bentley' || car==='Bugatti' || car==='Lamborghini' ||car==='Porsche']
// const BMWGroup = [car==='BMW'|| car==='Mini' || car==='Rolls-Royce']

if (car === 'VW' || car ==='Audi'|| car==='Bentley' || car==='Bugatti' || car==='Lamborghini' ||car==='Porsche' ) {
    console.log ('priklauso VW Group')}
     else if (car==='BMW'|| car==='Mini' || car==='Rolls-Royce'){
    console.log('priklauso BMW Group')
}
else console.log('priklauso kitai grupei')