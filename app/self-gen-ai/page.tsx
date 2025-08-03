"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, Building, Monitor } from "lucide-react"

export default function SelfGenAIPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Minimalist Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Career Paths Section */}
      <CareerSection />

      {/* Excellence Section */}
      <ExcellenceSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link href="/" className="text-xl font-light tracking-wide text-black hover:opacity-70 transition-opacity">
          KAHUA
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="#philosophy" className="text-sm font-light text-gray-600 hover:text-black transition-colors">
            Philosophy
          </Link>
          <Link href="#features" className="text-sm font-light text-gray-600 hover:text-black transition-colors">
            Features
          </Link>
          <Link href="#career" className="text-sm font-light text-gray-600 hover:text-black transition-colors">
            Career
          </Link>
          <motion.button
            className="px-6 py-2 border border-black text-black text-sm font-light hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-white">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=AI+Human+Fusion+Portrait"
            alt="AI×人間の融合を表現する女性ポートレート"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-wider text-black">SELF-GEN</h1>
            <div className="w-24 h-px bg-black mx-auto" />
            <p className="text-lg md:text-xl font-light text-gray-600 tracking-wide">Self Generation AI塾</p>
          </div>

          <motion.h2
            className="text-2xl md:text-3xl font-light leading-relaxed text-black max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            世界が変わっても、
            <br />
            "わたしの中心"は自分がつくる。
          </motion.h2>

          <motion.p
            className="text-base md:text-lg font-light text-gray-500 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            AI時代の創造プロフェッショナル育成
          </motion.p>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="px-12 py-4 border-2 border-black text-black font-light text-lg tracking-wide hover:bg-black hover:text-white transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Begin Your Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} id="philosophy" className="py-32 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extralight text-black leading-tight tracking-wide">
                Philosophy
              </h2>
              <div className="w-16 h-px bg-black" />
            </div>

            <div className="space-y-8 text-gray-700 font-light leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-black tracking-wide">AI時代の創造哲学</h3>
                <p className="text-lg font-light text-black leading-relaxed">
                  "AIが進化しても、創造の主導権はわたしにある。"
                </p>
              </div>

              <div className="space-y-6 text-base">
                <p>
                  私たちは技術の習得だけを目的としません。AIは強力な補助装置ですが、
                  創造の起点となるのは常に「あなたの感性」「あなたの閃き」「あなたの心」です。
                </p>

                <p>
                  このスクールでは、表面的なツールの使い方ではなく、
                  内側からのプロンプト—あなた自身の感性を言語化し、世界に表現する力を育てます。
                </p>

                <p>
                  世界がどれだけ変化しても、あなたの中心は揺るがない。
                  そんなプロフェッショナルを、私たちと一緒に目指しませんか？
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="relative h-96"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._What_is_the_urban_consciousness_of_Shibuya_and_what_sens_1f16304e-281c-43dc-abca-6cb42e8823bc-VnlvljOAfyztr9w4XOLCYp0p5ELshY.png"
              alt="創造への扉 - ピンクの部屋に浮かぶ雲の景色への入口"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

 const features = [
    {
      title: "感性プロンプティング",
      description: "技術的な指示を超えた、感性に基づく創造的対話の技法",
      icon: Eye,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._A_ethereal_minimalist_composition_showing_floating_tra_a5f23dba-536a-43e2-ae72-95d84e24c140_3-iQmYg18orMOLuieTf0VAe3zqsPlWJ3.png",
    },
    {
      title: "オリジナル表現力",
      description: "模倣ではない、あなただけの創造言語の構築",
      icon: Building,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._A_ethereal_minimalist_composition_showing_floating_tra_784f0397-8b58-45b4-81d4-d448c8c4a314_2%20%282%29-45yNEJPWLzvn9jFTphRvI5WlOAH8X2.png",
    },
    {
      title: "プロフェッショナル構築力",
      description: "創造を持続可能なキャリアに変える実践的スキル",
      icon: Monitor,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._A_minimalist_composition_of_ascending_geometric_steps__6663f59e-2b3f-4461-9740-2217193bb0ee_2-IXDfORfu9ZI8MZ7uzQrsGgnW6koZ6K.png",
    },
  ]

  return (
    <section ref={ref} id="features" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6">Core Features</h2>
          <div className="w-16 h-px bg-black mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-64 mb-8 overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="space-y-4">
                <feature.icon className="w-8 h-8 text-black" />
                <h3 className="text-xl font-light text-black">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CareerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

 const careers = [
    {
      englishTitle: "AI Creative Director",
      japaneseTitle: "AIクリエイティブディレクター",
      description:
        "企業のブランド戦略・広告・マーケティングにおいて、AI活用を軸にしたクリエイティブ全体を統括するプロフェッショナル",
    },
    {
      englishTitle: "Prompt Artist",
      japaneseTitle: "感性プロンプター",
      description: "従来のプロンプトエンジニアを超えた、感性と哲学を軸にしたAI対話の専門家として独立・企業内で活躍",
    },
    {
      englishTitle: "AI Content Strategist",
      japaneseTitle: "次世代ブランドデザイナー",
      description: "AI時代の企業・個人ブランディングを設計し、独自の世界観を構築するコンサルタント・デザイナー",
    },
    {
      englishTitle: "Creative Technologist",
      japaneseTitle: "AI表現アーティスト",
      description: "アート・デザイン・映像・音楽などの分野で、AIを創作パートナーとした新しい表現形態を追求する創作者",
    },
    {
      englishTitle: "AI Art Curator",
      japaneseTitle: "クリエイティブ起業家",
      description: "自分自身の感性と世界観をビジネス化し、新しい価値を生み出すクリエイティブ事業を展開する起業家",
    },
    {
      englishTitle: "Independent Creator",
      japaneseTitle: "AI時代のコンテンツクリエイター",
      description: "SNS・動画・メディアにおいて、他では真似できない独自コンテンツを継続的に生み出すプロフェッショナル",
    },
  ]

  return (
    <section ref={ref} id="career" className="py-32 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6">Career Paths</h2>
          <div className="w-16 h-px bg-black mx-auto mb-8" />
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">進化した創造者たちが歩む、6つの職業パス</p>
        </motion.div>

        <div className="relative mb-16">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=AI+Beings+Group+Portrait"
            alt="AI的存在の群像"
            width={1200}
            height={400}
            className="w-full h-64 object-cover grayscale"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <motion.div
             key={career.englishTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-gray-200 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-lg font-light text-black mb-4 group-hover:text-gray-600 transition-colors">
  {career.englishTitle}
</h3>
<h4 className="text-md font-medium text-gray-700 mb-2">
  {career.japaneseTitle}
</h4>
<p className="text-sm font-light text-gray-600 leading-relaxed">{career.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExcellenceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { number: "100%", label: "PROFESSIONAL GRADE OUTPUT" },
    { number: "∞", label: "CREATIVE POSSIBILITIES" },
    { number: "1:1", label: "PERSONALIZED MENTORSHIP" },
  ]

  return (
    <section ref={ref} className="py-32 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-[0.3em] uppercase">
            Excellence in Creative Education
          </h2>
          <div className="w-16 h-px bg-black mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-6"
            >
              <div className="text-6xl md:text-7xl font-extralight text-black tracking-wide">{stat.number}</div>
              <div className="text-xs font-light text-gray-600 tracking-[0.2em] uppercase leading-relaxed max-w-48 mx-auto">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-16 py-4 bg-black text-white font-light text-base tracking-[0.1em] uppercase hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-16 px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-extralight text-black tracking-wide">SELF-GEN</h3>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              Self Generation AI塾
              <br />
              AI時代の創造プロフェッショナル育成
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-light text-black">Contact</h4>
            <div className="space-y-2 text-sm font-light text-gray-600">
              <p>Email: kahua105@gmail.com</p>
              <p>無料相談受付中</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-light text-black">Philosophy</h4>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              世界が変わっても、
              <br />
              "わたしの中心"は自分がつくる。
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs font-light text-gray-500">
            © 2022-2025 SELF-GEN | Self Generation AI塾. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
