<template>
  <!-- semua page dalam aplikasi web akan memiliki tampilan layout yang sama -->
  <Header></Header>
  <div class="bg-backgroundPrimer text-teks">
    <router-view></router-view>
  </div>
  <div class="bg-backgroundSekunder text-teks capitalize">
    <Footer></Footer>
  </div>
</template>
