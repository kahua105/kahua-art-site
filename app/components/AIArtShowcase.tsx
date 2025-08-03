"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const artworks = [
  {
    id: 1,
    title: "Digital Consciousness",
    description: "Exploring the intersection of human perception and AI creativity",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._Scene_3_An_Ambassador_Appears_Visuals_From_the_portal_em_528c88ce-45c6-40c4-bb7b-738e6c0a7bbd.png-HjU33XvA1r55tV7ETSWEnynGrQFlIu.jpeg",
    category: "Conceptual Art",
  },
  {
    id: 2,
    title: "Otherworldly Portals",
    description: "Mystical landscapes that bridge reality and imagination",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._Scene_6_Drone_Invasion____Sleek_alien_drones_descend_f_1a6bb67d-bc94-4a00-4fab-c2ac9d5792d2_3-JQBCWQeCo6VVQvMsjdsRcYnW29lDUt.png",
    category: "Sci-Fi Landscapes",
  },
  {
    id: 3,
    title: "The Ambassador",
    description: "Intricate character design showcasing AI's artistic potential",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._Scene_3_An_Ambassador_Appears_Visuals_From_the_portal_em_14f794a5-d888-407d-94b5-820c77982dbc.png-ROQlYabdul8NDJFjINPkd17ZgV0cTK.jpeg",
    category: "Character Design",
  },
  {
    id: 4,
    title: "Mechanical Evolution",
    description: "Cyberpunk aesthetics meet organic forms",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._Scene_6_Drone_Invasion____Sleek_alien_drones_descend_f_1a6bb67d-bc94-4a00-8fab-c2ac9d5792d2_2-Fcwauw5cFauCGEF1wZiZJWj9dnY4Ax.png",
    category: "Cyberpunk Art",
  },
  {
    id: 5,
    title: "Infinite Visions",
    description: "Epic scale compositions that challenge perception",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kahua._Scene_4_A_Shared_Vision_Visuals_The_ambassador_raises_th_7faf103c-7579-4974-817b-f3cede69bcc7.png-qKKEWA3E7uNjtkEke21MmjPo1in0W6.jpeg",
    category: "Epic Fantasy",
  },
]

export default function AIArtShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#f4f4f4" }}>
            AI FILM
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto" style={{ color: "#f4f4f4" }}>
            AIが創造する新しい美の世界 - 技術と感性の融合から生まれる作品たち
          </p>
        </motion.div>

        {/* メイン画像 - 大きく表示 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={artworks[0].image || "/placeholder.svg"}
              alt={artworks[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: "#f4f4f4" }}
                whileHover={{ scale: 1.02 }}
              >
                {artworks[0].title}
              </motion.h3>
              <p className="text-base md:text-lg opacity-90" style={{ color: "#f4f4f4" }}>
                {artworks[0].description}
              </p>
              <span
                className="inline-block mt-3 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
              >
                {artworks[0].category}
              </span>
            </div>
          </div>
        </motion.div>

        {/* グリッド表示 - 残りの画像 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.slice(1).map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-4 right-4">
                <motion.h4
                  className="text-lg font-bold mb-1"
                  style={{ color: "#f4f4f4" }}
                  whileHover={{ color: "#4f9da6" }}
                >
                  {artwork.title}
                </motion.h4>
                <p className="text-sm opacity-90 mb-2" style={{ color: "#f4f4f4" }}>
                  {artwork.description}
                </p>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
                >
                  {artwork.category}
                </span>
              </div>

              {/* ホバー時のオーバーレイ効果 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg mb-6" style={{ color: "#f4f4f4" }}>
            これらの作品は全てAIによって生成されました
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://kahuaart.studio.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300"
              style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(45, 55, 72, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              🎨 アートギャラリーを見る
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center text-lg font-semibold px-8 py-4 rounded-full border-2 border-solid transition-all duration-300"
              style={{ borderColor: "#2d3748", color: "#2d3748" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#2d3748",
                color: "#f4f4f4",
              }}
              whileTap={{ scale: 0.98 }}
            >
              ✨ AI制作を依頼する
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
