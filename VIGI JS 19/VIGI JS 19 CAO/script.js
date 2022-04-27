console.log(document.cookie = 'name=Petralis')

localStorage.setItem('name', 'petrulelis')

console.log(localStorage.getItem('name'))


document.querySelector('h1').textContent = localStorage.getItem('name')
document.forms[0].addEventListener('submit', (e) => {
	e.preventDefault();
	const name = e.target.elements.name.value;

	const array = ['petris,daf '];
	array.push(name);


localStorage.setItem('name', array);

})