'use client'

import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
}

const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'كيفية التعرف على أعراض الإنفلونزا مبكراً',
    excerpt: 'تعرف على العلامات الأولى لإنفلونزا الموسمية وكيفية التمييز بينها وبين البرد العادي',
    author: 'د. أحمد محمود',
    date: '2024-01-15',
    category: 'صحة عامة',
    image: '🦠',
    readTime: 5
  },
  {
    id: 'post-2',
    title: 'أهمية الفحوصات الدورية والوقاية',
    excerpt: 'اعرف لماذا يجب إجراء الفحوصات الطبية الدورية وكيف تساعد في الوقاية من الأمراض',
    author: 'د. فاطمة علي',
    date: '2024-01-10',
    category: 'وقاية صحية',
    image: '💪',
    readTime: 7
  },
  {
    id: 'post-3',
    title: 'نصائح لتحسين المناعة الطبيعية',
    excerpt: 'تعرف على أفضل الطرق الطبيعية لتقوية جهازك المناعي والحفاظ على صحتك',
    author: 'د. محمد سالم',
    date: '2024-01-05',
    category: 'تغذية صحية',
    image: '🥗',
    readTime: 6
  }
]

const categoryColors: Record<string, string> = {
  'صحة عامة': 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300',
  'وقاية صحية': 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300',
  'تغذية صحية': 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300'
}

export default function BlogPreview() {
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            آخر مقالاتنا الطبية
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            اقرأ أحدث المقالات والنصائح الصحية من خبرائنا
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -12, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
              className="rounded-2xl bg-card border border-border overflow-hidden group cursor-pointer transition-all"
            >
              {/* Image */}
              <div className="relative h-48 bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-950/50 dark:to-cyan-950/50 flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl"
                >
                  {post.image}
                </motion.div>
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-xs text-muted mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('ar-SA')}
                  </div>
                  <div>⏱️ {post.readTime} دقائق</div>
                </div>

                {/* Read More */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-4 transition-all"
                >
                  اقرأ المقال
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            عرض جميع المقالات
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
