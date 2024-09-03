<template>
  <div class="flex justify-center">
    <div v-if="showModal">
    <Modal @close-modal="handleCloseModal"
           @connectToMQTTBroker="handleConnectToMQTTBroker"
    />
    </div>
    <div class="options-bar fixed w-11/12 h-20 bg-nero text-white font-semibold rounded-3xl flex justify-between items-center p-2 md:p-5 bottom-5">
      <div class="options-bar__mqtt-info flex items-center">
        <button
            @click="toggleMQTTConnection"
            class="flex items-center bg-gray-50 text-nero text-xs md:text-sm h-10 p-2 md:p-4 m-1 md:m-2 rounded-xl"
        >
          {{ isConnected ? 'Disconnect' : 'Connect' }}
        </button>
        <div v-if="isConnected" class="flex items-center text-xs md:text-sm m-2">
          <h4>MQTT Broker: {{brokerHost}}:{{brokerPort}}</h4>
          <span class="relative flex h-6 w-6 m-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-6 w-6 bg-green-500"></span>
          </span>
          <h4>{{brokerName}}</h4>
        </div>
      </div>
      <div class="options-bar__buttons flex">
        <button class="flex items-center bg-gray-50 text-nero text-xs md:text-sm h-10 p-2 md:p-4 m-1 md:m-2 rounded-xl">Topics</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from "./ConnectModal.vue";
const isConnected = ref(false);
const showModal = ref(false);
const brokerName = ref('');
const brokerHost = ref('');
const brokerPort = ref();
const handleConnectToMQTTBroker = (connectionDetails: { name: string, host: string, port: number }) => {
  console.log('MQTT Connection Details:', connectionDetails);
  const { name, host, port } = connectionDetails;
    brokerName.value = name;
    brokerHost.value = host;
    brokerPort.value = port;
    isConnected.value = true;
    showModal.value = false;
};
const handleCloseModal = () => {
  showModal.value = false;
};

const toggleMQTTConnection = () => {
  if(isConnected.value == true){
      isConnected.value = false;
  } else {
    showModal.value = true;
  }
};
</script>
