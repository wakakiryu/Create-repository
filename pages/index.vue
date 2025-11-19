<script setup lang="ts">
// ¥30,000以下の商品データを配列で管理
const rakutenProductsUnder30k = [
  {
    title: '【大人気】TOTOAI ノートパソコン Windows11 Office付き 新品',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e24c161.4905bfb1.4e24c162.40a66e19/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftotoai%2Fnotebook01%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e24c161.4905bfb1.4e24c162.40a66e19/?me_id=1431506&item_id=10000001&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Ftotoai%2Fcabinet%2F11289362%2Fnotebook01%2Fnotebook01-666-2.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'TOTOAI ノートパソコン',
    price: '価格：29,800円（税込、送料無料）'
  },
  {
    title: '【新商品】UPC1114 ノートパソコン Windows11 Office付き',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e24d85d.630b967c.4e24d85e.c6baa10e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fupc1114%2F10006179%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e24d85d.630b967c.4e24d85e.c6baa10e/?me_id=1349304&item_id=10006382&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fupc1114%2Fcabinet%2F11614410%2F11614421%2Fimgrc0108185560.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'UPC1114 ノートパソコン',
    price: '価格：29,800円（税込、送料無料）' 
  }
]

// ¥50,000以上の商品データを配列で管理
const rakutenProductsOver50k = [
  {
    title: '【中古】東芝 dynabook B55/DP Corei3 16GBメモリ 15.6型',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e5496d4.2cf0cc60.4e5496d6.cf16317e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpckujira%2Fms071122%2F&link_type=picttext',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e5496d4.2cf0cc60.4e5496d6.cf16317e/?me_id=1239152&item_id=10238708&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fpckujira%2Fcabinet%2Fdir92%2Fms071122-1.jpg%3F_ex%3D240x240&s=240x240&t=picttext',
    alt: '中古 ノートパソコン Office付き 東芝 dynabook B55/DP',
    price: '価格：要確認（5万円台の可能性あり）' 
  },
  {
    title: 'TOTOAI ノートパソコン Windows11 Office付き (別モデル)',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e24c161.4905bfb1.4e24c162.40a66e19/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftotoai%2Fnotebook21-1%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e24c161.4905bfb1.4e24c162.40a66e19/?me_id=1431506&item_id=10000051&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Ftotoai%2Fcabinet%2F11289362%2Fnotebook21%2Fnotebook21-4.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'TOTOAI ノートパソコン 別モデル',
    price: '価格：要確認（5万円台の可能性あり）' 
  }
]

// ¥70,000以下の商品データを配列で管理
const rakutenProductsUnder70k = [
  {
    title: '【新商品】soo-ya ノートパソコン Windows11',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e54b98c.646a2121.4e54b98d.29084ff4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsoo-ya%2Fm7-us-win11%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e54b98c.646a2121.4e54b98d.29084ff4/?me_id=1319096&item_id=10001148&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fsoo-ya%2Fcabinet%2F09255886%2F10285182%2Fq7-rxx.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'soo-ya ノートパソコン',
    price: '価格：要確認（7万円以下の可能性あり）'
  },
  {
    title: 'PHIPHI 中古ノートパソコン Windows11 Office付き',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e1e7416.aed52727.4e1e7417.b6170c47/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fphi777%2Fspbjb003%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e1e7416.aed52727.4e1e7417.b6170c47/?me_id=1374699&item_id=10006156&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fphi777%2Fcabinet%2F10585142%2F11515156%2F11515158%2Fimgrc0155832898.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'PHIPHI 中古ノートパソコン',
    price: '価格：要確認（7万円以下の可能性あり）'
  }
]

// ⬇️ ¥100,000以上の商品データを配列で管理 (新設) ⬇️
const rakutenProductsOver100k = [
  {
    title: 'PHIPHI 中古高性能ノートPC Office付き',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e1e7416.aed52727.4e1e7417.b6170c47/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fphi777%2Fbjb003%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e1e7416.aed52727.4e1e7417.b6170c47/?me_id=1374699&item_id=10005923&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fphi777%2Fcabinet%2F10585142%2F10647368%2Fimgrc0155229075.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'PHIPHI 中古高性能ノートPC',
    price: '価格：要確認（10万円以上の可能性あり）'
  },
  {
    title: 'regian 高性能ノートパソコン Office付き',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e1e73d9.d2986449.4e1e73db.f62389ba/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fregian%2Fdn009%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e1e73d9.d2986449.4e1e73db.f62389ba/?me_id=1427909&item_id=10000125&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fregian%2Fcabinet%2F11076310%2Fimgrc0095513674.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'regian 高性能ノートパソコン',
    price: '価格：要確認（10万円以上の可能性あり）'
  }
]
</script>

