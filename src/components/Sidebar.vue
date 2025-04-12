<template>
    <div class="layout flex min-h-screen">
        <div class="sidebar">
            <div class="container-fluid mt-3 mb-5">
                <h2>Bienvenido{{', ' + name}}</h2>
                <h3>Email: {{ email }}</h3>
            </div>
            <ul>
                <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
                <li><router-link to="/registro">Registrar usuario</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useRecordStore } from '@/modules/listaDeTareas/Record/stores/recordstore';
import { ref, watch } from 'vue';


const registrarStore = useRecordStore();
const name = ref(registrarStore.name.value);
const email = ref(registrarStore.email.value);

watch(() => registrarStore.name, (newValue) => {
    name.value = newValue;
});

watch(() => registrarStore.email, (newValue) => {
    email.value = newValue;
});
</script>

<style scoped>
.layout {
    display: flex;
    min-height: 100vh;
    /* Asegura que ocupe toda la pantalla */
}

.sidebar {
    width: 200px;
    background-color: #1c293b;
    color: white;
    padding: 10px;
    width: auto;
}

.content {
    flex: 1;
    background-color: #f9f9f9;
}

.sidebar li {
    background-color: #2d425e;
    padding: 20px;
    margin: 5px;
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
}
</style>