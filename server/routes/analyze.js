import { queryOllama } from '../services/ollama.js'

export async function analyzeRoute(req, res) {
  try {
    const { symptoms } = req.body

    if (!symptoms || symptoms.trim().length === 0) {
      return res.status(400).json({ error: 'Symptoms are required' })
    }

    const prompt = `You are a medical AI assistant. A patient reports the following symptoms: "${symptoms}"

    Based on these symptoms, provide a JSON response with the following structure (respond ONLY with valid JSON):
    {
      "diagnosis": ["condition1", "condition2", "condition3"],
      "severity": "Low|Medium|High|Critical",
      "explanation": "Brief explanation of the possible conditions",
      "recommended_action": "What the patient should do",
      "when_to_see_doctor": "When immediate medical attention is needed"
    }

    Important: Return ONLY valid JSON, no additional text.`

    try {
      const response = await queryOllama(prompt)
      
      try {
        const result = JSON.parse(response)
        res.json(result)
      } catch {
        // Fallback response if JSON parsing fails
        res.json({
          diagnosis: ['Unable to parse AI response'],
          severity: 'Medium',
          explanation: response || 'Analysis could not be completed',
          recommended_action: 'Please consult a healthcare professional',
          when_to_see_doctor: 'If symptoms persist or worsen'
        })
      }
    } catch (ollamaError) {
      // Ollama is not available - provide mock response
      console.warn('Ollama not available, using mock response')
      const mockDiagnosis = {
        "diagnosis": [
          "Common Cold",
          "Viral Infection",
          "Seasonal Allergy"
        ],
        "severity": "Low",
        "explanation": "Based on the symptoms provided, these are the most common conditions. However, this is a demonstration response as the AI service is not currently available.",
        "recommended_action": "Rest, stay hydrated, and monitor your symptoms. Over-the-counter medications may help with symptom relief.",
        "when_to_see_doctor": "If symptoms persist for more than 7 days or worsen significantly."
      }
      res.json(mockDiagnosis)
    }
  } catch (error) {
    console.error('Analyze error:', error)
    // Fallback mock response
    res.json({
      diagnosis: ['General Illness'],
      severity: 'Medium',
      explanation: 'Unable to perform analysis at this time',
      recommended_action: 'Please try again or consult a healthcare professional',
      when_to_see_doctor: 'If symptoms are severe or persistent'
    })
  }
}
