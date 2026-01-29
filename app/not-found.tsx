'use client'

import React from 'react'
import { AlertTriangle, Home, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-slate-50 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 dark:bg-red-900/30">
            <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold mb-4 bg-linear-to-r from-red-600 to-pink-500 dark:from-red-400 dark:to-pink-300 bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-3xl font-bold text-foreground mb-3">
            الصفحة غير موجودة
          </h2>
          
          <p className="text-lg text-muted mb-8">
            عذراً، لم نستطع العثور على الصفحة التي تبحث عنها. قد تكون الرابط خاطئاً أو قد تم حذف الصفحة.
          </p>

          {/* Error Code */}
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 mb-8">
            <p className="text-sm text-red-700 dark:text-red-300 font-mono">
              Error: Page Not Found (404)
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-medical text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Home className="w-5 h-5" />
                العودة للرئيسية
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-12 text-muted text-sm opacity-50"
        >
          <p>يمكنك محاولة العودة إلى الصفحة الرئيسية أو استخدام البحث</p>
        </motion.div>
      </div>
    </div>
  )
}
