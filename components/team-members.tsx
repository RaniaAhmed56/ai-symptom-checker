'use client'

import React from 'react'
import { Mail, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  email: string
  specialization: string
}

const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'د. أحمد محمود',
    role: 'مؤسس ورئيس الفريق',
    bio: 'طبيب متخصص في الأمراض الداخلية بخبرة 15 سنة',
    avatar: '👨‍⚕️',
    email: 'ahmed@symptomchecker.com',
    specialization: 'الأمراض الداخلية'
  },
  {
    id: 'member-2',
    name: 'د. فاطمة علي',
    role: 'رئيسة قسم التطوير',
    bio: 'مهندسة برمجيات متخصصة في التطبيقات الطبية',
    avatar: '👩‍💻',
    email: 'fatima@symptomchecker.com',
    specialization: 'تطوير البرمجيات'
  },
  {
    id: 'member-3',
    name: 'د. محمد سالم',
    role: 'مدير الابحاث',
    bio: 'باحث طبي متخصص في علم الأوبئة والإحصائيات',
    avatar: '👨‍🔬',
    email: 'mohammed@symptomchecker.com',
    specialization: 'البحث الطبي'
  },
  {
    id: 'member-4',
    name: 'نور حسن',
    role: 'مديرة تصميم الواجهات',
    bio: 'مصممة UX/UI متخصصة في التطبيقات الصحية',
    avatar: '👩‍🎨',
    email: 'noor@symptomchecker.com',
    specialization: 'تصميم الواجهات'
  },
  {
    id: 'member-5',
    name: 'علي خالد',
    role: 'مهندس البيانات',
    bio: 'متخصص في تحليل البيانات الكبيرة والـ AI',
    avatar: '👨‍💼',
    email: 'ali@symptomchecker.com',
    specialization: 'البيانات والذكاء الاصطناعي'
  },
  {
    id: 'member-6',
    name: 'ليلى محمد',
    role: 'مسؤولة الجودة والاختبار',
    bio: 'متخصصة في ضمان جودة البرمجيات والاختبار الآلي',
    avatar: '👩‍🔧',
    email: 'leila@symptomchecker.com',
    specialization: 'الاختبار والجودة'
  }
]

export default function TeamMembers() {
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
    <section className="py-20 px-4 bg-linear-to-b from-background to-blue-50/20 dark:to-blue-950/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            فريقنا المتخصص
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            فريق من الأطباء والمهندسين والخبراء المتفانين في تطوير أفضل حل طبي ذكي
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="rounded-2xl bg-card border border-border p-8 text-center overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-linear-to-br from-blue-500 to-cyan-500 transition-opacity" />

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="text-6xl mb-4 inline-block"
                >
                  {member.avatar}
                </motion.div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {member.role}
                </p>

                {/* Specialization Badge */}
                <div className="inline-block px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-4">
                  {member.specialization}
                </div>

                {/* Bio */}
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Social & Contact */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
                    title="إرسال بريد"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
                    title="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-12 rounded-3xl bg-linear-to-r from-blue-50 dark:from-blue-950/30 to-cyan-50 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            نحن نؤمن بقوة الفريق
          </h3>
          <p className="text-muted max-w-2xl mx-auto">
            فريقنا متنوع ومتخصص، حيث يجمع بين أطباء ذوي خبرة ومهندسي برمجيات موهوبين ومصممين مبدعين. معاً، نعمل على تقديم أفضل الحلول الطبية الذكية لتحسين صحتك.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
