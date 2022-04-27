// fetch - metodas skirtas siusti uzklausa
// const p1 = new Promise((res, rej) => rej('test'));
// console.log(p1);

// const promise = fetch('./data.json');
// promise
// 	.then((resp) => resp.json())
// 	.then((data) => {
// 		data.forEach((item) => {
// 			console.log(item);
// 		});
// 	});
const promise = fetch('./data.json', {
	method: 'GET',
    body:{},
});
promise
	.then((resp) => resp.json())
	.then((data) => {
		data.forEach((item) => {
			console.log(item);
		});
	});
// .catch((err) =>console.log(err))


// fetch - metodas skirtas siusti uzklausa
// const p1 = new Promise((res, rej) => rej('test'));
// console.log(p1);

// const promise = fetch('./data.json');
// promise
// 	.then((resp) => resp.json())
// 	.then((data) => {
// 		data.forEach((item) => {
// 			console.log(item);
// 		});
// 	});
// const promise = fetch('./data.json', {
// 	method: 'GET',
// });
// promise
// 	.then((resp) => resp.json())
// 	.then((data) => {
// 		data.forEach((item) => {
// 			console.log(item);
// 		});
// 	});

