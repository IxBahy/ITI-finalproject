<template>
  <Breadcrumb :item="product" />
  <Box :item="product" />
  <Text />
</template>

<script setup>
import { useRoute } from 'vue-router'
import Box from '../components/Details/Box.vue'
import Text from '../components/Details/Text.vue'
import Breadcrumb from '../components/Details/Breadcrumb.vue'
const route = useRoute()
const id = route.params.id
const product = [
  {
    id: 0,
    img: '1.jpg',
    title: 'Cabriole',
    price: 156,
    color: 'yellow',
    type: 'sofa'
  },
  {
    id: 1,
    img: '2.jpg',
    title: 'Torchiere',
    price: 756,
    color: 'yellow',
    type: 'lamp'
  },
  {
    id: 2,
    img: '3.jpg',
    title: 'Arm Chair',
    price: 362,
    color: 'yellow',
    type: 'chair'
  },
  {
    id: 3,
    img: '4.jpg',
    title: 'Wing Chair',
    price: 505,
    color: 'red',
    type: 'chair'
  },
  {
    id: 4,
    img: '5.jpg',
    title: 'Camel Back',
    price: 243,
    color: 'white',
    type: 'sofa'
  },
  {
    id: 5,
    img: '6.jpg',
    title: 'Stool',
    price: 44,
    color: 'white',
    type: 'chair'
  },
  {
    id: 6,
    img: '7.jpg',
    title: 'Windsor chair',
    price: 505,
    color: 'blue',
    type: 'chair'
  },

  {
    id: 7,
    img: '8.jpg',
    title: 'C-table',
    price: 432,
    color: 'red',
    type: 'table'
  },
  {
    id: 8,
    img: '9.jpg',
    title: 'Coffee Table',
    price: 390,
    color: 'white',
    type: 'table'
  },
  {
    id: 9,
    img: '10.jpg',
    title: 'Desk Chair',
    price: 756,
    color: 'yellow',
    type: 'chair'
  },
  {
    id: 10,
    img: '11.jpg',
    title: 'Garden Chair',
    price: 44,
    color: 'white',
    type: 'chair'
  },
  {
    id: 11,
    img: '12.jpg',
    title: 'Novelty',
    price: 156,
    color: 'red',
    type: 'lamp'
  },
  {
    id: 12,
    img: '13.jpg',
    title: 'Lava',
    price: 756,
    color: 'blue',
    type: 'lamp'
  },
  {
    id: 13,
    img: '14.jpg',
    title: 'Deck Chair',
    price: 756,
    color: 'white',
    type: 'chair'
  },
  {
    id: 14,
    img: '7.jpg',
    title: 'Windsor chair',
    price: 505,
    color: 'blue',
    type: 'chair'
  }
][id]

console.log('here is ', product)
</script>
