<script setup>
import FormInput from '../components/FormInput.vue'
import Button from '../components/Button.vue'
</script>

<template>
  <main class="h-[65vh] flex mx-6 mb-20 relative">
    <div class="w-1/2">
      <img src="../assets/_con.jpg" alt="" />
    </div>
    <div class="w-1/2 pe-32 mt-12 absolute right-24">
      <div class="mb-6">
        <h2 class="text-5xl mb-2">Hello there</h2>
        <span class="text-3xl text-gray-400">got a thought to discuss?</span>
      </div>
      <form action="">
        <FormInput place-holder="Your Name" type="text" />
        <FormInput place-holder="email" type="text" class="my-12" />
        <textarea
          class="bg-transparent border-b-2 mt-8 w-40 md:w-full border-gray-900 mb-1"
          name="Message"
          placeholder="Message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <Button value="submit" />
      </form>
    </div>
  </main>
</template>

<style scoped></style>
