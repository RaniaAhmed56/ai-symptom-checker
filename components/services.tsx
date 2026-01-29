'use client'

import React from 'react'
import { Zap, Clock, Shield, Users, TrendingUp, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  color: string
}

const services: Service[] = [
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'تحليل فوري',
    description: 'احصل على تحليل سريع وفوري لأعراضك',
    features: ['نتائج في ثوان', 'تحليل ذكي', 'تشخيصات محتملة'],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'خصوصية مضمونة',
    description: 'بيانات محمية بأعلى معايير التشفير',
    features: ['تشفير من طرف إلى طرف', 'بدون حفظ البيانات', 'معايير دولية'],
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'دعم متخصص',
    description: 'فريق طبي جاهز للإجابة على أسئلتك',
    features: ['متخصصون طبيون', 'استجابة سريعة', 'دعم 24/7'],
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: 'تقارير مفصلة',
    description: 'احصل على تقارير شاملة وسهلة الفهم',
    features: ['رسوم بيانية', 'نصائح صحية', 'متابعة التاريخ'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: 'متابعة مستمرة',
    description: 'راقب صحتك عبر السجل الشامل',
    features: ['سجل الأعراض', 'إحصائيات شهرية', 'تنبيهات ذكية'],
    color: 'from-red-400 to-rose-500'
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'استخدام سهل',
    description: 'واجهة بسيطة وسهلة على جميع الأجهزة',
    features: ['تصميم متجاوب', 'دعم جميع الأجهزة', 'واجهة عربية'],
    color: 'from-indigo-400 to-blue-500'
  }
]

export default function Services() {
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            خدماتنا
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            مجموعة شاملة من الخدمات الصحية الذكية لراحتك وسلامتك
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-blue-300 dark:hover:border-blue-600 transition-all overflow-hidden group relative"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-linear-to-br ${service.color}`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className={`w-20 h-20 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className={`w-2 h-2 rounded-full bg-linear-to-r ${service.color}`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`mt-6 h-1 bg-linear-to-r ${service.color}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 p-12 rounded-3xl bg-linear-to-r from-blue-50 dark:from-blue-950/30 to-cyan-50 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">لماذا تختار خدماتنا؟</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'دقة عالية',
                description: 'تطبيقنا يستخدم أحدث تقنيات الذكاء الاصطناعي للحصول على نتائج دقيقة'
              },
              {
                title: 'سهولة الاستخدام',
                description: 'واجهة سهلة وبديهية حتى للأشخاص غير التقنيين'
              },
              {
                title: 'موثوقية كاملة',
                description: 'مطور بناءً على بحث طبي موثق من جامعات عالمية'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-6">جاهز للبدء؟</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              ابدأ الآن
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-bold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all"
            >
              اعرف المزيد
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
