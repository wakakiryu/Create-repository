<template>
  <div class="app-wrapper">
    <!-- ヘッダー -->
    <header class="app-header">
      <div class="logo">
        <NuxtLink to="/"x>Ryu shop</NuxtLink>
      </div>
      <nav class="nav-links">
        <NuxtLink to="/">fashion</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/skills">Skills</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <!-- ページコンテンツ -->
    <main>
      <slot />
    </main>

    <!-- フッター -->
    <footer class="app-footer">
      <p>&copy; 2025 My Portfolio</p>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #505f6e;
  color: white;
  padding: 15px 20px;
}

.app-header .logo a {
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  text-decoration: none;
}

.nav-links a {
  margin-left: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* main が残りの高さを確保 */
main {
  flex: 1;
  padding: 20px;
}

/* フッター */
.app-footer {
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 1px 0;
}
</style>