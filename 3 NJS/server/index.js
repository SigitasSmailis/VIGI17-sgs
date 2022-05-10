
const express = require('express')
const cors = require('cors')
const PORT = 3002


const app = express()
app.use(cors())
// serveris ir gauna duomenis(body) ir siuncia tauo pat metu, tai reikia rasyti
 app.use(express.json())

const cars = []



app.get('/', (req,res) =>{
	// res.send('serveris veikia')
	res.json(cars)
})

// severis  taip pat ir sukuria savo duomenis per postman

app.post('/', (req,res) => {
	console.log(req.body);

	// 
	cars.push(req.body.car )
	res.json({
		status : 'masina irasyta', 
		cars
	})
})

// serveris klauso fornto veiksmu

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));



//  console.log('labukas')