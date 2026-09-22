import express from 'express'
import cors from 'cors'
import db from './database.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/clientes', (req, res) => {
  const clientes = db
    .prepare('SELECT id, nome, email, telefone, criado_em FROM clientes ORDER BY id DESC')
    .all()

  res.json(clientes)
})

app.post('/api/clientes', (req, res) => {
  const { nome, email, telefone } = req.body

  if (!nome || !email || !telefone) {
    return res.status(400).json({
      erro: 'Nome, e-mail e telefone sao obrigatorios.',
    })
  }

  const resultado = db
    .prepare('INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)')
    .run(nome, email, telefone)

  const cliente = db
    .prepare('SELECT id, nome, email, telefone, criado_em FROM clientes WHERE id = ?')
    .get(resultado.lastInsertRowid)

  res.status(201).json(cliente)
})

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`)
})
