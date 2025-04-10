<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-center">ToDo con Vue</h2>

    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" placeholder="Escribí una tarea..."
      class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

    <ul class="list-disc pl-5 space-y-2">
      <li v-for="(tarea, index) in tareas" :key="index" class="text-gray-800">
        <button
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          @click="completeTask(index)">X</button>
        {{ tarea }}
        <button
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          @click="deleteTask(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tareas = ref([]);
const nuevaTarea = ref('');

//Función para agregar tareas
const addTarea = () => {
  tareas.value.push(nuevaTarea.value);
  nuevaTarea.value = '';
}

//Función para eliminar tareas
const deleteTask = (index) => {
  tareas.value.splice(index, 1);
}
</script>


<style></style>