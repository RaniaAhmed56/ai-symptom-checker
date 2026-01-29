'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Landing from '@/components/landing'
import SymptomForm from '@/components/symptom-form'
import Results from '@/components/results'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'form' | 'results'>('home')
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isDark, setIsDark] = useState(false)

  const handleStartAnalysis = () => {
    setCurrentPage('form')
  }

  const handleAnalysisComplete = (result: any) => {
    setAnalysisResult(result)
    setCurrentPage('results')
  }

  const handleBackHome = () => {
    setCurrentPage('home')
    setAnalysisResult(null)
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.style.colorScheme = !isDark ? 'dark' : 'light'
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <Navigation onToggleDarkMode={toggleDarkMode} isDark={isDark} onHome={handleBackHome} />
      
      <main className="min-h-screen bg-background text-foreground">
        {currentPage === 'home' && <Landing onStart={handleStartAnalysis} />}
        {currentPage === 'form' && <SymptomForm onAnalysisComplete={handleAnalysisComplete} />}
        {currentPage === 'results' && analysisResult && (
          <Results result={analysisResult} onNewAnalysis={() => setCurrentPage('form')} />
        )}
      </main>
    </div>
  )
}
