<template>
  <div>
    <div class="header">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        TO DO List</h1>
      <form @submit.prevent="onSubmit" class="flex">
        <!-- <label for="tarea" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tarea: </label>
        <br> -->
        <input type="text" v-model="tarea" class="w-full border-2 border-gray-300 rounded-sm h-10"
          placeholder="Nueva Tarea">
        <button type="submit" class="rounded-sm bg-gray-500">
          Añadir
        </button>
      </form>
    </div>
    <div class="h-full flex flex-col min-h-[100dvh] bg-gray-100">
      <ul>
        <li v-for="item in items" class="grid grid grid-cols-6">
          <input v-model="item.estado" id="default-checkbofx" type="checkbox" value=""
            class="col-start-1 col-end-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label class="col-start-2 col-end-5">{{ item.tarea }}</label>
          <button class="col-start-5 col-end-6 rounded-sm bg-gray-500" v-on:click="onClick(item)">Eliminar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

// defineProps({
//   tarea: {
//     type: String,
//     required: true,
//   },
//   estado: {
//     type: Boolean,s
//     required: true
//   }
// })

defineOptions({
  name: 'ToDo List'
});

let items = [{ id: 1, tarea: 'aaaa', estado: false }, { id: 2, tarea: 'bbbb', estado: true }, { id: 3, tarea: 'cccc', estado: false }]


const onSubmit = () => {
  let id = items[items.length - 1].id + 1
  items.push({ id: id, tarea: tarea.value, estado: false })
  console.log(items);
}

const onClick = (item: any) => {
  let newItems = new Array();
  items.forEach(x => {
    if (x.id != item.id) {
      newItems.push(x);
    }
  });

  items = newItems;
}

const tarea = ref('');

</script>
  