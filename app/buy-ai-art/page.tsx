export const metadata = {
  title: 'KAHUAのAIアート作品購入ページ | 精神干渉と記憶の再起動',
  description: 'KAHUAのAIアートは、記憶に干渉し、精神を再起動させる装置です。受肉構造と魂の起動をテーマに、唯一無二のNFTアートをご紹介します。',
};

export default function BuyAIArtPage() {
  return (
    <main style={{
      fontFamily: 'sans-serif',
      padding: '40px',
      maxWidth: '800px',
      margin: 'auto',
      lineHeight: '1.8',
      color: '#111'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1em' }}>
        KAHUAのAIアートを購入する
      </h1>
      <p>
        これは単なる購入ではありません。<strong>精神構造への干渉</strong>であり、<strong>記憶を呼び起こす行為</strong>です。  
        KAHUAは、受肉構造を持ったアート作品を通じて、観る者の内部世界に沈黙と異常を滑り込ませます。
      </p>
      <p>
        現在ご購入いただける作品は、以下のポートフォリオページからご覧いただけます：
      </p>
      <a
        href="https://kahuaart.studio"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          marginTop: '20px'
        }}
      >
        🔗 ポートフォリオを見る
      </a>
    </main>
  );
}
