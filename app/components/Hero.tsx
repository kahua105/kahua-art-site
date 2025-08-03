"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video with Parallax */}
      {!isMobile && (
        <div
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <iframe
            src="https://www.youtube.com/embed/RM-zuTI1z6I?autoplay=1&mute=1&loop=1&playlist=RM-zuTI1z6I&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="w-full h-full object-cover scale-110"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}

      {/* Background Image for Mobile with Parallax */}
      {isMobile && (
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero07132025.png-LgHRrBIMci2Lkuq7qlJHSGAGVmy1gq.jpeg")',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-5xl">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ color: "#f4f4f4" }}
          >
            KAHUA
          </motion.h1>

          <motion.div
            className="space-y-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* メインキャッチフレーズ */}
            <p className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#f4f4f4" }}>
              感性に、技術を。魂に、創造を。
            </p>

            {/* 新しく追加する部分 */}
            <motion.p
              className="text-xl md:text-2xl mb-6"
              style={{ color: "#f4f4f4" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              AI時代の新しいクリエイティブを、あなたに。
            </motion.p>

            {/* 3つのサービス紹介 */}
            <motion.div
              className="text-base md:text-lg mb-6 space-y-2"
              style={{ color: "#f4f4f4" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <p>✨ AI制作で企業の課題解決</p>
              <p>🎨 独創的なアート作品の創造</p>
              <p>🌍 グローバル人材の語学育成</p>
            </motion.div>

            {/* 英語部分 */}
            <motion.p
              className="text-lg md:text-xl mb-4"
              style={{ color: "#f4f4f4" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Welcome to the next era of AI × Art.
            </motion.p>

            {/* 新しく追加する英語の下の部分 */}
            <motion.p
              className="text-base md:text-lg mb-6"
              style={{ color: "#f4f4f4" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              3つの専門サービスで、あなたの可能性を最大化します
            </motion.p>

            <motion.p
              className="text-sm md:text-base opacity-90"
              style={{ color: "#f4f4f4" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              Elevate your creative practice with cutting-edge AI tools and personalized learning experiences.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <motion.a
              href="https://kahuaart.studio.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
              style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "#1a202c" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.a>
            <a href="#philosophy" className="text-sm font-semibold leading-6" style={{ color: "#f4f4f4" }}>
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
