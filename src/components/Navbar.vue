<script setup>
import SearchBar from './SearchBar.vue'
import CartButton from './CartButton.vue'
</script>

<template>
  <nav class="bg-gray-200/40 h-16 py-2 flex justify-evenly">
    <div class="w-2/5 flex">
      <img src="../assets/fi-logo.svg" width="40" alt="" />
      <ul class="flex ms-8 w-full items-center">
        <li class="mx-4 transition-all duration-150 hover:text-blue-300">
          <router-link :to="{ name: 'home' }">home</router-link>
        </li>
        <li class="mx-4 transition-all duration-150 hover:text-blue-300">
          <router-link :to="{ name: 'products' }"> products</router-link>
        </li>
        <li class="mx-4 transition-all duration-150 hover:text-blue-300">
          <router-link :to="{ name: 'contact' }"> contact</router-link>
        </li>
      </ul>
    </div>
    <div class="w-2/5 flex justify-end">
      <SearchBar />
      <CartButton />
    </div>
  </nav>
</template>

<style scoped></style>
