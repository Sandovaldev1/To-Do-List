import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/tareas', (req, res) => {
  const tareas = []
  res.json(tareas)
})

app.post('/tareas', (req, res) => {
  const nuevaTarea = req.body
  res.status(201).json(nuevaTarea)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
