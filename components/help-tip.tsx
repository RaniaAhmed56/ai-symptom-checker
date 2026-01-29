'use client'

import React, { useState } from 'react'
import { HelpCircle, X, Lightbulb } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Tip {
  title: string
  content: string
  category: 'info' | 'warning' | 'success'
}

const tips: Tip[] = [
  {
    title: 'نصيحة مفيدة',
    content: 'كن دقيقاً عند وصف الأعراض. كلما زاد التفصيل، كلما كان التحليل أفضل.',
    category: 'info'
  },
  {
    title: 'معلومة صحية',
    content: 'الأعراض المتشابهة قد تشير إلى أمراض مختلفة. استشر الطبيب دائماً للتأكد.',
    category: 'warning'
  },
  {
    title: 'نصيحة ذهبية',
    content: 'احفظ التقارير التي تحصل عليها وأحضرها معك عند زيارة الطبيب.',
    category: 'success'
  },
  {
    title: 'تذكير مهم',
    content: 'التطبيق يعمل بنسبة 100% بدون إنترنت بعد التحميل الأول.',
    category: 'info'
  },
  {
    title: 'نصيحة صحية',
    content: 'لا تتأخر في استشارة الطبيب إذا كانت الأعراض حادة أو مستمرة.',
    category: 'warning'
  }
]

export default function HelpTip() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTip, setCurrentTip] = useState(0)

  const handleNext = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length)
  }

  const handlePrev = () => {
    setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length)
  }

  const tip = tips[currentTip]

  const categoryStyles = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300'
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-medical text-white shadow-lg flex items-center justify-center z-40 hover:shadow-xl transition-all"
        title="عرض النصائح"
      >
        <HelpCircle className="w-6 h-6" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card border border-border rounded-2xl shadow-xl z-50 p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-bold text-foreground">نصائح مفيدة</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tip Content */}
              <motion.div
                key={currentTip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 rounded-lg border mb-6 ${categoryStyles[tip.category]}`}
              >
                <h4 className="font-bold mb-2">{tip.title}</h4>
                <p className="text-sm leading-relaxed">{tip.content}</p>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-background transition-colors font-medium text-sm"
                >
                  السابق
                </button>

                <div className="flex items-center gap-1">
                  {tips.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTip
                          ? 'bg-blue-600 dark:bg-blue-400'
                          : 'bg-border'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors font-medium text-sm"
                >
                  التالي
                </button>
              </div>

              {/* Counter */}
              <p className="text-center text-xs text-muted">
                {currentTip + 1} من {tips.length}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
