"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    title: "AIアート制作で企業ブランディングが大成功",
    client: "IT企業経営者様",
    content: "従来の10分の1のコストで、3倍のエンゲージメントを実現",
    gradient: "from-blue-500 to-purple-600",
    icon: "🚀",
  },
  {
    title: "オリジナルアート作品で空間演出が向上",
    client: "店舗オーナー様",
    content: "お客様からの反応がとても良く、印象的な空間になりました。アートという夢を実現できました",
    gradient: "from-pink-500 to-rose-600",
    icon: "🎨",
  },
  {
    title: "英語力向上でビジネスチャンスが拡大",
    client: "フリーランスデザイナー様",
    content: "語学スキル向上により、新しい案件獲得につながりました",
    gradient: "from-emerald-500 to-teal-600",
    icon: "🌍",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="rounded-3xl shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
      style={{ backgroundColor: "white" }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
      }}
    >
      {/* Header with gradient */}
      <div className={`relative h-32 bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
        <motion.div className="text-4xl" whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>
          {testimonial.icon}
        </motion.div>
        <div className="absolute top-4 right-4">
          <Quote className="w-6 h-6 text-white opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-lg font-bold mb-3 leading-tight"
          style={{ color: "#111111" }}
          whileHover={{ color: "#2d3748" }}
          transition={{ duration: 0.2 }}
        >
          {testimonial.title}
        </motion.h3>

        <p className="text-base leading-relaxed mb-4" style={{ color: "#111111" }}>
          「{testimonial.content}」
        </p>

        {/* Stars */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </div>

        {/* Client info */}
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
            style={{ backgroundColor: "#2d3748" }}
          >
            <span className="text-white font-bold text-sm">{testimonial.client.charAt(0)}</span>
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: "#2d3748" }}>
              {testimonial.client}
            </p>
            <p className="text-xs opacity-70" style={{ color: "#111111" }}>
              KAHUA クライアント
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ClientTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#111111" }}>
            Client Success Stories
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto" style={{ color: "#111111" }}>
            お客様の成功事例をご紹介します
          </p>
        </motion.div>

        {/* 3つのカードを横並び */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.title} testimonial={testimonial} index={index} />
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
            あなたも成功事例の一員になりませんか？
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
            ✨ 無料相談で始める
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
