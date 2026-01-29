'use client'

import React, { useState } from 'react'
import { AlertCircle, Download, RefreshCw, TrendingUp, CheckCircle, Clock, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import ShareComponent from './share'
import RatingComponent from './rating'

interface ResultsProps {
  result: {
    diagnosis: string[]
    severity: string
    explanation: string
    recommended_action: string
    when_to_see_doctor: string
  }
  onNewAnalysis: () => void
}

export default function Results({ result, onNewAnalysis }: ResultsProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const severityLevels = [
    { level: 'Low', color: '#10b981', bgColor: 'bg-green-500', description: 'Monitor at home' },
    { level: 'Medium', color: '#f59e0b', bgColor: 'bg-yellow-500', description: 'Watch symptoms' },
    { level: 'High', color: '#ef4444', bgColor: 'bg-orange-500', description: 'Contact doctor' },
    { level: 'Critical', color: '#dc2626', bgColor: 'bg-red-600', description: 'Seek immediate care' }
  ]

  const currentSeverity = severityLevels.find(s => s.level === result.severity)

  const severityData = [
    { name: 'Low', value: result.severity === 'Low' ? 100 : 20, fill: '#10b981' },
    { name: 'Medium', value: result.severity === 'Medium' ? 100 : 20, fill: '#f59e0b' },
    { name: 'High', value: result.severity === 'High' ? 100 : 20, fill: '#ef4444' },
    { name: 'Critical', value: result.severity === 'Critical' ? 100 : 20, fill: '#dc2626' }
  ]

  const getSeverityColor = () => {
    switch (result.severity) {
      case 'Low':
        return 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200'
      case 'Medium':
        return 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200'
      case 'High':
        return 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700 text-orange-800 dark:text-orange-200'
      case 'Critical':
        return 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200'
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200'
    }
  }

  const handleDownloadPDF = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch('http://localhost:5000/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
      })

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'medical-report.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      alert('Failed to download PDF')
      console.error(err)
    } finally {
      setIsDownloading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-slate-50 dark:to-slate-900 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            Your Analysis Results
          </h2>
          <p className="text-lg text-muted">Based on your symptom description</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Severity Alert */}
          <motion.div
            variants={itemVariants}
            className={`p-8 rounded-2xl border-2 shadow-lg ${getSeverityColor()}`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className={`w-16 h-16 rounded-full ${currentSeverity?.bgColor} flex items-center justify-center`}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Severity: {result.severity}</h3>
                <p className="text-sm opacity-90">{currentSeverity?.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Severity Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-lg mb-4 text-foreground">Severity Levels</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={severityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted)" />
                  <YAxis stroke="var(--muted)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      color: 'var(--foreground)'
                    }}
                  />
                  <Bar dataKey="value" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Diagnosis */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              Possible Conditions
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {result.diagnosis.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-linear-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-200 dark:border-blue-700 text-foreground hover:shadow-md transition-shadow"
                >
                  <p className="font-medium">{condition}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Explanation */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              What This Means
            </h3>
            <p className="text-foreground leading-relaxed text-base bg-background rounded-lg p-4 border border-border">
              {result.explanation}
            </p>
          </motion.div>

          {/* Recommended Action */}
          <motion.div
            variants={itemVariants}
            className="bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-200 dark:border-blue-700 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Recommended Action
            </h3>
            <p className="text-foreground leading-relaxed text-base">
              {result.recommended_action}
            </p>
          </motion.div>

          {/* When to See Doctor */}
          <motion.div
            variants={itemVariants}
            className="bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-700 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-xl mb-4 text-red-900 dark:text-red-100 flex items-center gap-3">
              <AlertCircle className="w-6 h-6" />
              When to See a Doctor
            </h3>
            <p className="text-red-800 dark:text-red-200 leading-relaxed text-base">
              {result.when_to_see_doctor}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 rounded-xl bg-gradient-medical text-white font-bold text-lg hover:shadow-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isDownloading ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download Report
                </>
              )}
            </motion.button>

            <motion.button
              onClick={onNewAnalysis}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 rounded-xl border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 bg-background hover:bg-blue-50 dark:hover:bg-blue-900/20 font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              <RefreshCw className="w-5 h-5" />
              New Analysis
            </motion.button>

            <ShareComponent result={result} />
          </motion.div>

          {/* Rating */}
          <motion.div
            variants={itemVariants}
          >
            <RatingComponent 
              onSubmit={(rating, feedback) => {
                console.log(`Rating: ${rating}, Feedback: ${feedback}`)
              }}
            />
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            variants={itemVariants}
            className="text-center text-xs text-muted bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4"
          >
            <p className="font-semibold mb-1">⚠️ Important Disclaimer</p>
            <p>
              This analysis is for informational purposes only and should not replace professional medical advice. Always consult with a qualified healthcare provider for accurate diagnosis and treatment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
