// importuojame express
const express = require('express')

//  inicializuojame

const app = express()
app.use(cors())

// serveris responds to uzklausa

app.get("/", (req, res) => {
    res.send('ok you get it')})

    // serveris klausosi

app.listen(8080, () => console.log('serveris viekia por 8080'))
