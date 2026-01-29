'use client'

import React from 'react'
import { motion } from 'framer-motion'

const partners = [
  { name: 'وزارة الصحة', logo: '🏛️', type: 'حكومي' },
  { name: 'الهيئة الصحية الدولية', logo: '🌍', type: 'دولي' },
  { name: 'جامعة طب عريقة', logo: '🎓', type: 'أكاديمي' },
  { name: 'مستشفى متخصص', logo: '🏥', type: 'طبي' },
  { name: 'شركة تكنولوجيا رائدة', logo: '💻', type: 'تكنولوجي' },
  { name: 'منظمة صحية عالمية', logo: '🌐', type: 'دولي' }
]

export default function Partners() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            شركاؤنا والجهات الموثوقة
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            نتعاون مع أفضل الجهات الصحية والتكنولوجية العالمية
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-blue-300 dark:hover:border-blue-600 transition-all flex flex-col items-center justify-center gap-3 text-center"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="text-5xl"
              >
                {partner.logo}
              </motion.div>
              <div>
                <p className="font-bold text-foreground text-sm">{partner.name}</p>
                <p className="text-xs text-muted">{partner.type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-12 rounded-3xl bg-linear-to-r from-green-50 dark:from-green-950/30 to-emerald-50 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            🤝 علاقات موثوقة تبني الثقة
          </h3>
          <p className="text-muted max-w-2xl mx-auto">
            نحن فخورون بالتعاون مع الجهات الصحية والتكنولوجية الرائدة عالمياً، مما يضمن أعلى معايير الجودة والأمان في تطبيقنا.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
