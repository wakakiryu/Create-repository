<template>
    <div>
      <NuxtLink to="/">Home</NuxtLink>
      <h1>Fashion Category</h1>
      <p>このページはファッションカテゴリの商品一覧です。</p>
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'Fashionカテゴリ | My Portfolio',
    meta: [
      { name: 'description', content: '最新のファッションカテゴリの商品一覧ページです' }
    ]
  })
  </script>
  
  <style scoped>
  h1 {
    color: #0370e5;
  }
  </style>