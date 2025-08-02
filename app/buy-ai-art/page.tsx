export const metadata = {
  title: "KAHUA AI ART｜購入ページ",
  description: "精神干渉と記憶の再起動をテーマにした、唯一無二のAIアートをあなたに。",
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">KAHUAのAIアート販売ページ</h1>
      <p className="text-lg text-gray-700 mb-12">
        精神干渉と記憶の再起動がテーマです。
      </p>
      <a
        href="https://kahuaart.studio/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800"
      >
        ポートフォリオサイトを見る
      </a>
    </main>
  );
}
