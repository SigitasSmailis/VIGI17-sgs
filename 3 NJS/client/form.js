
document.querySelector('form').addEventListener('submit',async (e) => {
	e.preventDefault();
	const inputVal = document.getElementById('car').value
	console.log(inputVal)
	const body = {
		car:inputVal,
	}
	const response = await fetch('http://localhost:3002/',{
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		}
	})
	console.log(await response.json());
})

// document.querySelector('form').addEventListener('submit', async (e) => {
// 	e.preventDefault();
// 	const inputValue = document.getElementById('car').value;
// 	const body = {
// 		car: inputValue,
// 	};
// 	const response = await fetch('http://localhost:3001/', {
// 		method: 'POST',
// 		body: JSON.stringify(body),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});
// 	console.log(await response.json());
// });
console.log('forma test')
