import express from 'express'
import cors from 'cors'
import { analyzeRoute } from './routes/analyze.js'
import { pdfRoute } from './routes/pdf.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '10mb' }))

app.post('/analyze', analyzeRoute)
app.post('/generate-pdf', pdfRoute)

app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log('Make sure Ollama is running on localhost:11434')
})
