'use client'

import React, { useState } from 'react'
import { Search, BookOpen, Heart, Share2, Bookmark, Calendar, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HealthArticles() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [saved, setSaved] = useState<number[]>([])

  const categories = [
    { id: 'all', label: 'All Articles', count: 24 },
    { id: 'wellness', label: 'Wellness', count: 8 },
    { id: 'nutrition', label: 'Nutrition', count: 6 },
    { id: 'fitness', label: 'Fitness', count: 5 },
    { id: 'mental-health', label: 'Mental Health', count: 5 }
  ]

  const articles = [
    {
      id: 1,
      title: '10 Natural Ways to Boost Your Immune System',
      excerpt: 'Discover effective and natural methods to strengthen your immunity...',
      category: 'wellness',
      author: 'Dr. Sarah Miller',
      date: 'Dec 1, 2025',
      readTime: '5 min',
      image: '🛡️',
      content: 'Full article content here...',
      views: '12.3K'
    },
    {
      id: 2,
      title: 'The Complete Guide to Balanced Nutrition',
      excerpt: 'Learn how to maintain a balanced diet for optimal health...',
      category: 'nutrition',
      author: 'Dr. James Wilson',
      date: 'Nov 28, 2025',
      readTime: '8 min',
      image: '🥗',
      content: 'Full article content here...',
      views: '8.9K'
    },
    {
      id: 3,
      title: 'Effective Home Exercises for Busy People',
      excerpt: 'Simple fitness routines you can do at home in 20 minutes...',
      category: 'fitness',
      author: 'Dr. Emma Davis',
      date: 'Nov 25, 2025',
      readTime: '6 min',
      image: '💪',
      content: 'Full article content here...',
      views: '15.7K'
    },
    {
      id: 4,
      title: 'Managing Stress and Anxiety Naturally',
      excerpt: 'Proven techniques to reduce stress and improve mental health...',
      category: 'mental-health',
      author: 'Dr. Michael Brown',
      date: 'Nov 22, 2025',
      readTime: '7 min',
      image: '🧘',
      content: 'Full article content here...',
      views: '9.4K'
    },
    {
      id: 5,
      title: 'Sleep Better: The Ultimate Sleep Guide',
      excerpt: 'Everything you need to know about improving your sleep quality...',
      category: 'wellness',
      author: 'Dr. Lisa Anderson',
      date: 'Nov 20, 2025',
      readTime: '9 min',
      image: '😴',
      content: 'Full article content here...',
      views: '11.2K'
    },
    {
      id: 6,
      title: 'Hydration: Why Water is Your Best Medicine',
      excerpt: 'The science behind why staying hydrated is crucial for health...',
      category: 'nutrition',
      author: 'Dr. Robert Taylor',
      date: 'Nov 18, 2025',
      readTime: '4 min',
      image: '💧',
      content: 'Full article content here...',
      views: '7.3K'
    }
  ]

  const filtered = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50 to-cyan-50 dark:from-background dark:via-slate-900 dark:to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Health & Wellness Articles
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Expert-written articles on health, fitness, nutrition, and wellness
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border-2 border-border focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-medical text-white shadow-lg'
                  : 'bg-card border-2 border-border hover:border-blue-400'
              }`}
            >
              {cat.label} ({cat.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="h-48 bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center text-6xl overflow-hidden">
                {article.image}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                    {categories.find(c => c.id === article.category)?.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted mb-4 flex-1 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex-1 px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-200 transition-colors"
                    >
                      <BookOpen className="w-4 h-4 mx-auto" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setSaved(saved.includes(article.id) ? saved.filter(id => id !== article.id) : [...saved, article.id])}
                      className={`flex-1 px-3 py-2 rounded-lg font-semibold transition-colors ${
                        saved.includes(article.id)
                          ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600'
                          : 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-900/60'
                      }`}
                    >
                      <Bookmark className="w-4 h-4 mx-auto" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex-1 px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/60 font-semibold transition-colors"
                    >
                      <Share2 className="w-4 h-4 mx-auto" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-muted mx-auto mb-4 opacity-50" />
            <p className="text-xl text-muted">No articles found. Try a different search.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
