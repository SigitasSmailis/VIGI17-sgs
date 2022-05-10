// console.log('Veikia');

const getCar = async () =>{
	try { 
		const response = await fetch('http://localhost:3002/')
		const data = await response.json()
console.log(response)
return data;
	} catch (err) {
		console.log(err)
	}
}
const outputE = document.getElementById('output')
const main = async () =>{
	const cars = await getCar();
	if (cars.length === 0) {
		outputE.textContent = "NERA Autos"
return
			}
	cars.forEach(car => {
		const p = document.createElement('p')
		p.textContent = car
		outputE.append(p)
	});		
	console.log('nera masinu')
}
main()

// const getCars = async () =>{
// 	try {
// 		const response =  await fetch('http://localhost:3001/')
// 		const data = await response.json()
// 	console.log(data)
// 	return data;
// 	} catch (err) {
// 		console.log(err)
// 	}
// }
// const outputEl = document.getElementById('output');
// const main = async () => {
// 	const cars = await getCars();
// 	if (cars.length === 0) {
// 		console.log('Nera masinu');
// 		outputEl.textContent = 'Automobiliu nera';
// 		return
// 	}
// 	cars.forEach((car) => {
// 		const p = document.createElement('p');
// 		p.textContent = car;
// 		outputEl.append(p);
// 	});
// 	console.log(cars);
// };
// main();

