'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Brain, Shield, TrendingUp } from 'lucide-react'

export default function HeroSection() {
  const features = [
    {
      icon: Brain,
      label: 'AI-Powered',
      value: 'Advanced Analysis'
    },
    {
      icon: Shield,
      label: 'Private',
      value: '100% Secure'
    },
    {
      icon: Stethoscope,
      label: 'Medical',
      value: 'Grade Quality'
    },
    {
      icon: TrendingUp,
      label: 'Accurate',
      value: 'Detailed Reports'
    }
  ]

  return (
    <div className="relative overflow-hidden py-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/30 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-card border border-border hover:border-blue-300 dark:hover:border-blue-600 text-center transition-colors"
              >
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-muted mb-1">{feature.label}</p>
                <p className="text-sm font-semibold text-foreground">{feature.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-4 text-center"
        >
          <div className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
            <p className="text-sm font-medium text-green-700 dark:text-green-300">✓ No Data Collection</p>
          </div>
          <div className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">✓ Works Offline</p>
          </div>
          <div className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
            <p className="text-sm font-medium text-purple-700 dark:text-purple-300">✓ Instant Results</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
