<script setup>
import { ref, defineProps, useSlots, provide } from 'vue'

// Define the slots object
const props = defineProps()
const slots = useSlots()

const tabTitles = ref(slots.default().map((tab) => tab.props.title))

const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)

</script>

<template>
  <div class="tabs">
    <ul class="tabs-header flex gap-2">
      <li class="font-bold py-2 border-b-2 cursor-pointer" :class="[title == selectedTitle ? 'border-[#35a186]' : '']" @click="selectedTitle = title" v-for="title in tabTitles" :key="title">{{ title }}</li>
    </ul>
  </div>
  <slot/>
</template>