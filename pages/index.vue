<template>
  <div>
    <!-- Hero セクション -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>My Portfolio</h1>
        <h2>Frontend Engineer</h2>
        <p>Welcome to my corner of the web.</p>
      </div>
    </section>

    <!-- About セクション -->
    <section id="about" class="content-section">
      <h2>ABOUT</h2>
      <p>
        Web開発やフロントエンドの技術を学んでいます。現在はNuxt.jsやVue.jsを中心に勉強中です。
      </p>
    </section>

    <!-- Skills セクション -->
    <section id="skills" class="content-section">
      <h2>SKILLS</h2>
      <ul class="skill-list">
        <li>JavaScript</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>Nuxt.js / Vue.js</li>
      </ul>
    </section>

    <!-- 楽天アフィリエイト商品 -->
    <section id="affiliate" class="content-section">
      <h2>おすすめ商品</h2>
      <div class="affiliate-box" v-html="rakutenAffiliate"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 楽天アフィリエイトの HTML を文字列として格納
const rakutenAffiliate = `
<div style="border:1px solid #95a5a6;border-radius:.75rem;background-color:#FFF;width:100%;max-width:504px;margin:0 auto;padding:5px;text-align:center;overflow:hidden;">
  <table style="width:100%;border-collapse:collapse;">
    <tr>
      <td style="width:240px">
        <a href="https://hb.afl.rakuten.co.jp/ichiba/4e1d92f1.ba0f9e35.4e1d92f2.9bdfa07a/" target="_blank" rel="nofollow sponsored noopener">
          <img src="https://hbb.afl.rakuten.co.jp/hgb/4e1d92f1.ba0f9e35.4e1d92f2.9bdfa07a/" alt="商品画像" style="margin:2px;width:100%;height:auto;">
        </a>
      </td>
      <td style="vertical-align:top;padding-left:10px;">
        <p style="font-size:12px;line-height:1.4;text-align:left;margin:0">
          <a href="https://hb.afl.rakuten.co.jp/ichiba/4e1d92f1.ba0f9e35.4e1d92f2.9bdfa07a/" target="_blank" rel="nofollow sponsored noopener">
            ＼スヌーピーコラボ／ 【AOKI公式】リカバリーウェア
          </a><br>
          <span>価格：14,190円～（税込、送料無料）</span>
        </p>
        <div style="margin-top:10px;">
          <a href="https://hb.afl.rakuten.co.jp/ichiba/4e1d92f1.ba0f9e35.4e1d92f2.9bdfa07a/" target="_blank" rel="nofollow sponsored noopener">
            <div style="width:100%;max-width:150px;height:27px;background-color:#bf0000;color:#fff;font-size:12px;font-weight:500;line-height:27px;text-align:center;border-radius:16px;margin-top:5px;cursor:pointer;">
              楽天で購入
            </div>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>
`
</script>

<style scoped>
.hero-section {
  text-align: center;
  padding: 50px 20px;
  background-color: #0370e5;
  color: white;
}

.content-section {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.skill-list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.skill-list li {
  background-color: #0370e5;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: bold;
}

.affiliate-box {
  margin-top: 20px;
}
</style>