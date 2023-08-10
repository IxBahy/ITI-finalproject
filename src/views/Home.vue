<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import FormInput from '../components/FormInput.vue'
import Button from '../components/Button.vue'
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
    <div class="ms-8 md:w-2/3 flex items-center justify-between mx-auto">
      <div class="">
        <h2 class="text-4xl">Join our Newsletter</h2>
        <p>Nulla ac convallis lorem, eget euismod nisl. bibendum nec.</p>
      </div>
      <div class="ms-4">
        <form class="flex flex-col w-60">
          <!-- <input
            placeholder="Your E-mail"
            class="bg-transparent border-b-2 w-40 lg:w-full border-gray-900 mb-1"
          /> -->
          <FormInput place-holder="Your E-mail" type="email" />
          <Button value="submit" />
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
