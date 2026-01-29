'use client'

import React from 'react'
import { TrendingUp, Users, Award, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface Stat {
  icon: React.ReactNode
  label: string
  value: string
  suffix: string
  description: string
  color: string
}

const stats: Stat[] = [
  {
    icon: <Users className="w-8 h-8" />,
    label: 'مستخدم نشط',
    value: '250',
    suffix: 'K+',
    description: 'يستخدمون التطبيق يومياً',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    label: 'تحليل أجري',
    value: '2.5',
    suffix: 'M+',
    description: 'تحليل طبي كامل',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: <Award className="w-8 h-8" />,
    label: 'دقة التشخيص',
    value: '98.7',
    suffix: '%',
    description: 'معدل دقة عالي جداً',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    label: 'رضا المستخدمين',
    value: '4.9',
    suffix: '/5',
    description: 'تقييم ممتاز',
    color: 'from-red-400 to-pink-500'
  }
]

export default function StatisticsCards() {
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring' as const, stiffness: 100 },
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
            إحصائيات النجاح
          </h2>
          <p className="text-lg text-muted">
            أرقام تعكس تأثيرنا الإيجابي على صحة الملايين
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
              className="relative rounded-2xl bg-card border border-border p-8 overflow-hidden group"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-br ${stat.color} transition-opacity`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.15 }}
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {stat.icon}
                </motion.div>

                {/* Stat Value */}
                <div className="mb-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-baseline gap-1 mb-1"
                  >
                    <span className="text-4xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.suffix}
                    </span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground">{stat.label}</h3>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-4" />

                {/* Description */}
                <p className="text-sm text-muted">{stat.description}</p>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                  className={`mt-4 h-2 rounded-full bg-linear-to-r ${stat.color}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {[
            {
              title: 'دول مدعومة',
              value: '25+',
              description: 'توسعة عالمية مستمرة'
            },
            {
              title: 'لغات',
              value: '10+',
              description: 'دعم متعدد اللغات'
            },
            {
              title: 'شهادات أمان',
              value: '5',
              description: 'معايير عالمية'
            },
            {
              title: 'سنوات خبرة',
              value: '15+',
              description: 'تاريخ عريق'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800"
            >
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {item.value}
              </p>
              <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
