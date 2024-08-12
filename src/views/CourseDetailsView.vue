<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue'
import Tab from '@/components/Tab.vue'
import TabsWrapper from '@/components/TabsWrapper.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

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

const content = "Niteesh is a driven and dedicated computer science student, currently pursuing his Bachelor's degree at the Indian Institute of Technology Dharwad. With a passion for coding, Niteesh has developed a strong skill set in a variety of programming languages, including Java, Python, C, C++, and JavaScript, among others.\r\nThroughout his academic pursuits, Niteesh has demonstrated a keen aptitude for software development, and is committed to staying up-to-date with the latest trends and technologies in the field. He is a motivated self-starter who enjoys taking on new challenges and solving complex problems.\r\nIn addition to his academic pursuits, Niteesh is an active learner who is constantly seeking out opportunities to expand his knowledge and develop his skills. He is always eager to take on new projects and collaborate with others to achieve success. His expertise in Python and Java make him the right person to tutor students registered with Bit Byte Binary."

let learnings = 'OOPs ,Generics ,Collections,Exception Handling ,Control Flow and Data Flow,Methods,String,If-else (conditions),Iterations,JDBC'

learnings = learnings.split(',')

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
        <button class="bg-[#35a186] text-white mt-3 py-2 rounded px-4">Get course</button>
      </div>
    </div>
    <div class="course-about">
      <TabsWrapper>
        <Tab title="What you will learn">
          <div>
          <p class="text-sm my-2" v-for="learning in learnings" :key="learning">
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>{{ learning }}</div>
            </div>
          </p>
        </div>
        </Tab>
        <Tab title="About the course">
          <div>
            <div>
              <h2 class="font-bold py-2">About the course</h2>
              <p class="text-xs my-2">Welcome to the Java certification course! In this course, you will learn the fundamentals of Java programming, including object-oriented programming concepts, data structures, algorithms, and design patterns. You will also learn to work with Java libraries for web development, database access, and GUI programming.\r\n\r\nThe course is designed to benefit you in several ways. First, Java is a popular and widely used programming language in the industry, making it a valuable skill to have.\r\n\r\nSecond, Java is known for its platform independence, which means that programs written in Java can run on any operating system. This makes it a versatile language that can be used to build a wide range of applications.\r\n\r\nFinally, the course will provide you with real-world learning opportunities through practical exercises and projects. You will learn how to apply your knowledge to solve real-world problems and build applications that can be used in industry. This will help you develop your programming skills and give you the confidence to take on challenging projects. By the end of this course, you will have a solid foundation in Java programming and be well-equipped to apply your skills to real-world problems.</p>
              <h2 class="font-bold py-2">Requirements</h2>
              <p class="text-sm my-2">Basic Computer Operations</p>
            </div>
          </div>
        </Tab>
        <Tab title="Tutors">
          <div>
            <div class="tutor-box w-1/2">
              <h2 class="font-semibold text-lg py-2">Tutor</h2>
              <p class="text-center text-sm font-semibold py-2 my-2">Niteesh Chaudhary</p>
              <div class="w-full flex justify-center items-center">
                <div class="image w-32 h-32">
                  <img class="w-full h-full rounded-full object-cover" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/tutor/niteesh-chaudhary-1721017995437.jpeg" alt="">
                </div>
              </div>
              <div class="details">
                <Disclosure v-slot="{ open }">
                <div class="text-xs" v-if="!open" v-html="content.substring(0, 200)"/>
                  <template v-if="content.length > 200">
                    <DisclosurePanel>
                      <div class="text-xs py-2 my-2" v-html="content"/>
                    </DisclosurePanel>
                    <div class="flex justify-end">
                      <DisclosureButton class="bg-[#35a186] text-white mt-3 py-2 rounded px-4">
                          {{ open ? 'Read Less' : 'Read More'}}
                      </DisclosureButton>
                    </div>
                  </template>
                </Disclosure>
              </div>
            </div>
          </div>
        </Tab>
        <Tab title="Sections">
          <div class="py-3">
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Module-1</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Module-2</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Module-3</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Module-4</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Module-5</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Module-6</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Module-7</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Interview Q&A</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Viva Q&A</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Project Examples</div>
            </div>
            <div class="flex gap-2">
              <div>
                <CheckCircleIcon class="size-5"/>
              </div>
              <div>Final Certification Examination</div>
            </div>
        </div>
        </Tab>
        <Tab title="Lessons">
          <div class="w-1/2 mt-5">
            <div class="flex justify-between my-2 items-center border p-1">
              <div class="w-20 h-20">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/tutor/niteesh-chaudhary-1721017995437.jpeg" alt="">
              </div>
              <div>
                Overview1
              </div>
              <div class="pr-8">
                {{ Math.floor(403/60) }} mins
              </div>
            </div>
            <div class="flex justify-between my-2 items-center border p-1">
              <div class="w-20 h-20">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/tutor/niteesh-chaudhary-1721017995437.jpeg" alt="">
              </div>
              <div>
                Overview2
              </div>
              <div class="pr-8">
                {{ Math.floor(674/60) }} mins
              </div>
            </div>
            <div class="flex justify-between my-2 items-center border p-1">
              <div class="w-20 h-20">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/tutor/niteesh-chaudhary-1721017995437.jpeg" alt="">
              </div>
              <div>
                Java history
              </div>
              <div class="pr-8">
                {{ Math.floor(123/60) }} mins
              </div>
            </div>
            <div class="flex justify-between my-2 items-center border p-1">
              <div class="w-20 h-20">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/tutor/niteesh-chaudhary-1721017995437.jpeg" alt="">
              </div>
              <div>
                Features
              </div>
              <div class="pr-8">
                {{ Math.floor(610/60) }} mins
              </div>
            </div>
            <div class="flex justify-between my-2 items-center border p-1">
              <div class="w-20 h-20">
                <img class="w-full h-full" src="https://bbb-main.blr1.digitaloceanspaces.com/uploads/tutor/niteesh-chaudhary-1721017995437.jpeg" alt="">
              </div>
              <div>
                JDK_JRE_JVM
              </div>
              <div class="pr-8">
                {{ Math.floor(536/60) }} mins
              </div>
            </div>
          </div>
        </Tab>
      </TabsWrapper>
    </div>
  </div>
</template>
<style scoped>
</style>