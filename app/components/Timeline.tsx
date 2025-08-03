"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const timelineEvents = [
  {
    year: "1998",
    title: "Language School Founded",
    description:
      "Launched as an English conversation school focused on practical communication skills, listening, and pronunciation. Guided by an educational philosophy that respects each individual's uniqueness and nurtures their potential, the school grew to become a trusted presence in Higashinada, Kobe. Featured on television and in major media as a widely recognized and talked-about institution.",
  },
  {
    year: "2007",
    title: "KAHUA Photo Office",
    description:
      "Launched as an art-focused photo studio, specializing in candid and emotive photography. Known for capturing the essence of light and human emotion. (Nihonbare Pictures)",
  },
  {
    year: "2010",
    title: "USTREAM Broadcasting",
    description:
      'Began experimental live broadcasts in the early days of USTREAM, exploring the intersection of film and dialogue through poetic readings and live interaction. ("Reading KAHUA" USTREAM series)',
  },
  {
    year: "2015",
    title: "KAHUA VR LAB",
    description:
      "Ventured into immersive expression through virtual spaces, designing original VR experiences and laying the groundwork for XR-era creativity. (VR Artist Collective A)",
  },
  {
    year: "2023",
    title: "AI STUDIO",
    description:
      "Entered the realm of AI-driven artistry, bridging visuals, art, education, and entertainment to pioneer new forms of interdisciplinary creation.",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "white" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#111111" }}>
            Our Journey
          </h2>
          <p className="text-lg opacity-80" style={{ color: "#111111" }}>
            The evolution of KAHUA through the years
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
            style={{ backgroundColor: "#2d3748" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-5/12" />
              <motion.div className="z-20" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ backgroundColor: "#2d3748" }}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </motion.div>
              <motion.div className="w-5/12" whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#f4f4f4" }}>
                  <span className="font-bold text-lg" style={{ color: "#2d3748" }}>
                    {event.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#111111" }}>
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-80" style={{ color: "#111111" }}>
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
