fetch('http://localhost:8000')
.then((res) => res.json())
.then((data) => console.log(data))