'use client'

import React from 'react'
import { Shield, Lock, CheckCircle, Award } from 'lucide-react'
import { motion } from 'framer-motion'

interface Certificate {
  icon: React.ReactNode
  title: string
  description: string
  issuer: string
  verified: boolean
}

const certificates: Certificate[] = [
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'تشفير 256-bit SSL',
    description: 'حماية بيانات الاتصال بأعلى معايير التشفير الدولية',
    issuer: 'Comodo Security',
    verified: true
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'معايير GDPR',
    description: 'الامتثال الكامل لقوانين حماية البيانات الأوروبية',
    issuer: 'الاتحاد الأوروبي',
    verified: true
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'ISO 27001',
    description: 'شهادة إدارة أمان المعلومات الدولية',
    issuer: 'معهد المعايير الدولية',
    verified: true
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'معايير صحية',
    description: 'موافقة من الهيئات الصحية الدولية والمحلية',
    issuer: 'منظمة الصحة العالمية',
    verified: true
  }
]

const securityFeatures = [
  'تشفير من طرف إلى طرف',
  'مصادقة ثنائية العامل',
  'حماية من الهجمات السيبرانية',
  'عدم حفظ البيانات الشخصية',
  'فحوصات أمان دورية',
  'استجابة سريعة للتهديدات'
]

export default function SecurityCertificates() {
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            أمانك أولويتنا
          </h2>
          <p className="text-lg text-muted">نحافظ على بيانات صحتك بأعلى معايير الأمان العالمية</p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-green-300 dark:hover:border-green-600 transition-all relative overflow-hidden group"
            >
              {/* Verified Badge */}
              {cert.verified && (
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-green-500 animate-pulse" />
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="p-3 rounded-lg bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 w-fit mb-4"
              >
                {cert.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-muted text-sm mb-4">{cert.description}</p>

              {/* Issuer */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted">صادرة من</p>
                <p className="text-sm font-semibold text-foreground">{cert.issuer}</p>
              </div>

              {/* Checkmark */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-2 right-2 text-green-500 opacity-30"
              >
                <CheckCircle className="w-8 h-8" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-12 rounded-3xl bg-linear-to-r from-green-50 dark:from-green-950/30 to-emerald-50 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">مميزات الأمان</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-foreground font-semibold">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'مشفر بالكامل',
              description: 'جميع البيانات مشفرة أثناء النقل والتخزين',
              icon: '🔐'
            },
            {
              title: 'محقق دورياً',
              description: 'فحوصات أمان منتظمة من جهات خارجية',
              icon: '✓'
            },
            {
              title: 'معايير عالمية',
              description: 'التزام كامل بجميع المعايير الدولية',
              icon: '🌍'
            }
          ].map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-card border border-border text-center"
            >
              <div className="text-4xl mb-4">{indicator.icon}</div>
              <h4 className="text-lg font-bold text-foreground mb-2">{indicator.title}</h4>
              <p className="text-muted text-sm">{indicator.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-3">قلق على الأمان؟</h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            فريق أمان متخصص متاح لمساعدتك والإجابة على جميع أسئلتك حول أمان بيانات صحتك
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            تواصل مع فريق الأمان
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