<template>
  <div class="page-wrapper">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h2>Fronted engineersの</h2>
        <h1>パソコンブログ</h1>
        <p></p>
      </div>
    </section>

    <section id="affiliate" class="content-section">
      <h2>おすすめ商品</h2>
      <p class="affiliate-intro">
        ここではプログラミング初心者におすすめのノートパソコンを紹介しています。
        最新のOffice付きモデルやコスパ抜群の商品もありますので、ぜひチェックしてください。
      </p>

      <h1>¥30,000以下</h1>
      <div class="affiliate-grid">
        <div 
          v-for="(item, index) in rakutenProductsUnder30k" 
          :key="index" 
          class="affiliate-card"
        >
          <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
            <img :src="item.image" :alt="item.alt" />
          </a>
          <p class="affiliate-title">
            <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
              {{ item.title }}
            </a>
          </p>
          <p class="affiliate-price">{{ item.price }}</p>
          <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
            <div class="buy-button">楽天で購入</div>
          </a>
        </div>
      </div>

      <h1>¥50,000以下</h1>
      <div class="affiliate-grid">
        <div 
          v-for="(item, index) in rakutenProductsOver50k" 
          :key="'over50k-' + index" 
          class="affiliate-card"
        >
          <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
            <img :src="item.image" :alt="item.alt" />
          </a>
          <p class="affiliate-title">
            <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
              {{ item.title }}
            </a>
          </p>
          <p class="affiliate-price">{{ item.price }}</p>
          <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
            <div class="buy-button">楽天で購入</div>
          </a>
        </div>
      </div>

      <h1>¥70,000以下</h1>
      <div class="affiliate-grid">
        <div 
          v-for="(item, index) in rakutenProductsUnder70k" 
          :key="'under70k-' + index" 
          class="affiliate-card"
        >
          <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
            <img :src="item.image" :alt="item.alt" />
          </a>
          <p class="affiliate-title">
            <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
              {{ item.title }}
            </a>
          </p>
          <p class="affiliate-price">{{ item.price }}</p>
          <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
            <div class="buy-button">楽天で購入</div>
          </a>
        </div>
      </div>

      <h1>¥100,000以上</h1>
      <div class="affiliate-grid">
        <div 
          v-for="(item, index) in rakutenProductsOver100k" 
          :key="'over100k-' + index" 
          class="affiliate-card"
        >
          <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
            <img :src="item.image" :alt="item.alt" />
          </a>
          <p class="affiliate-title">
            <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
              {{ item.title }}
            </a>
          </p>
          <p class="affiliate-price">{{ item.price }}</p>
          <a :href="item.link" target="_blank" rel="nofollow sponsored noopener">
            <div class="buy-button">楽天で購入</div>
          </a>
        </div>
      </div>
      </section>
  </div>
</template>

<style scoped>
/* スタイルは変更ありません */
.page-wrapper {
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
  padding-bottom: 40px;
}

.hero-section {
  position: relative;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('~/assets/photo.jpg');
  background-size: cover;
  background-position: center;
  animation: backgroundFade 20s infinite alternate;
  z-index: -1;
  filter: brightness(0.7);
}

@keyframes backgroundFade {
  0% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.8; transform: scale(1); }
}

.hero-content {
  position: relative;
  text-align: center;
  z-index: 1;
}

/* 商品セクションのスタイル */
.content-section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

/* 見出しの追加スタイル */
.content-section h1 {
  margin-top: 40px; 
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #34495e; 
}

/* 商品グリッド */
.affiliate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

/* 商品カード */
.affiliate-card {
  border: 1px solid #95a5a6;
  border-radius: 12px;
  padding: 10px;
  background-color: #fff;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.affiliate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(60, 31, 25, 0.15);
}

.affiliate-card img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}

.affiliate-title {
  font-size: 0.9rem;
  margin: 10px 0 5px;
}

.affiliate-price {
  font-size: 0.85rem;
  color: #555;
}

.buy-button {
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 16px;
  background-color: #bf0000;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
}
</style>