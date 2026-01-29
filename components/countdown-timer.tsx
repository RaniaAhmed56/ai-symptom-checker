'use client'

import React, { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds
        if (totalSeconds <= 0) {
          clearInterval(timer)
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        const newTotal = totalSeconds - 1
        return {
          days: Math.floor(newTotal / 86400),
          hours: Math.floor((newTotal % 86400) / 3600),
          minutes: Math.floor((newTotal % 3600) / 60),
          seconds: newTotal % 60
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-linear-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white mb-2">
        <span className="text-3xl sm:text-4xl font-bold">{String(value).padStart(2, '0')}</span>
      </div>
      <p className="text-sm font-semibold text-foreground">{label}</p>
    </motion.div>
  )

  return (
    <section className="py-20 px-4 bg-linear-to-b from-orange-50 dark:from-orange-950/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Alert */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-950 border border-orange-300 dark:border-orange-700 mb-6"
          >
            <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400 animate-spin" />
            <span className="font-semibold text-orange-700 dark:text-orange-300">
              عرض خاص محدود الوقت
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            احصل على خصم 40% اليوم فقط!
          </h2>
          <p className="text-lg text-muted mb-12">
            انتهز الفرصة الذهبية واشترك بخطتك المفضلة برسوم مخفضة
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-12">
            <TimeBox value={timeLeft.days} label="أيام" />
            <TimeBox value={timeLeft.hours} label="ساعات" />
            <TimeBox value={timeLeft.minutes} label="دقائق" />
            <TimeBox value={timeLeft.seconds} label="ثوانِ" />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg text-lg hover:shadow-lg transition-all w-full sm:w-auto"
            >
              ⚡ احصل على الخصم الآن
            </motion.button>

            {/* Offer Details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted text-sm"
            >
              <p>✓ لا تحتاج بطاقة ائتمانية</p>
              <p>✓ ضمان استرجاع المال 30 يوم</p>
              <p>✓ إلغاء الاشتراك في أي وقت</p>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800"
          >
            <p className="text-sm text-green-700 dark:text-green-300 font-semibold mb-2">
              ✅ انضم إلى 250,000+ مستخدم راضٍ
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              تقييم 4.9/5 من 15,000+ تقييم
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
