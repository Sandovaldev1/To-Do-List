

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>Bienvenido{{ ', ' + name }}</h2>
      <h3>Email: {{ email }}</h3>
    </div>
    <ul class="nav-links">
      <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
      <li><router-link to="/registro">Registrar usuario</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRecordStore } from '@/modules/listaDeTareas/Record/stores/useRecordStore'
import { ref, watch } from 'vue'

const registrarStore = useRecordStore()
const name = ref(registrarStore.name.value)
const email = ref(registrarStore.email.value)

watch(() => registrarStore.name, (newValue) => {
  name.value = newValue
})

watch(() => registrarStore.email, (newValue) => {
  email.value = newValue
})
</script>

<style scoped>
.sidebar {
  width: 100%;
  background-color: #1c293b !important;
  color: white !important;
  padding: 1rem;
}

.sidebar-header {
  margin-bottom: 2rem;
}

.nav-links li {
  background-color: #2d425e;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
}

/* En pantallas grandes, sidebar ocupa ancho fijo */
@media (min-width: 768px) {
  .sidebar {
    width: 220px;
    height: 100vh;
    position: sticky;
    top: 0;
  }
}
</style>