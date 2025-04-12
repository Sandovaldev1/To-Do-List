import { defineStore } from "pinia";
//importamos variable reactiva
import { ref } from "vue";

////////////////////////////////////////////////////
//Como se llama el store dentro del contexto de vue 'registrar'
export const useRecordStore = defineStore('registrar', () => {

    //variable con el nombre de formulario
    const name = ref('');
    const email = ref('');

    //Guardamos el registro de esas variables, se ejecuta al momento de ejecutar el form
    const saveRecord = (nameForm, emailForm) => {
        //value es el valor de los datos ingresados
        name.value = nameForm;
        email.value = emailForm;
    };

    return { name, email, saveRecord }
});