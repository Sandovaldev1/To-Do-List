<template>
  <ul>
    <TareaItem
      v-for="tarea in completadas"
      :key="tarea.id"
      :tarea="tarea"
      :onDelete="() => eliminarTarea(tarea.id)"
    />
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useTareaStore } from './Record/stores/tareaStore'
import TareaItem from './TareaItem.vue'

const store = useTareaStore()

const completadas = computed(() => store.tareas.filter(t => t.completed))

const eliminarTarea = (id) => {
  store.eliminarTarea(id)
}
</script>
