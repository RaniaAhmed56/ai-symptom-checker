'use client'

import React, { useState } from 'react'
import { Activity, Heart, Droplets, Moon, TrendingUp, Calendar, Plus, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HealthTracker() {
  const [activeTab, setActiveTab] = useState<'overview' | 'vitals' | 'activity' | 'nutrition'>('overview')
  const [vitals, setVitals] = useState([
    { id: 1, type: 'Blood Pressure', value: '120/80', unit: 'mmHg', date: 'Today', icon: '❤️' },
    { id: 2, type: 'Heart Rate', value: '72', unit: 'bpm', date: 'Today', icon: '💓' },
    { id: 3, type: 'Weight', value: '72.5', unit: 'kg', date: 'Today', icon: '⚖️' },
    { id: 4, type: 'Temperature', value: '37.0', unit: '°C', date: 'Today', icon: '🌡️' }
  ])
  const [activities, setActivities] = useState([
    { id: 1, name: 'Morning Run', duration: '30', calories: '300', date: 'Today', icon: '🏃' },
    { id: 2, name: 'Yoga', duration: '45', calories: '150', date: 'Yesterday', icon: '🧘' },
    { id: 3, name: 'Swimming', duration: '60', calories: '400', date: '2 days ago', icon: '🏊' }
  ])

  const stats = [
    { label: 'Steps Today', value: '8,234', target: '10,000', icon: '👟', progress: 82 },
    { label: 'Water Intake', value: '6', target: '8', unit: 'glasses', icon: '💧', progress: 75 },
    { label: 'Sleep', value: '7.5', target: '8', unit: 'hours', icon: '😴', progress: 93 },
    { label: 'Calories', value: '1,850', target: '2,000', icon: '🔥', progress: 92 }
  ]

  const deleteVital = (id: number) => {
    setVitals(vitals.filter(v => v.id !== id))
  }

  const deleteActivity = (id: number) => {
    setActivities(activities.filter(a => a.id !== id))
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50 to-cyan-50 dark:from-background dark:via-slate-900 dark:to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Health Tracker
          </h1>
          <p className="text-xl text-muted">Monitor your vitals and daily health metrics</p>
        </motion.div>

        {/* Daily Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border-2 border-border rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-sm text-muted mb-2">{stat.label}</p>
              <div className="mb-3">
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                  <span className="text-sm text-muted ml-1">{stat.unit}</span>
                </p>
                <p className="text-xs text-muted mt-1">Target: {stat.target} {stat.unit}</p>
              </div>
              {/* Progress Bar */}
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.progress}%` }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-full bg-linear-to-r from-blue-500 to-cyan-500"
                />
              </div>
              <p className="text-xs text-muted mt-2 text-right">{stat.progress}%</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-2 mb-8 border-b-2 border-border overflow-x-auto"
        >
          {[
            { id: 'overview', label: '📊 Overview', icon: '📊' },
            { id: 'vitals', label: '❤️ Vitals', icon: '❤️' },
            { id: 'activity', label: '🏃 Activity', icon: '🏃' },
            { id: 'nutrition', label: '🥗 Nutrition', icon: '🥗' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-muted hover:text-foreground'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Recent Vitals</h2>
                <div className="space-y-3">
                  {vitals.slice(0, 2).map((vital) => (
                    <div key={vital.id} className="bg-card border-2 border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{vital.icon}</span>
                          <div>
                            <p className="font-semibold text-foreground">{vital.type}</p>
                            <p className="text-xs text-muted">{vital.date}</p>
                          </div>
                        </div>
                        <p className="text-lg font-bold text-blue-600">{vital.value} {vital.unit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Recent Activities</h2>
                <div className="space-y-3">
                  {activities.slice(0, 2).map((activity) => (
                    <div key={activity.id} className="bg-card border-2 border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{activity.icon}</span>
                          <div>
                            <p className="font-semibold text-foreground">{activity.name}</p>
                            <p className="text-xs text-muted">{activity.duration} min • {activity.date}</p>
                          </div>
                        </div>
                        <p className="text-lg font-bold text-green-600">{activity.calories} cal</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vitals' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Vital Signs</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-medical text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Add Vital
                </motion.button>
              </div>
              <div className="space-y-4">
                {vitals.map((vital) => (
                  <motion.div
                    key={vital.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-card border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{vital.icon}</span>
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{vital.type}</h3>
                          <p className="text-sm text-muted flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {vital.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-3xl font-bold text-blue-600">{vital.value}</p>
                        <span className="text-muted">{vital.unit}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => deleteVital(vital.id)}
                          className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5 text-red-500" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Physical Activities</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-medical text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Log Activity
                </motion.button>
              </div>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-card border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{activity.icon}</span>
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{activity.name}</h3>
                          <p className="text-sm text-muted flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            {activity.duration} minutes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-sm text-muted">{activity.date}</p>
                          <p className="text-2xl font-bold text-green-600">{activity.calories} cal</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => deleteActivity(activity.id)}
                          className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5 text-red-500" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div className="bg-card border-2 border-border rounded-2xl p-8 text-center">
              <Droplets className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Nutrition Tracking</h2>
              <p className="text-muted mb-6">Log your meals and track your nutritional intake</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-medical text-white rounded-lg font-bold hover:shadow-lg transition-all"
              >
                <Plus className="w-4 h-4 inline mr-2" />
                Log Meal
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
