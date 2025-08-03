"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="fixed top-0 z-50 w-full backdrop-blur-md"
      style={{ backgroundColor: "rgba(244, 244, 244, 0.9)" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold" style={{ color: "#111111" }}>
              KAHUA
            </span>
          </Link>
        </div>
        <div className="flex gap-x-8 items-center">
          <Link
            href="#services"
            className="text-sm font-semibold leading-6 transition-colors hover:opacity-70"
            style={{ color: "#111111" }}
          >
            Services
          </Link>
          <Link
            href="#philosophy"
            className="text-sm font-semibold leading-6 transition-colors hover:opacity-70"
            style={{ color: "#111111" }}
          >
            Philosophy
          </Link>
          <Link
            href="https://kahuaart.studio.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 transition-colors hover:opacity-70"
            style={{ color: "#2d3748" }}
          >
            Art
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 transition-colors hover:opacity-70"
            style={{ color: "#111111" }}
          >
            Contact
          </Link>
          <div
            className="text-xs font-medium px-3 py-1 rounded-full border-2 border-solid"
            style={{ color: "#2d3748", borderColor: "#2d3748" }}
          >
            📞✉ 無料相談：kahua105@gmail.com
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
