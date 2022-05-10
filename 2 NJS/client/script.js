

console.log('Veikia');

fetch('http://localhost:5500/about')
	.then((response) => response.json())
	.then((data) =>	console.log(data))


// fetch('http://localhost:5500/about').then((response) => console.log(response));

// console.log('Veikia');
// fetch('http://localhost:5500/about')
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));
