
const getCars = async () =>{
	try { 
		const response = await fetch('http://localhost:8001/')
		// const data = await response.json()
console.log(response)
return data;
	} catch (err) {
		console.log(err)
	}
}
getCars()


// fetch(URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
  


console.log('test client')