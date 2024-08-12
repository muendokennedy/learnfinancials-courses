<script setup>
import axios from 'axios'
import Header from '@/components/Header.vue'
import CourseContainer from '@/components/CourseContainer.vue'
import { useRoute } from 'vue-router'
import {onMounted, ref} from 'vue'

const COURSE_URL = 'https://dev-api.bitbytebinary.com/api/v1/partner/courses'

const route = useRoute()

// const courses = ref([])

onMounted( async () => {
 await getCourses()
})

const getCourses = async () => {
  try {
        const courseReponse = await axios.get(COURSE_URL, {
          params: {
            email: route.query.email
          }
        })
        if(courseResponse){
          // courses.value = courseReponse
        }
      } catch (error){
        console.log(error)
      }
}

</script>
<template>
    <Header/>
    <div class="about">
        <CourseContainer/>
  </div>
</template>

<style scoped>
.about{
    padding: 2rem 4%;
}
</style>
