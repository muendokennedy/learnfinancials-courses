<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue'
import Tab from '@/components/Tab.vue'
import TabsWrapper from '@/components/TabsWrapper.vue'

const div1 = ref(null)
const div2 = ref(null)

const toggleDivContentDisplay1 = () => {
  if(div1.value.style.display === 'none'){
    div1.value.style.display = 'block'
  } else {
    div1.value.style.display = 'none'
  }
}
const toggleDivContentDisplay2 = () => {
  if(div2.value.style.display === 'none' && div1.value.style.display === 'block'){
    div2.value.style.display = 'block'
  } else {
    div2.value.style.display = 'none'
  }
}
const toggleDivContentDisplay3 = () => {
  if(div1.value.style.display === 'none'){
    div1.value.style.display = 'block'
  } else {
    div1.value.style.display = 'none'
  }
}
const toggleDivContentDisplay4 = () => {
  if(div1.value.style.display === 'none'){
    div1.value.style.display = 'block'
  } else {
    div1.value.style.display = 'none'
  }
}
const toggleDivContentDisplay5 = () => {
  if(div1.value.style.display === 'none'){
    div1.value.style.display = 'block'
  } else {
    div1.value.style.display = 'none'
  }
}
</script>
<template>
  <Header/>
  <div class="px-[4%] py-[2rem]">
    <div class="flex gap-4 my-4">
      <div class="">
        <div>
          <img src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/java-programming-1720530717882.jpeg">
        </div>
      </div>
      <div class="">
        <h2 class="text-lg font-bold py-4 border-b-2">Java Programming</h2>
        <p class="my-3 text-lg">You will learn the fundamentals of Java programming, including object-oriented programming concepts, data structures, algorithms, and design patterns.</p>
        <div class="flex gap-4">
          <span class="font-bold">difficulty Level: </span> <span>Beginner</span>
        </div>
        <div>
          <span>Price: </span> <span>19999</span>
        </div>
        <div>
          <span>Discount: </span> <span>499</span>
        </div>
        <div>
          <span>Discounted price: </span> <span>17999</span>
        </div>
        <button>Get course</button>
      </div>
    </div>
    <div class="course-about">
      <TabsWrapper>
        <Tab title="What you will learn">
          <div>
          <p class="text-sm">OOPs ,Generics ,Collections,Exception Handling ,Control Flow and Data Flow,Methods,String,If-else (conditions),Iterations,JDBC</p>
        </div>
        </Tab>
        <Tab title="About the course">
          <div>
            <div>
              <h2>About the course</h2>
              <p class="text-sm">Welcome to the Java certification course! In this course, you will learn the fundamentals of Java programming, including object-oriented programming concepts, data structures, algorithms, and design patterns. You will also learn to work with Java libraries for web development, database access, and GUI programming.\r\n\r\nThe course is designed to benefit you in several ways. First, Java is a popular and widely used programming language in the industry, making it a valuable skill to have.\r\n\r\nSecond, Java is known for its platform independence, which means that programs written in Java can run on any operating system. This makes it a versatile language that can be used to build a wide range of applications.\r\n\r\nFinally, the course will provide you with real-world learning opportunities through practical exercises and projects. You will learn how to apply your knowledge to solve real-world problems and build applications that can be used in industry. This will help you develop your programming skills and give you the confidence to take on challenging projects. By the end of this course, you will have a solid foundation in Java programming and be well-equipped to apply your skills to real-world problems.</p>
            </div>
          </div>
        </Tab>
        <Tab title="Tutors"></Tab>
        <Tab title="Sections">Sections</Tab>
        <Tab title="Lessons">Lessons</Tab>
      </TabsWrapper>
    </div>
  </div>
</template>
<style scoped>
</style>