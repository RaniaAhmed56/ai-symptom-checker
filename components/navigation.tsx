'use client'

import React from 'react'
import { Sun, Moon, Home, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface NavigationProps {
  onToggleDarkMode: () => void
  isDark: boolean
  onHome: () => void
}

export default function Navigation({ onToggleDarkMode, isDark, onHome }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-6 h-6" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">MedAI Checker</h1>
              <p className="text-xs text-muted">Health Analysis</p>
            </div>
          </motion.div>
          
          <div className="flex items-center gap-3">
            <motion.button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                key={isDark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  )
}
