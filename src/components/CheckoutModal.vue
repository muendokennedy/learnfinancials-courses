<script setup>
import { ref, computed } from 'vue'
import { LockClosedIcon } from '@heroicons/vue/24/outline'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const props = defineProps({
  modelValue: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])

function closeModal() {
  show.value = false
}

const show = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

</script>
<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-6xl  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-bold leading-6 text-gray-900 border-b-2 py-2"
              >
                Get the course
              </DialogTitle>
              <div class="mt-2 w-full flex gap-6">
                <div class="w-1/2">
                  <form>
                    <h2 class="font-semibold text-[#3f927d]">Course Details</h2>
                    <div class="flex gap-5 w-full">
                      <div class="flex flex-col my-2 w-full">
                        <label for="name" class="py-1">Title:</label>
                        <input  type="text" id="name" class="px-2 py-2 border border-gray-400 rounded outline-none">
                      </div>
                      <div class="flex flex-col my-2 w-full">
                        <label for="email" class="py-1">Price:</label>
                        <input  type="text" id="email" class="px-2 py-2 border border-gray-400 rounded outline-none">
                      </div>
                    </div>
                    <h2 class="font-semibold text-[#3f927d]">Customer Details</h2>
                    <div class="flex gap-5 w-full">
                      <div class="flex flex-col my-2 w-full">
                        <label for="name" class="py-1">Name:</label>
                        <input  type="text" id="name" class="px-2 py-2 border border-gray-400 rounded outline-none">
                      </div>
                      <div class="flex flex-col my-2 w-full">
                        <label for="email" class="py-1">Email:</label>
                        <input  type="text" id="email" class="px-2 py-2 border border-gray-400 rounded outline-none">
                      </div>
                    </div>
                    <h2 class="font-semibold text-[#3f927d]">Mpesa payment details</h2>
                    <div class="flex gap-5 w-full">
                      <div class="flex flex-col my-2 w-full">
                        <label for="name" class="py-1">Mpesa Number:</label>
                        <input  type="text" id="name" class="w-full px-2 py-2 border border-gray-400 rounded outline-none">
                      </div>
                    </div>
                  </form>
                </div>
                <div class="w-1/2 bg-[#d5f3ec] rounded-md py-2 px-12">
                  <div class="h-32 w-full flex flex-col justify-center items-center border-b border-gray-400">
                    <div class="text-center">
                      <span class="font-semibold text-sm my-2">Total amount</span>
                      <h2 class="my-2 text-3xl font-bold text-[#3f927d]">Ksh. 4900</h2>
                    </div>
                    <div class="flex items-center gap-1.5 justify-center">
                      <LockClosedIcon class="size-3"/>
                      <p class="text-xs">secure payment</p>
                    </div>
                  </div>
                  <h2 class="font-semibold py-2 text-gray-500">Order summary</h2>
                  <div class="my-2 border-b border-gray-300 py-2 flex justify-between">
                    <h2 class="text-sm">Java Programming</h2>
                    <p class="text-sm">Ksh. 4900</p>
                  </div>
                  <div class="my-2 border-b border-gray-300 py-2 flex justify-between">
                    <h2 class="text-gray-500 text-sm">Subtotal</h2>
                    <p class="text-sm">Ksh. 4900</p>
                  </div>
                  <div class="flex justify-between">
                    <h2 class="font-bold text-black">Total</h2>
                    <p class="font-bold text-[#3f927d]">Ksh. 4900</p>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex capitalize justify-center rounded-md bg-[#35a186] px-4 py-2 text-sm font-medium text-white hover:bg-[#3f927d]"
                  @click="closeModal"
                >
                  Make payment
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>