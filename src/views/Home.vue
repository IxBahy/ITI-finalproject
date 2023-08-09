<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <Header />
  <section class="flex w4/5 items-center justify-evenly">
    <div class="w-2/5">
      <img src="../assets/33.jpg" alt="" />
    </div>
    <div class="w-2/5">
      <h3 class="font-bold text-3xl">Lorem ipsum dolor sit amet.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam temporibus illum
        recusandae adipisci magnam, explicabo id quam quibusdam animi! Adipisci autem sapiente
        placeat reiciendis iste quod, ab deleniti sed ipsum maxime pariatur quaerat hic explicabo
        ipsam nulla illo in dolorem nostrum alias voluptates. Veritatis delectus animi aliquid
        asperiores obcaecati omnis voluptate iusto, optio eum quo, et, repellat dolores reiciendis
        est mollitia autem quae consectetur qui nisi explicabo deserunt nam minima illo ipsum! Hic
        omnis reprehenderit velit atque officia totam!
      </p>
    </div>
  </section>
  <section class="flex w4/5 items-center justify-evenly">
    <div class="w-2/5 text-end">
      <h3 class="font-bold text-3xl">Lorem ipsum dolor sit amet.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam temporibus illum
        recusandae adipisci magnam, explicabo id quam quibusdam animi! Adipisci autem sapiente
        placeat reiciendis iste quod, ab deleniti sed ipsum maxime pariatur quaerat hic explicabo
        ipsam nulla illo in dolorem nostrum alias voluptates. Veritatis delectus animi aliquid
        asperiores obcaecati omnis voluptate iusto, optio eum quo, et, repellat dolores reiciendis
        est mollitia autem quae consectetur qui nisi explicabo deserunt nam minima illo ipsum! Hic
        omnis reprehenderit velit atque officia totam!
      </p>
    </div>
    <div class="w-2/5">
      <img src="../assets/new.jpg" alt="" />
    </div>
  </section>
  <!-- Newsletter-area -->
  <section class="h-[30vh] bg-blue-200 my-12 flex items-center">
    <div class="w-2/3 flex items-center justify-between mx-auto">
      <div class="">
        <h2 class="text-4xl">Join our Newsletter</h2>
        <p>Nulla ac convallis lorem, eget euismod nisl. bibendum nec.</p>
      </div>
      <div class="">
        <form class="flex flex-col w-60">
          <input
            placeholder="Your E-mail"
            class="bg-transparent border-b-2 w-full border-gray-900 mb-1"
          />
          <button
            class="w-20 h-10 bg-gray-800 text-gray-100 duration-150 transition-all hover:bg-transparent hover:shadow-lg hover:shadow-black hover:border hover:border-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="flex justify-evenly">
    <!-- nav -->
    <div class="flex justify-evenly">
      <!-- col1 -->
      <div class="flex flex-col mx-8">
        <h5 class="font-bold text-l">Navigate</h5>
        <ul>
          <a href="/" aria-current="page" class="">
            <li class="my-4 text-center">About Us</li>
          </a>
          <a href="/" aria-current="page" class="">
            <li class="my-4 text-center">Blog</li>
          </a>
          <a href="/" aria-current="page" class="">
            <li class="my-4 text-center">Contact Us</li>
          </a>
          <a href="/" aria-current="page" class="">
            <li class="my-4 text-center">Sitemap</li>
          </a>
        </ul>
      </div>
      <!-- col2 -->
      <div class="flex flex-col mx-8">
        <h5 class="font-bold text-l">Collection</h5>
        <ul>
          <a href="/products">
            <li class="my-4 text-center">New Arrivals</li>
          </a>
          <a href="/products">
            <li class="my-4 text-center">Featured</li>
          </a>
          <a href="/products">
            <li class="my-4 text-center">Catalog</li>
          </a>
          <a href="/products">
            <li class="my-4 text-center">Brands</li>
          </a>
        </ul>
      </div>
      <!-- col3 -->
      <div class="flex flex-col mx-8">
        <h5 class="font-bold text-l">Catagories</h5>
        <ul>
          <a href="/products">
            <li class="my-4 text-center">Tables</li>
          </a>
          <a href="/products">
            <li class="my-4 text-center">Lamps</li>
          </a>
          <a href="/products">
            <li class="my-4 text-center">Chairs</li>
          </a>
          <a href="/products">
            <li class="my-4 text-center">Sofas</li>
          </a>
        </ul>
      </div>
    </div>
    <!-- social -->
    <div>
      <div>
        <div>
          <h4>399 Crowfiled Road,</h4>
          <h4>Phoenix, Arizona 85012</h4>
          <a href="mailto:#">asff@fdfsdc.com</a>
          <h6>+602-926-5809</h6>
        </div>
      </div>
      <div>
        <div>
          <p>Copyright &copy; All Rights Reserved 2020</p>
        </div>
        <div>
          <div>
            <strong>Get social</strong>
            <img src="../assets/twitter.png" class="twitter" />
            <img src="../assets/pinterest.png" class="pinterest" />
            <img src="../assets/facebook.png" class="facebook" />
            <img src="../assets/insta.png" class="insta" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
