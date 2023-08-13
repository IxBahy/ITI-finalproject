<template>
  <div>
    <div class="flex ms-60 py-20 mb-5">
      <div class="shadow-lg me-20 shadow-black">
        <img class="" :src="getImgUrl(item.img)" />
      </div>

      <div class="flex items-center justify-start">
        <div class="info pt-5">
          <span class="float-left pr-3">★★★★★</span>
          <h6 style="width: 190px">3 reviews</h6>
          <h1 class="font-bold uppercase text-3xl pt-3">{{ item.title }}</h1>
          <h4>${{ item.price }}</h4>
          <br /><br /><br />
          <div class="control number text-center">
            <button
              class="decrement-button"
              @click="decrememnt"
              style="border-right: 0.2px solid lightgrey; float: left; margin-right: 11px"
            >
              −
            </button>
            <span>{{ quantity }}</span>
            <button
              class="increment-button"
              @click="incrememnt"
              style="border-left: 0.2px solid lightgrey; margin-left: 16px"
            >
              +
            </button>
            <br /><br />
          </div>
          <button class="add-to-cart-button" @click="addtoCart(item)">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const getImgUrl = (pic) => {
  return new URL(`../../assets/${pic}`, import.meta.url).href
}
const { item } = defineProps(['item'])
console.log('here is item', item)

const quantity = ref(1)

const incrememnt = () => (quantity.value < 9 ? quantity.value++ : 0)
const decrememnt = () => (quantity.value > 1 ? quantity.value-- : 0)
</script>

<style scoped>
.img-fluid {
  min-width: 90% !important;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.control button {
  border: none;
  background: inherit;
  width: 56px;
  height: 35px;
  outline-style: none;
}
.control:active {
  background-color: lightgrey;
}

.control h5 {
  margin-left: 13px;
  margin-right: 13px;
}
.control .number {
  border: 0.2px solid lightgrey;
  font-size: 19px;
  font-weight: bold;
  height: 35px;
  width: 155px;
  margin-bottom: 30px;
}
.add-to-cart-button {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 155px;
  height: 70px;
  background-color: #2c3539;
  color: #fff;
  font-size: 15px;
  padding: 0px 30px;
  cursor: pointer;
  position: relative;
  top: 0;
  z-index: 10;
  border: none;
  box-shadow:
    0 26px 38px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.add-to-cart-button:hover,
.add-to-cart-button:focus {
  background-color: inherit;
  color: black;
}
</style>
