'use client'

import React, { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AppointmentBooking() {
  const [step, setStep] = useState<'select' | 'form' | 'confirm'>('select')
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    specialization: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const doctors = [
    { id: 1, name: 'Dr. Ahmed Hassan', specialization: 'General Medicine', availability: '2 slots' },
    { id: 2, name: 'Dr. Fatima Ali', specialization: 'Cardiology', availability: '3 slots' },
    { id: 3, name: 'Dr. Mohammed Samir', specialization: 'Pulmonology', availability: '1 slot' },
    { id: 4, name: 'Dr. Layla Ibrahim', specialization: 'Neurology', availability: '4 slots' }
  ]

  const timeSlots = ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM', '04:45 PM']

  const handleDoctorSelect = (doctorId: number, spec: string) => {
    const doctor = doctors.find(d => d.id === doctorId)
    setFormData({ ...formData, doctor: doctor?.name || '', specialization: spec })
    setStep('form')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setStep('confirm')
    }, 500)
  }

  const handleNewBooking = () => {
    setStep('select')
    setFormData({ doctor: '', date: '', time: '', name: '', phone: '', email: '', specialization: '' })
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50 to-cyan-50 dark:from-background dark:via-slate-900 dark:to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Book an Appointment
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Schedule a consultation with our qualified healthcare professionals
          </p>
        </motion.div>

        {step === 'select' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                whileHover={{ y: -8 }}
                onClick={() => handleDoctorSelect(doctor.id, doctor.specialization)}
                className="p-6 rounded-2xl bg-card border-2 border-border hover:border-blue-400 cursor-pointer transition-all hover:shadow-lg"
              >
                <div className="text-5xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{doctor.name}</h3>
                <p className="text-sm text-muted mb-3">{doctor.specialization}</p>
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  {doctor.availability}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {step === 'form' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card border-2 border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                📋 Booking Details for {formData.doctor}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Select Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Select Time
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">Choose a time slot</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep('select')}
                    className="flex-1 px-6 py-3 rounded-lg border-2 border-border text-foreground font-bold hover:bg-card transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg bg-gradient-medical text-white font-bold hover:shadow-lg transition-all"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {step === 'confirm' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-card border-2 border-green-500 rounded-2xl p-12">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6 }}
                className="text-6xl mb-6"
              >
                ✅
              </motion.div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Appointment Confirmed!</h2>
              <div className="space-y-4 text-lg text-muted mb-8">
                <p>📅 <strong>{formData.date}</strong> at <strong>{formData.time}</strong></p>
                <p>👨‍⚕️ Doctor: <strong>{formData.doctor}</strong></p>
                <p>📞 Confirmation sent to: <strong>{formData.email}</strong></p>
              </div>
              <button
                onClick={handleNewBooking}
                className="px-8 py-3 rounded-lg bg-gradient-medical text-white font-bold hover:shadow-lg transition-all"
              >
                Book Another Appointment
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
