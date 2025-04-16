<template>
    <h1 class="title">Formulario de registro</h1>
    <Form :validation-schema="schema" @submit="onSubmit" class="max-w-sm mx-auto">
        <div class="mb-5">
            <label for="name" class="block mb-2 text-m font-medium text-gray-900 dark:text-white">Tu
                nombre</label>
            <Field v-model="name" type="text" name="name" id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <ErrorMessage name="name"></ErrorMessage>
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-m font-medium text-gray-900 dark:text-white">Tu correo</label>
            <Field v-model="email" type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com" />
            <ErrorMessage name="email"></ErrorMessage>
        </div>
        <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value=""
                    class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
    </Form>
</template>


<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema.js';
import { useRecordStore } from '../stores/recordstore.js';
import { ref } from 'vue';


const registrarStore = useRecordStore();

const name = ref('');
const email = ref('');

const onSubmit = () => {
    registrarStore.saveRecord(name.value, email.value);
}
</script>

<style scoped>
.title{
    text-align: center;
    font-size:x-large;
    margin-bottom: 40px;
    font-weight: bold;
}

Form{
    background-color: aliceblue;
    padding: 20px;
    border-radius: 20px;
}

Form label{
    color: black;
}

</style>
