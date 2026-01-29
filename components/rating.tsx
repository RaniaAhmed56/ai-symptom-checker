'use client'

import React, { useState } from 'react'
import { Star, ThumbsUp, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

interface RatingProps {
  onSubmit?: (rating: number, feedback: string) => void
}

export default function RatingComponent({ onSubmit }: RatingProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit?.(rating, feedback)
      setIsSubmitted(true)
      setTimeout(() => {
        setRating(0)
        setFeedback('')
        setIsSubmitted(false)
      }, 2000)
    }
  }

  const getRatingMessage = (rate: number) => {
    if (rate <= 2) return 'لم نعجبك - نريد التحسين'
    if (rate <= 3) return 'متوسط - يمكن تحسينه'
    if (rate <= 4) return 'جيد جداً - شكراً لك'
    return 'ممتاز - نحن مسرورون!'
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-4"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <ThumbsUp className="w-8 h-8 text-green-500 mx-auto" />
        </motion.div>
        <p className="text-green-600 dark:text-green-400 font-semibold">شكراً لتقييمك!</p>
      </motion.div>
    )
  }

  return (
    <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
      <div className="mb-4">
        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          كيف تقيّم التطبيق؟
        </h4>
        
        {/* Rating Stars */}
        <div className="flex gap-2 justify-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none"
            >
              <Star
                className={`w-6 h-6 transition-all ${
                  star <= (hoverRating || rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Rating Message */}
        {(rating || hoverRating) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-center text-muted"
          >
            {getRatingMessage(hoverRating || rating)}
          </motion.p>
        )}
      </div>

      {/* Feedback */}
      {rating > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="شارك رأيك (اختياري)..."
            className="w-full h-20 p-3 rounded-lg border border-blue-300 dark:border-blue-600 bg-white dark:bg-slate-800 text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>
      )}

      {/* Submit Button */}
      {rating > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleSubmit}
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          إرسال التقييم
        </motion.button>
      )}
    </div>
  )
}
