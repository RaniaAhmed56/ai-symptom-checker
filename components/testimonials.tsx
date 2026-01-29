'use client'

import React from 'react'
import { Star, User } from 'lucide-react'
import { motion } from 'framer-motion'

interface Testimonial {
  name: string
  role: string
  avatar: string
  comment: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'أحمد محمود',
    role: 'معلم',
    avatar: '👨‍🏫',
    comment: 'تطبيق رائع جداً! ساعدني في فهم أعراضي قبل زيارة الطبيب. واجهة سهلة الاستخدام وتقارير مفصلة.',
    rating: 5
  },
  {
    name: 'فاطمة علي',
    role: 'طبيبة',
    avatar: '👩‍⚕️',
    comment: 'كطبيبة، أعجبني أن المريض يحضر معلومات مفصلة. يساعد جداً في الاستشارة الطبية الأولية.',
    rating: 5
  },
  {
    name: 'محمد سالم',
    role: 'موظف',
    avatar: '👨‍💼',
    comment: 'الخصوصية الكاملة هي ما جعلتني أستخدمه. لا أقلق من مشاركة بياناتي الصحية الخاصة.',
    rating: 5
  },
  {
    name: 'نور حسن',
    role: 'طالبة جامعية',
    avatar: '👩‍🎓',
    comment: 'استخدمت التطبيق عدة مرات وكانت النتائج دقيقة جداً. شكراً على هذا التطبيق المفيد!',
    rating: 4
  }
]

export default function Testimonials() {
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
            آراء المستخدمين
          </h2>
          <p className="text-lg text-muted">ماذا يقول مستخدمونا عن التطبيق</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-blue-300 dark:hover:border-blue-600 transition-all shadow-md hover:shadow-lg"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 text-center"
        >
          {[
            { number: '4.9/5', label: 'تقييم التطبيق' },
            { number: '10K+', label: 'مستخدم مسجل' },
            { number: '50K+', label: 'تحليل أجري' },
            { number: '98%', label: 'رضا المستخدم' }
          ].map((stat, index) => (
            <div key={index} className="p-4 rounded-lg bg-card border border-border">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
