<template>
  <div class="app-wrapper">
    <header class="app-header">
      <div class="header-title">
        <NuxtLink to="/"></NuxtLink>
      </div>
      <nav class="nav-links">
        </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025 by wakaki</p>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ヘッダー */
.app-header {
  font-family: 'Sawarabi Mincho', serif;
  /* ⬇️ 固定解除 ⬇️ */
  /* position: fixed; を削除 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  height: 70px;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  
  background-image: url('~/assets/header-bg.jpg');
  background-size: cover;
  background-position: center;
  
  color: #000000; /* 文字色 */

  padding: 0 20px;
  box-sizing: border-box;
}

/* ヘッダータイトルのスタイルを調整 */
.header-title a {
  font-size: 1.5em;
  font-weight: bold;
  color: #333333;
  text-decoration: none;
  white-space: nowrap;
}

/* ナビゲーションリンク (空のため非表示) */
.nav-links {
    display: none; 
}


/* main をヘッダー分下げる 
   ⬇️ ヘッダー固定解除に伴い margin-top を削除 ⬇️ */
main {
  flex: 1;
  padding: 20px;
  /* margin-top: 70px; を削除 */
}

/* フッター */
.app-footer {
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 0.0001cm 0;
}
</style>