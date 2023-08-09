<template>
  <div class="w-full pb-16 sm:px-0">
    <TabGroup>
      <TabPanels>
        <TabPanel v-for="({ image }, idx) in Object.values(categories)" :key="idx">
          <div>
            <img :src="image" class="w-8/12 mx-auto" alt="" rel="preload" />
          </div>
        </TabPanel>
      </TabPanels>
      <!-- Buttons -->
      <TabList class="flex justify-center space-x-1 rounded-xl bg-white">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-4 h-4 my-8 rounded-full   text-sm font-medium text-gray-150 bg-gray-150 border border-gray-500',
              ' ring-opacity-60 ring-offset-2 ring-offset-gray-300 focus:outline-none focus:ring-1',
              selected
                ? 'bg-blue-300 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            ]"
          >
            <!-- {{ category }} -->
          </button>
        </Tab>
      </TabList>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import firstjum from '../assets/jum1.jpg'
import secondjum from '../assets/jum2.jpg'
import thirdjum from '../assets/jum3.jpg'
const categories = ref({
  first: {
    id: 1,
    image: firstjum
  },
  second: {
    id: 1,
    image: secondjum
  },
  third: {
    id: 1,
    image: thirdjum
  }
})
</script>
