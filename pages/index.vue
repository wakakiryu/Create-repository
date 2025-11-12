<template>
    <div>
      <header id="page-header">
        </header>
  
      <main>
        <section class="hero-section">
          <div class="hero-image-container">
            <div class="hero-text">
              <h1>My Portfolio</h1>
              <h2>Frontend Engineer</h2>
              <p>
                Welcome to my corner of the web.
              </p>
            </div>
          </div>
        </section>
      
        <section id="sec01" class="content-section">
          <header>
            <h2>ABOUT</h2>
          </header>
            <div class="section-text"> 
              2025年4月に駒澤大学に入学しました。入学後、駒澤大学プログラミング研究会「Komatech」に所属し、Learning HubにてHTMLおよびCSSを学習しています。現在はWeb開発を中心に勉強しており、セキュリティにも関心を持ち、Linuxをはじめとしたセキュリティ対策について学んでいます。
            </div>
        </section>
        
        <section id="sec02" class="content-section">
          <header>
            <h2>VISION</h2>
          </header>
            <div class="section-text">
              私の将来的な目標は、社会の安全と信頼を支えるセキュリティエンジニアになることです。また、法学部への進学をきっかけに「社会の仕組みを守る」という視点に興味を持ち、さらにセキュリティキャンプへの参加を通じて、法律と技術の両面から安全を支えることの重要性を学びました。これが、セキュリティエンジニアを目指す決意につながりました。
            </div>
        </section>
  
        <section id="sec03" class="content-section skill-section">
          <header>
            <h2>SKILLS</h2>
          </header>
          <div class="section-text">
            <p>現在学習中の技術は以下の通りです。</p>
            
            <ul class="skill-list primary-skills">
              <li class="skill-item">
                <span class="skill-icon primary-icon">
                  <i class="fab fa-js-square"></i> 
                </span>
                <span class="skill-name">JavaScript (JS)</span>
              </li>
              <li class="skill-item">
                <span class="skill-icon primary-icon">
                  <i class="fas fa-gem"></i> 
                </span>
                <span class="skill-name">Ruby</span>
              </li>
            </ul>
  
            <ul class="skill-list secondary-skills">
              <li class="skill-item">
                <span class="skill-icon secondary-icon">
                  <i class="fab fa-python"></i> 
                </span>
                <span class="skill-name">Python</span>
              </li>
              <li class="skill-item">
                <span class="skill-icon secondary-icon">
                  <i class="fas fa-c"></i> 
                </span>
                <span class="skill-name">C言語</span>
              </li>
              <li class="skill-item">
                <span class="skill-icon secondary-icon">
                  <i class="fab fa-php"></i> 
                </span>
                <span class="skill-name">PHP</span>
              </li>
              <li class="skill-item">
                <span class="skill-icon secondary-icon">
                  <i class="fab fa-linux"></i> 
                </span>
                <span class="skill-name">Linux / Kali</span>
              </li>
              <li class="skill-item">
                <span class="skill-icon secondary-icon">
                  <i class="fab fa-vuejs"></i> 
                </span>
                <span class="skill-name">Nuxt.js / Vue.js</span>
              </li>
            </ul>
          </div>
        </section>
        </main>
    </div>
  </template>
    
    <script setup lang="ts">
    // Font Awesomeは nuxt.config.ts でグローバルに読み込まれている前提です。
    </script>
    
    <style scoped>
  /* ==================================================== */
  /* ====== ヒーローセクション（背景画像と文字） ====== */
  /* ==================================================== */
  /* ... ヒーローセクションのスタイルは変更なし ... */
  .hero-image-container {
    font-family: 'Josefin Sans', 'Noto Sans JP', sans-serif;
    position: relative;
    width: 100%;
    height: 90vh; 
    background-image: url('~/assets/my-photo.jpg');
    background-size: cover;
    background-position: center top;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
  }
  
  /* ヒーロー文字のスタイル */
  .hero-text {
    position: relative;
    z-index: 10;
    padding: 20px;
    border-radius: 8px;
  }
  
  /* ヒーローテキストの影 */
  .hero-text h1,
  .hero-text h2,
  .hero-text p {
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  }
  
  .hero-text h1 {
    font-size: 3.5em; 
    padding-bottom: 10px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8); 
  }
  
  .hero-text h2 {
    font-size: 1.5em; 
    padding-bottom: 15px;
  }
  
  .hero-text p {
    font-size: 1.1em;
  }
  
  /* ==================================================== */
  /* ✅ ABOUT & VISION 共通のスタイル (content-section) */
  /* ==================================================== */
  
  /* セクション全体を中央に配置し、装飾を統一 */
  .content-section {
    padding: 10px 20px; 
    max-width: 800px; 
    margin: 0 auto; 
    text-align: left; 
  }
  
  /* <h2>の装飾と配置 (h2は引き続き中央) */
  .content-section header h2 {
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
    /* 強調線の色と太さを設定（以前の #0370e5 を適用） */
    border-bottom: 3px solid #0370e5; 
    display: inline-block; 
    padding-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    display: block; 
    width: fit-content; 
  }
  
  /* テキストコンテナのスタイル */
  .section-text { 
    margin-top: 10px;
    line-height: 1.8;
    color: #555;
    font-size: 1.1em;
    padding-bottom: 80px; 
  }
  
  /* ==================================================== */
  /* ====== ページレイアウト調整 ====== */
  /* ==================================================== */
  
  /* main要素の調整（フッター固定用） */
  main {
    padding-bottom: 60px;
  }
  
  /* ==================================================== */
  /* ✅ SKILLS セクションの固有スタイル */
  /* ==================================================== */
  
  /* スキルリストのスタイル */
  .skill-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center; /* SKILLアイコンは引き続き中央寄せ */
    margin-top: 20px;
    margin-bottom: 40px; 
  }
  
  /* プライマリスキルとセカンダリスキルの配置調整 */
  .primary-skills {
      gap: 50px; 
  }
  
  .secondary-skills {
      /* 5項目になったので、少し幅を広く取る */
      gap: 25px; 
      opacity: 0.85; 
      font-size: 0.9em;
      flex-wrap: wrap; /* 折り返しを許可 */
      max-width: 450px; /* リストの最大幅を制限して折り返しやすくする */
      margin: 20px auto 40px auto; /* 中央寄せ */
  }
  
  /* リストアイテムのスタイル */
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 狭い画面でも各アイテムが均等に並ぶように幅を設定 */
    flex-basis: calc(33.33% - 20px); 
    min-width: 80px; /* 最小幅を確保 */
    padding: 15px 5px;
  }
  
  /* アイコンのコンテナ */
  .skill-icon {
    margin-bottom: 5px;
    font-size: initial; 
  }
  
  /* 1. 大きなアイコン (JavaScript, Ruby) */
  .primary-icon {
    font-size: 4em;
  }
  
  /* 2. 小さなアイコン (Python, C, PHP, Linux, Nuxt/Vue.js) */
  .secondary-icon {
    font-size: 2em;
  }
  
  /* 🔵 アイコンの色の設定 */
  /* ---------------------------------- */
  /* ... アイコンの色設定は変更なし ... */
  
  /* 1. JavaScriptのアイコン色 */
  .primary-skills .skill-item:nth-child(1) .skill-icon i {
    color: #f7df1e;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  /* 2. Rubyのアイコン色 */
  .primary-skills .skill-item:nth-child(2) .skill-icon i {
    color: #cc342d;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  /* 3. Pythonのアイコン色 */
  .secondary-skills .skill-item:nth-child(1) .skill-icon i {
    color: #3776ab;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  
  /* 4. C言語のアイコン色 */
  .secondary-skills .skill-item:nth-child(2) .skill-icon i {
    color: #555555; 
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  
  /* 5. PHPのアイコン色 */
  .secondary-skills .skill-item:nth-child(3) .skill-icon i {
    color: #777bb3; 
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  
  /* 6. 🐧 Linux / Kali Linux のアイコン色 */
  .secondary-skills .skill-item:nth-child(4) .skill-icon i {
    color: #fcd105; 
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  
  /* 7. Nuxt.js / Vue.js のアイコン色 */
  .secondary-skills .skill-item:nth-child(5) .skill-icon i {
    color: #00c58e;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  
  
  /* スキル名のスタイル */
  .skill-name {
    /* 🚨 修正点 4: フォントをゴシック体（sans-serif）に強制指定 */
    font-family: 'Noto Sans JP', 'Hiragino Sans', 'メイリオ', sans-serif;
    font-size: 1.1em;
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
  }
  </style>