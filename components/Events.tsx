"use client"

import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import EventsComingSoon from "./EventsComingSoon"

export default function Events() {
  const upcomingEvents = [
    {
      title: "Women's Wellness Workshop",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Noir Well Health Center",
      attendees: 24,
      maxAttendees: 30,
      description:
        "Explore hormonal health, stress management, and nutrition strategies specifically designed for women.",
      category: "Workshop",
      price: "Free for Members",
    },
    {
      title: "Mindful Movement Retreat",
      date: "March 22, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Local Wellness Center",
      attendees: 12,
      maxAttendees: 20,
      description: "A full-day retreat combining yoga, meditation, and mindful movement practices.",
      category: "Retreat",
      price: "$89 ($69 Members)",
    },
    {
      title: "Nutrition & Meal Prep Masterclass",
      date: "March 29, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Virtual Event",
      attendees: 45,
      maxAttendees: 50,
      description:
        "Learn practical meal planning strategies and healthy cooking techniques from our nutrition experts.",
      category: "Masterclass",
      price: "$25 (Free for Elevated+ Members)",
    },
  ]

  const eventCategories = [
    { name: "Workshops", count: 8, color: "bg-noir-olive" },
    { name: "Retreats", count: 3, color: "bg-noir-mauve" },
    { name: "Masterclasses", count: 12, color: "bg-noir-beige" },
    { name: "Community Events", count: 6, color: "bg-noir-rose" },
  ]

  return (
    <section id="events" className="section-padding bg-gradient-to-br from-noir-cream/30 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-noir-olive mr-3" />
            <span className="text-noir-olive font-medium uppercase tracking-wide">Community Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-noir-brown mb-6">Workshops, Retreats & Education</h2>
          <p className="text-xl text-noir-mauve leading-relaxed">
            Join our vibrant community through educational workshops, wellness retreats, and transformative experiences
            designed to support your health journey.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <EventsComingSoon />

        {/* Event Categories - with opacity to show they're placeholders */}
        <div className="opacity-60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {eventCategories.map((category, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-white border border-noir-beige/50 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold">{category.count}</span>
                </div>
                <h4 className="font-semibold text-noir-brown">{category.name}</h4>
              </div>
            ))}
          </div>

          {/* Upcoming Events - with placeholder overlay */}
          <div className="mb-12 relative">
            <h3 className="text-2xl font-bold text-noir-brown mb-8 text-center">Preview: Future Events</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-noir-beige/50 hover:shadow-xl transition-all duration-300 relative"
                >
                  {/* Placeholder badge */}
                  <div className="absolute top-4 right-4 bg-noir-olive/10 text-noir-olive px-2 py-1 rounded-full text-xs font-medium">
                    Preview
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-noir-olive/10 text-noir-olive px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                    <span className="text-noir-mauve font-medium">{event.price}</span>
                  </div>

                  <h4 className="text-xl font-bold text-noir-brown mb-3 group-hover:text-noir-olive transition-colors duration-300">
                    {event.title}
                  </h4>

                  <p className="text-noir-mauve text-sm mb-4 leading-relaxed">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-noir-brown">
                      <Calendar className="h-4 w-4 mr-2 text-noir-olive" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-noir-brown">
                      <Clock className="h-4 w-4 mr-2 text-noir-olive" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-noir-brown">
                      <MapPin className="h-4 w-4 mr-2 text-noir-olive" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-noir-brown">
                      <Users className="h-4 w-4 mr-2 text-noir-olive" />
                      {event.attendees}/{event.maxAttendees} registered
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-full bg-noir-cream rounded-full h-2 mr-3">
                      <div
                        className="bg-noir-olive h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center text-noir-olive/60 font-medium text-sm">
                      Coming Soon
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-noir-olive to-noir-brown rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Connected to Our Community</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be the first to know about new workshops, exclusive member events, and special wellness programs. Join our
            community and never miss an opportunity to grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-noir-brown focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-noir-olive px-8 py-3 rounded-full font-medium hover:bg-noir-cream transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
