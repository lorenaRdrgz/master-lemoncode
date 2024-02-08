<template>
  <div class="h-lvh w-full flex items-center justify-center bg-slate-300 font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-2xl text-grey-darkest">Todo List</h1>

        <!-- AÑADIR NOTA -->
        <form @submit.prevent="onSubmit" class="flex mt-4">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Nueva Tarea" v-model="tarea">
          <button type="submit"
            class="flex-no-shrink p-2 border-2 rounded bg-slate-200 text-teal border-teal hover:text-white hover:bg-teal"
            aria-description="Agregar elemento a la lista">Agregar</button>
        </form>

        <!-- LISTA DE NOTAS -->
        <div v-for="item in items" class="mt-4">
          <!-- Si no editamos la tarea -->
          <div v-if="!item.editar" class="flex mb-4 items-center p-5 bg-slate-200">
            <input v-model="item.estado" id="default-checkbofx" type="checkbox" value=""
              class="w-6 h-6 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              aria-description="Marcar elemento de la lista como seleccionado o deseleccionado">
            <p class="w-full text-grey-darkest text-lg" :class="{ 'line-through': item.estado }">{{ item.tarea }}</p>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded bg-slate-700 text-white border-white"
              aria-description="Editar elemento de la lista" v-on:click="item.editar = true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </button>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded bg-slate-700 text-white border-white"
              aria-description="Eliminar elemento de la lista" v-on:click="onClickEliminar(item)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
          <!-- Si editamos la tarea -->
          <div v-if="item.editar" class="flex mb-4 items-center p-5 bg-slate-200">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Tarea" v-model="item.tarea">
            <button type="submit"
              class="flex-no-shrink p-2 border-2 rounded bg-slate-700 text-white border-white hover:text-white hover:bg-teal"
              aria-description="Editar elemento de la lista" v-on:click="onClickEditarTexto(item)">Editar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineOptions({
  name: 'ToDo List'
});

let items = ref([{ id: 1, tarea: 'Ir a la compra', estado: false, editar: false }, { id: 2, tarea: 'Ir al gimnasio', estado: true, editar: false }, { id: 3, tarea: 'Fiesta a las 12h', estado: false, editar: false }]);


const onSubmit = () => {
  let id = items.value[items.value.length - 1].id + 1
  items.value.push({ id: id, tarea: tarea.value, estado: false, editar: false });
  tarea.value = '';
}

const onClickEliminar = (item: any) => {
  let newItems = new Array();
  items.value.forEach(x => {
    if (x.id != item.id) {
      newItems.push(x);
    }
  });

  items.value = newItems;
}

const onClickEditarTexto = (item: any) => {
  item.editar = false;
}

const tarea = ref('');

</script>
  