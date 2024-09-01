<template>
  <div class="sidebar ml-10 text-sm md:text-lg h-[800px] fixed flex justify-center bg-white rounded-2xl text-left p-5 md:p-8 mt-56">
    <div class="sidebar__items flex flex-col items-start justify-center">
      <router-link :to="{ name: 'Home' }">
        <div class="flex items-center">
          <box-icon type="solid" name="home"></box-icon>
          <p class="m-2">Home</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'Data' }">
        <div class="flex items-center mt-14">
          <box-icon type="solid" name="data"></box-icon>
          <p class="m-2">Data</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'Statistics' }">
        <div class="flex items-center mt-14">
          <box-icon type="solid" name="bar-chart-alt-2"></box-icon>
          <p class="m-2">Statistics</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'Settings' }">
        <div class="flex items-center mt-14">
          <box-icon type="solid" name="cog"></box-icon>
          <p class="m-2">Settings</p>
        </div>
      </router-link>

      <router-link :to="{ name: 'About' }">
        <div class="flex items-center mt-14">
          <box-icon type="solid" name="info-circle"></box-icon>
          <p class="m-2">About</p>
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
