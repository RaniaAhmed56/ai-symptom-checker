'use client'

import React, { useState } from 'react'
import { CheckCircle, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Plan {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: { name: string; included: boolean }[]
  recommended: boolean
  cta: string
  ctaStyle: 'primary' | 'secondary'
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'الأساسي',
    price: 0,
    period: 'مجاني',
    description: 'للاستخدام الشخصي الأساسي',
    features: [
      { name: 'تحليل غير محدود للأعراض', included: true },
      { name: 'نتائج فورية', included: true },
      { name: 'تقارير بسيطة', included: true },
      { name: 'دعم عبر البريد الإلكتروني', included: false },
      { name: 'حفظ السجلات الطبية', included: false },
      { name: 'استشارة مباشرة مع طبيب', included: false },
      { name: 'تنبيهات صحية مخصصة', included: false },
      { name: 'أولوية في الدعم', included: false }
    ],
    recommended: false,
    cta: 'ابدأ مجاناً',
    ctaStyle: 'secondary'
  },
  {
    id: 'pro',
    name: 'احترافي',
    price: 9.99,
    period: 'شهري',
    description: 'لمن يريد خدمات متقدمة',
    features: [
      { name: 'تحليل غير محدود للأعراض', included: true },
      { name: 'نتائج فورية', included: true },
      { name: 'تقارير مفصلة وشاملة', included: true },
      { name: 'دعم ذي أولوية عبر البريد', included: true },
      { name: 'حفظ السجلات الطبية', included: true },
      { name: 'استشارة مباشرة مع طبيب', included: false },
      { name: 'تنبيهات صحية مخصصة', included: true },
      { name: 'أولوية في الدعم', included: false }
    ],
    recommended: true,
    cta: 'اشترك الآن',
    ctaStyle: 'primary'
  },
  {
    id: 'premium',
    name: 'البريميوم',
    price: 29.99,
    period: 'شهري',
    description: 'للحصول على أفضل خدماتنا',
    features: [
      { name: 'تحليل غير محدود للأعراض', included: true },
      { name: 'نتائج فورية', included: true },
      { name: 'تقارير مفصلة وشاملة', included: true },
      { name: 'دعم ذي أولوية عبر البريد', included: true },
      { name: 'حفظ السجلات الطبية', included: true },
      { name: 'استشارة مباشرة مع طبيب', included: true },
      { name: 'تنبيهات صحية مخصصة', included: true },
      { name: 'أولوية عالية في الدعم', included: true }
    ],
    recommended: false,
    cta: 'اشترك الآن',
    ctaStyle: 'primary'
  }
]

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const getPrice = (plan: Plan) => {
    if (billingCycle === 'yearly') {
      return Math.round(plan.price * 12 * 0.8)
    }
    return plan.price
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 bg-linear-to-b from-background to-blue-50/20 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            خطط التسعير
          </h2>
          <p className="text-lg text-muted mb-8">اختر الخطة المناسبة لك وابدأ رحلتك الصحية</p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center gap-4"
          >
            {['monthly', 'yearly'].map((cycle) => (
              <motion.button
                key={cycle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setBillingCycle(cycle as 'monthly' | 'yearly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  billingCycle === cycle
                    ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-card border border-border text-foreground hover:border-blue-300'
                }`}
              >
                {cycle === 'monthly' ? 'شهري' : 'سنوي (وفر 20%)'}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={plan.recommended ? { y: -20, boxShadow: '0 50px 50px -25px rgba(59, 130, 246, 0.3)' } : { y: -8 }}
              className={`relative rounded-3xl border-2 transition-all overflow-hidden ${
                plan.recommended
                  ? 'border-blue-500 dark:border-blue-400 bg-linear-to-b from-blue-50 dark:from-blue-950/30 to-background shadow-2xl md:scale-105'
                  : 'border-border bg-card'
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="inline-block px-4 py-1 bg-linear-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold rounded-full">
                    الأكثر شيوعاً
                  </span>
                </motion.div>
              )}

              {/* Content */}
              <div className="p-8 h-full flex flex-col">
                {/* Plan Info */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted text-sm mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-2">
                    {plan.price === 0 ? (
                      <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        مجاني
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-foreground">
                          {getPrice(plan)}₪
                        </span>
                        <span className="text-muted text-sm">
                          /{billingCycle === 'monthly' ? 'شهر' : 'سنة'}
                        </span>
                      </>
                    )}
                  </div>

                  {billingCycle === 'yearly' && plan.price > 0 && (
                    <p className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      توفير {plan.price * 12 - getPrice(plan)}₪ سنوياً
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`shrink-0 ${
                          feature.included
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-gray-400 dark:text-gray-600'
                        }`}
                      >
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <X className="w-5 h-5" />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          feature.included
                            ? 'text-foreground'
                            : 'text-muted line-through'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.ctaStyle === 'primary'
                      ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                      : 'border-2 border-border text-foreground hover:border-blue-300'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto p-8 rounded-3xl bg-card border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">أسئلة شائعة</h3>

          <div className="space-y-4">
            {[
              {
                q: 'هل يمكنني تحويل الخطة لاحقاً؟',
                a: 'نعم، يمكنك تغيير خطتك في أي وقت. التغييرات تدخل حيز التنفيذ مباشرة.'
              },
              {
                q: 'هل تقدمون رد المال؟',
                a: 'نعم، إذا لم تكن راضياً خلال 14 يوم الأولى، نقدم استرجاع كامل.'
              },
              {
                q: 'ماذا يحدث إذا لم أكن بحاجة للخدمة بعد الآن؟',
                a: 'يمكنك إلغاء الاشتراك في أي وقت. سيتم إيقاف الفوترة فوراً.'
              }
            ].map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="group cursor-pointer"
              >
                <summary className="flex items-center justify-between p-4 rounded-lg bg-background hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                  <span className="font-semibold text-foreground">{item.q}</span>
                  <motion.span className="text-muted group-open:rotate-180 transition-transform">
                    ▼
                  </motion.span>
                </summary>
                <p className="p-4 text-muted">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>

        {/* Selection Modal */}
        <AnimatePresence>
          {selectedPlan && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-3xl border border-border p-8 max-w-md w-full"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plans.find(p => p.id === selectedPlan)?.name}
                  </h3>
                  <p className="text-muted mb-6">
                    هل تريد الاشتراك في هذه الخطة؟
                  </p>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedPlan(null)}
                      className="flex-1 py-2 border-2 border-border rounded-lg text-foreground font-bold hover:border-blue-300 transition-colors"
                    >
                      إلغاء
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedPlan(null)
                        // Handle subscription
                      }}
                      className="flex-1 py-2 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-bold hover:shadow-lg transition-all"
                    >
                      تأكيد
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
