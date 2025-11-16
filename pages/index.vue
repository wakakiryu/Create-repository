<script setup lang="ts">
// 複数商品データを配列で管理（画像は直接URL）
const rakutenProducts = [
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
  price: '価格：29,800円（税込、送料無料）' // 価格は実際に確認して書き換え可能
  } 
]
</script>

<template>
  <div class="page-wrapper">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>パソコン選び</h1>
        <h2>Frontend Engineer</h2>
        <p>Welcome to my site.</p>
      </div>
    </section>

    <section id="affiliate" class="content-section">
      <h2>おすすめ商品</h2>
      <div class="affiliate-grid">
        <div 
          v-for="(item, index) in rakutenProducts" 
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
    </section>
    
    <section id="affiliate2" class="content section">
      
    </section>
  </div>
</template>

<style scoped>
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
  0%   { opacity: 0.8; transform: scale(1); }
  50%  { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.8; transform: scale(1); }
}

.hero-content {
  position: relative;
  text-align: center;
  z-index: 1;
}

.content-section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.affiliate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

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
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
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