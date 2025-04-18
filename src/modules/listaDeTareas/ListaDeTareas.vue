<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-center">ToDo con Vue</h2>
    <form @submit.prevent="addTarea" class="flex gap-2 mb-6">
      <input v-model="nuevaTarea" type="text" placeholder="Escribí una tarea..."
        class="min-w-0 flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button type="submit" class="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <PlusIcon class="w-10 h-6 text-white" />
      </button>
    </form>

    <transition name="fade">
      <div v-if="mensajeExito" class="mb-4 text-green-600 font-semibold text-sm">
        ✅ Tarea agregada con éxito
      </div>
    </transition>

    <div v-if="pendientes.length">
      <h3 class="text-lg font-semibold mb-2">Tareas Pendientes</h3>
      <ul class="mb-6">
        <TareaItem v-for="(tarea, index) in pendientes" :key="tarea.id || index" :tarea="tarea" :index="index"
          :onComplete="() => completarTarea(tarea)" :onDelete="() => eliminarTarea(tarea)" />
      </ul>
    </div>

    <div v-if="completadas.length">
      <h3 class="text-lg font-semibold mb-2">Tareas Completadas</h3>
      <ul>
        <TareaItem v-for="(tarea, index) in completadas" :key="tarea.id || index" :tarea="tarea" :index="index"
          :onComplete="() => { }" :onDelete="() => eliminarTarea(tarea)" />
      </ul>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import confetti from 'canvas-confetti'
import { useTareaStore } from './Record/stores/useTareaStore'
import TareaItem from './TareaItem.vue'

const store = useTareaStore()
const nuevaTarea = ref('')

onMounted(() => {
  store.fetchTareas()
})

const pendientes = computed(() => store.tareas.filter(t => !t.completed))
const completadas = computed(() => store.tareas.filter(t => t.completed))

const mensajeExito = ref(false)

const addTarea = async () => {
  if (!nuevaTarea.value.trim()) return
  await store.addTarea(nuevaTarea.value)
  nuevaTarea.value = ''

  mensajeExito.value = true
  setTimeout(() => {
    mensajeExito.value = false
  }, 2000)
};


const completarTarea = async (tarea) => {
  tarea.completed = true
  // Lanzamos el confeti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  })
};

const eliminarTarea = (tarea) => {
  const index = store.tareas.findIndex(t => t.title === tarea.title && t.completed === tarea.completed)
  if (index > -1) store.tareas.splice(index, 1)
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>