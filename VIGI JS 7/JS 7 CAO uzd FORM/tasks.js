//    ---    7    --  1   uzduotis  Form---

// Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų.
// Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus
//  50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus
//   100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui
//  įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų 
//  tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

document.getElementById('form5').addEventListener('input', (event) => {
	event.preventDefault();
const years = document.getElementById('years').value;
let bonus = 50;
if (years >= 10){
	bonus += 50;
}
if (years >=20){
	bonus +=100;
}
document.getElementById('output').textContent ='Jusu premija:' 
})

// kazkur klaida

//    ---    7    --  2 uzduotis---   Froma  -----

// Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar

//  jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie
//   turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš
// 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible 
// by four, except that any year divisible by 100 is a leap year only if it
// is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne
//  vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad 
//  rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.


document.getElementById('form').addEventListener('submit',(event) =>{
event.preventDefault();
// galima rasyti ri taip by ID su document
// const textInVa = +document.getElementById('year').value

// + pries event stringa pavercia index  arba su atrget nes jis jau iesko to elemento 
// formoje
const textInVa = +event.target.querySelector('input[name=year]').value
if (textInVa % 4 === 0 || textInVa % 100 === 0 && textInVa % 400 === 0){
	console.log('kelemieji')
	document.querySelector('h2').textContent= 'Keliamieji metai'
}
else {console.log('nekeliami' )
document.querySelector('h2').textContent= 'Nekeliamieji metai'
}

})
//    ---    7  pask  --  3 uzduotis---   Forma  -----

document.getElementById(form4).addEventListener('input', (event)=> {
	event.preventDefault()
	const tempInpVal = event.target.querySelector('input[name="temp"]').value
	console.log(tempInpVal)
	if (tempInpVal) {
		const celc = +(tempInpVal)
		const farenh = ((celc* 1.8)+32)
		outputElement.textContent = farenh
	}

	const tempOutValue = document.getElementById('output').value

//  kazkas ne taip

} )

//     ---    7  pask  --  4 uzduotis---   Forma  -----

document.getElementById('form2').addEventListener('submit', (event) => {
event.preventDefault()
const emailInpVal = document.getElementById('email').value
const checkboxInpVal = document.getElementById('checkbox').checked
console.log(checkboxInpVal)
// tikriname ar teisingas pastas Validacija, ! pazymi neigiama tuscia stringa
if (!emailInpVal){
	alert('blogas email')
	return;
}
// --------------
if (checkboxInpVal === true) {
	alert('sekmingai registruota '+ emailInpVal)
} else {
	alert('registracija nesekminga')
}
// tikriname ar teisingas pastas Validacija
if (emailInpVal === ''){
	alert('blogas email')
}
})

// document.getElementById('form2').addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const emailInputValue = document.getElementById('email').value;
// 	const checkboxValue = document.getElementById('checkbox').checked;
// 	console.log(emailInputValue);
// 	// if (emailInputValue === '') {
// 	// 	alert('Blogas Email');
// 	// }
// 	if (!emailInputValue) {
// 		alert('Blogas Email');
// 	} else if (checkboxValue) {
// 		alert('Sekmingai uzregistruota ' + emailInputValue);
// 	} else {
// 		alert('Registracija nesėkminga');
// 	}
// });


//    ---    7  pask  --  5 uzduotis---   Forma  -----

// Sukurk programą, kurioje bus du inputai - vardas (text) ir 
// skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis,
//  po apačia turi susikurti list itemų tiek, kiek tu parašei 
//  skaičių. List itemuose turi būti tavo vardas :)

document.getElementById('form3').addEventListener('submit', (event) => {
	event.preventDefault()
	const nameInpVal = event.target.querySelector('input[name="name"]').value
console.log(nameInpVal)
	let countInpVal = +event.target.querySelector('input[name="count"]').value
console.log(countInpVal)
	const ulEl = document.querySelector('ul');
	let text = '';
	while (countInpVal){
		// += yra pridedu kazka 
		// text +='<li>'+ nameInpVal + '</li>'
		text +='<li>'+ nameInpVal + '</li>'
		countInpVal--;
	}
	ulEl.innerHTML = text;

})


// document.getElementById('form3').addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const nameInputValue =
// 		event.target.querySelector('input[name="name"').value;
// 	let countInputValue =
// 		+event.target.querySelector('input[name="count"').value;
// 	const ulEl = document.querySelector('ul');
// 	let text = '';
// 	while (countInputValue) {
// 		// text += '<li>' + nameInputValue + '</li>';
// 		text = text + '<li>' + nameInputValue + '</li>';
// 		countInputValue--;
// 	}
// 	ulEl.innerHTML = text;
// });


