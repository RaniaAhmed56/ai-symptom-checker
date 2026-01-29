'use client'

import React, { useState } from 'react'
import { Share2, Copy, CheckCircle2, Mail, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ShareComponentProps {
  result: {
    diagnosis: string[]
    severity: string
    explanation: string
  }
}

export default function ShareComponent({ result }: ShareComponentProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const generateSummary = () => {
    return `
📋 تحليل الأعراض - تقرير طبي

🔴 مستوى الشدة: ${result.severity}

💊 التشخيصات المحتملة:
${result.diagnosis.map((d) => `• ${d}`).join('\n')}

📝 الشرح:
${result.explanation}

⚕️ تنبيه مهم:
هذا التحليل معلومات عامة فقط وليس تشخيصاً طبياً. يرجى استشارة الطبيب.

🔗 تم إنشاؤه باستخدام MedAI Checker
    `.trim()
  }

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateSummary())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent('تقرير تحليل الأعراض من MedAI Checker')
    const body = encodeURIComponent(generateSummary())
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(generateSummary())
    window.open(`https://wa.me/?text=${text}`)
  }

  return (
    <div className="relative">
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all font-semibold"
      >
        <Share2 className="w-4 h-4" />
        مشاركة التقرير
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50"
          >
            <div className="p-3 space-y-2">
              {/* Copy to Clipboard */}
              <motion.button
                onClick={handleCopyToClipboard}
                whileHover={{ x: 5 }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background transition-colors text-left"
              >
                <motion.div
                  key={copied ? 'check' : 'copy'}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  {copied ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  )}
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">
                    {copied ? 'تم النسخ!' : 'نسخ التقرير'}
                  </p>
                  <p className="text-xs text-muted">انسخ النص إلى الحافظة</p>
                </div>
              </motion.button>

              {/* Email Share */}
              <motion.button
                onClick={handleEmailShare}
                whileHover={{ x: 5 }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background transition-colors text-left"
              >
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-foreground">إرسال بالبريد</p>
                  <p className="text-xs text-muted">شارك عبر البريد الإلكتروني</p>
                </div>
              </motion.button>

              {/* WhatsApp Share */}
              <motion.button
                onClick={handleWhatsAppShare}
                whileHover={{ x: 5 }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background transition-colors text-left"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-semibold text-foreground">واتس آب</p>
                  <p className="text-xs text-muted">شارك عبر الواتس</p>
                </div>
              </motion.button>

              {/* Divider */}
              <div className="border-t border-border my-2" />

              {/* Info */}
              <p className="text-xs text-muted text-center py-2">
                يحتوي التقرير على تلخيص التحليل والتوصيات
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40"
        />
      )}
    </div>
  )
}
