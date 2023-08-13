<template>
  <div>
    <nav class="absolute top-24 left-48 font-semibold" aria-label="breadcrumb">
      <ol class="breadcrumb flex">
        <li class="breadcrumb-item">
          <router-link to="/">Home /</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/products">Products /</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/products">{{ item.type }} /</router-link>
        </li>
        <li class="breadcrumb-item active">{{ item.title }}</li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
const { item } = defineProps(['item'])
</script>

<style scoped>
.breadcrumb {
  background: inherit;
}

.breadcrumb li a {
  text-decoration: none;
  color: #2c3539 !important;
  font-size: 18px;
}
.breadcrumb li:hover {
  text-decoration: underline;
}
.breadcrumb .active {
  text-decoration: none !important;
  color: #f2be00 !important;
}
</style>
