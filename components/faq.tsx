'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'هل هذا التطبيق يحل محل استشارة الطبيب؟',
    answer: 'لا، هذا التطبيق مصمم لأغراض إعلامية فقط. يجب عليك دائماً استشارة محترف طبي مؤهل للحصول على التشخيص الدقيق والعلاج المناسب.'
  },
  {
    question: 'هل بياناتي آمنة وخاصة؟',
    answer: 'نعم تماماً! جميع البيانات تبقى على جهازك ولا يتم إرسالها إلى أي خادم سحابي. التطبيق يعمل بالكامل بدون اتصال بالإنترنت.'
  },
  {
    question: 'كيف يعمل تحليل الأعراض؟',
    answer: 'يستخدم التطبيق نماذج الذكاء الاصطناعي المتقدمة لتحليل الأعراض التي تدخلها. يأخذ في الاعتبار الشدة والمدة والأعراض المصاحبة لتقديم تحليل شامل.'
  },
  {
    question: 'هل يمكن تنزيل التقرير النهائي؟',
    answer: 'نعم، يمكنك تنزيل تقرير PDF شامل يتضمن جميع تفاصيل التحليل والتوصيات. يمكنك طباعتها أو مشاركتها مع طبيبك.'
  },
  {
    question: 'كم مرة يمكن استخدام التطبيق؟',
    answer: 'يمكنك استخدام التطبيق عدد مرات غير محدود بدون تسجيل أو اشتراك. كل تحليل مستقل تماماً عن السابق.'
  },
  {
    question: 'ماذا لو كان لدي حالة طارئة؟',
    answer: 'إذا كنت تعاني من حالة طارئة، اتصل برقم الطوارئ المحلي (مثل 911 في الولايات المتحدة) أو توجه إلى أقرب مستشفى فوراً.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-muted">الإجابات على أسئلتك الأكثر شيوعاً حول التطبيق</p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-border rounded-xl overflow-hidden bg-card hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background transition-colors"
              >
                <span className="font-semibold text-foreground text-lg">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border"
                  >
                    <div className="px-6 py-4 bg-background text-muted leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted mb-4">لم تجد إجابتك؟</p>
          <a
            href="mailto:support@medai.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            تواصل معنا
          </a>
        </motion.div>
      </div>
    </section>
  )
}
