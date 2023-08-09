<script setup>
import Navbar from '../components/Navbar.vue'

import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="m-0 p-0">
    <Navbar />

    <router-view />
    <Footer />
  </main>
</template>

<style scoped></style>
