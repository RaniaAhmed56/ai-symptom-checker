'use client'

import React from 'react'
import { Heart, Github, Twitter, Mail, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    {
      title: 'الرئيسية',
      href: '/',
      icon: null
    },
    {
      title: 'حول التطبيق',
      href: '#about',
      icon: null
    },
    {
      title: 'الخصوصية',
      href: '#privacy',
      icon: Shield
    }
  ]

  const socials = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:support@medai.com' }
  ]

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
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">MedAI Checker</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              تطبيق ذكي للتحليل الفوري للأعراض الطبية باستخدام الذكاء الاصطناعي. آمن وخاص 100%.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">تابعنا</h4>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm text-muted space-y-3"
        >
          <p>
            © {currentYear} MedAI Checker. جميع الحقوق محفوظة.
          </p>
          
          <p className="flex items-center justify-center gap-2">
            صُنع بـ
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            من أجل صحتك الأفضل
          </p>

          <p className="text-xs pt-2 border-t border-border">
            هذا التطبيق مصمم للأغراض التعليمية فقط ولا يحل محل استشارة الطبيب المتخصص
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
