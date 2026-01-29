'use client'

import React, { useState } from 'react'
import { Search, MapPin, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Disease {
  id: string
  name: string
  symptoms: string[]
  severity: 'منخفضة' | 'متوسطة' | 'عالية' | 'حرجة'
  commonness: number
  description: string
}

const diseases: Disease[] = [
  {
    id: 'flu',
    name: 'الإنفلونزا',
    symptoms: ['حمى', 'سعال', 'إرهاق', 'آلام العضلات'],
    severity: 'متوسطة',
    commonness: 95,
    description: 'عدوى فيروسية شائعة تصيب الجهاز التنفسي'
  },
  {
    id: 'cold',
    name: 'البرد',
    symptoms: ['السعال', 'سيلان الأنف', 'التهاب الحلق', 'العطس'],
    severity: 'منخفضة',
    commonness: 98,
    description: 'عدوى فيروسية خفيفة وشائعة جداً'
  },
  {
    id: 'covid',
    name: 'فيروس كورونا',
    symptoms: ['حمى', 'السعال', 'فقدان الشم', 'ضيق التنفس'],
    severity: 'عالية',
    commonness: 70,
    description: 'عدوى فيروسية حديثة قد تكون خطيرة'
  },
  {
    id: 'allergy',
    name: 'الحساسية',
    symptoms: ['حكة', 'طفح جلدي', 'عطس', 'احمرار العيون'],
    severity: 'منخفضة',
    commonness: 85,
    description: 'رد فعل الجهاز المناعي تجاه مواد معينة'
  },
  {
    id: 'migraine',
    name: 'الصداع النصفي',
    symptoms: ['صداع شديد', 'الغثيان', 'حساسية للضوء', 'قيء'],
    severity: 'متوسطة',
    commonness: 80,
    description: 'نوع من الصداع الشديد والمتكرر'
  },
  {
    id: 'pneumonia',
    name: 'الالتهاب الرئوي',
    symptoms: ['السعال', 'حمى عالية', 'ضيق التنفس', 'ألم في الصدر'],
    severity: 'حرجة',
    commonness: 45,
    description: 'عدوى خطيرة في الرئتين تحتاج علاجاً طبياً'
  },
  {
    id: 'gastritis',
    name: 'التهاب المعدة',
    symptoms: ['ألم المعدة', 'غثيان', 'قيء', 'فقدان الشهية'],
    severity: 'متوسطة',
    commonness: 75,
    description: 'التهاب في بطانة المعدة'
  },
  {
    id: 'thyroid',
    name: 'مشاكل الغدة الدرقية',
    symptoms: ['إرهاق', 'زيادة الوزن', 'الاكتئاب', 'برودة'],
    severity: 'متوسطة',
    commonness: 60,
    description: 'اضطراب في عمل الغدة الدرقية'
  }
]

const getSeverityColor = (severity: string) => {
  const colors: Record<string, string> = {
    'منخفضة': 'from-green-400 to-emerald-500 text-green-900 dark:text-green-100',
    'متوسطة': 'from-yellow-400 to-orange-500 text-yellow-900 dark:text-yellow-100',
    'عالية': 'from-orange-400 to-red-500 text-red-900 dark:text-red-100',
    'حرجة': 'from-red-500 to-rose-600 text-white'
  }
  return colors[severity] || colors['متوسطة']
}

export default function DiseaseMap() {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterSeverity, setFilterSeverity] = useState<string>('كل الحالات')

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.includes(searchTerm) || 
                         disease.symptoms.some(s => s.includes(searchTerm))
    const matchesSeverity = filterSeverity === 'كل الحالات' || disease.severity === filterSeverity
    return matchesSearch && matchesSeverity
  })

  return (
    <section className="py-20 px-4 bg-linear-to-b from-background to-blue-50/20 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            خريطة الأمراض والأعراض
          </h2>
          <p className="text-lg text-muted">اكتشف الأمراض الشائعة والعلاقة بينها وبين الأعراض</p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="ابحث عن مرض أو عرض..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter */}
          <select
            value={filterSeverity}
            onChange={(e) => setFilterSeverity(e.target.value)}
            className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>كل الحالات</option>
            <option>منخفضة</option>
            <option>متوسطة</option>
            <option>عالية</option>
            <option>حرجة</option>
          </select>
        </motion.div>

        {/* Diseases Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredDiseases.map((disease, index) => (
              <motion.div
                key={disease.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedDisease(disease)}
                className="cursor-pointer group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`p-6 rounded-2xl bg-card border-2 border-border hover:border-blue-400 dark:hover:border-blue-500 transition-all relative overflow-hidden`}
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-blue-500 transition-opacity" />

                  {/* Severity Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-linear-to-r ${getSeverityColor(disease.severity)}`}>
                    {disease.severity}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-bold text-foreground mb-3">{disease.name}</h3>

                    {/* Commonness Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-muted mb-1">
                        <span>الشيوع</span>
                        <span>{disease.commonness}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-border overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${disease.commonness}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full bg-linear-to-r from-blue-500 to-cyan-500"
                        />
                      </div>
                    </div>

                    {/* Symptoms Preview */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted">الأعراض الشائعة:</p>
                      <div className="flex flex-wrap gap-2">
                        {disease.symptoms.slice(0, 2).map((symptom, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                            {symptom}
                          </span>
                        ))}
                        {disease.symptoms.length > 2 && (
                          <span className="text-xs px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                            +{disease.symptoms.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Learn More */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold"
                    >
                      معرفة المزيد
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Disease Details Modal */}
        <AnimatePresence>
          {selectedDisease && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDisease(null)}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-3xl border border-border p-8 max-w-2xl w-full max-h-96 overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{selectedDisease.name}</h3>
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold bg-linear-to-r ${getSeverityColor(selectedDisease.severity)}`}>
                      {selectedDisease.severity}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedDisease(null)}
                    className="text-2xl text-muted hover:text-foreground transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-muted mb-6 text-lg">{selectedDisease.description}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">الأعراض</h4>
                    <ul className="space-y-2">
                      {selectedDisease.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-3">الإحصائيات</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted mb-2">نسبة الشيوع</p>
                        <div className="w-full h-3 rounded-full bg-border overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${selectedDisease.commonness}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-linear-to-r from-blue-500 to-cyan-500"
                          />
                        </div>
                        <p className="text-xs text-muted mt-1">{selectedDisease.commonness}% من الحالات</p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted mb-2">مستوى الخطورة</p>
                        <p className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-linear-to-r ${getSeverityColor(selectedDisease.severity)}`}>
                          {selectedDisease.severity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDisease(null)}
                  className="w-full mt-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  إغلاق
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
        >
          {[
            { number: filteredDiseases.length, label: 'مرض معروض' },
            { number: filteredDiseases.reduce((sum, d) => sum + d.symptoms.length, 0), label: 'عرض متتبع' },
            { number: Math.round(filteredDiseases.reduce((sum, d) => sum + d.commonness, 0) / filteredDiseases.length), label: 'متوسط الشيوع' },
            { number: '24/7', label: 'دعم متاح' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-4 rounded-lg bg-card border border-border"
            >
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.number}{typeof stat.number === 'string' ? '' : '+'}
              </p>
              <p className="text-xs sm:text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
