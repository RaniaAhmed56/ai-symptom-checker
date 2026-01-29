'use client'

import React, { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // محاكاة الإرسال
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (email.includes('@')) {
      setStatus('success')
      setMessage('شكراً لاشتراكك! تحقق من بريدك الإلكتروني.')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    } else {
      setStatus('error')
      setMessage('الرجاء إدخال بريد إلكتروني صحيح')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="py-16 px-4 bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            اشترك في نشرتنا البريدية
          </h2>
          <p className="text-lg opacity-90 mb-8">
            احصل على أحدث النصائح الصحية والتحديثات مباشرة في بريدك الإلكتروني
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                disabled={status === 'loading'}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-white dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 font-bold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  جاري...
                </>
              ) : (
                'اشترك الآن'
              )}
            </motion.button>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-white bg-green-500/20 border border-green-500/30 rounded-lg p-3"
            >
              <CheckCircle className="w-5 h-5" />
              {message}
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-white bg-red-500/20 border border-red-500/30 rounded-lg p-3"
            >
              <AlertCircle className="w-5 h-5" />
              {message}
            </motion.div>
          )}

          <p className="mt-6 text-sm opacity-75">
            ✉️ لا نرسل بريد مزعج • 🔒 بيانات محمية • 🚀 إلغاء الاشتراك بسهولة
          </p>
        </motion.div>
      </div>
    </section>
  )
}
