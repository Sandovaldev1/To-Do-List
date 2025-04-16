<template>
  <ul>
    <TareaItem
      v-for="tarea in pendientes"
      :key="tarea.id"
      :tarea="tarea"
      :onComplete="() => completarTarea(tarea.id)"
      :onDelete="() => eliminarTarea(tarea.id)"
    />
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useTareaStore } from './Record/stores/tareaStore'
import TareaItem from './TareaItem.vue'

const store = useTareaStore()

const pendientes = computed(() => store.tareas.filter(t => !t.completed))

const completarTarea = (id) => {
  store.completarTarea(id)
}

const eliminarTarea = (id) => {
  store.eliminarTarea(id)
}
</script>
