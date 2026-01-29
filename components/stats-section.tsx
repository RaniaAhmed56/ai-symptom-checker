'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, BarChart3, Zap, Shield } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: '10K+',
      label: 'مستخدم نشط',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      number: '50K+',
      label: 'تحليل تم إجراؤه',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      number: '99.9%',
      label: 'دقة التحليل',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'خصوصية مضمونة',
      color: 'from-purple-500 to-purple-600'
    }
  ]

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
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            إحصائيات التطبيق
          </h2>
          <p className="text-lg text-muted">أرقام تعكس ثقة المستخدمين بنا</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-blue-300 dark:hover:border-blue-600 transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
                >
                  {stat.number}
                </motion.p>
                
                <p className="text-sm text-muted">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
