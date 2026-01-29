'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Info } from 'lucide-react'

interface AnalysisWarningProps {
  severity: string
  message?: string
}

export default function AnalysisWarning({ severity, message }: AnalysisWarningProps) {
  const getSeverityConfig = () => {
    switch (severity) {
      case 'Critical':
        return {
          icon: AlertCircle,
          bgColor: 'bg-red-50 dark:bg-red-900/20',
          borderColor: 'border-red-200 dark:border-red-700',
          textColor: 'text-red-700 dark:text-red-300',
          iconColor: 'text-red-600 dark:text-red-400'
        }
      case 'High':
        return {
          icon: AlertCircle,
          bgColor: 'bg-orange-50 dark:bg-orange-900/20',
          borderColor: 'border-orange-200 dark:border-orange-700',
          textColor: 'text-orange-700 dark:text-orange-300',
          iconColor: 'text-orange-600 dark:text-orange-400'
        }
      case 'Medium':
        return {
          icon: Info,
          bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
          borderColor: 'border-yellow-200 dark:border-yellow-700',
          textColor: 'text-yellow-700 dark:text-yellow-300',
          iconColor: 'text-yellow-600 dark:text-yellow-400'
        }
      default:
        return {
          icon: CheckCircle2,
          bgColor: 'bg-green-50 dark:bg-green-900/20',
          borderColor: 'border-green-200 dark:border-green-700',
          textColor: 'text-green-700 dark:text-green-300',
          iconColor: 'text-green-600 dark:text-green-400'
        }
    }
  }

  const config = getSeverityConfig()
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor} flex items-start gap-3`}
    >
      <Icon className={`w-5 h-5 ${config.iconColor} shrink-0 mt-0.5`} />
      <div>
        <p className={`font-semibold ${config.textColor}`}>Severity: {severity}</p>
        {message && <p className={`text-sm ${config.textColor} opacity-90 mt-1`}>{message}</p>}
      </div>
    </motion.div>
  )
}
