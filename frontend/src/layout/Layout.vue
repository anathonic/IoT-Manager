<template>
  <div class="flex bg-gray-100">
    <div class="w-96">
      <Nav />
      <SideBar />
    </div>
    <router-view />
  </div>
  <OptionsBar />
</template>

<script setup lang="ts">
import Nav from "./Nav.vue";
import SideBar from "./SideBar.vue";
import OptionsBar from "../components/OptionsBar.vue";
</script>