"use client"

import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function ExperienceOurWorld() {
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* YouTube動画背景 - 元の状態 */}
      <div className="absolute inset-0 w-full h-full">
        {!isMobile ? (
          <iframe
            src="https://www.youtube.com/embed/a5APSvBwRFs?autoplay=1&mute=1&loop=1&playlist=a5APSvBwRFs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="w-full h-full object-cover"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
            title="Experience Our World"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://img.youtube.com/vi/a5APSvBwRFs/maxresdefault.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
        )}
      </div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-12"
            style={{ color: "#f4f4f4" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Experience Our World
          </motion.h2>

          <div className="space-y-8 mb-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-xl md:text-2xl leading-relaxed" style={{ color: "#f4f4f4" }}>
                感じる前に、魂が反応する。
              </p>
              <p className="text-lg md:text-xl leading-relaxed opacity-90" style={{ color: "#f4f4f4" }}>
                創造とは、思考の奥にある沈黙から始まる。
              </p>
            </motion.div>

            <motion.div
              className="space-y-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl leading-relaxed opacity-80" style={{ color: "#f4f4f4" }}>
                Before you feel, your soul already responds.
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-80" style={{ color: "#f4f4f4" }}>
                Creation begins where thought gives way to silence.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="https://kahuaart.studio.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              style={{ backgroundColor: "#4f9da6", color: "#f4f4f4" }}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 30px rgba(79, 157, 166, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              KAHUA ARTを見る
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
