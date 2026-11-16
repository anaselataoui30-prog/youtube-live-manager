import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    time: new Date().toISOString(),
    uptime: process.uptime()
  })
})

app.get('/api/auth/check', (req, res) => {
  // Placeholder — we'll wire password checking later
  res.json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`✓ API running on http://localhost:${PORT}`)
})
