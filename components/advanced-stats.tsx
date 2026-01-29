'use client'

import React from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

interface AnalysisStats {
  diagnosis: string[]
  severity: string
  timestamp: string
}

interface AdvancedStatsProps {
  result: AnalysisStats
}

export default function AdvancedStats({ result }: AdvancedStatsProps) {
  // Mock data for demonstration
  const severityDistribution = [
    { name: 'Low', value: 35, fill: '#10b981' },
    { name: 'Medium', value: 40, fill: '#f59e0b' },
    { name: 'High', value: 20, fill: '#ef4444' },
    { name: 'Critical', value: 5, fill: '#dc2626' }
  ]

  const trendsData = [
    { day: 'السبت', analyses: 45 },
    { day: 'الأحد', analyses: 52 },
    { day: 'الإثنين', analyses: 48 },
    { day: 'الثلاثاء', analyses: 61 },
    { day: 'الأربعاء', analyses: 55 },
    { day: 'الخميس', analyses: 67 },
    { day: 'الجمعة', analyses: 72 }
  ]

  const diagnosisData = [
    { name: 'الزكام', count: 34 },
    { name: 'الإنفلونزا', count: 28 },
    { name: 'الحساسية', count: 22 },
    { name: 'الربو', count: 16 },
    { name: 'التهاب الحلق', count: 20 }
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="space-y-8"
    >
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Severity Distribution - Pie Chart */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border rounded-2xl p-6 shadow-lg"
        >
          <h3 className="font-bold text-lg mb-4 text-foreground">توزيع الشدة</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--foreground)'
                  }}
                />
                <Pie
                  data={severityDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {severityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Weekly Trends - Line Chart */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border rounded-2xl p-6 shadow-lg"
        >
          <h3 className="font-bold text-lg mb-4 text-foreground">الاتجاهات الأسبوعية</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" stroke="var(--muted)" />
                <YAxis stroke="var(--muted)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--foreground)'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="analyses"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 5 }}
                  name="عدد التحليلات"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Top Diagnoses - Bar Chart */}
      <motion.div
        variants={itemVariants}
        className="bg-card border border-border rounded-2xl p-6 shadow-lg"
      >
        <h3 className="font-bold text-lg mb-4 text-foreground">أكثر التشخيصات شيوعاً</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={diagnosisData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted)" />
              <YAxis stroke="var(--muted)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)'
                }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          { label: 'إجمالي التحليلات', value: '1,247', color: 'bg-blue-500' },
          { label: 'معدل الدقة', value: '98.5%', color: 'bg-green-500' },
          { label: 'المستخدمون النشطون', value: '2,341', color: 'bg-purple-500' },
          { label: 'الحالات المراقبة', value: '156', color: 'bg-orange-500' }
        ].map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg bg-linear-to-br ${stat.color} text-white`}
          >
            <p className="text-sm opacity-90 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
