'use client'

import React from 'react'
import { Activity, Zap, Shield, FileText, Sparkles, ArrowRight, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface LandingProps {
  onStart: () => void
}

export default function Landing({ onStart }: LandingProps) {
  const features = [
    {
      icon: Activity,
      title: 'AI Analysis',
      description: 'Advanced symptom analysis using local AI models',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get analysis results in seconds, completely offline',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description: 'All data stays on your device, no cloud storage',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'PDF Reports',
      description: 'Generate and download comprehensive medical reports',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const stats = [
    { number: '100%', label: 'Offline & Private' },
    { number: 'AI-Powered', label: 'Analysis' },
    { number: 'Instant', label: 'Results' }
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50 to-cyan-50 dark:from-background dark:via-slate-900 dark:to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 dark:bg-cyan-900/40 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 dark:bg-blue-900/40 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-300 dark:bg-cyan-900/40 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="mb-6 flex justify-center"
              >
                <div className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">AI-Powered Healthcare</span>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent leading-tight"
              >
                Medical Symptom Checker
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Get instant AI-powered symptom analysis. <br />
                <span className="font-semibold text-foreground">No sign-up. No data collection. 100% private.</span>
              </motion.p>

              {/* CTA Button */}
              <motion.button
                variants={itemVariants}
                onClick={onStart}
                className="px-8 sm:px-10 py-4 rounded-xl bg-gradient-medical text-white font-bold text-lg hover:shadow-xl shadow-lg transition-all inline-flex items-center gap-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="w-6 h-6" />
                Start Health Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 mb-20 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="p-4 rounded-lg bg-card border border-border text-center hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.number}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
