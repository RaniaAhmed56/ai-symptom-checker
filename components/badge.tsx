'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  children: React.ReactNode
  className?: string
}

export default function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
    danger: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
    info: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700'
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.span>
  )
}

// Severity Badge Component
export function SeverityBadge({ severity }: { severity: string }) {
  const severityConfig = {
    'Low': 'success',
    'Medium': 'warning',
    'High': 'danger',
    'Critical': 'danger'
  } as const

  const severityIcons = {
    'Low': '✓',
    'Medium': '⚠',
    'High': '⚠',
    'Critical': '🚨'
  } as const

  return (
    <Badge variant={severityConfig[severity as keyof typeof severityConfig] || 'default'}>
      <span className="mr-1">{severityIcons[severity as keyof typeof severityIcons]}</span>
      {severity}
    </Badge>
  )
}
