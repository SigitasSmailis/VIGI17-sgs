// --- UZDUTIS mini  ---- 
const myAge = 45
console.log (2022 - myAge)

// --- UZDUTYS Switch  ---- 1  ---
let car='Roll'
switch (car){
    case 'VW':
    case 'Audi':
    case 'Bentley':
    case 'Bug':    
    case 'Lamb':
    case 'Pors':  
    console.log('priklauso VW grupei');
    break ;
    case 'BMW':
     case 'Mini':
     case 'Rolls':
        console.log('priklauso BMW grupei');
        break;
        default:
     console.log('priklauso kitiems');
}

// --- UZDUTYS Switch  ---- 2  ---

let userInput='carro'
switch (userInput){
    case 'mango':
    case 'pear':
    case 'banana':
    case 'plum':
console.log('tai vaisius');
    break;
    case 'carrot':
     case 'potato':
     case 'cabage':
    case 'garlic':
console.log('tai darzove');
     break;
     default:
     console.log('no data');
}
// --- UZDUTYS Switch  ---- 3  ---

let weekDay = 4
switch (weekDay) {
    case 0:
        day= 'Monday';
        break;
        case 1:
        day= 'Tuesday';
        break;
        case 2:
        day= 'Wendsday';
        break;
        case 3:
        day= 'Thursday';
        break;
        case 4:
        day= 'Friday';
        break;
        case 5:
        day= 'Saturday';
        break;
        case 5:
        day= 'Sunday';
        break;
}
console.log (day)

// --------------- UZDUTYS Ternary  ---- 1  ---
let myName = 'sigitas' 
myName = (myName.length<=5) ? alert('Short name') :  alert('Long name') ;

// ------------------ UZDUTYS Ternary  ---- 2  ---
let clientAge =  21
let legalAge =  21
clientAge >= legalAge ? alert('Can drive') :  alert('Can"t drive') ;

// ----------------- UZDUTYS Ternary  ---- 3  ---

let clientAge1 =33
let legalAge1 =  21
  
clientAge1 <=0  ? alert('Invalid age') :clientAge1 >=120
 ? alert('Invalid age') : clientAge1 >= legalAge1 ? alert('Can drive') :  alert('Can"t drive')

 // ----------------- UZDUTYS Ternary  ---- 4  ---

 let phone = 'iphone'

 const isIphoneUser = phone ? 'true': 'false'
console.log(isIphoneUser)

 // ----------------- UZDUTYS Loop  ---- 1  -----

for(let d = 0; d < 6; d++ ){
    console.log("first", d)
}
for(let d = 5; d >= 2; d-- ){
    console.log("stipria", d)
}
// ----------------- UZDUTYS Loop  ---- 3  -----

for(let f=0; f<=5;f++)(
    console.log(f,'i')
)
// ----------------- UZDUTYS Loop  ---- 3  -----

for(let f=10; f>0;f--)

    console.log(f,'i')

 
    let Car = 'gaz'
    switch(Car){
        case 'vw':
        case 'audi':
         case 'bentley':
        case 'bug':
         case 'lamb':
             console.log('vw grupe')
             break;
        case 'bmw':
            case 'mini':
                case 'rols':
                    console.log('bmw grupe')
                    break;
                    default: console.log('nepriklauso')
    }

    let userIn =  'mork'
    switch(userIn){
        case 'mork':
        case 'bulv':
        case 'svog':
        case 'burok':
            console.log('darzovele')
            break;
            case 'slyva':
            case 'mango':
            case 'banan':
                console.log('vaisiukas')
            break;
            default: console.log('nera sarase')

    }

    let dayDay = 3
    switch (dayDay){
        case 0:
            Day = 'pirm';
            break;
        case 1:
            Day = 'antr';
            break;
        case 2:
            Day = 'trec';
            break;
        case 3:
            Day = 'ketv';
            break;
        case 4:
            Day = 'penkt';
             break;               
    } console.log(Day)

    let nameL = 'spik'
nameL = (nameL.length < 5) ? console.log('short name') : console.log('long name')

    let clientA = 17;
    let legalA = 18;
    clientA >= legalA ? console.log('can drive') : console.log('can not drive')

    let clientAg = 22;
    let legalAg = 18;
    clientAg < 0 || clientAg> 120? console.log('invalid age'): clientAg >= legalAg ? console.log('can drive') : console.log('can not drive')  

    let phonE = 'Iphone'
    let isiphoneUser = phonE === 'Iphone';
    console.log(!!'Iphone')

  

    for(let namee=0; namee<10;namee++)
    console.log(namee, ' Sam')

    let nam = 'Sam';
    let ind = 10;
    for(let nam=0; nam< ind ;nam++)
    console.log( ' Sam')

    for(i=10;i<0;i--);
    console.log(i," kartu")