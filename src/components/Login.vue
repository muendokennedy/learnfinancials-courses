<script setup>
</script>
<template>
  <div class="flex justify-center mt-2">
    <div class="w-full max-w-96 border rounded p-4">
      <header class="text-lg font-bold text-center px-0 py-4 border-b-2 border-b-black">Sign up</header>
      <form @submit.prevent="">
        <div class="flex flex-col my-2">
          <label for="email" class="py-1">Enter your email(required):</label>
          <input type="text" id="email" class="px-2 py-2 border border-gray-400 rounded outline-none">
        </div>
        <div class="flex flex-col my-2">
          <label for="password" class="py-1">Enter your password:</label>
          <input type="password" id="password" class="px-2 py-2 border border-gray-400 rounded outline-none">
        </div>
        <div class="submit-button mt-4">
          <button type="submit" class="bg-[#35a186] w-full text-white py-2 text-center rounded">Continue to Learn</button>
        </div>
        <div class="mt-4 flex gap-2">
          <p>Don't have an account yet?</p>
          <router-link class="nav-link text-[#35a186]" :to="{name: 'register'}">sign up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>

</style>