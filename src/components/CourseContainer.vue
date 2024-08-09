<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

router.push({
  name: 'courseDetails'
})
</script>

<template>
      <div class="course-container gap-3 grid sm:grid-cols-3">
        <div class="course-box px-3 py-4 rounded-md border border-[#35a186]">
            <h2 class="text-lg capitalize font-bold border-black border-b-2 py-3 mb-2 text-center">Java programming</h2>
            <div class="image h-auto w-full">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/java-programming-1720530717882.jpeg" alt="">
            </div>
            <p class="text-sm py-2">You will learn the fundamentals of Java programming, including object-oriented programming concepts, data structures, algorithms, and design patterns.</p>
            <div>
                <button class="bg-[#35a186] text-white py-2 rounded px-4" @click="seeCourseDetails">Read More</button>
            </div>
        </div>
        <div class="course-box px-3 py-2 rounded-md border border-[#35a186]">
            <h2 class="text-lg font-bold border-black border-b-2 py-3 mb-2 text-center">Java programming</h2>
            <div class="image h-auto w-full">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/java-programming-1720530717882.jpeg" alt="">
            </div>
            <p class="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni?</p>
            <div>
                <button class="bg-[#35a186] text-white py-2 rounded px-4">Read More</button>
            </div>
        </div>
        <div class="course-box px-3 py-2 rounded-md border border-[#35a186]">
            <h2 class="text-lg font-bold border-black border-b-2 py-3 mb-2 text-center">Java programming</h2>
            <div class="image h-auto w-full">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/java-programming-1720530717882.jpeg" alt="">
            </div>
            <p class="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni?</p>
            <div>
                <button class="bg-[#35a186] text-white py-2 rounded px-4">Read More</button>
            </div>
        </div>
        <div class="course-box px-3 py-2 rounded-md border border-[#35a186]">
            <h2 class="text-lg font-bold border-black border-b-2 py-3 mb-2 text-center">Java programming</h2>
            <div class="image h-auto w-full">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/java-programming-1720530717882.jpeg" alt="">
            </div>
            <p class="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni?</p>
            <div>
                <button class="bg-[#35a186] text-white py-2 rounded px-4">Read More</button>
            </div>
        </div>
        <div class="course-box px-3 py-2 rounded-md border border-[#35a186]">
            <h2 class="text-lg font-bold border-black border-b-2 py-3 mb-2 text-center">Java programming</h2>
            <div class="image h-auto w-full">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/java-programming-1720530717882.jpeg" alt="">
            </div>
            <p class="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni?</p>
            <div>
                <button class="bg-[#35a186] text-white py-2 rounded px-4">Read More</button>
            </div>
        </div>
        <div class="course-box px-3 py-2 rounded-md border border-[#35a186]">
            <h2 class="text-lg font-bold border-black border-b-2 py-3 mb-2 text-center">Java programming</h2>
            <div class="image h-auto w-full">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/java-programming-1720530717882.jpeg" alt="">
            </div>
            <p class="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni?</p>
            <div>
                <button class="bg-[#35a186] text-white py-2 rounded px-4">Read More</button>
            </div>
        </div>
    </div>
</template>