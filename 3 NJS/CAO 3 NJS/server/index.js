const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8001



const cars = []

app.use(express.json());
app.use(cors())

app.get('/',(req,res) => {
    res.send(cars)
})


app.post("/", (req, res) => {
    console.log(req.body);
    res.send("OK pavyko")
  })



app. listen(PORT, () => console.log(`server veikia ${PORT} `) )