'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
    setLoading(false)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'الهاتف',
      value: '+966 9 0000 0000',
      link: 'tel:+966900000000'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'البريد الإلكتروني',
      value: 'support@symptomchecker.com',
      link: 'mailto:support@symptomchecker.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      link: '#'
    }
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            تواصل معنا
          </h2>
          <p className="text-lg text-muted">لديك استفسار؟ نحن هنا للمساعدة</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-blue-300 dark:hover:border-blue-600 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted text-sm">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800"
            >
              <h4 className="font-bold text-foreground mb-3">ساعات العمل</h4>
              <div className="space-y-2 text-sm text-muted">
                <p>السبت - الخميس: 9:00 - 17:00</p>
                <p>الجمعة: مغلق</p>
                <p className="text-xs mt-3 pt-3 border-t border-blue-200 dark:border-blue-800">
                  الدعم الفني متاح 24/7
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="أحمد محمود"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ahmed@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 50 000 0000"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      الموضوع
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="support">دعم فني</option>
                      <option value="feedback">ملاحظات</option>
                      <option value="partnership">شراكة</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-2xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  تم الإرسال بنجاح!
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  شكراً لتواصلك معنا. سيرد عليك فريقنا قريباً.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
