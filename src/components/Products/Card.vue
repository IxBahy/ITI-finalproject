<template>
  <div class="grid grid-cols-3 gap-3 text-center">
    <div v-for="item in showedProducts" class="pb-3" :key="item.id">
      <div class="card">
        <img
          class="card-img-top"
          :src="getImgUrl(item.img)"
          alt="Card-image-cap"
          title="Card-image-cap"
          loading="lazy"
        />
        <div class="overlay">
          <router-link
            :to="`/products/${item.id}`"
            class="p-2 border block -top-40 absolute border-black z-10 bg-gray-600 rounded text-lg text-white"
          >
            <button type="button" class="">Info</button>
          </router-link>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">${{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
  <MoreButton v-if="len < 15" @click="incrementLen()" />
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import MoreButton from './MoreButton.vue'

const getImgUrl = (pic) => {
  return new URL(`../../assets/${pic}`, import.meta.url).href
}
const products = [
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
]
const adjustShowedProducts = (val) => products.slice(0, val)
let len = ref(6)
let showedProducts = ref(adjustShowedProducts(len.value))
const incrementLen = () => {
  if (len.value < products.length) {
    len.value = len.value + 3
  }
  console.log(len.value)
}
watch(len, (newlen) => (showedProducts.value = adjustShowedProducts(newlen)))
</script>

<style>
/* Card Style */
.card {
  transition: 300ms;
  position: relative;
  overflow: hidden;
}
.card img {
  z-index: 1;
}

.card button {
  width: 140px;
  margin-bottom: 10px;
}

.card:hover img {
  filter: blur(4px);
}

.card:hover .overlay {
  opacity: 0.4;
}

.card .overlay {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #232b34;
  opacity: 0;
  z-index: 100;
  transition: all 0.3s ease-in;
}

.card:hover,
.card:active {
  transform: scaleY(1.02) scaleX(1.02);
  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.25),
    0 0px 40px rgba(0, 0, 0, 0.22);
}
</style>
