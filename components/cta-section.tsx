'use client'

import React from 'react'
import { ArrowRight, Download, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            ابدأ رحلتك الصحية اليوم
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            احصل على تحليل فوري وموثوق لأعراضك، واستشر خبرائنا في أي وقت تشاء
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-all text-lg"
            >
              <Play className="w-5 h-5" />
              ابدأ الآن مجاناً
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08, borderColor: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-lg"
            >
              <Download className="w-5 h-5" />
              تحميل التطبيق
            </motion.button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              بيانات محمية 100%
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              نتائج فورية
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              دقة عالية جداً
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏥</span>
              معتمد طبياً
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-10 left-10 text-4xl opacity-20"
        >
          💊
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 right-10 text-4xl opacity-20"
        >
          🏥
        </motion.div>
      </div>
    </section>
  )
}
