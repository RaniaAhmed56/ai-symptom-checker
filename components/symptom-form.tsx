'use client'

import React, { useState } from 'react'
import { AlertCircle, Loader, Send, Lightbulb, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

interface SymptomFormProps {
  onAnalysisComplete: (result: any) => void
}

export default function SymptomForm({ onAnalysisComplete }: SymptomFormProps) {
  const [symptoms, setSymptoms] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const commonSymptoms = [
    { label: 'Headache', emoji: '🤕' },
    { label: 'Fever', emoji: '🌡️' },
    { label: 'Cough', emoji: '🤧' },
    { label: 'Sore Throat', emoji: '😖' },
    { label: 'Fatigue', emoji: '😴' },
    { label: 'Nausea', emoji: '🤢' },
    { label: 'Body Aches', emoji: '💪' },
    { label: 'Shortness of Breath', emoji: '😮‍💨' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!symptoms.trim()) {
      setError('Please enter at least one symptom')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms: symptoms.trim() })
      })

      if (!response.ok) throw new Error('Analysis failed')

      const data = await response.json()
      onAnalysisComplete(data)
    } catch (err) {
      setError('Failed to analyze symptoms. Make sure the backend server is running.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const addSymptom = (symptom: string) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms(symptoms ? `${symptoms}, ${symptom}` : symptom)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-slate-50 dark:to-slate-900 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
          >
            Describe Your Symptoms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted"
          >
            Tell us what you're experiencing for accurate AI analysis
          </motion.p>
        </div>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-xl mb-6"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Textarea */}
            <div>
              <label htmlFor="symptoms" className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                Enter Your Symptoms
              </label>
              <div className="relative">
                <textarea
                  id="symptoms"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="e.g., I have a severe headache and fever for 2 days, also experiencing fatigue..."
                  className="w-full h-40 p-4 rounded-xl border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 resize-none transition-all"
                />
                <div className="absolute bottom-3 right-3 text-sm text-muted">
                  {symptoms.length} characters
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs text-muted mt-2 flex items-center gap-2"
              >
                <Lightbulb className="w-4 h-4" />
                Be as detailed as possible including when symptoms started and their severity
              </motion.p>
            </div>

            {/* Quick Add Buttons */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                Quick Add Common Symptoms
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {commonSymptoms.map((symptom, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => addSymptom(symptom.label)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 rounded-lg bg-background border border-border hover:border-blue-400 dark:hover:border-blue-600 text-sm font-medium text-foreground transition-all flex items-center justify-center gap-2"
                  >
                    <span>{symptom.emoji}</span>
                    <span>{symptom.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200"
              >
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <p className="text-sm">{error}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-medical text-white font-bold text-lg hover:shadow-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
            >
              {isLoading ? (
                <>
                  <Loader size={22} className="animate-spin" />
                  <span>Analyzing Your Symptoms...</span>
                </>
              ) : (
                <>
                  <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                  <span>Analyze Symptoms</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
          >
            <p className="text-sm text-blue-900 dark:text-blue-200 flex items-start gap-3">
              <Clock className="w-5 h-5 shrink-0 mt-0.5" />
              <span>
                Analysis typically takes 2-5 seconds. Your information stays completely private on your device.
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted"
        >
          <p>
            This tool provides AI-powered analysis for informational purposes only and is not a substitute for professional medical advice.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
