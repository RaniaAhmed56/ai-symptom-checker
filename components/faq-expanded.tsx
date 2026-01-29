'use client'

import React, { useState } from 'react'
import { ChevronDown, MessageCircle, Clock, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'عام' | 'تقني' | 'طبي'
  icon: React.ReactNode
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'هل يمكن الاعتماد على نتائج التطبيق تماماً؟',
    answer: 'التطبيق يقدم معلومات استرشادية فقط ولا يحل محل الاستشارة الطبية. يجب عليك دائماً التوجه إلى طبيب متخصص للحصول على تشخيص نهائي وعلاج مناسب. نحن نوصي باستخدام التطبيق كأداة مساعدة لفهم أعراضك بشكل أفضل.',
    category: 'طبي',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'faq-2',
    question: 'كيف يحافظ التطبيق على خصوصيتي؟',
    answer: 'نحن نستخدم تقنيات التشفير المتقدمة لحماية بيانات المستخدمين. البيانات المدخلة لا تُحفظ على خوادمنا، وتُحذف فوراً بعد التحليل. نحترم خصوصيتك تماماً ولا نشارك معلوماتك مع أي جهات خارجية.',
    category: 'تقني',
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    id: 'faq-3',
    question: 'كم من الوقت يستغرق الحصول على النتائج؟',
    answer: 'عادة ما تظهر النتائج خلال ثوانٍ معدودة. يعتمد الوقت على سرعة الإنترنت لديك وعدد الأعراض المدخلة. في معظم الحالات، ستحصل على التحليل الكامل في أقل من 10 ثوان.',
    category: 'عام',
    icon: <Clock className="w-5 h-5" />
  },
  {
    id: 'faq-4',
    question: 'هل يمكنني استخدام التطبيق بدون الإنترنت؟',
    answer: 'حالياً، التطبيق يتطلب اتصال الإنترنت للتواصل مع خوادم التحليل. نحن نعمل على إطلاق نسخة محسّنة تدعم الوظائف الأساسية بدون الإنترنت في المستقبل القريب.',
    category: 'تقني',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'faq-5',
    question: 'هل التطبيق متوفر على الهواتف الذكية؟',
    answer: 'التطبيق متوفر عبر المتصفح على جميع الأجهزة (هواتف، أجهزة لوحية، حاسوب). نحن نعمل على تطوير تطبيقات مخصصة لـ iOS و Android قريباً.',
    category: 'عام',
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    id: 'faq-6',
    question: 'ماذا يجب أن أفعل إذا كانت النتائج مقلقة؟',
    answer: 'إذا حصلت على نتيجة تشير إلى حالة خطيرة، يجب عليك التوجه فوراً إلى أقرب عيادة طبية أو مستشفى. التطبيق يوفر معلومات استرشادية، ولا يمكن الاعتماد عليها كتشخيص نهائي. لا تتردد في طلب المساعدة الطبية العاجلة إذا لزم الأمر.',
    category: 'طبي',
    icon: <Zap className="w-5 h-5" />
  }
]

const categoryColors: Record<string, string> = {
  'عام': 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300',
  'تقني': 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300',
  'طبي': 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
}

export default function FAQExpanded() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل')

  const filteredFAQs = selectedCategory === 'الكل' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-muted">إجابات لأكثر الأسئلة التي يطرحها مستخدمونا</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {['الكل', 'عام', 'تقني', 'طبي'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-card border border-border text-foreground hover:border-blue-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <motion.button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full p-6 rounded-2xl bg-card border border-border hover:border-blue-300 dark:hover:border-blue-600 transition-all text-left"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 mt-1 shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.question}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category]}`}>
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-600 dark:text-blue-400 shrink-0 mt-1"
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border border-t-0 border-blue-200 dark:border-blue-800 rounded-b-2xl">
                        <p className="text-foreground leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-linear-to-r from-blue-100/50 dark:from-blue-950/30 to-cyan-100/50 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-3">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-muted mb-6">تواصل معنا مباشرة، فريقنا جاهز لمساعدتك</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            تواصل معنا
          </motion.button>
        </motion.div>

        {/* Search Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 text-center"
        >
          <p className="text-sm text-amber-900 dark:text-amber-100">
            💡 <strong>نصيحة:</strong> استخدم فلاتر الفئات أعلاه للعثور على الإجابات التي تبحث عنها بسرعة
          </p>
        </motion.div>
      </div>
    </section>
  )
}
