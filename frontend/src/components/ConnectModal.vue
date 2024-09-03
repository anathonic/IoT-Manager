<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg w-1/2">
      <h2 class="font-semibold m-2">MQTT Connection</h2>
      <div class="flex justify-center">
        <div class="flex flex-col m-2 mb-10">
          <h6>Name</h6>
          <input v-model="name" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
        </div>
        <div class="flex flex-col m-2">
      <h6>Host</h6>
          <input v-model="host" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
        </div>
        <div class="flex flex-col m-2">
      <h6>Port</h6>
          <input
              v-model="port"
              @input="validatePort"
              type="text"
              id="small-input"
              :class="{
        'block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500': !showError,
        'block w-full p-2 text-black border border-red-300 rounded-lg bg-gray-50 text-xs focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500': showError
      }"
              placeholder="Enter port number"
          />

          <p v-if="showError" class="mt-2 text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Stop!</span> Only integers are accepted.
          </p>
        </div>

      </div>

      <div class="flex justify-center">
        <button
            @click="connectToMQTTBroker"
            class="text-sm font-medium tracking-wider bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-full mr-2"
        >
          Connect
        </button>

        <button
            @click="closeModal"
            class="text-sm font-medium tracking-wider bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-full mr-2"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emits = defineEmits(['connectToMQTTBroker','closeModal']);
const name = ref('localhost');
const host = ref('127.0.0.1');
const port = ref('1887');
const showError = ref(false);

const validatePort = () => {
  if (port.value === '') {
    showError.value = false;
  } else {
    showError.value = !/^\d+$/.test(port.value);
  }
};

const connectToMQTTBroker = () => {
  if (!showError.value) {
    emits('connectToMQTTBroker', { name: name.value, host: host.value, port: parseInt(port.value, 10) });
  }
};
const closeModal = () => {
  emits('closeModal');
};
</script>
