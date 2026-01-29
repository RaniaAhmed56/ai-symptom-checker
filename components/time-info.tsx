'use client'

import React, { useState, useEffect } from 'react'
import { Clock, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TimeInfo() {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      
      // Format time
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
      
      // Format date
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      setDate(now.toLocaleDateString('ar-SA', options))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
      {/* Time */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700"
      >
        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <div>
          <p className="text-xs text-muted">الوقت الحالي</p>
          <p className="text-lg font-mono font-bold text-foreground">{time || '--:--:--'}</p>
        </div>
      </motion.div>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700"
      >
        <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
        <div>
          <p className="text-xs text-muted">اليوم</p>
          <p className="text-sm font-bold text-foreground">{date || 'جاري التحميل...'}</p>
        </div>
      </motion.div>
    </div>
  )
}
