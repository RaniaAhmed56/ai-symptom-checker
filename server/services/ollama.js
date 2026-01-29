export async function queryOllama(prompt) {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.1',
        prompt: prompt,
        stream: false,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}. Make sure Ollama is running locally.`)
    }

    const data = await response.json()
    return data.response || ''
  } catch (error) {
    console.error('Ollama query error:', error)
    throw error
  }
}
