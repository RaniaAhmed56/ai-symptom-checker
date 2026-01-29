'use client'

import React from 'react'
import { MessageCircle, Zap, Shield, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const features: FeatureCard[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'تحليل سريع',
    description: 'احصل على نتائج فورية وتشخيصات محتملة في ثوان معدودة',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'آمن وخاص',
    description: 'بيانات مشفرة وخصوصية كاملة، لا نحتفظ بسجلاتك الطبية',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'موثوق',
    description: 'تطوير بناءً على قاعدة بيانات طبية معتمدة',
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'دعم 24/7',
    description: 'فريق الدعم جاهز لمساعدتك في أي وقت',
    color: 'from-blue-400 to-cyan-500'
  }
]

export default function FeaturesHighlight() {
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring' as const, stiffness: 100 },
    },
  }

  return (
    <section className="py-20 px-4 bg-linear-to-b from-background via-blue-50/30 dark:via-blue-950/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            لماذا تختار تطبيقنا؟
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            نوفر لك الأدوات والمعلومات اللازمة لفهم صحتك بشكل أفضل
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden group"
            >
              {/* Background Gradient Blob */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-linear-to-br ${feature.color} blur-2xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className={`mt-4 h-1 w-12 rounded-full bg-linear-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">جاهز لاستكشاف صحتك؟</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            ابدأ الآن باستخدام تطبيقنا الذكي للحصول على تشخيص دقيق وموثوق
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            ابدأ الآن
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
