<template>
  <div class="container mx-auto mb-4">
    <div class="grid grid-cols-3 p-3">
      <FilterBar class="w-1/2 mx-auto" />
      <div class="col-span-2 mx-auto" style="margin-left: 25px !important">
        <Card />
      </div>
    </div>
  </div>
</template>

<script setup>
import FilterBar from './FilterBar.vue'
import Card from './Card.vue'
</script>
