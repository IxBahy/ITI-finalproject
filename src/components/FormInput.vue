<script setup>
const props = defineProps(['placeHolder', 'type'])
</script>

<template>
  <input
    :placeholder="props.placeHolder"
    class="bg-transparent border-b-2 w-40 md:w-full border-gray-900 mb-1"
  />
</template>
<style></style>
