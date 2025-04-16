<template>
  <li class="text-gray-800">
    <button
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      @click="onComplete"
      v-if="!tarea.completed"
    >✔</button>

    {{ tarea.completed ? `✅ ${tarea.title}` : tarea.title }}

    <button
      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      @click="onDelete"
    >X</button>
  </li>
</template>

<script setup>
defineProps({
  tarea: Object,
  index: Number,
  onComplete: Function,
  onDelete: Function
})
</script>
