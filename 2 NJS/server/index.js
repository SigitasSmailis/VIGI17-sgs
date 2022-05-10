
// es6 - import
// node by default naudoja commanJS modulius - require

const fn = require('./test-file');
//  isveda i ekrana taip
// console.log(fn.getMyName());
// console.log( fn.getLastName());
const PORT = 5500
const cors = require('cors')

//  server by express js  ==========

const express = require('express');
const { response } = require('express');

// console.log(express)

const app = express()
app.use(cors())

app.get('/', (req, response) => {
	response.write('hello world by express')
	response.end()
})
app.get('/about', (req, res) =>{
	// resp.write('labas pasauli cia ABOUT by express')
	// resp.end()
//   -- jeigu duomenys json budu
res.status(200).json({
	name: 'din ny'
	})
} )
app.listen(PORT, () => console.log(`server started  port: ${PORT}`))

//   =====================


//    ------------  serverio kurimas Node http rankiniu budu
// const http = require('http');
// // console.log(http)	
// const server = http.createServer((request, response) => {
// 	if (request.url  === '/'){
// 	response.write('labas pasauli is serverio puses')
// 	response.end()
// } else if ( request.url === '/about'){
// 	response.write('labas pasauli cia ABOUT')
// 	response.end()
// }
// })
// server.listen(PORT)
// -----------------
// console.log(`server started  port: ${PORT}`)









