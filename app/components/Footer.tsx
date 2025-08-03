import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111", color: "#f4f4f4" }}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">KAHUA</h3>
          <p className="text-base opacity-80 mb-6">感性に、技術を。魂に、創造を。</p>
          <Link
            href="https://kahuaart.studio.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
          >
            KAHUA ART
          </Link>
        </div>

        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {["Services", "Philosophy", "Art", "Contact", "Privacy", "Terms"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href={item === "Art" ? "https://kahuaart.studio.site/" : `#${item.toLowerCase()}`}
                target={item === "Art" ? "_blank" : undefined}
                rel={item === "Art" ? "noopener noreferrer" : undefined}
                className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: "#f4f4f4" }}
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-center text-sm leading-5 opacity-60" style={{ color: "#f4f4f4" }}>
          © 2022-2025 KAHUA. All rights reserved. | 魂から生まれる創造を、技術と共に。
        </p>
      </div>
    </footer>
  )
}
