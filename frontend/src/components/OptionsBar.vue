<template>
  <div class="flex justify-center">
    <div class="options-bar fixed w-11/12 h-20 bg-nero text-white font-semibold rounded-3xl flex justify-between items-center p-5 bottom-5">
      <div class="options-bar__mqtt-info flex items-center">
        <button
            @click="toggleMQTTConnection"
            class="flex items-center bg-gray-50 text-nero text-sm h-10 p-4 m-2 rounded-xl"
        >
          {{ isConnected ? 'Disconnect' : 'Connect' }}
        </button>
        <div v-if="isConnected" class="flex items-center text-sm">
          <h4>MQTT Broker: 127.0.0.1:1887</h4>
          <span class="relative flex h-6 w-6 m-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-6 w-6 bg-green-500"></span>
          </span>
        </div>
      </div>
      <div class="options-bar__buttons flex">
        <button class="flex items-center bg-gray-50 text-nero text-sm h-10 p-4 m-2 rounded-xl">Topics</button>
        <button class="flex items-center bg-gray-50 text-nero text-sm h-10 p-4 m-2 rounded-xl">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isConnected = ref(false);

const toggleMQTTConnection = () => {
  isConnected.value = !isConnected.value;
};
</script>
