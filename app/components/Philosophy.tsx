"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: "#111111" }}>
            PHILOSOPHY
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div className="space-y-4" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <p className="text-lg leading-relaxed" style={{ color: "#111111" }}>
                感性が鈍っていくこの時代に、わたしたちは「魂から生まれる創造」にもう一度触れようとしている。
              </p>
              <p className="text-base leading-relaxed opacity-80" style={{ color: "#111111" }}>
                In an age where sensitivity dulls,
                <br />
                we reach again for creation born from the soul.
              </p>
            </motion.div>

            <motion.div className="space-y-4" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <p className="text-lg leading-relaxed" style={{ color: "#111111" }}>
                AIというツールは、本当は感性と深く結びついた"創造のパートナー"になれる。
              </p>
              <p className="text-base leading-relaxed opacity-80" style={{ color: "#111111" }}>
                AI is not just a tool— it can become a partner in deep, intuitive creation.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div className="space-y-4" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <p className="text-lg leading-relaxed" style={{ color: "#111111" }}>
                私たちの講座は、技術だけでなく、「問い」を深め、「創造とは何か」を共に見つけていく場。
              </p>
              <p className="text-base leading-relaxed opacity-80" style={{ color: "#111111" }}>
                This course goes beyond technique—it's a space to deepen our questions and rediscover the essence of
                creation, together.
              </p>
            </motion.div>

            <motion.div className="space-y-4" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <p className="text-lg leading-relaxed" style={{ color: "#111111" }}>
                観る、描く、詠む、創る──すべての行為を、魂から再起動するために。
              </p>
              <p className="text-base leading-relaxed opacity-80" style={{ color: "#111111" }}>
                To observe, to draw, to compose, to build— all acts, rebooted from the soul.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
