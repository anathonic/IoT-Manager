<template>
  <div class="sidebar text-xs md:text-sm lg:text-lg h-[500px] lg:h-[700px] fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col justify-center items-center bg-white rounded-2xl m-4 md:m-6 lg:m-8 text-left w-[100px] md:w-[150px] lg:w-[200px] hover:w-[150px] md:hover:w-[200px] lg:hover:w-[300px] transition-all duration-300">
    <div class="sidebar__items flex flex-col items-start justify-center">
      <router-link :to="{ name: 'Home' }">
        <div class="flex items-center">
          <box-icon type="solid" name="home"></box-icon>
          <p class="m-2 text-xs md:text-sm lg:text-base">Home</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'Data' }">
        <div class="flex items-center mt-14">
          <box-icon type="solid" name="data"></box-icon>
          <p class="m-2 text-xs md:text-sm lg:text-base">Data</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'Statistics' }">
        <div class="flex items-center mt-14">
          <box-icon type="solid" name="bar-chart-alt-2"></box-icon>
          <p class="m-2 text-xs md:text-sm lg:text-base">Statistics</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'Settings' }">
        <div class="flex items-center mt-14">
          <box-icon type="solid" name="cog"></box-icon>
          <p class="m-2 text-xs md:text-sm lg:text-base">Settings</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'About' }">
        <div class="flex items-center mt-14">
          <box-icon type="solid" name="info-circle"></box-icon>
          <p class="m-2 text-xs md:text-sm lg:text-base">About</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'boxicons'
</script>

<style scoped>
.sidebar__items {
  font-family: 'Roboto', cursive;
  font-weight: bold;
}
</style>
