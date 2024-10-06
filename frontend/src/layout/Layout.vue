<template>
  <div class="bg-gray-100">
    <div class="w-32 md:w-96">
      <Nav />
      <SideBar />
    </div>
    <div class="ml-20">
    <router-view />
    </div>
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