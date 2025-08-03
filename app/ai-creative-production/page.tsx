"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Globe } from "lucide-react"
import Image from "next/image"

export default function AICreativeProductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      {/* Hero Section with YouTube Background */}
<div className="min-h-screen relative overflow-hidden">
  {/* YouTube背景動画 */}
  <div className="absolute inset-0 z-0">
    <iframe
      src="https://www.youtube.com/embed/ChOPQItj3mM?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=ChOPQItj3mM&start=0&end=0&version=3&enablejsapi=1&origin=window.location.origin"
      className="w-full h-full scale-150 -translate-x-16 -translate-y-16"
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        width: '100vw',
        height: '56.25vw',
        minHeight: '100vh',
        objectFit: 'cover'
      }}
      allow="autoplay; encrypted-media"
      frameBorder="0"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>

  {/* コンテンツ */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
    <div className="text-center max-w-4xl mx-auto">
      <motion.h1 
        className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        STUDIO KAHUA
      </motion.h1>
      
      <motion.h2 
        className="text-2xl md:text-3xl mb-6 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Revolutionary Visual Innovation from Japan
      </motion.h2>
      
      <motion.p 
        className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Where Eastern Aesthetics Meets Cutting-Edge AI Technology - Creating the impossible since 2022
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
          Explore Our Work →
        </button>
        <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
          Begin Your Project
        </button>
      </motion.div>
    </div>
  </div>
</div>

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Portfolio Gallery */}
      <PortfolioGallery />

      {/* Services Section */}
      <ServicesSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Process Section */}
      <ProcessSection />

      {/* Technical Innovation */}
      <TechnicalSection />

      {/* International Recognition */}
      <RecognitionSection />

      {/* Project Impact & Recognition */}
      <ProjectImpactSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-gold/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="text-2xl font-bold text-gold">STUDIO KAHUA | Visual Innovation</div>
        <div className="hidden md:flex gap-8">
          {["About", "Portfolio", "Services", "Process", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-gold transition-colors">
              {item}
            </a>
          ))}
        </div>
        <motion.button
          className="px-6 py-2 bg-gradient-to-r from-gold to-yellow-600 text-black font-semibold rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Conversation
        </motion.button>
      </nav>
    </motion.header>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/30 to-black" />
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          STUDIO KAHUA
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl mb-8 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Revolutionary Visual Innovation from Japan
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 text-white/70 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Where Eastern Aesthetics Meets Cutting-Edge AI Technology - Creating the impossible since 2022
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-gold to-yellow-600 text-black font-bold rounded-full flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Work <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const achievements = [
    "AI Visual Production for major Japanese corporations",
    "Art Direction: Goto Masafumi (Asian Kung-Fu Generation)",
    "AI Visual Supervisor: 'Gene of the Devil' - Full AI Film",
    "KDDI Corporate Partnership - Real-time AI video technology",
    "International recognition: 'Yukemuri VR' featured in global media",
    "Complete corporate website visual design for IDEASTORM",
    "Pioneer in AI creative production since 2022",
  ]

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Trusted by International Creators
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gold/20 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "rgb(255 215 0 / 0.5)" }}
            >
              <p className="text-white/90">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const works = [
    {
      title: "Goto Masafumi - 'Teleport' | Art Direction",
      subtitle: "Philosophical AI landscapes meet J-Rock artistry",
      type: "youtube",
      videoId: "NrRjzhGtGcc",
    },
    {
      title: "AI Visual Supervision | 'Gene of the Devil'",
      subtitle: "Full AI film - Translating director's vision into groundbreaking visuals",
      type: "image",
      image: "/images/japan-night-matilda.png",
    },
    {
      title: "KDDI Corporate Project | Real-time AI Video Production",
      subtitle: "Live performance background transformation using cutting-edge AI technology",
      type: "youtube",
      videoId: "h6AogDYVEok",
      startTime: 152,
    },
    {
      title: "Music Video Production | AI Visual Creation",
      subtitle: "Cutting-edge AI cinematography for music artists",
      type: "youtube",
      videoId: "Nw-tw4nfTOs",
    },
    {
      title: "Production Company Collaboration | AI Visual Specialist",
      subtitle: "Professional AI image creation for commercial production",
      type: "youtube",
      videoId: "J439uAFfsAk",
    },
    {
      title: "Corporate Website Visual Design | IDEASTORM",
      subtitle: "Complete AI art visual system for corporate website identity",
      type: "website",
      websiteUrl: "https://ideastorm.co.jp/",
      image: "/placeholder.svg?height=600&width=800&text=IDEASTORM+Website",
    },
  ]

  return (
    <section ref={ref} id="portfolio" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Selected Works
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gold/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-video relative overflow-hidden">
                {work.type === "youtube" && (
                  <iframe
                    src={`https://www.youtube.com/embed/${work.videoId}?controls=1&rel=0&modestbranding=1${work.startTime ? `&start=${work.startTime}` : ""}`}
                    title={work.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}

                {work.type === "vimeo" && (
                  <iframe
                    src={`https://player.vimeo.com/video/${work.videoId}${work.videoHash ? `/${work.videoHash}` : ""}?title=0&byline=0&portrait=0`}
                    title={work.title}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}

                {work.type === "video" && (
                  <video controls className="w-full h-full object-cover" preload="metadata">
                    <source src={work.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {work.type === "website" && (
                  <div className="relative w-full h-full">
                    <iframe
                      src={work.websiteUrl}
                      title={work.title}
                      className="w-full h-full border-0 scale-50 origin-top-left"
                      style={{ width: "200%", height: "200%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <a
                      href={work.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-white font-bold text-lg">Visit Website</span>
                    </a>
                  </div>
                )}

                {work.type === "image" && (
                  <>
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{work.title}</h3>
                <p className="text-white/70 mb-4">{work.subtitle}</p>
                <motion.button
                  className="px-6 py-2 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      title: "Music Video Production",
      features: [
        "Cinematic storytelling with AI innovation",
        "Collaboration with major artists",
        "Unique Japanese aesthetic perspective",
      ],
    },
    {
      title: "Film & Entertainment",
      features: ["Full-scale AI film production", "Concept to completion expertise", "Revolutionary visual techniques"],
    },
    {
      title: "Character Design",
      features: [
        "Original AI character development",
        "Copyright-safe creative process",
        "Cross-media character systems",
      ],
    },
    {
      title: "Visual Design & Branding",
      features: ["Corporate identity transformation", "Campaign visual development", "International brand adaptation"],
    },
  ]

  return (
    <section ref={ref} id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Visual Innovation Across Mediums
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gold/20 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "rgb(255 215 0 / 0.5)" }}
            >
              <h3 className="text-xl font-bold mb-4 text-gold">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-white/80 text-sm">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* AI Creative Production専用のボタンセクション */}
              {index === 0 && (
                <div className="space-y-4 mt-6">
                  {/* 既存の制作相談するボタン */}
                  <motion.button
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    制作相談する
                  </motion.button>

                  {/* 新規追加のInternational Servicesボタン */}
                  <div className="text-center">
                    <motion.a
                      href="/ai-creative-production"
                      className="inline-block w-full px-6 py-3 bg-gradient-to-r from-gold to-yellow-600 text-black font-bold rounded-full transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      International Services
                    </motion.a>
                    <p className="text-xs text-white/60 mt-2">For international clients and global projects</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Visual Innovation Philosophy
        </motion.h2>

        <div className="space-y-8 text-lg md:text-xl text-white/80 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don't just use AI as a tool - we collaborate with it as a creative partner
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Every project explores what's possible only through AI, not what's possible despite AI
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Eastern aesthetic sensibilities meet Western storytelling traditions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gold font-semibold"
          >
            Pioneering since 2022, evolving with each breakthrough
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    { title: "Vision Exploration", desc: "Understanding your impossible dream" },
    { title: "Concept Evolution", desc: "Where creativity meets AI possibility" },
    { title: "Technical Innovation", desc: "Proprietary AI techniques" },
    { title: "Artistic Refinement", desc: "Perfecting the unprecedented" },
    { title: "Delivery Excellence", desc: "Beyond expectations" },
  ]

  return (
    <section ref={ref} id="process" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Collaborative Process
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-white/70 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnicalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    "Proprietary AI technology developed since 2022",
    "Copyright-safe original content creation",
    "Continuous R&D and technique evolution",
    "Integration of traditional artistry with AI innovation",
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Technical Innovation
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gold/20 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-white/90 text-lg">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RecognitionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const recognitions = [
    "Featured in global media for groundbreaking VR work",
    "Collaboration with major Asian entertainment industry",
    "Early adopter and innovator in AI creative field",
    "Bridge between Eastern and Western creative traditions",
  ]

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          International Recognition
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gold/20 rounded-lg flex items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Globe className="w-8 h-8 text-gold flex-shrink-0" />
              <p className="text-white/90">{recognition}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const achievements = [
    {
      icon: "🌐",
      title: "Featured in global media for groundbreaking VR work",
      subtitle: "'Yukemuri VR' - Official onsen experience for Kusatsu & Arima hot springs",
      description: "Distributed worldwide, bringing Japanese culture to global audiences",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: "📺",
      title: "National television coverage in Japan",
      subtitle: "Innovative VR technology showcased across major Japanese media outlets",
      description: "Recognized for pioneering immersive cultural experiences",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: "🏢",
      title: "Major corporate partnerships",
      subtitle: "KDDI collaboration for cutting-edge AI video technology",
      description: "Enterprise-level projects with Japan's leading companies",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: "🎵",
      title: "International music industry collaboration",
      subtitle: "Art direction for major J-Rock artist Goto Masafumi",
      description: "Cross-cultural creative projects reaching global audiences",
      gradient: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Project Impact & Recognition
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group cursor-pointer"
              style={{ backgroundColor: "white" }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              {/* Header with gradient and icon */}
              <div
                className={`relative h-32 bg-gradient-to-br ${achievement.gradient} flex items-center justify-center overflow-hidden`}
              >
                <motion.div
                  className="text-5xl relative z-10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Enhanced floating particles */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <motion.h3
                  className="text-lg font-bold mb-3 leading-tight"
                  style={{ color: "#111111" }}
                  whileHover={{ color: "#4f9da6" }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.title}
                </motion.h3>

                <p className="text-sm font-semibold mb-3" style={{ color: "#4f9da6" }}>
                  {achievement.subtitle}
                </p>

                <p className="text-sm leading-relaxed opacity-85" style={{ color: "#111111" }}>
                  {achievement.description}
                </p>

                {/* Impact indicator */}
                <motion.div
                  className="mt-4 p-3 rounded-xl"
                  style={{ backgroundColor: "#f8fafc", borderLeft: "4px solid #4f9da6" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs font-bold" style={{ color: "#4f9da6" }}>
                    ✨ Global Recognition Achieved
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional recognition statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <p className="text-xl mb-6 text-white/90">
            Recognized internationally for pioneering AI creativity and cultural innovation
          </p>
          <motion.div
            className="inline-flex items-center text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300"
            style={{ backgroundColor: "#4f9da6", color: "#f4f4f4" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(79, 157, 166, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            🏆 View All Recognition
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-8 text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Begin Your Impossible Project
        </motion.h2>

        <motion.p
          className="text-xl mb-8 text-white/80"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every great creation starts with a conversation
        </motion.p>

        <motion.p
          className="text-lg mb-12 text-white/70"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let's explore what's possible for your vision
        </motion.p>

        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 rounded-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl font-bold mb-4 text-gold">Email: kahua105@gmail.com</p>
          <div className="space-y-2 text-white/80">
            <p>International consultations welcome</p>
            <p>English communication available</p>
            <p>Professional support for contracts and documentation</p>
          </div>
        </motion.div>

        <motion.button
          className="px-12 py-4 bg-gradient-to-r from-gold to-yellow-600 text-black font-bold text-xl rounded-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Our Conversation
        </motion.button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gold/20">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-gold">STUDIO KAHUA | Visual Innovation</h3>
        <p className="text-white/80 mb-2">Based in Japan | Creating Worldwide</p>
        <p className="text-white/80 mb-2">Pioneering the future of AI creativity since 2022</p>
        <p className="text-gold font-semibold">Where the impossible becomes inevitable</p>
      </div>
    </footer>
  )
}

// Custom colors for Tailwind
const customColors = {
  gold: "#FFD700",
}
