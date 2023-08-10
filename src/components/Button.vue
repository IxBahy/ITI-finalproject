<script setup>
const props = defineProps(['value'])
</script>

<template>
  <button
    class="w-20 h-10 bg-gray-800 text-gray-100 duration-150 transition-all hover:bg-transparent hover:shadow-lg hover:shadow-black hover:border hover:border-blue-400"
  >
    {{ props.value }}
  </button>
</template>
<style></style>
