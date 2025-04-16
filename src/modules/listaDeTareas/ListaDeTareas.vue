<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-center">ToDo con Vue</h2>

    <input
      type="text"
      v-model="nuevaTarea"
      @keyup.enter="addTarea"
      placeholder="Escribí una tarea..."
      class="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <div v-if="pendientes.length">
      <h3 class="text-lg font-semibold mb-2">Tareas Pendientes</h3>
      <ul class="mb-6">
        <TareaItem
          v-for="(tarea, index) in pendientes"
          :key="tarea.id || index"
          :tarea="tarea"
          :index="index"
          :onComplete="() => completarTarea(tarea)"
          :onDelete="() => eliminarTarea(tarea)"
        />
      </ul>
    </div>

    <div v-if="completadas.length">
      <h3 class="text-lg font-semibold mb-2">Tareas Completadas</h3>
      <ul>
        <TareaItem
          v-for="(tarea, index) in completadas"
          :key="tarea.id || index"
          :tarea="tarea"
          :index="index"
          :onComplete="() => {}"
          :onDelete="() => eliminarTarea(tarea)"
        />
      </ul>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import { useTareaStore } from './Record/stores/tareaStore'
import TareaItem from './TareaItem.vue'

const store = useTareaStore()
const nuevaTarea = ref('')

onMounted(() => {
  store.fetchTareas()
})

const pendientes = computed(() => store.tareas.filter(t => !t.completed))
const completadas = computed(() => store.tareas.filter(t => t.completed))

const addTarea = async () => {
  if (!nuevaTarea.value.trim()) return
  await store.addTarea(nuevaTarea.value)
  nuevaTarea.value = ''
}

const completarTarea = (tarea) => {
  tarea.completed = true
}

const eliminarTarea = (tarea) => {
  const index = store.tareas.findIndex(t => t.title === tarea.title && t.completed === tarea.completed)
  if (index > -1) store.tareas.splice(index, 1)
}
</script>
