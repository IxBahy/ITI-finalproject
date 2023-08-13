<template>
  <div>
    <h1 class="pt-3 text-center text-3xl font-semibold">New arrivals</h1>
    <nav class="flex justify-center" aria-label="breadcrumb">
      <ol class="breadcrumb flex">
        <li class="breadcrumb-item">
          <router-link to="/">Home/</router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link to="/products" class="active">Products</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<style scoped>
.breadcrumb {
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 20px;
}
.breadcrumb a {
  text-decoration: none !important;
  color: #2c3539 !important;
}
.breadcrumb .active {
  text-decoration: none !important;
  color: #f2be00 !important;
}
</style>
