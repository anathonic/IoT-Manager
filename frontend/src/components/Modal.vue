<template>
  <div  class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg w-1/2">

      <div class="flex justify-center">
        <button @click="closeModal" class="text-sm font-medium tracking-wider bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-full mr-2">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const emits = defineEmits(['closeModal']);
const closeModal = () => {
  emits('closeModal');
};

</script>
