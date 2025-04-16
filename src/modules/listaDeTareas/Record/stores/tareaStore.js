// src/modules/listaDeTareas/Record/stores/tareaStore.js
import { defineStore } from 'pinia'
import api from '@/services/api'
import { ref } from 'vue'

export const useTareaStore = defineStore('tareaStore', () => {
  const tareas = ref([])

  const fetchTareas = async () => {
    try {
      const res = await api.get('/tareas')
      tareas.value = res.data
    } catch (err) {
      console.error('Error al obtener tareas', err)
    }
  }

  const addTarea = async (texto) => {
    try {
      const res = await api.post('/tareas', { title: texto, completed: false })
      tareas.value.push(res.data)
    } catch (err) {
      console.error('Error al agregar tarea', err)
    }
  }

  return {
    tareas,
    fetchTareas,
    addTarea,
  }
})
