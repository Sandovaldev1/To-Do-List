<template>
    <div class="layout flex min-h-screen">
        <div class="sidebar">
            <h2>Barra lateral</h2>
            <ul>
                <li><router-link to="/contador">Contador</router-link></li>
                <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
                <li><router-link to="/registro">Registrar usuario</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.layout {
    display: flex;
    min-height: 100vh;
    /* Asegura que ocupe toda la pantalla */
}

.sidebar {
    width: 200px;
    background-color: #afdeee;
    padding: 20px;
}

.content {
    flex: 1;
    background-color: #f9f9f9;
}
</style>