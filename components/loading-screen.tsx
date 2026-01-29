'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Loader, Heart } from 'lucide-react'

interface LoadingScreenProps {
  message?: string
}

export default function LoadingScreen({ message = 'Analyzing your symptoms...' }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/50 dark:bg-background/70 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-sm mx-4">
        <div className="flex flex-col items-center gap-6">
          {/* Animated Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-medical flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 dark:border-t-blue-400"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Message */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Analyzing...</h3>
            <p className="text-muted text-sm">{message}</p>
          </div>

          {/* Progress Dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
