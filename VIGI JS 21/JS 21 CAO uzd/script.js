// --- 21 PASK  UZDUTIS 2  ---- 
// promise kitoks budas

fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
.then((response)  => response.json())
.then((value) => {console.log(value);
const person = value.find((pesron =>console.log(person) => person.name === 'Kristupas Lapeika'))
})

fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
	.then((response) => response.json())
	.then((value) => {
		console.log(value);
		const person = value.find(
			(person) => person.name === 'Kristupas Lapeika'
		);
		if (person) {
			// if (person.vip) {
			// 	document.body.textContent = `${person.name} yra Vip`;
			// }
			// document.body.textContent = person.vip
			// 	? `${person.name} yra Vip`
			// 	: '';
			document.body.textContent = person.vip && `${person.name} yra Vip`;
		} else {
			document.body.textContent = 'Tokio zmogaus nera';
		}
	});






// --- 21 PASK  UZDUTIS 3  ---- 

const tableBody = document.querySelector('tbody');
const outputEl = document.getElementById('output');
fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding')
	.then((response) => response.json())
	.then((value) => {
		// for (let item of value) {
		// 	const tableRow = document.createElement('tr');
		// 	const nameCell = document.createElement('td');
		// 	const attendCell = document.createElement('td');
		// 	const plusOneCell = document.createElement('td');
		// 	nameCell.textContent = item.name;
		// 	attendCell.textContent = item.attending ? '+' : '-';
		// 	plusOneCell.textContent = item.plusOne ? '+' : '-';
		// 	tableRow.append(nameCell, attendCell, plusOneCell);
		// 	tableBody.append(tableRow);
		// }
		// for (let item = 0; item < value.length; item++) {
		// 	const tableRow = document.createElement('tr');
		// 	const nameCell = document.createElement('td');
		// 	const attendCell = document.createElement('td');
		// 	const plusOneCell = document.createElement('td');
		// 	nameCell.textContent = value[item].name;
		// 	attendCell.textContent = value[item].attending ? '+' : '-';
		// 	plusOneCell.textContent = value[item].plusOne ? '+' : '-';
		// 	tableRow.append(nameCell, attendCell, plusOneCell);
		// 	tableBody.append(tableRow);
		// }
		value.forEach((item) => {
			const tableRow = document.createElement('tr');
			const nameCell = document.createElement('td');
			const attendCell = document.createElement('td');
			const plusOneCell = document.createElement('td');
			nameCell.textContent = item.name;
			attendCell.textContent = item.attending ? '+' : '-';
			plusOneCell.textContent = item.plusOne ? '+' : '-';
			tableRow.append(nameCell, attendCell, plusOneCell);
			tableBody.append(tableRow);
		});
		const count = value.reduce(
			(acc, curr) => {
				if (curr.attending) acc.attending += 1;
				if (curr.attending && curr.plusOne) acc.test += 1;
				if (curr.plusOne) acc.plusOne += 1;
				return acc;
			},
			{
				attending: 0,
				plusOne: 0,
				test: 0,
			}
		);
		// outputEl.innerText = 'Zmoniu skaicius:' + value.length;
		outputEl.innerText = `Zmoniu skaicius: ${value.length}\n Attending: ${count.attending}\n PlusOne: ${count.plusOne}\n Is attending ateina tiek zmoniu su plusOne ${count.test}\n\n`;
	});
