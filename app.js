import express from 'express'
import path from 'path'


const app = express()

app.listen(3030, () =>{
  console.log("Servidor corriendo en el puerto 3030")
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./views/home.html'))
})

app.get('/register', (req, res) => {
  res.sendFile(path.resolve('./views/register.html'))
  console.log(req)
})

app.get('/login', (req, res) => {
  res.sendFile(path.resolve('./views/login.html'))
  console.log(req)
})