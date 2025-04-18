<template>
    <div class="layout-container" :class="{ 'dark': isDarkMode }">
        <!-- Botón hamburguesa solo en móviles -->
        <button class="hamburger" @click.stop="toggleSidebar" v-if="isMobile">
            Menú ☰
        </button>
        <div class="container-toggle">

            <button @click="toggleTheme" class="theme-toggle-btn">
                {{ isDarkMode ? '🌙' : '🌞' }} <!-- Muestra luna si es oscuro, sol si es claro -->
            </button>
        </div>
        <!-- Sidebar, se oculta en móviles y se muestra en pantallas grandes -->
        <MainSidebar class="responsive-sidebar" :class="{ 'sidebar-open': showSidebar || !isMobile }" ref="sidebarRef" />

        <!-- Contenido principal -->
        <div class="main-content">
            <RouterView />
        </div>
        <MainFooter />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MainSidebar from '@/components/MainSidebar.vue'
import MainFooter from '@/components/MainFooter.vue'
const showSidebar = ref(false)
const sidebarRef = ref(null)
const isMobile = ref(window.innerWidth < 768)
const isDarkMode = ref(false) // Estado para controlar el tema

const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value
}

const handleClickOutside = (event) => {
    if (isMobile.value && showSidebar.value) {
        const sidebarEl = sidebarRef.value?.$el || sidebarRef.value
        if (sidebarEl && !sidebarEl.contains(event.target)) {
            showSidebar.value = false
        }
    }
}

const handleResize = () => {
    isMobile.value = window.innerWidth < 768
    if (!isMobile.value) {
        showSidebar.value = false
    }
}

// Función para cambiar el tema
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
        document.documentElement.style.setProperty('--color-bg', 'var(--color-bg-dark)')
        document.documentElement.style.setProperty('--color-text', 'var(--color-text-dark)')
        document.documentElement.style.setProperty('--color-btn', 'var(--color-btn-dark)')
        document.documentElement.style.setProperty('--color-sidebar-bg', 'var(--color-sidebar-bg-dark)')
        document.documentElement.style.setProperty('--color-sidebar-text', 'var(--color-sidebar-text-dark)')
        localStorage.setItem('theme', 'dark')  // Guardar preferencia de tema
    } else {
        document.documentElement.style.setProperty('--color-bg', 'var(--color-bg-light)')
        document.documentElement.style.setProperty('--color-text', 'var(--color-text-light)')
        document.documentElement.style.setProperty('--color-btn', 'var(--color-btn-light)')
        document.documentElement.style.setProperty('--color-sidebar-bg', 'var(--color-sidebar-bg-light)')
        document.documentElement.style.setProperty('--color-sidebar-text', 'var(--color-sidebar-text-light)')
        localStorage.setItem('theme', 'light')  // Guardar preferencia de tema
    }
}

// Cargar el tema guardado desde localStorage al montar el componente
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('resize', handleResize)

    // Cargar el tema desde localStorage si existe
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
        isDarkMode.value = true
        document.documentElement.style.setProperty('--color-bg', 'var(--color-bg-dark)')
        document.documentElement.style.setProperty('--color-text', 'var(--color-text-dark)')
        document.documentElement.style.setProperty('--color-btn', 'var(--color-btn-dark)')
        document.documentElement.style.setProperty('--color-sidebar-bg', 'var(--color-sidebar-bg-dark)')
        document.documentElement.style.setProperty('--color-sidebar-text', 'var(--color-sidebar-text-dark)')
    } else {
        isDarkMode.value = false
        document.documentElement.style.setProperty('--color-bg', 'var(--color-bg-light)')
        document.documentElement.style.setProperty('--color-text', 'var(--color-text-light)')
        document.documentElement.style.setProperty('--color-btn', 'var(--color-btn-light)')
        document.documentElement.style.setProperty('--color-sidebar-bg', 'var(--color-sidebar-bg-light)')
        document.documentElement.style.setProperty('--color-sidebar-text', 'var(--color-sidebar-text-light)')
    }
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    transition: background-color 0.3s ease;
    /* Transición suave */
    background-color: var(--color-bg);
    /* Usar variable para fondo */
    color: var(--color-text);
    /* Usar variable para texto */
}

.hamburger {
    background: var(--color-btn);
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 24px;
    cursor: pointer;
    display: block;
}

.container-toggle{
    align-self:flex-end;
    padding-right: 25px;
}

.theme-toggle-btn {
    background: var(--color-btn);
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
}

.responsive-sidebar {
    width: auto;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-sidebar-bg);
    /* Usar variable para fondo del sidebar */
    color: var(--color-sidebar-text);
    /* Usar variable para texto del sidebar */
    height: 100%;
    z-index: 50;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.responsive-sidebar.sidebar-open {
    transform: translateX(0);
}

.main-content {
    flex: 1;
    padding: 1.5rem;
    background-color: var(--color-bg);
    /* Usar variable para fondo */
}

/* Tema oscuro */
body.dark .main-content {
    background-color: var(--color-bg-dark);
    color: var(--color-text-dark);
}

/* Tema claro */
body:not(.dark) .main-content {
    background-color: var(--color-bg-light);
    color: var(--color-text-light);
}
</style>
