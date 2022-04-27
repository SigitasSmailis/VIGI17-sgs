// console.log(document.cookie = 'name=Petralis')

// localStorage.setItem('name', 'petrulelis')

// console.log(localStorage.getItem('name'))


// document.querySelector('h1').textContent = localStorage.getItem('name')
// document.forms[0].addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const name = e.target.elements.name.value;

// 	const array = ['petris,daf '];
// 	array.push(name);


// localStorage.setItem('name', array);

// })


// ----   19 PASK cookies   3 uzduotis -- -  

document.forms[0].addEventListener('submit', (event) => {
	event.preventDefault();
	const inputValue = event.target.querySelector('input[name="task"]').value;
	const splitValue = inputValue.split(' ');
	const nameObjArr = [
		{
			name: splitValue[0],
			surname: splitValue[1],
		},
	];
	localStorage.setItem('name-array', JSON.stringify(nameObjArr));
	console.log(nameObjArr);
});
const localStorageValue = JSON.parse(localStorage.getItem('name-array'));
outputEl.textContent = localStorageValue[0].name + localStorageValue[0].surname;


