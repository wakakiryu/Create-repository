<script setup lang="ts">
const rakutenProductsUnder30k = [
  {
    title: '【大人気】TOTOAI ノートパソコン Windows11 Office付き 新品',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e24c161.4905bfb1.4e24c162.40a66e19/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftotoai%2Fnotebook01%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e24c161.4905bfb1.4e24c162.40a66e19/?me_id=1431506&item_id=10000001&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Ftotoai%2Fcabinet%2F11289362%2Fnotebook01%2Fnotebook01-666-2.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'TOTOAI ノートパソコン',
  },
  {
    title: '【新商品】UPC1114 ノートパソコン Windows11 Office付き',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e24d85d.630b967c.4e24d85e.c6baa10e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fupc1114%2F10006179%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e24d85d.630b967c.4e24d85e.c6baa10e/?me_id=1349304&item_id=10006382&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fupc1114%2Fcabinet%2F11614410%2F11614421%2Fimgrc0108185560.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'UPC1114 ノートパソコン',
  }
]

const rakutenProductsOver50k = [
  {
    title: '【中古】東芝 dynabook B55/DP Corei3 16GBメモリ 15.6型',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e5496d4.2cf0cc60.4e5496d6.cf16317e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpckujira%2Fms071122%2F&link_type=picttext',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e5496d4.2cf0cc60.4e5496d6.cf16317e/?me_id=1239152&item_id=10238708&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fpckujira%2Fcabinet%2Fdir92%2Fms071122-1.jpg%3F_ex%3D240x240&s=240x240&t=picttext',
    alt: '中古 ノートパソコン Office付き 東芝 dynabook B55/DP',
  },
  {
    title: 'TOTOAI ノートパソコン Windows11 Office付き (別モデル)',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e24c161.4905bfb1.4e24c162.40a66e19/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftotoai%2Fnotebook21-1%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e24c161.4905bfb1.4e24c162.40a66e19/?me_id=1431506&item_id=10000051&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Ftotoai%2Fcabinet%2F11289362%2Fnotebook21%2Fnotebook21-4.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'TOTOAI ノートパソコン 別モデル',
  }
]

const rakutenProductsUnder70k = [
  {
    title: '【新商品】soo-ya ノートパソコン Windows11',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e54b98c.646a2121.4e54b98d.29084ff4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsoo-ya%2Fm7-us-win11%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e54b98c.646a2121.4e54b98d.29084ff4/?me_id=1319096&item_id=10001148&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fsoo-ya%2Fcabinet%2F09255886%2F10285182%2Fq7-rxx.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'soo-ya ノートパソコン',
  },
  {
    title: 'PHIPHI 中古ノートパソコン Windows11 Office付き',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e1e7416.aed52727.4e1e7417.b6170c47/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fphi777%2Fspbjb003%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e1e7416.aed52727.4e1e7417.b6170c47/?me_id=1374699&item_id=10006156&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fphi777%2Fcabinet%2F10585142%2F11515156%2F11515158%2Fimgrc0155832898.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'PHIPHI 中古ノートパソコン',
  }
]

const rakutenProductsOver100k = [
  {
    title: 'PHIPHI 中古高性能ノートPC Office付き',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e1e7416.aed52727.4e1e7417.b6170c47/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fphi777%2Fbjb003%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e1e7416.aed52727.4e1e7417.b6170c47/?me_id=1374699&item_id=10005923&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fphi777%2Fcabinet%2F10585142%2F10647368%2Fimgrc0155229075.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'PHIPHI 中古高性能ノートPC',
  },
  {
    title: 'regian 高性能ノートパソコン Office付き',
    link: 'https://hb.afl.rakuten.co.jp/ichiba/4e1e73d9.d2986449.4e1e73db.f62389ba/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fregian%2Fdn009%2F&link_type=pict',
    image: 'https://hbb.afl.rakuten.co.jp/hgb/4e1e73d9.d2986449.4e1e73db.f62389ba/?me_id=1427909&item_id=10000125&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fregian%2Fcabinet%2F11076310%2Fimgrc0095513674.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    alt: 'regian 高性能ノートパソコン',
  }
]
const query = ref('')
const products = [...rakutenProductsUnder30k, ...rakutenProductsOver50k, ...rakutenProductsUnder70k, ...rakutenProductsOver100k].map((item, index) => ({
  ...item, id: index,
  title: item.title.replace(/【大人気】|【新商品】|高性能/g, ''),
}))
const filtered = computed(() => products.filter(item => item.title.toLowerCase().includes(query.value.trim().toLowerCase())))
useSeoMeta({
  title: 'MyHobby | はじめてのパソコン選び',
  description: 'プログラミング学習や日々の作業に使うノートパソコンを探す。購入前に確認したい仕様・保証・Officeの違いと、楽天市場の商品情報をご案内します。',
  ogTitle: 'MyHobby | はじめてのパソコン選び',
  ogDescription: '自分の使い方に合う一台を、納得して選ぼう。',
  ogType: 'website',
})
useHead({ htmlAttrs: { lang: 'ja' }, link: [{ rel: 'canonical', href: 'https://www.myhobby.jp/' }] })
</script>

