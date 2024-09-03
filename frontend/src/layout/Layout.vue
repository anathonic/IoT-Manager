<template>
  <div class="flex bg-gray-100">
    <div class="w-32 md:w-96">
      <Nav />
      <SideBar />
    </div>
    <router-view />
  </div>
  <OptionsBar />
 <Footer/>
</template>

<script setup lang="ts">
import Nav from "./Nav.vue";
import SideBar from "./SideBar.vue";
import OptionsBar from "../components/MQTTBar.vue";
import Footer from "./Footer.vue";
</script>