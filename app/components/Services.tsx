"use client"

import { motion, useInView } from "framer-motion"
import { Paintbrush, Palette, GraduationCap } from "lucide-react"
import { useRef } from "react"

const services = [
  {
    title: "AI STUDIO",
    subtitle: "AI制作・コンサルティング",
    description: "企業のビジュアルコンテンツをAIで効率的に制作。戦略的なクリエイティブソリューションを提供",
    icon: Paintbrush,
    gradient: "from-blue-500 via-purple-600 to-indigo-700",
    cta: "制作相談する",
    price: "初回相談無料",
    link: "/ai-creative-production",
  },
  {
    title: "AI Art Gallery",
    subtitle: "AIアート作品販売",
    description: "独創的なAIアート作品とキュレーションされたコレクション。オリジナル作品をお求めいただけます",
    icon: Palette,
    gradient: "from-pink-500 via-rose-600 to-purple-700",
    cta: "作品を見る",
    price: "作品により異なります",
    link: "https://kahuaart.studio.site/",
  },
  {
    title: "SCHOOL",
    subtitle: "Self Generation AI塾 SELF-GEN",
    description: "個性を尊重し可能性を引き出す教育哲学。実践的なコミュニケーション能力を育成します",
    icon: GraduationCap,
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    cta: "講座詳細",
    price: "無料カウセリング実施期間あり",
    link: "/englishschool",
    hasMultipleOptions: true,
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const IconComponent = service.icon
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      onClick={() => window.location.href = service.link}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
      style={{ backgroundColor: "white" }}
      whileHover={{
        y: -15,
        scale: 1.03,
        boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
      }}
    >
      {/* Icon + Gradient Section - より大きく */}
      <div
        className={`relative h-64 bg-gradient-to-br ${service.gradient} flex items-center justify-center overflow-hidden`}
      >
        <motion.div whileHover={{ scale: 1.3, rotate: 10 }} transition={{ duration: 0.4 }} className="relative z-10">
          <IconComponent className="w-20 h-20 text-white drop-shadow-lg" />
        </motion.div>

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-500" />

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content Section - より充実 */}
      <div className="p-8">
        <motion.h3
          className="text-2xl font-bold mb-3"
          style={{ color: "#111111" }}
          whileHover={{ color: "#2d3748" }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        <p className="text-base mb-4 font-medium" style={{ color: "#2d3748" }}>
          {service.subtitle}
        </p>

        <p className="text-base leading-relaxed opacity-85 mb-6" style={{ color: "#111111" }}>
          {service.description}
        </p>

        {/* Enhanced 料金目安 */}
        <motion.div
          className="mb-6 p-4 rounded-xl border-2 border-solid"
          style={{ backgroundColor: "#f8fafc", borderColor: "#2d3748" }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-sm font-bold flex items-center" style={{ color: "#2d3748" }}>
            {service.title === "AI STUDIO" && "🎨"}
            {service.title === "AI Art Gallery" && "🖼️"}
            {service.title === "SCHOOL" && "📚"}
            <span className="ml-2">{service.price}</span>
          </p>
        </motion.div>

        {/* Enhanced CTA Button */}
        {service.title === "AI STUDIO" ? (
          <div className="space-y-3">
            {/* 既存の制作相談するボタン */}
            <motion.a
              href={service.link}
              className="inline-flex items-center text-base font-bold transition-all duration-300 px-6 py-3 rounded-full w-full justify-center"
              style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(45, 55, 72, 0.3)",
                backgroundColor: "#1a202c",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {service.cta}
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>

            {/* 新規追加のInternational Servicesボタン */}
            <div className="text-center">
              <motion.a
                href="/ai-creative-production"
                className="inline-flex items-center text-base font-bold transition-all duration-300 px-6 py-3 rounded-full w-full justify-center"
                style={{ backgroundColor: "#FFD700", color: "#000000" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)",
                  backgroundColor: "#FFC700",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                International Services
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.a>
              <p className="text-xs opacity-70 mt-2" style={{ color: "#111111" }}>
                For international clients and global projects
              </p>
            </div>
          </div>
        ) : service.hasMultipleOptions ? (
          // SCHOOLサービス用の複数ボタン
          <div className="space-y-3">
            <motion.a
              href="/self-gen-ai"
              className="inline-flex items-center text-base font-bold transition-all duration-300 px-6 py-3 rounded-full w-full justify-center"
              style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(45, 55, 72, 0.3)",
                backgroundColor: "#1a202c",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              AI講座 - SELF-GEN
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center text-base font-bold transition-all duration-300 px-6 py-3 rounded-full w-full justify-center border-2 border-solid"
              style={{ borderColor: "#2d3748", color: "#2d3748", backgroundColor: "transparent" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#2d3748",
                color: "#f4f4f4",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              語学スクール
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>
          </div>
        ) : (
          // 他のサービスは既存の単一ボタン
          <motion.a
            href={service.link}
            target={service.link.startsWith("http") ? "_blank" : undefined}
            rel={service.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center text-base font-bold transition-all duration-300 px-6 py-3 rounded-full w-full justify-center"
            style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(45, 55, 72, 0.3)",
              backgroundColor: "#1a202c",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {service.cta}
            <motion.svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#111111" }}>
            Our Services
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto" style={{ color: "#111111" }}>
            感性と技術を融合させた、次世代のクリエイティブソリューション
          </p>
        </motion.div>

        {/* 3つのカードを横並びで大きく表示 */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* 追加のCTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg mb-6" style={{ color: "#111111" }}>
            どのサービスも、まずはお気軽にご相談ください
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300"
            style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(45, 55, 72, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            📞 無料相談・お問い合わせ
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