<template>
  <div>
    <section class="hero">
      <div><p class="eyebrow">MYHOBBY / PC GUIDE</p><h1>はじめての一台を、<br>納得して選ぼう。</h1><p class="lead">学ぶ、つくる、日々を楽しむ。<br>使い方に合うパソコンを見つけるための、小さなガイド。</p><a class="button" href="#products">パソコンを探す →</a> <a class="text-link" href="#guide">選び方を読む</a></div>
      <aside class="hero-note"><span>BEFORE YOU BUY</span><h2>値段の前に、<br>使い方から。</h2><p>使うソフト → 必要な仕様 → 保証と価格。<br>この順番で確認してみましょう。</p><a href="#guide">購入前のチェックポイント ↗</a></aside>
    </section>
    <p class="disclosure">広告：このページには楽天アフィリエイトのリンクが含まれます。リンク経由の購入により、運営者に報酬が発生する場合があります。</p>
    <section id="guide" class="section">
      <p class="eyebrow">01 / CHOOSE WITH CONFIDENCE</p><h2>あなたの使い方で、確認する。</h2>
      <div class="guides">
        <article><span class="number">01</span><h3>プログラミングを学ぶ</h3><p>授業や教材で使う開発ツールを先に確認。対応OS、必要なメモリ、ストレージ容量を照らし合わせましょう。</p></article>
        <article><span class="number">02</span><h3>仕事や学業に使う</h3><p>「Office付き」だけでは種類は分かりません。必要なソフト名、ライセンス条件、オンライン会議用のカメラを確認しましょう。</p></article>
        <article><span class="number">03</span><h3>外へ持ち出す</h3><p>本体と充電器の重さ、サイズ、端子を確認。中古の場合はバッテリーの状態と保証範囲もチェックしましょう。</p></article>
      </div>
    </section>
    <section id="products" class="section">
      <p class="eyebrow">02 / FIND YOUR NEXT PC</p><h2>気になるパソコンを探す。</h2><p>掲載商品を比較検討するための一覧です。実機レビューや性能ランキングではありません。</p>
      <div class="search"><label for="search">商品名・ブランドで絞り込み</label><input id="search" v-model="query" type="search" placeholder="例：dynabook、TOTOAI"><span role="status">{{ filtered.length }} 件</span></div>
      <p class="muted">価格・在庫・仕様は未確認です。最新の情報と選択した構成を、販売ページでご確認ください。</p>
      <div class="products">
        <article v-for="item in filtered" :key="item.id" class="product">
          <a :href="item.link" target="_blank" rel="sponsored nofollow noopener"><img :src="item.image" :alt="item.alt" width="240" height="240" loading="lazy"></a>
          <div class="product-body"><span class="eyebrow">楽天市場 / PR</span><h3>{{ item.title }}</h3><p class="muted">購入前に：CPUの型番・メモリ・保証期間を確認</p><a class="buy" :href="item.link" target="_blank" rel="sponsored nofollow noopener">楽天で価格・仕様を確認 ↗</a></div>
        </article>
      </div>
      <p v-if="!filtered.length">該当する商品はありません。別の名前で検索してください。<button @click="query = ''">絞り込みを解除</button></p>
    </section>
    <section id="policy" class="section policy"><p class="eyebrow">OUR POLICY</p><h2>購入前の疑問を、ひとつずつ。</h2>
      <details><summary>掲載商品は実際に使ってレビューしていますか？</summary><p>このページは商品への案内です。実機を使用した評価や検証結果は掲載していません。商品名は既存の掲載情報に基づき、仕様・付属品は販売ページで確認してください。</p></details>
      <details><summary>中古パソコンで確認することは？</summary><p>状態、バッテリー、付属品、OSの対応状況、保証期間、返品条件を確認してください。同じモデル名でも構成が異なる場合があります。</p></details>
      <details><summary>このサイトについて</summary><p>MyHobbyは、wakakiが運営するパソコン選びの情報サイトです。掲載順は性能や販売実績の順位を表すものではありません。購入・配送・返品のお問い合わせは、各販売店へお願いします。</p></details>
    </section>
  </div>
</template>
