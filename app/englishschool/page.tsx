export default function EnglishSchool() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">KAHUA</a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="/" className="text-gray-600 hover:text-emerald-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-emerald-600">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600">Contact</a>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
              📞 無料相談：kahua105@gmail.com
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-8 right-8 bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 rounded-full font-bold">
              創立30周年
            </div>
            <div className="text-6xl mb-8">🎓</div>
            <h1 className="text-5xl font-bold mb-4">SCHOOL</h1>
            <h2 className="text-xl mb-8 opacity-90">英語・多言語コーチング</h2>
            <p className="text-lg mb-10 max-w-4xl mx-auto leading-relaxed">
              個性を尊重し可能性を引き出す教育哲学。実践的なコミュニケーション能力を育成します。<br/>
              神戸・東灘区・灘区での地域密着型教育と、オンラインによる全国対応で、30年の実績と信頼をお届けします。
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#contact" className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-bold transition-all">
                空き待ちリストに登録
              </a>
              <a href="#features" className="bg-white text-emerald-600 hover:bg-transparent hover:text-white border-2 border-white px-8 py-4 rounded-full font-bold transition-all">
                詳しく見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">KAHUAが選ばれる理由</h2>
          <p className="text-center text-gray-600 mb-16">30年の歴史と95%の継続率が証明する確かな教育品質</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏆", title: "30年の教育実績", desc: "1995年の創立以来培ってきた独自の教育メソッドと、確かな実績に基づく指導ノウハウ。" },
              { icon: "🔄", title: "95%の継続率", desc: "驚異的な継続率を誇り、多くの生徒様が長期にわたって学習を継続。リピート生徒も多数在籍。" },
              { icon: "👨‍🏫", title: "経験豊富な日本人講師", desc: "豊富な海外経験と高い語学力を持つ厳選された日本人講師が、きめ細かな指導を提供。" },
              { icon: "🌸", title: "地域密着×全国対応", desc: "神戸・東灘区・灘区での対面レッスンと、オンラインによる全国対応で柔軟に受講可能。" },
              { icon: "👥", title: "個性重視の指導", desc: "一人ひとりの学習スタイルに合わせたオーダーメイドカリキュラムで、可能性を最大限に引き出します。" },
              { icon: "🎯", title: "実践的コミュニケーション", desc: "机上の勉強ではなく、実際の場面で使える生きた語学力とコーチング技術を習得。" }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-emerald-500">
                <div className="text-4xl mb-4 text-emerald-600">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 mx-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-3xl p-16 text-white text-center">
          <h2 className="text-4xl font-bold mb-16">30年の歩み</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "30", label: "創立からの歴史" },
              { number: "95%", label: "継続率" },
              { number: "全国", label: "オンライン対応エリア" },
              { number: "98%", label: "満足度" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-16 shadow-xl">
            <h2 className="text-4xl font-bold mb-4">まずは無料体験レッスンから</h2>
            <p className="text-gray-600 mb-10">30年の実績と95%の継続率が証明する確かな教育品質を、まずは無料でご体験ください。</p>
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <a href="mailto:kahua105@gmail.com" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-all">
                空き待ちリストに登録
              </a>
              <a href="tel:078-1234-5678" className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-full font-bold transition-all">
                メールでお問い合わせ
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              <div>
                <h4 className="font-bold text-emerald-600 mb-2">📍 アクセス</h4>
                <p className="text-sm text-gray-600">兵庫県神戸市東灘区<br/>（詳細はお問い合わせください）</p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-600 mb-2">📞 お問い合わせ</h4>
                <p className="text-sm text-gray-600"><br/>Email: kahua105@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-600 mb-2">🕐 営業時間</h4>
                <p className="text-sm text-gray-600">平日 10:00-21:00<br/>土日 9:00-18:00</p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-600 mb-2">🌐 対応エリア</h4>
                <p className="text-sm text-gray-600">対面: 神戸・東灘区・灘区<br/>オンライン: 全国対応</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 KAHUA Language School. All rights reserved. | 創立30周年</p>
        </div>
      </footer>
    </div>
  );
}
