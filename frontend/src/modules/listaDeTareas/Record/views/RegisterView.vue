<template>
  <h1 class="title">
    Formulario de registro
  </h1>

  <Form :validation-schema="schema" @submit="onSubmit"
    class="max-w-sm mx-auto bg-white dark:bg-gray-800 p-5 rounded-2xl">
    <div class="mb-5">
      <label for="name" class="block mb-2 text-m font-medium text-gray-900 dark:text-white">Tu nombre</label>
      <Field v-model="name" type="text" name="name" id="name"
        class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      <ErrorMessage name="name" class="text-red-500 text-sm mt-1" />
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-m font-medium text-gray-900 dark:text-white">Tu correo</label>
      <Field v-model="email" type="email" name="email" id="email"
        class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="name@flowbite.com" />
      <ErrorMessage name="email" class="text-red-500 text-sm mt-1" />
    </div>
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input id="remember" type="checkbox"
          class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600" />
      </div>
      <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    <button type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Registrar
    </button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema.js';
import { useRecordStore } from '../stores/useRecordStore.js';
import { ref } from 'vue';

const registrarStore = useRecordStore();

const name = ref('');
const email = ref('');

const onSubmit = () => {
  registrarStore.saveRecord(name.value, email.value);
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: x-large;
  margin-bottom: 40px;
  font-weight: bold;
  color: black;
  /* For light mode */
}

.dark .title {
  color: white;
  /* For dark mode */
}
</style>