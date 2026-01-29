'use client'

import React from 'react'
import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface Feature {
  name: string
  basic: boolean
  professional: boolean
  premium: boolean
}

const features: Feature[] = [
  { name: 'تحليل الأعراض الأساسي', basic: true, professional: true, premium: true },
  { name: 'النتائج الفورية', basic: true, professional: true, premium: true },
  { name: 'التقارير البسيطة', basic: true, professional: true, premium: true },
  { name: 'التقارير المفصلة', basic: false, professional: true, premium: true },
  { name: 'الرسوم البيانية', basic: false, professional: true, premium: true },
  { name: 'تصدير PDF', basic: false, professional: true, premium: true },
  { name: 'حفظ السجلات', basic: false, professional: true, premium: true },
  { name: 'استشارة مباشرة', basic: false, professional: false, premium: true },
  { name: 'الأولوية في الدعم', basic: false, professional: false, premium: true },
  { name: 'التنبيهات الصحية', basic: false, professional: true, premium: true },
  { name: 'تحليل الاتجاهات', basic: false, professional: false, premium: true },
  { name: 'التقارير الشهرية', basic: false, professional: false, premium: true }
]

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            مقارنة المميزات
          </h2>
          <p className="text-lg text-muted">
            اختر الخطة المناسبة لاحتياجاتك الصحية
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="overflow-x-auto rounded-2xl border border-border"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50 dark:bg-blue-950/30 border-b border-border">
                <th className="px-6 py-4 text-left font-bold text-foreground">المميزات</th>
                <th className="px-6 py-4 text-center font-bold text-foreground">
                  <div className="text-2xl mb-2">💙</div>
                  الأساسي
                  <div className="text-xs text-muted mt-1">مجاني</div>
                </th>
                <th className="px-6 py-4 text-center font-bold text-foreground bg-blue-100 dark:bg-blue-950/50">
                  <div className="text-2xl mb-2">⭐</div>
                  احترافي
                  <div className="text-xs text-muted mt-1">$9.99/شهر</div>
                </th>
                <th className="px-6 py-4 text-center font-bold text-foreground">
                  <div className="text-2xl mb-2">👑</div>
                  بريميوم
                  <div className="text-xs text-muted mt-1">$29.99/شهر</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-foreground">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {feature.basic ? (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="inline-flex p-2 rounded-lg bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400"
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <div className="inline-flex p-2 rounded-lg bg-red-100 dark:bg-red-900/40 text-red-400">
                        <X className="w-5 h-5" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50/50 dark:bg-blue-950/20">
                    {feature.professional ? (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="inline-flex p-2 rounded-lg bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400"
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <div className="inline-flex p-2 rounded-lg bg-red-100 dark:bg-red-900/40 text-red-400">
                        <X className="w-5 h-5" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.premium ? (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="inline-flex p-2 rounded-lg bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400"
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <div className="inline-flex p-2 rounded-lg bg-red-100 dark:bg-red-900/40 text-red-400">
                        <X className="w-5 h-5" />
                      </div>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted mb-6">
            جميع الخطط تشمل الدعم الفني والأمان العالي والخصوصية الكاملة
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            اختر الخطة المناسبة
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
