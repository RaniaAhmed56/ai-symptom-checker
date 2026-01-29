'use client'

import React, { useState } from 'react'
import { Star, ThumbsUp, MessageSquare, User, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DoctorReviews() {
  const [selectedDoctor, setSelectedDoctor] = useState(0)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const doctors = [
    {
      id: 1,
      name: 'Dr. Ahmed Hassan',
      avatar: '👨‍⚕️',
      specialty: 'General Medicine',
      avgRating: 4.8,
      totalReviews: 342,
      reviews: [
        { author: 'Mohammed', rating: 5, comment: 'Excellent doctor, very professional', date: '2 weeks ago' },
        { author: 'Fatima', rating: 5, comment: 'Great consultation, answered all questions', date: '1 week ago' },
        { author: 'Ali', rating: 4, comment: 'Good service, a bit long wait time', date: '3 days ago' }
      ]
    },
    {
      id: 2,
      name: 'Dr. Fatima Ali',
      avatar: '👩‍⚕️',
      specialty: 'Cardiology',
      avgRating: 4.9,
      totalReviews: 278,
      reviews: [
        { author: 'Sara', rating: 5, comment: 'Best cardiologist ever', date: '5 days ago' },
        { author: 'Hassan', rating: 5, comment: 'Very knowledgeable and caring', date: '1 week ago' },
        { author: 'Noor', rating: 5, comment: 'Highly recommended', date: '2 weeks ago' }
      ]
    },
    {
      id: 3,
      name: 'Dr. Mohammed Samir',
      avatar: '👨‍⚕️',
      specialty: 'Pulmonology',
      avgRating: 4.7,
      totalReviews: 195,
      reviews: [
        { author: 'Zainab', rating: 5, comment: 'Professional and thorough examination', date: '1 week ago' },
        { author: 'Karim', rating: 4, comment: 'Good doctor, explains everything well', date: '3 days ago' },
        { author: 'Hana', rating: 5, comment: 'Very helpful and attentive', date: '5 days ago' }
      ]
    }
  ]

  const doctor = doctors[selectedDoctor]

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating > 0 && comment.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setRating(0)
        setComment('')
        setSubmitted(false)
      }, 2000)
    }
  }

  const StarRating = ({ value, interactive = false, onRate }: any) => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            type="button"
            whileHover={interactive ? { scale: 1.2 } : {}}
            whileTap={interactive ? { scale: 0.95 } : {}}
            onClick={() => interactive && onRate(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={`transition-colors ${
              star <= (hoverRating || value)
                ? 'text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          >
            <Star className="w-6 h-6 fill-current" />
          </motion.button>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50 to-cyan-50 dark:from-background dark:via-slate-900 dark:to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Doctor Reviews & Ratings
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Read reviews from patients and share your experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctor Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {doctors.map((doc, idx) => (
                <motion.button
                  key={doc.id}
                  onClick={() => setSelectedDoctor(idx)}
                  whileHover={{ x: 4 }}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    selectedDoctor === idx
                      ? 'bg-gradient-medical text-white shadow-lg'
                      : 'bg-card border-2 border-border hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{doc.avatar}</span>
                    <div className="flex-1">
                      <h3 className="font-bold">{doc.name}</h3>
                      <p className={`text-sm ${selectedDoctor === idx ? 'text-blue-100' : 'text-muted'}`}>
                        {doc.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i <= Math.round(doc.avgRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                    <span className={`text-xs ml-1 ${selectedDoctor === idx ? 'text-blue-100' : 'text-muted'}`}>
                      {doc.avgRating} ({doc.totalReviews})
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Reviews and Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card border-2 border-border rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{doctor.avatar}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{doctor.name}</h2>
                    <p className="text-muted">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-yellow-400">{doctor.avgRating}</div>
                  <div className="text-sm text-muted">{doctor.totalReviews} reviews</div>
                </div>
              </div>
              <StarRating value={Math.round(doctor.avgRating)} />
            </motion.div>

            {/* Review Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card border-2 border-border rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">✍️ Share Your Review</h3>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Your Rating
                  </label>
                  <StarRating value={rating} interactive onRate={setRating} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Review
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience with this doctor..."
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  disabled={rating === 0 || !comment.trim()}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-medical text-white font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? '✅ Review Submitted!' : 'Submit Review'}
                </button>
              </form>
            </motion.div>

            {/* Reviews List */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Recent Reviews</h3>
              {doctor.reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border-2 border-border rounded-xl p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted" />
                        <h4 className="font-semibold text-foreground">{review.author}</h4>
                      </div>
                      <p className="text-xs text-muted mt-1">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i <= review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground">{review.comment}</p>
                  <div className="flex gap-4 mt-4 pt-4 border-t border-border">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-sm text-muted hover:text-blue-600 transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      Helpful
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
