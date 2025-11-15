"use client"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"

export default function Booking() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const services = [
    { value: "primary-care", label: "Primary Care Consultation" },
    { value: "womens-health", label: "Women's Health" },
    { value: "behavioral-health", label: "Behavioral Health" },
    { value: "nutrition", label: "Nutrition Counseling" },
    { value: "iv-therapy", label: "IV Therapy" },
    { value: "wellness-consult", label: "Wellness Consultation" },
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
  ]

  return (
    <section id="booking" className="section-padding bg-gradient-to-br from-noir-olive to-noir-brown">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Schedule Your Appointment</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Take the first step towards your wellness journey. Book a consultation with our expert team today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white rounded-2xl p-8">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-noir-brown font-medium mb-2">
                      <User className="inline-block h-4 w-4 mr-2" />
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-noir-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-noir-olive"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-noir-brown font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-noir-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-noir-olive"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-noir-brown font-medium mb-2">
                      <Mail className="inline-block h-4 w-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-noir-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-noir-olive"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-noir-brown font-medium mb-2">
                      <Phone className="inline-block h-4 w-4 mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-noir-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-noir-olive"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-noir-brown font-medium mb-2">Service Type</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 border border-noir-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-noir-olive"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-noir-brown font-medium mb-2">
                    <Calendar className="inline-block h-4 w-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-noir-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-noir-olive"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-noir-brown font-medium mb-2">
                    <Clock className="inline-block h-4 w-4 mr-2" />
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                          selectedTime === time
                            ? "bg-noir-olive text-white border-noir-olive"
                            : "border-noir-beige hover:border-noir-olive hover:bg-noir-olive/10"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-noir-brown font-medium mb-2">
                    <MessageSquare className="inline-block h-4 w-4 mr-2" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-noir-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-noir-olive resize-none"
                    placeholder="Please share any specific concerns or questions you'd like to discuss..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-noir-olive text-white py-4 rounded-lg font-medium hover:bg-noir-brown transition-colors duration-300"
                >
                  Schedule Appointment
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="text-white space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-white/80" />
                    <span>(757) 555-0123</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-white/80" />
                    <span>appointments@noirwellhealth.com</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mr-3 mt-1 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      123 Wellness Way
                      <br />
                      Norfolk, VA 23510
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">Office Hours</h4>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">What to Expect</h4>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Confirmation call within 24 hours
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    New patient forms sent via email
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Arrive 15 minutes early for check-in
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Bring insurance card and ID
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
