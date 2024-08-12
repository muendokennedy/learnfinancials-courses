<script setup>
import { reactive, ref } from "vue";
import axios from 'axios'
import { useRouter } from 'vue-router'

const form = reactive({
  name: null,
  email: null,
  password: null
})

// const courses = ref([])

const router = useRouter()

const REGISTER_URL = 'https://dev-api.bitbytebinary.com/api/v1/partner/add-user'


const register = async () => {
  console.log(form.name)
  try {
    const response = await axios.post(REGISTER_URL, {
      name: form.name,
      email: form.email,
      password: form.password
    })
    if(response){
      router.push({
        name: 'courseAbout',
        query: {
          email: form.email
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}

</script>
<template>
  <div class="flex justify-center mt-2">
    <div class="w-full max-w-96 border rounded p-4">
      <header class="text-lg font-bold text-center px-0 py-4 border-b-2 border-b-black">Sign up</header>
      <form @submit.prevent="register">
        <div class="flex flex-col my-2">
          <label for="name" class="py-1">Enter your name(required):</label>
          <input v-model="form.name" type="text" id="name" class="px-2 py-2 border border-gray-400 rounded outline-none">
        </div>
        <div class="flex flex-col my-2">
          <label for="email" class="py-1">Enter your email(required):</label>
          <input v-model="form.email" type="text" id="email" class="px-2 py-2 border border-gray-400 rounded outline-none">
        </div>
        <div class="flex flex-col my-2">
          <label for="password" class="py-1">Enter your password:</label>
          <input v-model="form.password" type="password" id="password" class="px-2 py-2 border border-gray-400 rounded outline-none">
        </div>
        <div class="submit-button mt-4">
          <button type="submit" class="bg-[#35a186] w-full text-white py-2 text-center rounded">Continue to Learn</button>
        </div>
        <div class="mt-4 flex gap-2">
          <p>Already have an account?</p>
          <router-link class="nav-link text-[#35a186]" :to="{name: 'login'}">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>

</style>